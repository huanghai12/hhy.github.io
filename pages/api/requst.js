import instance from "./config";
// 异步
export function promise_get(url, params){
    return new Promise((resolve,reject)=>{
        instance.get(url,{params}).then((res)=>{
            resolve(res.data);
        }).catch(error => {
            reject(error)
        })
    })
}
export function promise_post(url, params){
    return new Promise((resolve,reject)=>{
        instance.post(url,{params}).then((res)=>{
            resolve(res.data);
        }).catch(error => {
            reject(error)
        })
    })
};
// 登录
 export async function Logins (password){
    if(password == "yikun606"){
        return 200;
    }else{
        return 400;
    }
}
// 急停
export function robot_stop(){
    const url = "screen/robot_stop";
    const params = {}
    return instance.post(url,params)
}
// 最大化窗口
export function maximize(item,id){
    const url = "screen/maximize";
    const params = {maxs: item.maxs,hwnd: item.hwnd,page_type: item.page_type,id: id};
   return instance.post(url,params);
}
// 根据窗体名获取窗体句柄,置前，正常化
export function handle1(name,item,id){
    const url = "screen/handle1";
    const params = {name,item,id};
    return instance.post(url,params)
}
// 窗口置前
export function front1(hwnd){
    const url = "screen/front1";
    const params = {hwnd};
    return instance.post(url,params)
}
// 最小化窗口
export function minimize(item){
    const url = "screen/minimize";
    const params = item;
   return instance.post(url,params);
}
// 正常化窗口

export function normalize(item,id){
    const url = "screen/normalize";
    const params = {item: item,id: id};
   return instance.post(url,params);
}
// 点击正常化窗口

export function normalize_click(item,id){
    const url = "screen/normalize_click";
    const params = {item: item,id: id};
   return instance.post(url,params);
}

// 移动窗口
export function moves(objs){
    const url = "screen/move_to";
    const params = objs;
    return instance.post(url,params);
}
// 环视
export function around_open(obj){
    const url = "screen/around_open";
    const params = obj;
    return instance.post(url,params);
}
// 停止环视功能
export function around_stop(obj){
    const url = "screen/around_close";
    const params = obj;
    return instance.post(url,params);
}
// 状态查询
export function all_status(arr){
    const url = "screen/all_status";
    const params = arr;
    return instance.post(url,params);
}
