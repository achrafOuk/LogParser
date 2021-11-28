export function initState(){
    try{
        initState = localStorage.getItem('state');
        console.log('init state....');
        console.log('State:',JSON.parse(initState));
        if(initState === null) return undefined;
        return JSON.parse(initState);
    }
    catch(err){
        return undefined;
    }
}
export function reduxPersist(_state){
    console.log(_state);
    const state = JSON.stringify(_state);
    try{
        localStorage.setItem('state', state );
    }
    catch(err){
        console.log(err);
    }
}