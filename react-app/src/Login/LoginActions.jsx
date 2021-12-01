//define the login actions
export function loginAction(user,jwt,refresh){
    return{
        type:'LOGIN',
        payload:{
            'user':user,
            'jwt':jwt,
            'refresh':refresh,
        }
    }
}
export function RefrechAction(jwt){
    return{
        type:'REFRECH',
        payload:{
            'jwt':jwt,
        }
    }
}
export function LogoutAction(){
    return{
        type:'LOGOUT'
    }
}