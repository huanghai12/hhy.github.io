import { useState,forwardRef,useEffect } from "react";
 function Tips (props,ref){
    const [tip_arr,setTip_arr] = useState([]);
    function tips({type, text, time}){
        console.log(5555);
        let arr1 = _.cloneDeep(tip_arr)
    }
    useEffect(() => {
        window.Tip1 = tips;
    }, [])
    return <div id="tip_main" >
        {/* <p>12</p> */}
    </div>
}
export default forwardRef(Tips);
// import {createRoot } from 'react-dom/client'
// export default function Tips({type, text, time}) {
//     const htmls = document.createElement("div");
//     htmls.id = "tip_main";
//     const parents = document.getElementById("__next");
//     parents.appendChild(htmls)
//     const containers = document.getElementById("tip_main");
//     const root = createRoot(containers);
//     root.render(Tip1);
// }
// // 清除数据
// function Tip1(){
//     return (<div className='uio'>123123</div>)
// }
