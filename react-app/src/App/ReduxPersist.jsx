export function initState(){
    try{
        initState = localStorage.getItem('state');
        if(initState === null) return undefined;
        return JSON.parse(initState);
    }
    catch(err){
        return undefined;
    }
}
export function reduxPersist(_state){
    const state = JSON.stringify(_state);
    try{
        localStorage.setItem('state', state );
    }
    catch(err){
        console.log(err);
    }
}
export function reduxRemove(){
try{
        localStorage.removeItem('state');
    }
    catch(err){
        console.log(err);
    }
}