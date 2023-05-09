import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
// import {getUser} from "../../../request/modules/userReq";

//配置next-auth，参考https://next-auth.js.org/configuration/options
export default NextAuth({
    // provider配置凭证登录
    providers: [
        CredentialsProvider({
            name: 'login',
            async authorize(credentials, req) {//具体授权逻辑
                const user = await getUser(credentials.password);
                if(user == credentials.password){
                    // return {status:'reject'}
                    return {name: 'yikun'};
                }else{
                    return {status:'reject'}
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    jwt: {},
    pages: {//自定义界面 ，可配置signIn，signOut，error，verifyRequest，newUser
        signIn: '/',
        signOut: '/login',
    },
    callbacks: {//回调函数
        async signIn({ credentials }) {
            //登录回调，如果authorize不成功，重定向到login界面，并附带错误信息参数
                console.log("uses:",user)
            if(user?.status == 'reject'){
                return 'login';
            }
            return true
        },
         async redirect({ url, baseUrl }) {//不设置回调，直接默认使用url
            return '/login'
        },
        // redirect({ url, baseUrl }) {
        //     if (url.startsWith('/')) return `${baseUrl}${url}`;
        //     else if (new URL(url).origin === baseUrl) return url;
        //     return baseUrl;
        //   },
          session({ session }) {
            return session;
          },
          // jwt session
          jwt({ token }) {
            return token;
          },
       
    },
    events: {},
    theme: {colorScheme: "light"},
    debug: false,
})