import reviews from './reviewsData'
import { useState } from "react";
import { FcNext,FcPrevious } from "react-icons/fc";



const Reviews = () => {


    const [index, setIndex] = useState(0)
    console.log(reviews);

    const {name,job,image,text} = reviews[index]

    const indexCheker = (number)=>{
        if(number ===reviews.length){
            return 0
        }
        if(number< 0 ){
            return reviews.length -1
        }
        return number


    }

    // console.log(indexCheker);
    const goNext = ()=>{
        setIndex((index)=>{
            let indexCounter = index +1
            return indexCheker(indexCounter)

        })
        // indexCheker()

    }
    const goPrevious = ()=>{

      setIndex(  (index)=>{
            let indexCounter = index +1
            return indexCheker(indexCounter)

        })

    }

    const randomReview = ()=>{
        const randomValue = Math.floor(Math.random()* (reviews.length))
        setIndex(indexCheker(randomValue))





    }
    return (
        <div className="reviews">
            <h1>Our reviews</h1>
            <div className="border"></div>
            <div className="reviews_sec">
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{text}</p>
                <div className="icons">
                   
                    <FcPrevious className="icon" onClick={goPrevious}/>
                    <FcNext className="icon" onClick={goNext}/>
                </div>
                <button onClick={randomReview}>Suprise Me</button>




            </div>

        </div>
      );
}
 
export default Reviews;