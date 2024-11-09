const sumArray=(array:number[])=>{
    const total =array.reduce((current,numbers)=>current+numbers,0)
    return total
}

const rr=sumArray([1,2,2])
console.log(rr)