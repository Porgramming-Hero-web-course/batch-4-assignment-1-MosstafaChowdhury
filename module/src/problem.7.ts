class Car{
    constructor(public cars:string,public model:string,public years:number){}
    getCarAge(){
        const currentYear=new Date().getFullYear()
        return `${currentYear-this.years}(assuming current year is 2024)`
    }
}