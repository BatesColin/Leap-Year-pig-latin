//Front-end
$(document).ready(function(){
  $("#pigLatinForm").submit(function(event){
    debugger;
    event.preventDefault();
    //var splitPig = [];
    var inputSentance = $("input#sentenceInput").val();
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
});
//Back-end

//Function to split each word, call vowelCheck function on originalSentance for each step
function translateWords(sentance) {
  var originalSentance = sentance.split(" ");
  for(index = 0; index < orignialSentance; index++){
    originalSentance[index] = vowelCheck(originalSentence)
  }
  var joinOriginalSentance = originalSentance.join(" ");
  return joinOriginalSentance
}

function vowelCheck(word){
  //
  if()
}
function listVowels(letter){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
}
