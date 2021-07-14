import React, { Component } from "react";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  
  InMemoryCache,
} from "@apollo/client";
import Categories from "./Components/Categories";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Categories />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
