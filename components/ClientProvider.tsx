"use client";

import { ConvexProvider } from "@/components/ConvexProvider";
import { ReactNode } from "react";

export function ClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider>{children}</ConvexProvider>;
}
