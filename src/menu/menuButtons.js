const MenuButtons = ({categories,filterItems}) => {
    return ( 
        <div className="menu_buttons">
            {
                categories.map((category)=>{
                    return <button onClick={()=> filterItems(category)}>{category}</button>

                })
            }


        </div>
     );
}
 
export default MenuButtons;