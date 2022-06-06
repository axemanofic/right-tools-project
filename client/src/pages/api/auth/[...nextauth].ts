import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from "axios";

export default NextAuth({
    providers: [

        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {label: 'username', type: 'text'},
                password: {label: 'password', type: 'password'},
            },
            async authorize(credentials, req) {
                try {
                    // @ts-ignore
                    const data = {
                        username: credentials.username,
                        password: credentials.password,
                    }
                    const res = await fetch('http://139.28.222.233/api/v1/auth/token/', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {"Content-Type": "application/json"}
                    })
                    const user = await res.json()
                    console.log(user)
                    if (res.ok && user) {
                        return user
                    } else {
                        return null;
                    }
                } catch (e) {
                    // @ts-ignore
                    const errorMessage = e.response.data.message;
                    // @ts-ignore
                    throw new Error(errorMessage + '&login=' + credentials.login)
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/auth",
        error: "/auth",
        signOut: "/auth",
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60
    },
    callbacks: {
        jwt: async ({token, user}) => {

            if (user) {
                //token.jwt = user.jwt;
                //token.user = user.user;
                token.access = user?.access;
            }
            return Promise.resolve(token);
        }, // called whenever session is checked
        session: async ({session, token}) => {


            session.jwt = token.jwt;
            // @ts-ignore
            session.accessToken = token.access ? token.access : '';
            return Promise.resolve(session);
        },
    }
})