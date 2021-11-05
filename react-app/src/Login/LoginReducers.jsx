// 
export function loginReducer(state=0,action){
    switch(action.type){
        case 'LOGIN':
            return '5';
        case 'LOGOUT':
            return '1';
        default:
            return '2';
        }
}