import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import routes from "~react-pages";
import { client } from "./utils/graphql/client";
import { Layout } from "./components/Layout";

import theme from "./styles/theme";
import "./styles/global.scss";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>{useRoutes(routes)}</Layout>
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
