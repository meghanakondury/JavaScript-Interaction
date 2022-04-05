var output;
var restyleButton;
var input;

document.addEventListener("DOMContentLoaded",function(){
  var output = document.getElementById('outputText');
  var restyleButton = document.getElementById("restyle-button");

document.getElementById("half-button").addEventListener("click",halfNum);
  function halfNum(){
  var input = document.getElementById("myInput").value;
  alert("Half of " + input + " is " + input/2);
  }

  document.getElementById("fortune-button").addEventListener("click",fortune);
   function fortune(){
     var fortunePhrase =["you're going to get a good grade on your midterm", "you will make new friends today", "you will start doing gym from today", "you will get receive a gift today", "you will meet someone special today"];
     random= Math.floor(Math.random()*fortunePhrase.length);
     var output = document.getElementById('outputText');
     var currentInputText=fortuneinput.value;
     output.style.fontSize="45px";
     output.style.color= "#810EF5";
     output.innerHTML= currentInputText+ ',' +fortunePhrase[random];
   }

   restyleButton.addEventListener("click",restylebutton);
    function restylebutton(){

      var randomRed = Math.floor(Math.random()*255);
      var randomGreen = Math.floor(Math.random()*100);
      var randomBlue= Math.floor(Math.random()*230);

      // var fontArray=["50px", "60px", "70px"]

      var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
      var randomsize = Math.floor(Math.random() * 100) + 40;
      output.style.color = outputColor;
      output.style.fontSize = outputsize;
    }
  });
