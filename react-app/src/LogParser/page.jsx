export function IncrimentPage(page){
    if(page!==1){
    console.log('clicked')
    return page-1;
    }
    return page;
}
export function DisicrPage(page,pageNum){
    if(page!==pageNum){
    console.log('clicked')
    return page+1;
    }
    return page;
}
export function createPages(end){
    const start = 1;
    const range = [...Array( end ).keys()].map(x => x + start);
    return range
}