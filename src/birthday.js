import { useState } from 'react';
import data from './BirthdayData'
import ListBirhday from './listBirthday'


const Birthday = () => {

    const [people , setPeople] = useState(data)
    return (

        <div className="birthday">
            <div className="birth_sec">
                <h2>{people.length} birthday today</h2>
                <ListBirhday people = {people} />
                <button className="clear_button" onClick= { ()=>{
                        setPeople([])
                }}>CLEAR ALL</button>

            </div>
           

            
        </div>
      );
}
 
export default Birthday;