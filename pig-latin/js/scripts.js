//Front-end
$(document).ready(function(){
  $("#pigLatinForm").submit(function(event){
    // debugger;
    event.preventDefault();
    //var splitPig = [];
    var inputSentance = $("input#sentenceInput").val();
    console.log(inputSentance);
    //if (inputPigLatin.length > 0){
    translateWords(inputSentance);
    //  inputPigLatin.split('');
  //    console.log(inputPigLatin);
  //  }
  //  console.log(splitPig);
  //  for(i = 0; i < splitPig; i++){
//
  //  }

  //  splitPig(inputPigLatin);
  //  foreach()
  });


//Back-end

//Function to split each word, call vowelCheck function on originalSentance for each step
function translateWords(sentance) {
  var originalSentance = sentance.split(" ");
  console.log(originalSentance);

  for(index = 0; index < originalSentance.length; index++){
    originalSentance[index] = wordSplit(originalSentance[index]);
  }
  console.log(originalSentance);
}

function wordSplit(word) {
  console.log(word);
  var splitWord = word.split('');

  console.log(splitWord);
  forEach()(splitWord))
}
function vowelCheck(vowel){
(['a', 'e', 'i', 'o', 'u'])
};
//function vowelCheck(word){
  //
  //if(//single letter word begins with vowel, add ay){

  //}else if {
    //starts with vowel
//  } else {
    //return without mutations
//  }
//}
//function listVowels(letter){
//  var vowels = ;
//  var wordLength = letter.length();
//  var splitLetters = letter.split("");
  //forEach(splitLetters(function(word)){

//  }
});
