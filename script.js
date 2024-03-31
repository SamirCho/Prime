let amount=10

function isPrime(num){
  if(isNaN(num)){
    return false
  }
  if(Math.floor(num)!=num){
    return isPrime(Math.floor(num))
  }
  if(num<0){
    return isPrime(-num)
  }
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

for (let i = -amount; i < amount; i++) {
  if(isPrime(i)){
    console.log(i)
  }
}