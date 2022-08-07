import type { AppProps } from "next/app";
import { Layout } from "./components/Layout";
import { TodosProvider } from "./state/Todo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
}
