import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import {useState} from 'react'

const QuestionsList = ({id,title,info}) => {
    const [checker,setCheker] = useState(true)
    const openState = (e)=>{
        setCheker(!checker)
        // document.querySelector('.show_awnser_default').classList.toggle('show_awnser')
        const item = e.currentTarget
        const paragraph = item.parentElement.lastChild 
        document.querySelectorAll(".show_awnser_default").forEach((item)=>{
            

            item.classList.remove('show_awnser')
            
        })
        paragraph.classList.toggle('show_awnser')
        
        


    }
    const closeState = (e)=>{
        setCheker(!checker)
        // document.querySelector('.show_awnser_default').classList.toggle('show_awnser')
        const item = e.currentTarget
        const paragraph = item.parentElement.lastChild 

        paragraph.classList.toggle('show_awnser')
        
        


    }


    
    return ( 
        <div className="questions_list">
            <h1>{title}</h1>
            {checker ? <span onClick={(e)=>{openState(e)}}><AiOutlinePlus/></span> : <span onClick={(e)=>{closeState(e)}}><AiOutlineMinus/></span>}
            
            <p id={id} className="show_awnser_default">{info}</p>

            
        </div>
     );
}
 
export default QuestionsList;