import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import ListCard from '../components/ListCard';


const WatchLater = () => {
  const {videos , watchLater} = useContext(DataContext);

  
  

  return (
    <main className='w-full h-screen'>
      <div className="w-full h-auto flex flex-col items-center justify-center md:flex-row md:flex-wrap m-auto mt-0  md:w-[90%] lg:w-[80%] xl:w-[75%]">
      {
        watchLater?.map((video)=>(
          <ListCard video={video}/>
        ))
      }  
      </div>  
    </main>
  )
}

export default WatchLater