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

var saveText9 = document.querySelector('#save9')
var saveText10 = document.querySelector('#save10')
var saveText11 = document.querySelector('#save11')
var saveText12 = document.querySelector('#save12')
var saveText1 = document.querySelector('#save1')
var saveText2 = document.querySelector('#save2')
var saveText3 = document.querySelector('#save3')
var saveText4 = document.querySelector('#save4')
var saveText5 = document.querySelector('#save5')

var textLog = ''

var addClass = document.querySelectorAll(".row")
var description = document.querySelector('.description')

// allows the current time pulled to be equal to the addClass array 
// 9 is subtracted to make it equal
var hourClass = currentHour - 9

timeDisplay.textContent = today
time.appendChild(timeDisplay)


textArea9.addEventListener('keydown', pressKey);
textArea10.addEventListener('keydown', pressKey);
textArea11.addEventListener('keydown', pressKey);
textArea12.addEventListener('keydown', pressKey);
textArea1.addEventListener('keydown', pressKey);
textArea2.addEventListener('keydown', pressKey);
textArea3.addEventListener('keydown', pressKey);
textArea4.addEventListener('keydown', pressKey);
textArea5.addEventListener('keydown', pressKey);


saveText9.addEventListener('click', save)
saveText10.addEventListener('click', save)
saveText11.addEventListener('click', save)
saveText12.addEventListener('click', save)
saveText1.addEventListener('click', save)
saveText2.addEventListener('click', save)
saveText3.addEventListener('click', save)
saveText4.addEventListener('click', save)
saveText5.addEventListener('click', save)



function pressKey(event){
    var letterString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.split('');
    var keyPress = event.key;
    // use includes because it is split into an array
    if(letterString.includes(keyPress)){
        textLog += event.key
    }
}




if(true){
    var textAdd = localStorage.getItem('textLog')
    textArea9.textContent = textAdd
}

// textArea10.textContent = textAdd
// textArea11.textContent = textAdd
// textArea12.textContent = textAdd
// textArea1.textContent = textAdd
// textArea2.textContent = textAdd
// textArea3.textContent = textAdd
// textArea4.textContent = textAdd
// textArea5.textContent = textAdd

function save(){
    
    localStorage.setItem('textLog', textLog)
    // when you save a blank and refresh it refreshes blank
    // need to grab and save text stored, if statement maybe?
}

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