var start = false;
var time1 = 0;
var time2 = 0;
var counter = 1;
var numList = [1,2,3,4,5,6,7,8,9]

function currentTime() {
    const d = new Date();
    time = d.getTime();
    return time;
}

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
}

function scramble(){
    var chooser = randomNoRepeats(numList);
    for (let i = 0; i < 9; i++) {
        tempId = "but" + (i+1);
        document.getElementById(tempId).innerHTML = chooser();
    }
}

scramble();


function changeColor(element) {
    var currentColor = window.getComputedStyle( element ,null).getPropertyValue('background-color');
    if(currentColor == "rgb(211, 211, 211)") { //lightgray
        element.style.backgroundColor = "rgb(144, 238, 144)" //lightgreen
    }
  } 
function resetColor(element) {
    element.style.backgroundColor = "rgb(211, 211, 211)" ////lightgray
} 

function checkReq(element) {
    var num = element.innerHTML;
      if(start == true && counter == num) {
          changeColor(element);
          counter += 1;
          if(num == 9){
            time2 = currentTime();
            start = false;
            interval = time2 - time1;
            sec = Math.floor(interval/1000)
            mili = interval-1000*sec
            document.getElementById("displayTime").innerHTML = sec +"."+ mili + " s" ;

          }
      }
      else if(num == 1){
        time1 = currentTime();
        start = true;
        changeColor(element);
        counter += 1;
    }
}

function reset() {
    var elements = document.getElementsByClassName("but");
    len = elements.length;
    for (let i = 0; i < len; i++) {
        resetColor(elements[i]);
    };
    start = false;
    counter = 1;
    time1 = 0;
    time2 = 0;
    document.getElementById("displayTime").innerHTML = "0.000 s";
    scramble();
    
}