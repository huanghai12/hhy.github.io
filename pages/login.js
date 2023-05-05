import { Logins } from "./api/requst";
import {useState } from 'react'
export default function Login(){
    function logins(){
        const login1 = Logins({password: pass});
        if(login1 == 200){
            window.location.href="/";
        }else{
            console.log("登录失败")
        }
    }
    const [pass, setpass] = useState('');
    return (<div className="login_bg" style={{background: "url('/login_bg.png')"}}>
            <div className="login_center">
                <img src="/login_logo.png" alt=""  />
                <div>
                    <p className="welcome_text">欢迎登录</p>
                    <div className="inputs">
                        <img src="/login_pass.png" alt="" />
                        <input value={pass} onChange={(event)=>{setpass(event.target.value)}} type="text" placeholder="请输入密码" />
                    </div>
                    <button onClick={logins} className="login_btn">登录</button>
                </div>
            </div>
        {/* <input value={pass} onChange={(event: any)=>{setpass(event.target.value)}} type="text" />
        <button onClick={logins}>点击我登录</button> */}
    </div>)
}