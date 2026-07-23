import { store } from "@app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import QueryProvider from "./QueryProvider";

function AppProviders() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <RouterProvider router={router}></RouterProvider>
      </QueryProvider>
    </Provider>
  );
}

export default AppProviders;
