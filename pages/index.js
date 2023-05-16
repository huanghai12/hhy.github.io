import { useEffect, useState,useRef } from 'react';
import Home from '../components/home';
import Funs from '../components/fun';
import Detail from '../components/detail';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Scrollbar } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Tips from '../components/tip';
export default function IndexPage() {
  const ref = useRef(null);
   const [video_list, setVideo_list] = useState([
    {id: 1, name: "屏1",arrs:[]},
    {id: 2, name: "屏2",arrs:[]},
    {id: 3, name: "屏3",arrs:[]},
    {id: 4, name: "屏4",arrs:[]},
 ])
  return (
    <div className='bodys' style={{backgroundImage: "url('/bg.png')"}} >
      {/* <Tips ref={c => window.Tips = c} /> */}
      <Tips ref={ref} />
      <div className='con_header'>
        <div style={{backgroundImage: "url('/logo_bg.png')"}}>
          <img src="/logo.png" alt="" />
        </div>
      </div>
      {/* <div style={{background: "#FFF"}} onClick={()=>{ clickme()}}>点击我弹出弹窗</div> */}
      <Swiper className='carousel' 
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      >
        <SwiperSlide >
          <Home 
          video_list={video_list}
          setVideo_list={setVideo_list}
          ></Home>
        </SwiperSlide>
        <SwiperSlide>
          <Funs ></Funs>
        </SwiperSlide>
        <SwiperSlide>
          <Detail ></Detail>
        </SwiperSlide>
      </Swiper >
    </div>
  );
}
