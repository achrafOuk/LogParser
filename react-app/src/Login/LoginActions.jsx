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
export function logout(){
    return{
        type:'LOGOUT'
    }
}
export function refrech(){
    return{
        type:'REFRECH'
    }
}