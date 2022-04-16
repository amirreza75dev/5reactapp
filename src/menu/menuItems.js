const MenuItems = ({items}) => {
    return (   
        <div className="menu_items">

            {/* {console.log(item1)} */}

            {items.map(item=>{
                return(
                
                <div className="item">
                    <img src={item.img} alt=""/>
                   
                    <div className="price">
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                        <p>{item.desc}</p>
                    </div>

                    
                </div>
              
                




                )
                
            })}



        </div>
      );
}
 
export default MenuItems;