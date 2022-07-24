import React from "react";

const Categories = () => {
    
    const [activeCategory, setActiveCategory] = React.useState(0);
    const onClickActiveCategory = (index) =>{
        setActiveCategory(index)
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return(
        <div className="categories">
            <ul>
                {categories.map((value, index) => {
                    return (
                        <li key={index} onClick={() => onClickActiveCategory(index)} className={activeCategory === index ? 'active' : ''}>{value}</li>
                    )
                })}
              
            </ul>
        </div>
    )
}

export default Categories;

//<li onClick={() => onClickActiveCategory(0)} className={activeCategory === 0 ? 'active' : ''}>Все</li>