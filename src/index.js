module.exports = function zeros(expression) {
  let factorial = expression.split("*");
  let numFive = 0;
  let numTwo = 0;
  for (let i = 0; i < factorial.length; i++){
    if (factorial[i].slice(-2) === '!!'){
      let count = factorial[i].slice(0, -2);
      for (let j = count; j > 0; j -= 2) {
        let number = j;
        while (number % 5 == 0) {
          number /= 5;
          numFive++;
        }
        while (number % 2 == 0) {
          number  /= 2;
          numTwo++;
        }
      }
    } else {
      let count = factorial[i].slice(0, -1);
      for (let j = count; j > 0; j--) {
        let number = j;
        while (number % 5 == 0) {
          number /= 5;
          numFive++;
        }
        while (number % 2 == 0) {
          number /= 2;
          numTwo++;
        }
      }
    }
 }
 return (numFive > numTwo) ? numTwo : numFive;
}