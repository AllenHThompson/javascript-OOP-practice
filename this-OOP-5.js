var AnswerPrototype = {
     get: function fn1() {
          return this.val;
     }

};

var lifeAnswer = Object.create(AnswerPrototype);
     lifeAnswer.val = 42;
     lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14159;
dessertAnswer.get();

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
     return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
luckyAnswer.get();

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
magicAnswer.get();

console.log(AnswerPrototype)
