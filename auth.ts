import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
          }),

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),

        Credentials({
            credentials: {

                email: { label: 'Email', type: 'email', placeholder: 'Email' },

                password: { label: 'Password', type: 'password', placeholder: 'Password' }

            },
          

            // async authorize(credentials) {
            //     let user = null;
            //     user = {
            //         id: '1',
            //         name: "shaahid shaikh",
            //         email: 'shaahid@gmail.com'
            //     }

            //     if (!user) {
            //         console.log("wrong user");
            //         return null;
            //     }

            //     return user;
            // }
        })

        
       


    ],
   
})