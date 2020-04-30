
//Function 1

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = [];

let slice = (foods) => {
    foods.pop();
    foods.shift();
    modifiedFood.push(foods);
    return modifiedFood;
}

//Function 2

modifiedFood = [];
foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

let splice = (foods) => {
    modifiedFood = foods.splice(2,0,"noodles","icecream");
    return modifiedFood;
}

//Function 3
    const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
    let isEven = numberArray.filter(function(n){
        return n|1;
    } 

//Function 4

numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i !== 0) return number;
    }
  });

  //Function 5

  //let even_lambda = (numberArray) => return (numberArray % 2 == 0);

  //Function 6

  const myArray = [11, 34, 20, 5, 53, 16];
  var newarray = myArray.map(findSquareOfNumbers);
  function findSquareOfNumbers(myArray) {

      return myArray *2;
  }
  
  //Function 7
var red = myArray.reduce(function(initial, item){
      return initial*item;
  },1);