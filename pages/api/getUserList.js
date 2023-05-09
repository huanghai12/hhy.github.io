// import type { NextRequest } from 'next/server'
// import { NextResponse,NextRequest } from 'next/server'
// import instance from "./config";
// import Cookies from "js-cookie";

export default function handler(req,res) {
    // req.cookies.set('user', 'yikun');
    console.log("handler",req.cookies)
    res.cookie('user',req.cookies)
    // NextResponse.cookies.set('user', 'yikun');
    // console.log(NextResponse)
    // console.log("res:",res.cookies)
    // request.cookies.set("user","123")
    // req.cookies.set("hasplmlang","")
//   Cookies.set('user', 'hhy',{ expires: 1 })
    // console.log("jscookies:",Cookies.get('user'))
        // instance.defaults.headers.setCookie=[{user:'hhy'}]
    // console.log(instance)
    // NextRequest.set("user",req.body.name)
    // req.cookies.set("user","hhy")
    // console.log("cookie",NextRequest.cookies.get("hasplmlang"))
    // res.setHeader('set-cookie',req.body.name);
    // console.log(req.body.password)
    // if(req.body.password == "yikun606"){
    //     req.cookies.user = "yikun";
    // }
    
    // console.log("cookie1",req.cookies.user)
    res.status(200).json({ name: 'John Doe' });
}

