import { createContext, useReducer } from "react";
import {categories} from "../db/category";
import { videos } from "../db/data";
import {dataReducer} from "../reducer/dataReducer";


export const DataContext = createContext();

export const DataProvider = ({children})=>{
    
    const initalValues = {
        categories,
        videos,
        playlist:[],
        watchLater:[],
        search:"",
    }

    const [state, dispatch] = useReducer(dataReducer, initalValues)
    
    
    return(
        <DataContext.Provider value={{
            categories:state.categories,
            videos:state.videos,
            dataDispatch:dispatch,
            playlist:state.playlist,
            watchLater:state.watchLater,
            search:state.search,

        }}>
            {children}
        </DataContext.Provider>
    )
}