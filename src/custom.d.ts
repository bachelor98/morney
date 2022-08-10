type RecordItem={
    tags:string[],
    notes:string,
    type:string,
    amount:number,
    createAt?:Date  //Date是类，或者说是构造函数。?:是指还可能是undefined类型
}

type Tag = {
    id:string;
    name:string;
}
type TagListModel = {
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>'success' | 'duplicated' | 'null'   //联合类型，success表示成功，duplicated表示内容重复
    update:(id:string,name:string)=>'success' | 'not found' | 'duplicated'
    remove:(id:string)=>boolean
    save:()=>void
}

interface Window{

}