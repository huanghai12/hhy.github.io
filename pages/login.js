import { Logins } from "./api/requst";
import {useState } from 'react';
import Router from 'next/router';
export default function Login(props){
    const Cookies = props.Cookies;
   async function logins(){
        const login1 = await Logins(pass);
        if(login1 == 200){
            Cookies.set("user","yikun",{ expires: 1,path:'/' });
            Router.push("/");
        }else{
            console.log("登录失败")
        }
    }
    const [pass, setpass] = useState('');
    // 回车登录事件
    function login_down(event){
        if(event.keyCode == 13){
            logins();
        }
    }
    return (<div className="login_bg" style={{background: "url('/login_bg.png')"}}>
            <div className="login_center">
                <img src="/login_logo.png" alt=""  />
                <div>
                    <p className="welcome_text">欢迎登录</p>
                    <div className="inputs">
                        <img src="/login_pass.png" alt="" />
                        <input 
                        value={pass} type="text" placeholder="请输入密码"
                        onChange={(event)=>{setpass(event.target.value)}} 
                        onKeyDown={(event)=>{login_down(event)}}
                         />
                    </div>
                    {/* <button onClick={()=>{signIn(pass)}} className="login_btn">登录</button> */}
                    <button onClick={()=>{logins(pass)}} className="login_btn">登录</button>
                </div>
            </div>
        {/* <input value={pass} onChange={(event: any)=>{setpass(event.target.value)}} type="text" />
        <button onClick={logins}>点击我登录</button> */}
    </div>)
}