import { robot_stop, around_open,around_stop } from '../pages/api/requst';
import { useState } from 'react';

export default function Funs(props){
    function stops(){
        robot_stop().then((res)=>{
            console.log("急停成功");
        }).catch((err)=>{
            console.log("急停失败")
        })
    }
    // 环视功能
    const [around1,setAround1] = useState({id: 1,name:"SortableJS",page_type: "chrome",url:"http://sortablejs.github.io/Sortable/"})
    function arounds_open(){
        const obj = _.cloneDeep(around1);
        around_open(obj).then(res => {
            console.log(res.data.data)
            const data = res.data.data;
            if(data){
                setAround1(data);
            }
        }).catch(err => {

        })
    }
    // 停止环视功能
    function arounds_stop(){
        const obj = _.cloneDeep(around1);
        around_stop(obj).then(res => {
            console.log(res)
        }).catch(err => {

        })
    }
    return (
        <div className='funs_box'>
            <div className="funs_page">
                <div className='funs_one'>
                    <img className='swiper-no-swiping' onClick={stops} src="/stop.png" alt="" />
                    <div>
                        <p>急停</p>
                    </div>
                </div>
                {/* <img className='swiper-no-swiping' onClick={stops} src="/stop.png" alt="" />
                <img className='swiper-no-swiping' onClick={arounds_open} src="/stop.png" alt="" />
                <img className='swiper-no-swiping' onClick={arounds_stop} src="/stop.png" alt="" /> */}
            </div>
        </div>
    )
}