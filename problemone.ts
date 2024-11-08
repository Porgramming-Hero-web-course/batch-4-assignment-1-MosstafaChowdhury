const sumArray=(array:number[])=>{
    const total =array.reduce((current,numbers)=>current+numbers,0)
    return total
}