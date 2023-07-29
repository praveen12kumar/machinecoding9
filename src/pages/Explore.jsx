import React, {useContext} from 'react'
import ListCard from '../components/ListCard'
import { DataContext } from '../context/DataContext';
const Explore = () => {
  const {videos, search} = useContext(DataContext);
  
  const filteredVideo = videos?.filter((v)=> v?.title?.toLowerCase()?.includes(search?.toLowerCase()));
  
  const finalData = filteredVideo ? filteredVideo : videos;

  return (
    <main className='w-full min-h-[100vh]'>
      <div className="w-full h-auto flex items-center md:flex-wrap m-auto mt-0  md:w-[90%] lg:w-[80%] xl:w-[75%]">
      {
        finalData?.map((video)=>(
          <ListCard video={video}/>
        ))
      }  
      </div>  
    </main>
  )
}

export default Explore
