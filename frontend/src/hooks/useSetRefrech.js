export default function useSetRefrech(data){
    try{
        return data.refrech;
    }
    catch(e){
        return undefined;
    }
}