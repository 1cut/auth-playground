import { auth } from "@/auth"
import Link from "next/link"

export default async function HomePage() {
  const session = await auth()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">auth-playground</h1>
      <p className="text-gray-500">Social SSO + email magic links with Auth.js v5</p>

      {session ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-green-600">Signed in as {session.user?.email}</p>
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to dashboard
          </Link>
        </div>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign in
        </Link>
      )}
    </main>
  )
}
