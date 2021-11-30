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
export function LogoutAction(){
    return{
        type:'LOGOUT'
    }
}