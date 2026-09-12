// src/app/debug/session/page.tsx

import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
