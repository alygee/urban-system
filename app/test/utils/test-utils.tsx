import { render, type RenderOptions } from "@testing-library/react";
import { Provider as ChakraProvider } from "../../components/ui/provider";
import { BrowserRouter } from "react-router";
import { type ReactElement } from "react";

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
