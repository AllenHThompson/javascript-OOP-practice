var AnswerPrototype = {
     constructor: function fn0(value) {
          this._val = value;
     },
     get: function fn1() {
          return this.constructor;
     }

};

var lifeAnswer = Object.create(AnswerPrototype);
     lifeAnswer.constructor(42);
     lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get();

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
     return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get();

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get();

console.log(AnswerPrototype)
