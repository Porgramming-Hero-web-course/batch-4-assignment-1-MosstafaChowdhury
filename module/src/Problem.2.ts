const removeDuplicates=(arrays:number[]):number[]=>{
    const originArray=arrays.filter((item,index)=>arrays.indexOf(item)===index)

    return originArray;
}