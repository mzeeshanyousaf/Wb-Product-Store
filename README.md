# Wb-Product-Store


Single product query 

query singleproduct {
  product(id: "16", idType: DATABASE_ID) {
    id
    title
    excerpt
    type
    sku
    reviews {
      averageRating
      edges {
        rating
        node {
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
}
