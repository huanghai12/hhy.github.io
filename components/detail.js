const telphone = [
    {id: 1,name: "hhy", tel: "123123"},
    {id: 2, name: "hhy1", tel: "123123"},
    {id: 3,name: "hhy2", tel: "123123"},
    {id: 4,name: "hhy3", tel: "123123"},
]
export default function Detail(){
    return (<div style={{color: '#FFF'}}>
        <p>我是详情页面</p>
        <div>
            {telphone.map((item)=>{
                return <p key={item.id}>{item.name}</p>
            })} 
        </div>
    </div>)
}