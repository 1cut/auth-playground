import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-lg">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
        <p className="font-medium">{session.user?.name ?? "—"}</p>
        <p className="text-gray-500 text-sm">{session.user?.email}</p>
      </div>

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/" })
        }}
      >
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sign out
        </button>
      </form>
    </main>
  )
}
