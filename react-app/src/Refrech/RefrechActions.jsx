/*
define refrech actions
*/
export function refrech(jwt){
    return{
        type:'REFRECH',
        payload:{
            ...state,
            'jwt':jwt,
        }
    }
}