import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import ListCard from '../components/ListCard';
const ListingPage = () => {
  
  const {category} = useParams();
  const {videos} = useContext(DataContext);

  const filteredVideos = videos?.filter((video)=> video.category === category);

  return (
    <main className='w-full h-auto flex flex-col md:h-screen '>
    <h1 className='text-3xl text-center p-6 font-heading font-medium tracking-wider'>{category}</h1>
    <div className="w-full h-auto flex flex-wrap m-auto mt-0  md:w-[90%] lg:w-[80%] xl:w-[75%]">
        {
           filteredVideos?.map((video)=>(
            <ListCard video={video} key={video._id}/>
          ))
        }
      </div>
    </main>
  )
}

export default ListingPage
