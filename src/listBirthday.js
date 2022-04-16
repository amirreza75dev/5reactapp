const ListBirhday = ({people}) => {
    return ( 
        <div className="listBirthday">
            {
                people.map( person => {
                    const {id, name, age, image} = person

                    return(
                         <div className="person">
                                <img src = {image} />
                                <div className="person_detail">
                                <h4>{name}</h4>
                                <p>{age } years</p>
                                </div>
                        
                        
                        
                        
                        
                        </div>
                    )



                })



            }


        </div>
     );
}
 
export default ListBirhday;