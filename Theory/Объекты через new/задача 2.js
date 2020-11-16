function Calculator () {

    this.read = function () {
         this.a = +prompt ('a?', '');
         this.b = +prompt ('b?', '');
       };
   this.sum = function () { let result1 = this.a + this.b;
        return result1 ;
      }
   this.mul = function () { let result2 = this.a * this.b ;
        return result2 ;
      }
     }
     
     let calculator = new Calculator();
     calculator.read();
   console.log ( "Sum=" + calculator.sum() );
   console.log ( "Mul=" + calculator.mul() );