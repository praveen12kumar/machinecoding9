export const dataReducer = (state, {type, payload})=>{

    switch(type){

        case "AddWatchLater":
            console.log("payload", payload);
            return{...state, watchLater: [...state.watchLater, payload] }
        
        case "RemoveWatchLater":
            return{...state, watchLater: payload}

        case "search":
            return{...state, search: payload}

        default:
            return state;

    }
}