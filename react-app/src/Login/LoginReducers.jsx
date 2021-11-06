// 
let initStates={
    jwt:'',
    refrech:'',
    msgs:[],
    login:[]
}
export function loginReducer(state=initStates,action){
    switch(action.type){
        case 'LOGIN':
            return state;
        case 'LOGOUT':
            return action.type;
        default:
            return action.type;
        }
}