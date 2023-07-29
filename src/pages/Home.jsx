import React, {useContext} from 'react';

import { DataContext } from '../context/DataContext'
import CategoryCard from '../components/CategoryCard';
const Home = () => {
    const {categories} = useContext(DataContext);
   

  return (
    <main className='w-full h-auto m-0 md:h-screen lg:h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-medium font-heading text-center '>Categories</h1>
      <div className="w-full h-auto flex flex-wrap  justify-center  md:w-[90%] lg:w-[80%] xl:w-[75%]">
        {
            categories?.map((cate)=>(
                <CategoryCard cate={cate} />
            ))
        }
      </div>
    </main>
  )
}

export default Home
