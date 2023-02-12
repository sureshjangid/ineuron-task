import { type } from "@testing-library/user-event/dist/type";

const user = [];


// Getting user all data
export const get_user = (state = {user},action)=>{
    switch(action.type){
        case "SUCCESS" : 
        return{user:action.payload};

        case "FAIL" : 
        return{user:action.payload};

        default : return state
    }
    
}

// Add user
export const add_user = (state={user},action)=>{
    switch(action.type){
        case "ADD_USER":
            return {user:action.payload};
            
            case "FAILED_USER":
            return {user:action.payload}

            default : return state

    }
    
}

export const single_user_data = (state = {user},action)=>{
    switch(action.type){
        case "SINGLE_USER" : 
        return{user:action.payload};

        case "FAILED_SINGLE_USER" : 
        return{user:action.payload};

        default : return state
    }
    
}
