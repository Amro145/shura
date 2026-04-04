"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">Sign in to Shura</h1>
          <p className="mt-2 text-gray-400">
            Sign in to compare AI models
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-white/10 p-4 text-center text-gray-300">
            OAuth configuration coming soon
          </div>
          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-3 text-white transition-colors hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
