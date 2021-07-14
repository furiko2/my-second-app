import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import {gql} from '@apollo/client'

const LoadProducts = gql`
query
{
  category
  {
    products
    {
      name
    }
  }
}
`;

class Categories extends Component {
  render() {
    return (
      <Query query={LoadProducts}>
        {({ Loading, data }) => {
          if (Loading) return "Loading...";
          if (data) {
            const { category } = data;
            // }
            return category.products.map((product) => <h1>{product.name}</h1>);
          }
          return <div>error</div>;
        }}
      </Query>
    );
  }
}

export default Categories;
