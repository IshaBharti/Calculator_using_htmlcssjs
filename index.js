var preText = ""
function display(givenValue){
  var updatedText = preText + givenValue
  preText = updatedText
  
  
  
  document.getElementById("out").innerHTML=updatedText
}


function clearText(){
     document.getElementById("out").innerHTML =""
     preText = ""
}

function clickEqual(){
  var result  = eval(preText);
  document.getElementById('out').innerHTML = result;
  console.log = (preText)
  preText = result
  // var result = ]]eval(document.getElementById('out').innerHTML.value);
  
}