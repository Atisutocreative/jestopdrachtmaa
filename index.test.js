//opdracht maarten
// 2. importeren
const add = require("./index").add;

//test

test('add fuction shoud return the sum of 2 numbers', function () {
    console.log('hallo');
    console.log(sum);
});

//arrange
const number1 = 4;
const number2 = 5;

//act
const sum = add(number1, number2);

//assert
expect(sum).toBe(9); {
};

