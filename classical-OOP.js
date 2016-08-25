function Answer(value) {
     this._val = value;
}
/*
Answer(){
prototype: Answer.prototype,
name: "Answer",
length: 1
}
*/
Answer.prototype.get = function fn1() {
     return this._val;
};
/*
Answer.prototype{
constructor: Answer()
}
*/

var lifeAnswer = new Answer(42);
lifeAnswer.get();

var dessertAnswer = new Answer(3.14149);
dessertAnswer.get();

/*SUBCLASS*/
function FirmAnswer(value) {
Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);

FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {return Answer.prototype.get.call(this) + "!!";}

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();

var magicAnswer = new FirmAnswer(3);
magicAnswer.get();

lifeAnswer instanceof Answer; //true

/*
var Answer() = {
     prototype: {
          constructor: Answer(),
          get: fn1()
     },
     name: "Answer",
     length: 1
}
*/
