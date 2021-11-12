export let initLogin={
    jwt:'',
    refresh:'',
    msgs:[],
    user:null
}
export function loginReducer(state=initLogin,action){
    switch(action.type){
        case 'LOGIN':
            state=initLogin;
            let user =action.payload.user;
            let access =action.payload.jwt;
            let tokenRefrech =action.payload.refresh;
            return {...state,user:user,jwt:access,refresh:tokenRefrech};
        case 'LOGOUT':
            return action.type;
        case 'REFRECH':
            return {...state,jwt:action.jwt,refrech:action.refrech};
        default:
            return action.type;
        }
}