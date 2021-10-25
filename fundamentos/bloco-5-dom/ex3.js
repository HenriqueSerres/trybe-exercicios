function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//ex-1
function creatDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysOfMonthList = document.querySelector('#days');

  for(let index= 0; index < dezDaysList.length; index +=1){
    const dias = dezDaysList[index];
    const daysList = document.createElement('li');

    if (daysList === 24 || days === 31){
      daysList.innerHTML = dias;
      daysList.className = "day holiday";
      daysOfMonthList.appendChild(daysList);
    } else if (daysList === 4 | daysList === 11 | daysList === 18){
      daysList.innerHTML = dias;
      daysList.className = "day friday";
      daysOfMonthList.appendChild(daysList);   
    } else if (daysList === 25){
      daysList.innerHTML = dias;
      daysList.className = "day holiday friday";
      daysOfMonthList.appendChild(daysList);
    } else {
      daysList.innerHTML = dias;
      daysList.className = "day";
      daysOfMonthList.appendChild(daysList);
    }
  };
};
creatDaysOfMonth();
//ex-2
let littleVacation = document.querySelector(".buttons-container");
  let vacationButton = document.createElement('button');
  let vacatinButtonID = "btn-holiday";


function btn(string){
  
  vacationButton.innerHTML = string;
  vacationButton.id = vacatinButtonID;
  littleVacation.appendChild(vacationButton);
};
btn('Feriados');

//ex-3
function holidaysApears(){
let theVacationButton = document.querySelector('#btn-holiday');
let theHolidays = document.querySelectorAll('.holiday');
let backgroundColor = "rgb(238,238,238)";
let returnColor = "white";

theVacationButton.addEventListener('click', function(event){
  for (let index = 0; index < theHolidays.length; index++) {

    if (theHolidays[index].style.backgroundColor === returnColor) {
      theHolidays[index].style.backgroundColor = backgroundColor;
    } else {
      theHolidays[index].style.backgroundColor = returnColor;
    }   
    
  }
})
};
holidaysApears();

//ex-4
function creatFridayButton(buttunName){
  let buttunContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButttonID = 'btn-friday';

  newButton.innerHTML = buttunName;
  newButton.id = newButttonID;
  buttunContainer.appendChild(newButton);
}
creatFridayButton('Sexta-feira');

 //ex -5
function fridaysContent(fridayText){
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'Sextou o/!';

  fridayButton.addEventListener('click', function(){
    for (let index = 0; index < fridays.length; index++) {
      if (fridays[index].innerHTML !== newFridayText){
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridayText[index];
      }
      
    }
  })
}
let fridayDays = [4,11,18,25];
fridaysContent(fridayDays);

//ex-6
function dayMouseOver() {
  let day = document.querySelector('#days');

  day.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
 function dayMouseOut(){
  let day = document.querySelector('#days');

  day.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
 };
 dayMouseOver();
 dayMouseOut();

 //ex-7
 function task2Do(task){
   let taskContainer = document.querySelector('.my-tasks')
   let taskName = document.createElement('span');

   taskName.innerHTML = task;
   taskContainer.appendChild(taskName);
 };
 task2Do('Projeto:');

 //ex-8
 
