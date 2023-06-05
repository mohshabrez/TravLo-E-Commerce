export const ACTIONS = {
    USERS:"users"
}

export function AuthReducer (state, action){
    switch(action.type){
        case ACTIONS.USERS:{
            return{...state, UserDetails:[...action.payLoad]}
        }
        default: {
            throw new Error("Unknown action " + action.type);
          }

    }
}