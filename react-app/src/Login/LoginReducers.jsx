export let initLogin={
    jwt:'',
    refresh:'',
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
            return {...state,user:null,jwt:'',refresh:''};
        case 'REFRECH':
            return {...state,jwt:action.jwt};
        default:
            return {...state};
    }
}