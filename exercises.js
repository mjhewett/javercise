// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
   if (x > y) {
       return x;
   } else{
       return y;
   }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,x){
 return Math.max.apply(null, arguments);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(x)
{
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || false;
}



// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
   var rovSprak = phrase.split("");
   var sprakRov = [];
   rovSprak.forEach(function(x){
       if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u'){
           sprakRov.push(x + 'o' + x);
       }
       else{
           sprakRov.push(x);
       }
   })
   return sprakRov.join("");
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(q,x,y,z){
    return q + x + y + z;
}

function multiply(q,x,y,z){
    return q * x * y * z;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
 return x.split('').reverse().join('');
}


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------


   function findLongestWord(words){
    var longWords = words.map(function (x){
      return x.length;
    });
    var longestWords = wordLength.sort( function(a,b){
      return a - b;
    });
    return longestWord[longestWord.length -1];
  }

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------


function filterLongWords(words, i){
  var word = [];
    for (var yas = 0; yas < words.length; yas++) {
      if (words[yas].length > i) {
        word.push(words[yas]);
      }
    }
    return word;
}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var obj = new Object();
    for(var i = 0; i <string.length; i++) {
      var x = string.charAt(i);
      if (obj[x]) {
        obj[x]++;
      } else {
        obj[x] = 1;
      }
      return obj
    }

}
()
