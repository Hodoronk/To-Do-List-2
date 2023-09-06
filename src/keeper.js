
import { mainDivs } from "./dom";
import { selectedP } from "./functions";
import { Task } from "./task";


class Keeper{
    constructor(){
        this.taskArray = [];
        this.projectsArray = [] ;

    }
    takeTask(task, project){
        this.taskArray.push(task) ;
        project.pushToArray(task) ;
    }
    takeProject(project){
        this.projectsArray.push (project) ;
        console.log(this.projectsArray) ;
        console.log(`takeProject projects : ${this.projectsArray}`)
    }

    loopThroughProjects(){
        const pList = document.getElementById('project-list') ;
        pList.innerHTML = '' ;

        this.projectsArray.forEach((project, index) => {
            const projectButton = document.createElement('button');
            projectButton.textContent = project.name ;
            pList.appendChild(projectButton) ;

            projectButton.addEventListener('click', () => {
                mainDivs.taskDisplay.innerHTML = '' ;
                project.populate();



            })
        })
    }

    loopTaskCreation(div){

        this.projectsArray.forEach((project, index) => {
            const projectButton = document.createElement('button');
            const projectIndex = index;
            projectButton.textContent = project.name ;
            div.appendChild(projectButton) ;
            
            projectButton.addEventListener('click', () => {
                selectedP = this.projectsArray[projectIndex];
                console.log(`SELECTED P NAME : ${selectedP.name}`) ;
                return selectedP;
            })
        })

    }

    listAllTasks(){
        mainDivs.taskDisplay.innerHTML = '' ;
        this.projectsArray.forEach((project , index) => {
            project.populate();
        })
    }
}


export class Project{
    constructor(name){
        this.name = name;
        this.pTaskArray = [] ;
    }
    pushToArray(task){
        this.pTaskArray.push(task) ;
    }
    populate(){

        this.pTaskArray.forEach((task, index) => {
            const doDiv = document.createElement('div') ;
            const doTitle = document.createElement('h4') ;
            doTitle.textContent = task.title;
            const doDesc = document.createElement('p') ;
            doDesc.textContent = `Description: ${task.description}`;
            const doDue = document.createElement('p') ;
            doDue.textContent = `Due date: ${task.due}` ;
            const doPriority = document.createElement('p') ;
            doPriority.textContent = task.priority ;
            const doProject = document.createElement('p') ;
            doProject.textContent = `Project: ${this.name}` ;
            const deleteTask = document.createElement('button') ;
            deleteTask.textContent = 'Delete Task' ;
            const completeTask = document.createElement('button') ;
            completeTask.textContent = 'Mark Complete' ;

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
            doDiv.appendChild ( deleteTask ) ;
            doDiv.appendChild ( completeTask ) ;
    
            mainDivs.taskDisplay.appendChild(doDiv) ;
    
        })

    }
}





export const defaultProj = new Project() ;


export const mainKeeper = new Keeper;
