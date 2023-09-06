import { mainKeeper, Keeper, Projects, defaultProject,  } from "./keeper"
import { mainDivs } from "./dom";
import { Task } from "./task"
import isThisWeek from "date-fns/isThisWeek";
import isThisMonth from "date-fns/isThisMonth";
import isThisYear from "date-fns/isThisYear";



const todayArray = [] ;
export const todayHandler = () => {
    mainDivs.taskDisplay.innerHTML = '' ;
    mainKeeper.projectsArray.forEach((project, index) => {

    const today = new Date() ;
    project.pTaskArray.forEach((task, index) => {
        const theDate = new Date(task.getDue()) ;
        if (
            theDate.getDate() === today.getDate() &&
            theDate.getMonth() === today.getMonth() &&
            theDate.getFullYear() === today.getFullYear()
          ){
            taskDisplayer(task, project);
          }
        })
    })
}
//week
export const weekHandler = () => {
    mainDivs.taskDisplay.innerHTML = '' ;
    mainKeeper.projectsArray.forEach((project, index) => {
        project.pTaskArray.forEach((task, index) => {
            const theDate = new Date(task.getDue()) ;

            if(isThisWeek(theDate)){
                taskDisplayer (task, project) ;
            }
        })
    })
}

export const monthHandler = () => {
    mainDivs.taskDisplay.innerHTML = '' ;
    mainKeeper.projectsArray.forEach((project, index) => {
        project.pTaskArray.forEach((task, index) => {
            const theDate = new Date(task.getDue()) ;

            if(isThisMonth(theDate)){
                taskDisplayer (task, project) ;
            }
        })
    })
}

export const yearHandler = () => {
    mainDivs.taskDisplay.innerHTML = '' ;
    mainKeeper.projectsArray.forEach((project, index) => {
        project.pTaskArray.forEach((task, index) => {
            const theDate = new Date(task.getDue()) ;

            if(isThisYear(theDate)){
                taskDisplayer (task, project) ;
            }
        })
    })
}

























const taskDisplayer = (task, project) => {
    console.log(`Task Title : ${task.title}`) ;
    console.log(`Task Description : ${task.description}`) ;
    console.log(`Task Due: ${task.getDue()}`) ;
    console.log(`Task Priority: ${task.priority}`) ;
    console.log(`Task Project: ${project.name}`) ;

    const doDiv = document.createElement('div') ;
    doDiv.setAttribute('id', 'dolist-div');
    const doTitle = document.createElement('h4') ;
    doTitle.textContent = task.title;
    const doDesc = document.createElement('p') ;
    doDesc.textContent = `Description: ${task.description}`;
    const doDue = document.createElement('p') ;
    doDue.textContent = `Due date: ${task.getDue()}` ;
    const doPriority = document.createElement('p') ;
    doPriority.textContent = task.priority ;
    const doProject = document.createElement('p') ;
    doProject.textContent = `Project: ${project.name}` ;
    const deleteTask = document.createElement('button') ;
    deleteTask.textContent = 'Delete Task' ;
    const completeTask = document.createElement('button') ;
    completeTask.textContent = 'Mark Complete' ;
    const buttDiv = document.createElement('div') ;
    buttDiv.appendChild (deleteTask) ;
    buttDiv.appendChild (completeTask) ;
    deleteTask.addEventListener('click', () => {
        doDiv.innerHTML = '' ;
        //remove from array
    }) ;
    completeTask.addEventListener ( 'click' , () => {
        doDiv.innerHTML = '' ;
        //remove from array
    } )
    doDiv.appendChild ( doTitle ) ;
    doDiv.appendChild ( doDesc ) ;
    doDiv.appendChild ( doDue ) ;
    doDiv.appendChild ( doPriority ) ;
    doDiv.appendChild ( doProject ) ;
    doDiv.appendChild ( buttDiv )
    mainDivs.taskDisplay.appendChild(doDiv) ;
}


