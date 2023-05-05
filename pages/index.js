import { useEffect, useState } from 'react';
import Home from '../components/home';
import Funs from '../components/fun';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import {  Scrollbar } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import instance from "./api/config";
import Cookies from "js-cookie";

// import {swiper-wrappe}
export async function getServerSideProps(context) {
// console.log(context.req.cookies.user)
  // // 1、获取cookie并保存到axios请求头cookie中
  // axios.defaults.headers.cookie = ctx.req.headers.cookie || null
  // const res = await axios({ url: "http://www.baidu.com/api/getUserList", data: xxx });
  // const data = res?.data;

  // // 2、判断请求头中是否有set-cookie，如果有，则保存并同步到浏览器中
  // if(axios.defaults.headers.setCookie){
  //   ctx.res.setHeader('set-cookie', axios.defaults.headers.setCookie)
  //   delete axios.defaults.headers.setCookie
  // }
  return {
    props: {
      // data
    }
  }
}
export default function IndexPage() {
  const [img_arr1, setImg_arr1] = useState([
  ]);
  // 显示屏左侧图标列表2
  const [img_arr2, setImg_arr2] = useState([]);
   // 显示屏左侧图标列表3
   const [img_arr3, setImg_arr3] = useState([]);
   // 显示屏左侧图标列表4
   const [img_arr4, setImg_arr4] = useState([]);
   
  return (
    <div className='bodys' style={{backgroundImage: "url('/bg.png')"}} >
      <div className='con_header'>
        <div style={{backgroundImage: "url('/logo_bg.png')"}}>
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <Swiper className='carousel' 
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      // className="mySwiper" 
      // modules={[Pagination]}
      >
        <SwiperSlide >
          <Home 
          img_arr1={img_arr1} img_arr2={img_arr2} img_arr3={img_arr3} img_arr4={img_arr4}
          setImg_arr1={setImg_arr1} setImg_arr2={setImg_arr2} setImg_arr3={setImg_arr3} setImg_arr4={setImg_arr4}
          ></Home>
        </SwiperSlide>
        <SwiperSlide>
          <Funs ></Funs>
        </SwiperSlide>
      
      </Swiper >
    </div>
  );
}
