
import { selectedP } from "./functions";


class Keeper{
    constructor(){
        this.taskArray = [];
        this.projectsArray = [] ;

    }
    takeTask(task, project){
        this.taskArray.push(task) ;
        project.pushToArray(task) ;
        
        console.log(`takeTask project : ${project.name}`) ;
        console.log(`takeTask tasks: ${this.taskArray}`) ;
        console.log(`ptask: ${project.pTaskArray}`) ;

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
}


export class Project{
    constructor(name){
        this.name = name;
        this.pTaskArray = [] ;
    }
    pushToArray(task){
        this.pTaskArray.push(task) ;
    }
}


export const defaultProj = new Project() ;


export const mainKeeper = new Keeper;