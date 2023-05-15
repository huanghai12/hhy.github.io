
import '/styles/index.css';
import '/styles/home.css';
import '/styles/fun.css';
import '/styles/login.css';
import '/styles/tip.css';
import Head from "next/head";
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import React from 'react';
import Router from 'next/router';

export default function App({ Component, pageProps }) {
  useEffect( () => {
    // 检查登录状态
      const user = Cookies.get("user");
      if(!user){ Router.push('/login')};
      // 全屏页面
        if (document.body.webkitRequestFullScreen) {
          let click_nums = 0;
          window.addEventListener('click', function(e) {
            click_nums++;
            this.setTimeout(()=>{
              click_nums = 0;
            },300)
            if(click_nums > 1){
              click_nums = 0;
              const body = document.getElementsByTagName("body")[0];
              body.webkitRequestFullScreen();
            }
          }, false);
        }
  }, [Component])
  return  (< >
   <Head>
        <title>中国核工业集团有限公司</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   </Head>
   <Component {...pageProps} Cookies={Cookies}/>
  </>)
}
