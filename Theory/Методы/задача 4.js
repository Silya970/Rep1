 let calculator = {

  read () {
    this.a = +prompt ('a?', '');
    this.b = +prompt ('b?', '');
  },
 sum () { let result1 = this.a + this.b;
   return result1 ;
 },
 mul () { let result2 = this.a * this.b ;
   return result2 ;
 }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );