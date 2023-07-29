import React, {useContext} from 'react'
import ListCard from '../components/ListCard'
import { DataContext } from '../context/DataContext'
const Explore = () => {
  const {videos} = useContext(DataContext);

  return (
    <main className='w-full h-auto'>
      <div className="w-full h-auto flex items-center md:flex-wrap m-auto mt-0  md:w-[90%] lg:w-[80%] xl:w-[75%]">
      {
        videos?.map((video)=>(
          <ListCard video={video}/>
        ))
      }  
      </div>  
    </main>
  )
}

export default Explore
