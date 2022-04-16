import { useEffect, useState } from "react"
import TourList from './tourList'

const Tour = () => {

    const tourApi = 'https://course-api.com/react-tours-project' 
    const [isPending, setIsPending] = useState(true)
    const [tour, setTour] = useState([])

    const removeTour = (id)=>{

        const newTour = tour.filter( tour => tour.id !== id)
        setTour(newTour)
    }

    const fetchApi = async ()=>{
        try{

         const response = await fetch(tourApi)
         const tours = await response.json()
         setIsPending(false)
         setTour(tours)
         console.log(tours);


        }

        catch (error){

        setIsPending(false)
        console.log(error.message);



        }
    }

    // const fetchApi = ()=>{
    //     fetch(tourApi)
    //     .then(res =>{
    //         console.log(res);
    //         return res.json()
    //     })
    //     .then(tour=>{
    //         setTour(tour)
    //         console.log(tour);
    //     })
    //     .catch(err=>{

    //         console.log(err);
    //     })


        
    // }


    useEffect(()=>{

        fetchApi()

    },[])

    // if(!isPending){
    //     return (
    //         <div> 
    //             <h1>is loading</h1>
    //         </div>
    //     )


    // } 


    if (isPending){

        return (

            <div> .... loading</div>
        )
    }
    if (tour.length ===0){
        return ( 
            <div className="tour1">
    
                <h1> no tours left</h1>
                <button onClick = { ()=>{
                    fetchApi()
                }}>refresh</button>
    
    
            
    
                
            </div>
         );




    }
    
        return(
            <div className="tour_sec">

                {
                    tour.map( tourObject=>{
                       return <TourList key = {tourObject.id}  {...tourObject} removeTour =  {removeTour}/>

                    })



                }
                <a class = "tour_api" href="https://course-api.com/react-tours-project">Api used for this project</a>



            </div>


        )




    


}
 
export default Tour;