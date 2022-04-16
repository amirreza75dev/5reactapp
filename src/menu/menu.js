import { useState } from 'react'
import MenuButtons from './menuButtons'
import data from './menuData'
import MenuItems from './menuItems'

const Menu = () => {

    const allCategories = ["all",...new Set(data.map((data)=>{
        return data.category
    }))]
    const [items,setItems] = useState(data)
    const [categories,setCategories] = useState(allCategories)

    const filterItems = (category)=>{
        if(category ==="all"){
            return setItems(data)
        }
        else{
           const newItems = data.filter((item)=>{
               return item.category === category

            })
            setItems(newItems)
        }
    }


    // console.log(categories);
    return ( 
        <div className="menu">
            <div className="title">Our Menu</div>
            <div className="buttons">
                <MenuButtons categories = {categories} filterItems={filterItems}/>
            </div>
            <div className="items_section">
                <MenuItems items={items}/>
            </div>




        </div>
     );
}
 
export default Menu;