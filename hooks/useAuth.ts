"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useCallback } from "react";

export function useAuth() {
  const { signIn, signOut } = useAuthActions();

  const signInWith = useCallback(
    (provider: "google" | "github") => {
      signIn(provider);
    },
    [signIn]
  );

  const signOutWith = useCallback(() => {
    signOut();
  }, [signOut]);

  return {
    signIn: signInWith,
    signOut: signOutWith,
  };
}
