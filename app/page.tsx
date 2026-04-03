import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Shura</h1>
        <p className="text-xl text-gray-400 mb-12">
          Compare AI models side-by-side. Get insights from multiple perspectives.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/signin"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
