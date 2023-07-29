import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'

const Playlist = () => {
  const {playlist} = useContext(DataContext)
  
  return (
    <main>
      PlayList
    </main>
  )
}

export default Playlist