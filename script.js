

// 1. Write a function called logMyName that will log your name.  Call this 1 time
const logMyName = () => {
    console.log("Massoud")
};
// logMyName();

// 2. Write a function called logThisName that will log the name parameter. Call this 2 times. 

const logThisName = (name) => {
    console.log(name)
};
// logThisName("Massoud")
// logThisName("Chase")


// 3. Write a function called checkName that will check if the name parameter is "Joyce". Call this function 3 times - with "Chase" "Jerry" and "Joyce"

const checkName = (name) => {
    if(name === "Joyce"){
        console.log(name, "Is the correct name")
    } else {
        console.log(name, " is not the correct name")
    }
};
// checkName("Chase");
// checkName("Jerry");
// checkName("Joyce");


// 4. Write a function that called doLoop will do a loop that will count from 0-10. Call this function 3 times.
const doLoop = () => {
    for(let i = 0; i<11; i++){
        console.log(i)
    }
};
// doLoop();
// console.log("===========================\n")
// doLoop();
// console.log("============================\n")
// doLoop();

// 5. Write a function called doLoopWithThisNumber that will do a while loop from 0 until the given number parameter. Call this 5 times with 10, 100, 78, 22, 15
const doLoopWithThisNumber = (number) => {
    let i = 0;
    while (i <= number){
        console.log(i);
        i++;
    };
};

// doLoopWithThisNumber(10);
// doLoopWithThisNumber(100);
// doLoopWithThisNumber(78);
// doLoopWithThisNumber(22);
// doLoopWithThisNumber(15);


// 6. Write a function (you make the name) that will add 2 numbers together. Call 3 times.


// let num1 = 0;
// let num2 = 0;

const addTwoNumbers = (num1, num2)=> {
    let sum = num1 + num2;
    return sum;
}
// console.log(addTwoNumbers(15, 10));
// console.log(addTwoNumbers(10, 10));
// console.log(addTwoNumbers(100, 10));

// 7. Write a function (you make the name) that will check if the number parameter is even or odd. call 2 times.
const isEvenOrOdd = (number)=>{
    if(number % 2 === 0){
        console.log(number, " is an even number")
    } else {
        console.log(number, " is an odd number")
}
};
// isEvenOrOdd(15);
// isEvenOrOdd(2);

// 10. Write a function (you make the name) that will log the typeof the data parameter. call 1 time
const checkTheTypeOf = (data) => {
    console.log(typeof(data));
};
// checkTheTypeOf("This is working, i'm not joking, test it")

// 11. Write a function (you make the name) that will do a loop 0-? The loop should end based on the number parameter. call 2 times.

const loopDLoop = (length)=> {
    let i = 0;
    while(i<=length){
        console.log(i)
        i++;
    }
    // for(let i = 0; i<=length; i++ ){
    //     console.log(i);
    // }
}
// loopDLoop(5);
// loopDLoop(20);

