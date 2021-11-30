export function IncrimentPage(page){
    if(page!==1){
    return page-1;
    }
    return page;
}
export function DisicrPage(page,pageNum){
    if(page!==pageNum){
    return page+1;
    }
    return page;
}
export function createPages(end){
    const start = 1;
    const range = [...Array( end ).keys()].map(x => x + start);
    return range
}