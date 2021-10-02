/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  let isEqual = expected === found;

  if (isEqual) {
    return "TEST SUCCEEDED";
  } else {
    console.assert(
      isEqual,
      "TEST FAILED.  Expected " + expected + " found " + found
    );
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTestForStringArray(expected, found) {
  return (
    Array.isArray(expected) &&
    Array.isArray(found) &&
    expected.length === found.length &&
    expected.every((val, index) => val === found[index])
  );
}

//1
function max(a, b) {
  if (a>b) {return a;}
  else {return b;}
}
console.log(
  "Expected of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

//2 maxOfThree
function maxOfThree(a, b, c) {

  if (a >= b && a >= c){
    return a;
  }

  else if (b >= a && b >= c) {
    return b;
  }
  else{
    return c;
  }

}

console.log(
  "Expected of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

//3 isVowel
function isVowel(char) {
  // parameter char must be character
  if (typeof char !== "string" || char.length !== 1) return;

  char = char.toLowerCase();
  return (
    char === "a" || char === "e" || char === "o" || char === "u" || char === "i"
  );
}
console.log(
  "Expected of isVowel('O') is true  " +
    myFunctionTest(true, isVowel("O"))
);
console.log(
  "Expected of isVowel('a') is false  " +
    myFunctionTest(false, isVowel("z"))
);

//4 sum
function sum(arr) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.reduce((a, b) => a + b, 0);
}
const arr = [1, 2, 3, 4];
const arr2 = [2, 8, 7, 3, 9, 11];
console.log(
  "Expected of sum(arr) is 50  " +
    myFunctionTest(50, sum([...arr, ...arr2]))
);

console.log(
  "Expected of sum(arr2) is 40  " + myFunctionTest(40, sum(arr2))
);

//4
function reverse(str) {
  if (typeof str !== "string") return;

  return str.split("").reverse().join("");
}

//5 multiply
function multiply(arr) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.reduce((a, b) => a * b, 1);
}

console.log(
  "Expected of multiply(arr) is 24  " + myFunctionTest(24, multiply(arr))
);
console.log(
  "Expected of multiply(arr2) is 33264  " +
    myFunctionTest(33264, multiply(arr2))
);


console.log(
  "Expected of reverse('WAP') is PAW  " +
    myFunctionTest("PAW", reverse("WAP"))
);
console.log(
  "Expected of reverse('Fairfield, Iowa') is 'awoI ,dleifriaF'  " +
    myFunctionTest("awoI ,dleifriaF", reverse("Fairfield, Iowa"))
);

//6 findLongestWord
function findLongestWord(arr) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
}

const arrayOfWords = ["one", "two", "three", "four", "five"];
const arrayOfWords2 = [
  "Maharishi",
  "International",
  "University",
  "Fairfield",
  "Iowa",
];

console.log("Expected of findLongestWord(arr) is 5  " + myFunctionTest(5, findLongestWord(arrayOfWords)));
console.log("Expected of findLongestWord(arr) is 13  " + myFunctionTest(13, findLongestWord(arrayOfWords2)));

//7 filterLongWords
function filterLongWords(arr, i) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.filter((el) => el.length > i);
}

console.log("Expected of filterLongWords(arr) is ['three', 'four', 'five']  " +
    myFunctionTestForStringArray(["three", "four", "five"],filterLongWords(arrayOfWords, 3))
);
console.log("Expected of filterLongWords(arr) is ['International', 'University']  " +
    myFunctionTestForStringArray(["International", "University"],filterLongWords(arrayOfWords2, 9))
);



////////////////////////////////////////
const a = [1, 3, 5, 3, 3];
const b = a.map(
    function (elem, i, array) {  return elem * 10; }
);

document.writeln(
  "JSFiddle results are at console. \
  JSFiddle results below<br/>------------<br/>"
);
document.writeln(b.toString() + "<br/>");

const c = a.filter(
    function (elem, i, array) {  return elem === 3;}
);
document.writeln(c.toString() + "<br/>");

const d = a.reduce(
    function (prevValue, elem, i, array) {  return prevValue * elem;}
);
document.writeln(d + "<br/>");

const d2 = a.find(
    function (elem) {  return elem > 1;}
); //3
const d3 = a.findIndex(function (elem) {  return elem > 1;}); //1
document.writeln(d2 + "<br/>");
document.writeln(d3 + "<br/>------------<br/>");
