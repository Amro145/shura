"use client";

import { ReactNode, useState } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";

let convex: ConvexReactClient | null = null;

function getConvexClient() {
  if (typeof window === "undefined") {
    return null;
  }
  if (!convex) {
    convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  }
  return convex;
}

export function ConvexProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => getConvexClient());

  if (!client) {
    return <>{children}</>;
  }

  return (
    <ConvexAuthNextjsProvider client={client}>
      {children}
    </ConvexAuthNextjsProvider>
  );
}
