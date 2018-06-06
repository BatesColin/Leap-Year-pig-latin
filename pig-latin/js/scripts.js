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

  for(var index = 0; index < originalSentance.length; index++){
    originalSentance[index] = wordSplit(originalSentance[index]);
  }
  console.log(originalSentance);
}

function wordSplit(word) {
  debugger;
  console.log(word);
  var splitWord = word.split('');
  var cloneWord = word;

  console.log(splitWord);
  return vowelCheck(splitWord,cloneWord);
}
function vowelCheck(vowel,cloneWord){
  alert(vowel[0]);
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowel[0] === vowels[0] || vowel[0] === vowels[1] || vowel[0] === vowels[2] || vowel[0] === vowels[3] || vowel[0] === vowels[4]){
    if (cloneWord.length === 1){
      cloneWord += "ay";
      alert(cloneWord);
    }else{
      cloneWord += "way";
      alert(cloneWord);
    }
  } else {
    alert("not a vowel")
  }




}

//  if (vowel[0] !=== vowels[countStep]) {
//    push vowel{
//      if vowel = vowels
//    }
//  }
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
