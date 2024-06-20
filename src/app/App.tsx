import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { router } from "./router/Router";

import { queryClient } from "@/shared/api/queryClient";
import "./App.scss";

export const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot mode="partial">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
