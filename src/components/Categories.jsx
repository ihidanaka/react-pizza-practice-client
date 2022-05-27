import React from 'react';
function Categories(){
const [activeCategoryIndex,setActiveCategoryIndex] = React.useState(0);
const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

    return (
      
      <div className ="categories">
                <ul>
                  {categories.map((value,i) => (
                    <li
                    key={i} 
                    onClick={() => setActiveCategoryIndex(i)} 
                    className ={activeCategoryIndex === i ? 'active' : ''}>{value}</li>
                  ))}
                  
                  
                </ul>
              </div>
    )
  }
export default Categories; 

