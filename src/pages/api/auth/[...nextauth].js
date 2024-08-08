import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const res = await fetch("http://localhost:3020/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password,
                    }),
                });

                const user = await res.json();

                if (res.ok && user) {
                    return { ...user, username: credentials.username };
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            // Add username to the token
            if (user) {
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            // Add username to the session
            if (token) {
                session.user.username = token.username;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Redirect to homepage after successful login
            return baseUrl;
        },
    },
});
