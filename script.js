function isPrime(num){
  num=parseInt(num)
  if(num==0||num==1){
    return false
  }
  if(isNaN(num)){
    return false
  }else{
    for (let i = 2; i < num; i++) {
      if(num%i==0){
        return false
      }
    }
    return true
  }
}

for (let i = 0; i < 1000; i++) {
  if(isPrime(i)){
    console.log(i)
  }
}