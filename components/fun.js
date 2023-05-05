import { robot_stop } from '../pages/api/requst';

export default function Funs(props){
    function stops(){
        robot_stop().then((res)=>{
            console.log("急停成功");
        }).catch((err)=>{
            console.log("急停失败")
        })
    }
    return (
        <div className='funs_box'>
            <div className="funs_page">
                <img className='swiper-no-swiping' onClick={stops} src="/stop.png" alt="" />
            </div>
        </div>
    )
}