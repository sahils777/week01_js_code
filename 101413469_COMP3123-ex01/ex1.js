function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }
console.log(capitalizeWords("the quick brown fox"));

//https://github.com/sahils777/week01_js_code/tree/main/101413469_COMP3123-ex01