import React from 'react';
function Categories({value,onClickCategory}){


    return (
      
      <div className ="categories">
                <ul>
                  {value.categoriesTitle.map((categoryName,i) => (
                    <li
                    key={i} 
                    onClick={() => onClickCategory(i)} 
                    className ={value.id === i ? 'active' : ''}>{categoryName}</li>
                  ))}
                  
                  
                </ul>
              </div>
    )
  }
export default Categories; 

