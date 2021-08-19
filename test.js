class Factorial {
    constructor(){
      this.cache = {}
    };
  
    calcFac(num) {
      let answer = 1
      if (this.cache[num]){
        return num
      } else {
        for (let i=num; i > 1; i--){
          answer = answer*i
        }
        this.cache[num] = answer
      }
      return answer
    };
  
  };
