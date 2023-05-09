import { useEffect, useState } from 'react';
import Home from '../components/home';
import Funs from '../components/fun';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import {  Scrollbar } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function IndexPage({Cookies}) {
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
