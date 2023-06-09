import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQurey {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  // console.log(result ,"RESULT OF GRAPH QL");
  return result.postsConnection.edges;
};

export const getRecentPost = async () => {
  const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: createdAt_ASC
                last:3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `;
  const result = await request(graphqlAPI, query);
  // console.log(result ,"RESULT OF GRAPH QL");
  return result.posts;
};

export const getSimilarPosts = async (categories , slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query,{categories,slug});
  // console.log(result ,"RESULT OF GRAPH QL");
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  // console.log(result ,"RESULT OF GRAPH QL");
  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}){
                    author {
                        bio
                        name
                        id
                            photo{
                                url
                            }
                    }
                createdAt
                slug
                title
                excerpt
                    featuredImage{
                        url
                    }
                    categories {
                        name
                        slug
                    }

                    content{
                        raw
                    }
          
          
        }
      }
    `;

  const result = await request(graphqlAPI, query,{slug});
  // console.log(result ,"RESULT OF GRAPH QL");
  return result.post ;
};
