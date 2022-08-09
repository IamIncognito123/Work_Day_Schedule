var timeDisplay = document.createElement('h2')
var today = moment().format('MMMM Do YYYY');
var time = document.querySelector('.time')
// sets current hour to military time (1pm = 13)
var currentHour = moment().format('HH')


var textArea9 = document.querySelector('#textArea9')
var textArea10 = document.querySelector('#textArea10')
var textArea11 = document.querySelector('#textArea11')
var textArea12 = document.querySelector('#textArea12')
var textArea1 = document.querySelector('#textArea1')
var textArea2 = document.querySelector('#textArea2')
var textArea3 = document.querySelector('#textArea3')
var textArea4 = document.querySelector('#textArea4')
var textArea5 = document.querySelector('#textArea5')

// var saveTextArray =['saveText9','saveText10','saveText11','saveText12','saveText1','saveText2','saveText3','saveText4','saveText5'];
// var saveArray = ['#save9','#save10','#save11','#save12','#save1','#save2','#save3','#save4','#save5'];
// for(let i = 0; i <=8; i++){
//     saveTextArray[i] = document.querySelector(saveArray[i])
// }
var saveText9 = document.querySelector('#save9')
var saveText10 = document.querySelector('#save10')
var saveText11 = document.querySelector('#save11')
var saveText12 = document.querySelector('#save12')
var saveText1 = document.querySelector('#save1')
var saveText2 = document.querySelector('#save2')
var saveText3 = document.querySelector('#save3')
var saveText4 = document.querySelector('#save4')
var saveText5 = document.querySelector('#save5')

var textLog9 = ''
var textLog10 = ''
var textLog11 = ''
var textLog12 = ''
var textLog1 = ''
var textLog2 = ''
var textLog3 = ''
var textLog4 = ''
var textLog5 = ''


var addClass = document.querySelectorAll(".row")
var description = document.querySelector('.description')

// allows the current time pulled to be equal to the addClass array 
// 9 is subtracted to make it equal
var hourClass = currentHour - 9

timeDisplay.textContent = today
time.appendChild(timeDisplay)


textArea9.addEventListener('keydown', pressKey9);
textArea10.addEventListener('keydown', pressKey10);
textArea11.addEventListener('keydown', pressKey11);
textArea12.addEventListener('keydown', pressKey12);
textArea1.addEventListener('keydown', pressKey1);
textArea2.addEventListener('keydown', pressKey2);
textArea3.addEventListener('keydown', pressKey3);
textArea4.addEventListener('keydown', pressKey4);
textArea5.addEventListener('keydown', pressKey5);

// create array
saveText9.addEventListener('click', save9)
saveText10.addEventListener('click', save10)
saveText11.addEventListener('click', save11)
saveText12.addEventListener('click', save12)
saveText1.addEventListener('click', save1)
saveText2.addEventListener('click', save2)
saveText3.addEventListener('click', save3)
saveText4.addEventListener('click', save4)
saveText5.addEventListener('click', save5)


function pressKey9(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    // use includes because it is split into an array
    if(letterString.includes(keyPress)){
        textLog9 += event.key
    }
}
function pressKey10(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    // use includes because it is split into an array
    if(letterString.includes(keyPress)){
        textLog10 += event.key
    }
}
function pressKey11(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog11 += event.key
    }
}
function pressKey12(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog12 += event.key
    }
}
function pressKey1(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog1 += event.key
    }
}
function pressKey2(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog2 += event.key
    }
}
function pressKey3(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog3 += event.key
    }
}
function pressKey4(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog4 += event.key
    }
}function pressKey5(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    if(letterString.includes(keyPress)){
        textLog5 += event.key
    }
}

    // when you save a blank and refresh it refreshes blank
    // need to grab and save text stored, if statement maybe?

 var textAdd9 = localStorage.getItem('textLog9')
textArea9.textContent = textAdd9

function save9(){
    localStorage.setItem('textLog9', textLog9)

}

var textAdd10 = localStorage.getItem('textLog10')
textArea10.textContent = textAdd10
function save10(){

    localStorage.setItem('textLog10', textLog10)
}

var textAdd11 = localStorage.getItem('textLog11')
textArea11.textContent = textAdd11
function save11(){

    localStorage.setItem('textLog11', textLog11)
}

var textAdd12 = localStorage.getItem('textLog12')
textArea12.textContent = textAdd12
function save12(){

    localStorage.setItem('textLog12', textLog12)
}

var textAdd1 = localStorage.getItem('textLog1')
textArea1.textContent = textAdd1
function save1(){

    localStorage.setItem('textLog1', textLog1)
}

var textAdd2 = localStorage.getItem('textLog2')
textArea2.textContent = textAdd2
function save2(){

    localStorage.setItem('textLog2', textLog2)
}

var textAdd3 = localStorage.getItem('textLog3')
textArea3.textContent = textAdd3
function save3(){

    localStorage.setItem('textLog3', textLog3)
}

var textAdd4 = localStorage.getItem('textLog4')
textArea4.textContent = textAdd4
function save4(){
    localStorage.setItem('textLog4', textLog4)
}

var textAdd5 = localStorage.getItem('textLog5')
textArea5.textContent = textAdd5
function save5(){

    localStorage.setItem('textLog5', textLog5)
}

// add time and else statement

// if it is 6pm or past 
if(hourClass > 8){
    for(let i = 0; i < hourClass; i++){
        addClass[i].classList.add('past');
    }

}
// displays the current block of time
if(hourClass == hourClass){
    addClass[hourClass].classList.add('present')
}
if(hourClass < hourClass + 1){
    for(let i = 0; i < hourClass; i++){
        addClass[i].classList.add('past');
    }

}
if(hourClass < hourClass + 1){
    for(let i = hourClass +1; i < 9; i++){
        addClass[i].classList.add('future');
    }

}