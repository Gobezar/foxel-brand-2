"use client";

import * as React from "react";

import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";

export interface ProvidersProps {
  children: React.ReactNode;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
