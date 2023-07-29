import React from 'react'
import { useNavigate } from 'react-router-dom';
const CategoryCard = ({cate}) => {
   const {_id, thumbnail, src, category} = cate;
   const navigate = useNavigate();
    return (
    <div key={_id} className='m-4 shadow-xl cursor-pointer border-2 border-slate-100'>
        <img className='p-3 pt-5' src={thumbnail} onClick={()=> navigate(`/${category}`)}/>
        <h1 className='p-3 font-medium tracking-wide font-sans'>{category}</h1>
    </div>
  
  )
}

export default CategoryCard
