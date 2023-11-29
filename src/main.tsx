import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./app/store.tsx";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.tsx";
import Discover from "./Pages/Discover/Discover.tsx";
import Cart from "./Pages/Cart/Cart.tsx";
import Auth from "./Pages/SignIn/SingIn.tsx";
import { gameLink } from "./Hooks/getGameLink.ts";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

// Video Games pages
import GamesPage from "./Pages/GamesPage/GamesPage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SignIn" element={<Auth />} />
            <Route path={`${gameLink}`} element={<GamesPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
