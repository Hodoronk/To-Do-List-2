import { mainButtons, mainDivs, inputField, taskElements } from "./dom";
import { Task } from "./taskClass";
import {taskArray} from "./utility" ;

let prio;
const addTask = () => {
    mainDivs.center.innerHTML = '';
    taskArray.forEach((task, index) => {
        const taskIndex = index;
        displayTask(task.title, task.description, task.dueDate, task.priority, taskIndex) ;
    });

    taskInputField()
    inputField.create.addEventListener('click', createButton);
    inputField.cancel.addEventListener ('click', cancelButton);
}

const taskInputField = () => {
    inputField.container.appendChild (inputField.titlePara) ;
    inputField.container.appendChild (inputField.titleInput) ;
    inputField.container.appendChild (inputField.descrPara) ;
    inputField.container.appendChild (inputField.descrInput) ;
    inputField.container.appendChild (inputField.duePara) ;
    inputField.container.appendChild (inputField.dueInput) ;
    inputField.container.appendChild (inputField.priorityPara) ;
    inputField.container.appendChild (inputField.highP) ;
    inputField.container.appendChild (inputField.medP) ;
    inputField.container.appendChild (inputField.lowP) ;
    inputField.container.appendChild (inputField.create) ;
    inputField.container.appendChild (inputField.cancel) ;
    mainDivs.center.appendChild (inputField.container) ;


    inputField.highP.addEventListener('click', () => {
        priorityCheck();
        event.target.checked = true;
        prio = 'High Priority' ;
        console.log(prio);
    })

    inputField.medP.addEventListener('click', () => {
        priorityCheck();
        event.target.checked = true;
        prio = 'Normal Priority' ;
        console.log(prio);

    })

    inputField.lowP.addEventListener('click', () => {
        priorityCheck();
        event.target.checked = true;
        prio = 'Low Priority' ;
        console.log(prio);

    })
}



const createButton = () => {
    const title = inputField.titleInput.value;
    const descr = inputField.descrInput.value;
    const due = inputField.dueInput.value;
    const priority = prio;
    const newTask = new Task(title, descr, due, priority);
    taskArray.push(newTask) ; //new tasks get pushed into task array here
    const taskIndex = taskArray.length - 1;
    console.log(taskArray.length);

    mainDivs.center.removeChild (inputField.container) ;



    displayTask(title, descr, due, priority, taskIndex);
}

const displayTask = (title, description, dueDate, priority, index) => {
    const container = document.createElement('div');
    const titleP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const dueDateP = document.createElement('p') ; 
    const priorityP = document.createElement ('p') ;
    const complete = document.createElement('button');
    complete.textContent = 'Mark Complete' ;

    complete.addEventListener('click', () => {
        taskArray.splice(index, 1);
        console.log(taskArray.length);
        mainDivs.center.removeChild(container) ; 
    }) ;


    titleP.textContent = title;
    descriptionP.textContent = description;
    dueDateP.textContent = dueDate;
    priorityP.textContent = priority;

    container.appendChild(titleP) ; 
    container.appendChild(descriptionP) ; 
    container.appendChild(dueDateP) ; 
    container.appendChild(priorityP) ;
    container.appendChild(complete) ;
    console.log(taskArray) ;
    mainDivs.center.appendChild(container);

}
const cancelButton = () => {
    mainDivs.center.removeChild(inputField.container);
}


const priorityCheck = (input) => {
    inputField.highP.checked = false;
    inputField.medP.checked = false;
    inputField.lowP.checked = false;

}


export {
    addTask,
    displayTask,
    
}