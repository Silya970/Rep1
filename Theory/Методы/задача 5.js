let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
       return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
   return this;
    }
  };
  
  ladder.up().up().down().showStep(); // нужно вернуть this в каждом методе, тогда такой вызов метода будет работать