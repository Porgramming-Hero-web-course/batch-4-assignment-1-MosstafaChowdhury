interface Profile{
    name:string;
    age:number;
    email:string
}

const UpdateProfile=(objc:Profile,updateUser:Partial<Profile>)=>{
    const updatedUser={...objc,...updateUser}
    return updatedUser;
}