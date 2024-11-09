const getProperty=<X,Y extends keyof X>(objc:X,property:Y)=>{
  return objc[property]
}