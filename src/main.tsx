import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/index.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
