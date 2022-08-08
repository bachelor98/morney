type RecordItem={
    tags:string[],
    notes:string,
    type:string,
    amount:number,
    createAt?:Date  //Date是类，或者说是构造函数。?:是指还可能是undefined类型
}