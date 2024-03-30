function isPrime(num) {
    num = parseInt(num);
    if (isNaN(num)) {
      return false
    } else {
      if(num<0){
          num*=-1
      }
      let isPrime = true;
        if (num == 1 || num == 0) {
          return false
        } else {
          if (num == 2 || num == 3) {
            return true
          } else {
            for (let i = 2; i < num; i++) {
              if (num % i == 0) {
                isPrime = false;
              }
            }
          }
        }
      if (
        isPrime == true &&
        num != 2 &&
        num != 1 &&
        num != 3 &&
        num != 0 &&
        num > 0
      ) {
            return true
      } else {
        if (num > 0 && num != 1 && num != 2 && num != 3) {
            return false
        }
      }
    }
  }

  for (let i = 0; i < 100000; i++) {
    if(isPrime(i)){
        console.log(i)
    }
  }