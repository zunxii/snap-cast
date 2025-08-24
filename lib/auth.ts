import { db } from "@/drizzle/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { schema } from "@/drizzle/schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database : drizzleAdapter(db,{schema, provider : 'pg' }),
    socialProviders : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!
        }
    },
    plugins : [nextCookies()],
    baseURL : process.env.NEXT_PUBLIC_BASE_URL!
})