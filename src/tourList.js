import { useState } from "react";

const TourList = ({id,image,info,price,name,removeTour}) => {
    const detailInfo = info.substring(0,200)
    const [subInfo, setSubInfo] = useState(detailInfo)
    const [checkInfo,setCheckInfo] = useState(true)

    return ( 
        <div className="tourlist">

            <img src={image} alt=""/>
            <div className="tour_info">
            <h1>{name}</h1>
            
            <p>{price}</p>
            </div>
            <p>{subInfo} <button id = "button" onClick = {()=>{
                if (checkInfo){
                    setSubInfo(info)
                    setCheckInfo(false)
                    document.querySelector('#button').innerText = 'show less'
                }else{
                    setSubInfo(detailInfo)
                    setCheckInfo(true)
                    document.querySelector('#button').innerText = 'show more'
                }
            }}> Read More</button></p>

            
            <button onClick = {()=>{  removeTour(id)  }}> Not Interested</button>


        </div>
      );
}
 
export default TourList;