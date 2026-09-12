import NextAuth from "next-auth";

import { createAuthOptions } from "@/adapters/auth/nextauth";

export const { handlers, auth } = NextAuth(createAuthOptions());