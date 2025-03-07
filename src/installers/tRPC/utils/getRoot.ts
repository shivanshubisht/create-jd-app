import { type IUtil } from "~types";

const getRoot: IUtil = (ctx) => {
  return `// @refresh reload
import "./root.css";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import { trpc, queryClient${ctx.ssr ? "" : ", client"} } from "~/utils/trpc";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Create JD App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#026d56" />
        <Meta name="description" content="Generated by create-jd-app" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <trpc.Provider${
          ctx.ssr ? "" : " client={client}"
        } queryClient={queryClient}>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}`;
};

export default getRoot;
