function vowelCount(){
    var text =  document.getElementById("textInput").value;
    var vowelCounter = 0;

    text= text.toLowerCase();

    for(var i=0;i<text.length;i++){
        var char = text.charAt(i);
        if(isVowel(char)){
            vowelCounter++;
        }
    }
    var result = document.getElementById("result");
    result.textContent="Total Vowels:"+ vowelCounter;

}

function isVowel(char){
    var vowels = ["a","i","e","o","u"]
    return vowels.includes(char)
}