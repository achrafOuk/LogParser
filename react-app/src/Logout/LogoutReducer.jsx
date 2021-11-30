export function LogoutReducer(state,action){
    switch(action.type){
        case 'LOGOUT':
            return {...state,login:undefined};
        default:
            return {...state};
    }
}