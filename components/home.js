/* eslint-disable @next/next/no-img-element */
// import { useEffect, useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import _ from 'lodash';
let cloneId = 0;
import { normalize_click,handle1,front1,maximize, minimize,normalize,moves } from '../pages/api/requst';
const { useEffect, useState } = require('react');

let start_click = 0;
export default function Home(props){
    const img_arr1 = props.img_arr1, img_arr2 = props.img_arr2, img_arr3 = props.img_arr3, img_arr4 = props.img_arr4;
    const setImg_arr1 = props.setImg_arr1, setImg_arr2 = props.setImg_arr2, setImg_arr3 = props.setImg_arr3, setImg_arr4 = props.setImg_arr4;
    // 页脚切换事件
    const [img_arr, setImg_arr] = useState( [
        {id: 1, name: "he1",page_type: "", url1: '1', url2: "1_1", add: true},
        {id: 2, name: "SortableJS", page_type: "chrome", url1: '2', url2: "2_1", add: true},
        {id: 3, name: "SCADA1",page_type: "", url1: '3', url2: "3_1", add: true},
        {id: 4, name: "he2", page_type: "",url1: '4', url2: "4_1", add: true},
    ])
     // 显示屏列表
     const [video_list, setVideo_list] = useState([
        {id: 1, name: "屏1"},
        {id: 2, name: "屏2"},
        {id: 3, name: "屏3"},
        {id: 4, name: "屏4"},
     ])
    // 显示屏左侧图标列表1
    function change_page1(id1, item){
        var arr = arrs(id1);
        const id2 = item.id;
        if(item.select == true){ return}
        arr.map((items1,index)=>{
            items1.select = false;
            if(items1.id == id2 && items1.select == false){
                items1.select = true;
                items1.level = arr.length + 1;
                if(items1.page_type != "chrome"){
                    items1.maxs = true;
                    change_icon(items1,id1);//展开图标的切换
                }
                normalizes_fun(items1,id1);
                front1_fun(items1.hwnd);
                
            }

        });
        arr = change_level(id2,arr);//层级改变
        set_arrs(id1,arr);
        hide_icon(id1,arr);//编辑图标的显示和隐藏
    }
    // 展开、收缩图标图片切换 
    function change_icon(item,id){
        const list1 = document.getElementsByClassName("opens");
        if(item.maxs == true){
            list1[id - 1].setAttribute("src","/max.png");
        }else{
            list1[id - 1].setAttribute("src","/normal.png");
        }
    }
    const [clone_id, setClone_id] = useState(0);
    // 初始页面
    useEffect(()=>{
        // 获取显示屏位置
        const screens = _.cloneDeep(video_list);
        const list1 = document.getElementsByClassName("video_page");
        const start_el = document.getElementsByClassName("carousel")[0];
        const start_top =  start_el.offsetTop;
        for(let r = 0; r < list1.length; r++){
            const item = list1[r];
            const tops = item.offsetTop + start_top;
            const lefts = item.offsetLeft;
            const bottoms = tops + item.offsetHeight;
            const rights = lefts + item.offsetWidth;
            const item1 = {id: r+1, top: tops,left: lefts,bottom: bottoms,right: rights}
            screens[r] = item1;
        }
        setVideo_list(screens)
    },[]);
    // 删除显示屏中的元素
    const del_clone = (items) => {
        const close_arr = arrs(items.id);
        close_arr.map((item,index)=>{
            if(item.select == true){
                close_arr.splice(index,1);
                open_add(item.id,"del");
                minimize_fun(item);
                // item.maxs = false;
                return;
            }
        });
        hide_app(items.id,close_arr);
        hide_icon(items.id,close_arr)
        set_arrs(items.id,close_arr);
    }
    // 页面展开事件
    useEffect(()=>{
        setClone_id(_.cloneDeep(clone_id));
        cloneId = clone_id;
    },[clone_id]);
    // （最大化和正常化）点击事件
    function open_close(el_item,id){
        // 避免点击过快
        const now_click = (new Date()).getTime();
        if(start_click !=  0 &&  now_click - start_click < 1000){return}
        start_click = now_click;
        // 事件切换
        let arr = arrs(id);
        arr.map((items)=>{
            if(items.select == true && items.maxs == false){
                el_item.setAttribute("src","/max.png");
                maximize_fun(items,id);
                items.maxs = true;
            }else if(items.select == true && items.maxs == true){
                el_item.setAttribute("src","/normal.png");
                normalize_fun(items,id);
                items.maxs = false;
            }
        })
        set_arrs(id,arr);
    }
    // 返回查找的数组
    function arrs (id){
        let arr = [];
        id == 1 ? arr = _.cloneDeep(img_arr1) : '';
        id == 2 ? arr = _.cloneDeep(img_arr2) : '';
        id == 3 ? arr = _.cloneDeep(img_arr3) : '';
        id == 4 ? arr = _.cloneDeep(img_arr4) : '';
        return arr;
    }
    // 设置指定的数组
    function set_arrs(id,arr1){
        id == 1 ? setImg_arr1(arr1) : '';
        id == 2 ? setImg_arr2(arr1) : '';
        id == 3 ? setImg_arr3(arr1) : '';
        id == 4 ? setImg_arr4(arr1) : '';
    }
    // 拖拽添加
    function add_item(event,id){
        const list1 = _.clone(video_list);
        const touch_x = event.changedTouches[0].clientX;
        const touch_y = event.changedTouches[0].clientY;
        list1.map((item)=>{
            if(
                touch_x> item.left && touch_x < item.right && 
                touch_y> item.top && touch_y < item.bottom
            ){
                const target_id = event.target.getAttribute("id");
                // 如果是同一个屏中拖拽，那么就中止
                if(item.id == id){ return}
                // 如果不是同一个屏拖拽就继续
                let arr1 = arrs(item.id);
                arr1.map((item1,index1)=>{
                    if(item1.id == target_id){
                        arr1.splice(index1,1)
                    }
                })
                // 如果是显示屏之间互相拖拽
                let move_item = {id: target_id, ids: target_id,select: true,level: arr1.length+1,maxs: true};
                if(id && item.id != id){
                    let list2 = arrs (id);
                    list2.map((item2,index2)=>{
                        if(item2.id == target_id){
                            move_item = list2.splice(index2,1)[0];
                            move_item.maxs = true;
                        }
                    })
                    list2 = change_level(id,list2);//层级改变
                    set_arrs(id,list2);
                    hide_icon(id,list2);//图标
                }
                arr1.push(move_item);
                arr1.map((item2)=>{
                    if(item2.ids != target_id){
                        item2.select = false;
                    }
                })
                arr1 = change_level(target_id,arr1);//层级改变
                hide_icon(item.id,arr1);//图标
                set_arrs(item.id,arr1);//保存数组渲染到页面
                // 禁止继续添加
                open_add(target_id,"add");
                // 添加一个窗口：通过窗口名获取句柄、窗口正常化、窗口置前
                const old_id = id;
                hand1_fun(target_id,arr1,arr1[arr1.length - 1],item.id,old_id);
                return;
            }
        })
    }
    // app层级隐藏
    function hide_app(id,arr1){
        arr1 ? '' : arr1 = arrs(id);
        let open_nums = -1;let open_index= -1;
        arr1.map((item,index)=>{
            if(item.select == true){ 
                item.select = false;
                item.level = -1;
                minimize_fun(item);
                // item.maxs = false; 
            }else if(item.level > open_nums && item.select != true){
                open_nums = item.level;
                open_index = index;
            }
        })
        if(open_index != -1){
            arr1[open_index].select = true;
            change_icon(arr1[open_index],id);
         
        }
        set_arrs(id,arr1);
        hide_icon(id,arr1);
    }
    // 显示和隐藏右侧的三个操作符 （编辑图标的显示和隐藏）
    function hide_icon(id,arr1){
        let icon_html = document.getElementById(`screen_${id}`);
        if(arr1.length < 1){
            icon_html.style['display']='none';
        }else{
            let is_select = false;
            arr1.map((item)=>{
                if(item.select == true){ 
                    is_select = true;
                    change_icon(item,id);//展开图标的切换
                }
            })
            is_select ? icon_html.style['display']='flex' : icon_html.style['display']='none';
        }
    }
    // app程序层级变化
    const change_level = (id,arr) => {
        const arr_num = [];
        arr.forEach((element)=>{
            arr_num.push(element.level);
        })
        arr_num.sort();
        arr.forEach((element) => {
            const level = _.sortedIndexOf(arr_num, element.level);
            element.level = level + 1;
            if(element.id == id){ element.select = true}
        });
        return arr;
    }
    // 添加一个窗口：通过窗口名获取句柄、窗口正常化、窗口置前
    function hand1_fun(target_id,arr1,item,id,old_id){
        // const url_arr = [
        //     {id: 1, name: "he1",page_type: ""},
        //     {id: 2, name: "SortableJS",page_type: "chrome"},
        //     {id: 3, name: "SCADA1",page_type: "app"},
        // ]
        let url = img_arr[target_id - 1].name;
        // item.page_type = img_arr[target_id - 1].page_type;
        return handle1(url,item,id,old_id).then(res => {
            let item1 = arr1[arr1.length - 1];
            item1.hwnd = res.data.hwnd_v[0];
            // arr1[arr1.length - 1].page_type = url_arr[target_id - 1].page_type;
            // set_arrs(item.id,arr1);//保存数组渲染到页面
            return item1;
        })
    }
    // 窗口置前
    function front1_fun(hwnd){
        return front1(hwnd).then(res => {
            // console.log("我是最小化窗口：",res)
        })
    }
    // 最大化窗口
    function maximize_fun(item,id){
       return maximize(item,id).then(res=>{
            // console.log("我是最大化窗口：",res)
        })
    }
    // 最小化窗口
    function minimize_fun(item){
        return  minimize(item).then(res => {
            // console.log(res)
        })
    }
    // 正常化窗口
    function normalize_fun(item,id){
        console.log(id,item)
        return normalize(item,id).then(res => {
        })
    }
    // 点击正常化窗口
    function normalizes_fun(item,id){
        console.log(id,item)
        return normalize_click(item,id).then(res => {
        })
    }
    // 解除程序禁止添加功能
    function open_add(id,text){
        const arr = _.cloneDeep(img_arr);
        arr.forEach(element => {
           if(id == element.id ){
            text == "add" ? element.add = false : element.add = true;
           } 
        });
        setImg_arr(arr);
    }
    return (
         <div className='con_body'>
          <div className='con_body1'>
              <div className='video_list'>
                {video_list.map((items)=>{
                    let arrs = [];
                    items.id == 1 ? arrs = img_arr1 : (items.id == 2 ? arrs =img_arr2 : (items.id == 3 ? arrs = img_arr3 : arrs = img_arr4));
                    return (
                        <div key={items.id} className='video_page' data-id={items.id} >
                            <ReactSortable 
                            group={{
                                name : 'shared', pull: false,put: false,
                            }}
                            forceFallback= {true}
                            list={arrs} setList={()=>{}}
                            onChoose={()=>{}}
                            // delay={10}
                            className='left_img' 
                            >
                            {
                            arrs.map((item2,index)=>{
                                return (
                                    <div key={index+"_app"}
                                    id={item2.ids} onTouchEnd={(event)=>{add_item(event,items.id)} }
                                    className='swiper-no-swiping'
                                    onTouchStart={() => {change_page1(items.id,item2)}}  
                                    onClick={() => {change_page1(items.id,item2)}}
                                    >
                                        <img id={item2.ids}
                                        className='swiper-no-swiping right_img' 
                                        src={'/a'+(item2.select == true ? item2.ids + "_1" : item2.ids)+'.png'}
                                        alt="" />
                                    </div>
                                )
                            })
                            }
                        </ReactSortable>
                            <div className='video_box'>
                                <div className='edit_icon' id={'screen_'+items.id} style={{display: 'none'}}>
                                    <img className='swiper-no-swiping' onClick={()=>{hide_app(items.id)}} src="/min.png" alt="" />
                                    <img className='swiper-no-swiping opens' id="opens" onClick={(event)=>{open_close(event.target,items.id)}} src="/max.png" alt="" />
                                    <img className='swiper-no-swiping' id="close" 
                                    onClick={()=>{del_clone(items)}} 
                                    src="/close.png" alt="" />
                                </div>
                            </div>
                    </div>
                    )
                })}
               
              </div>
          </div>
          <div className='con_footer'>
            <ReactSortable 
            group={{
                name : 'shared', pull: false,put: false,
            }}
            className='footer_img' list={img_arr} setList={()=>{}}
            onChoose={(evt)=>{
                const id = evt.item.getAttribute("id");
                setClone_id(id);
            }}
            >
            {
            img_arr.map((items)=>{
                return (
                <div className='swiper-no-swiping' id={items.id} onTouchEnd={add_item} key={items.id} 
                style={
                    items.add ? { backgroundImage: "url('/"+items.url1+".png')"} 
                    : { 
                        backgroundImage: "url('/"+items.url1+".png')",
                        pointerEvents: items.add ? "" : "none",
                        opacity: items.add ? 0 : 0.5
                    }
                }
                ></div>
                )
            })
            }
            </ReactSortable >
        </div>
      </div>

    )
}