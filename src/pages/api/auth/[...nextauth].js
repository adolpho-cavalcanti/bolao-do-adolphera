// import { FaunaAdapter } from '@next-auth/fauna-adapter'
// import { Client as FaunaClient } from 'faunadb'

// import { readFileSync } from 'fs'
// import Handlebars from 'handlebars'
// import path from 'path'

// import EmailProvider from 'next-auth/providers/email'
// import nodemailer from 'nodemailer'

import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

// const client = new FaunaClient({
//   secret: process.env.FAUNA_SECRET_KEY,
// })

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_SERVER_HOST,
//   port: process.env.EMAIL_SERVER_PORT,
//   auth: {
//     user: process.env.EMAIL_SERVER_USER,
//     pass: process.env.EMAIL_SERVER_PASSWORD,
//   },
//   secure: true,
// })

// const emailsDir = path.resolve(process.cwd(), 'emails')

// const sendVerificationRequest = ({ identifier, url }) => {
//   const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
//     encoding: 'utf8',
//   })
//   const emailTemplate = Handlebars.compile(emailFile)
//   transporter.sendMail({
//     from: `"⚡ Bolão do Adolphera" ${process.env.EMAIL_FROM}`,
//     to: identifier,
//     subject: 'Seu link de login para o Bolão do Adolphera',
//     html: emailTemplate({
//       signin_url: url,
//       email: identifier,
//     }),
//   })
// }

// const sendWelcomeEmail = async ({ user }) => {
//   const { email } = user;

//   try {
//     const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
//       encoding: 'utf8',
//     });
//     const emailTemplate = Handlebars.compile(emailFile);
//     await transporter.sendMail({
//       from: `"⚡ Bolão do adolphera" ${process.env.EMAIL_FROM}`,
//       to: email,
//       subject: 'Bem vindo ao Bolão do Adolphera! 🎉',
//       html: emailTemplate({
//         base_url: process.env.NEXTAUTH_URL,
//         support_email: 'adolpho@atorreforte.com.br',
//       }),
//     });
//   } catch (error) {
//     console.log(`❌ Não é possível enviar e-mail de boas-vindas ao usuário (${email})`);
//   }
// }

export default NextAuth({
  providers: [
    // EmailProvider({
    //   maxAge: 10 * 60,
    //   sendVerificationRequest,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // adapter: FaunaAdapter(client),
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/',
  // },
  // events: { createUser: sendWelcomeEmail }
})
