import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Apollo Client setup
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  connectToDevTools: true,
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

// Swiper setup
// eslint-disable-next-line
import "swiper/css/bundle";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);