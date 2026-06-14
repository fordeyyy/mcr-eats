export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const RestaurantPartsFragmentDoc = gql`
    fragment RestaurantParts on Restaurant {
  __typename
  name
  neighbourhood
  cuisine
  price
  address
  summary
  website
  mapsUrl
  image
  pick
  moods
  dishes
  openDays
  body
}
    `;
export const RestaurantDocument = gql`
    query restaurant($relativePath: String!) {
  restaurant(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RestaurantParts
  }
}
    ${RestaurantPartsFragmentDoc}`;
export const RestaurantConnectionDocument = gql`
    query restaurantConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RestaurantFilter) {
  restaurantConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RestaurantParts
      }
    }
  }
}
    ${RestaurantPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    restaurant(variables, options) {
      return requester(RestaurantDocument, variables, options);
    },
    restaurantConnection(variables, options) {
      return requester(RestaurantConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/a01b4841-b4cf-4dc6-833b-32bd07c92e4a/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
