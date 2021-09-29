export default function useSetToken(data){
    try{
    console.log(data);
        return data.access;
    }
    catch(e){
    console.log(data);
        return undefined;
    }
}