const counrWord0currences=(sentences:string,word:string)=>{
   let count:number=0;
   const splitWords=sentences.split(' ')
   for (let sword of splitWords){
    if(sword===word){
        count=count+1;
    }
   }

   return count
}

