import { taskDisplayer } from "./today";
import { mainDivs } from "./dom";
import { selectedP } from "./functions";



class Keeper{
    constructor(){
        this.taskArray = [];
        this.projectsArray = [defaultProj] ;

    }
    takeTask(task, project){
        this.taskArray.push(task) ;
        project.pushToArray(task) ;
    }
    takeProject(project){
        this.projectsArray.push (project) ;
    }

    loopThroughProjects() {


        const pList = document.getElementById('project-list');
        pList.innerHTML = '' ;

        this.projectsArray.forEach((project, index) => {
            const projectButton = document.createElement('button');  
            projectButton.classList = 'project-btn';
            projectButton.textContent = project.name;
            const theProject = project;
            pList.appendChild(projectButton) ;
            projectButton.addEventListener('click', () => {
                mainDivs.taskDisplay.innerHTML = '' ;
                project.pTaskArray.forEach((task, index) => {
                    taskDisplayer(task, theProject, index) ;
                })
            })
        })
    }


    loopThroughAll() {
        const pList = document.getElementById('project-list');
        pList.innerHTML = '';
    
        this.projectsArray.forEach((project, index) => {
            const projectButton = document.createElement('button');  
            projectButton.classList = 'project-btn';
            projectButton.textContent = project.name;
            const theProject = project;
            pList.appendChild(projectButton);
    
            // Event listener to display tasks of the clicked project
            projectButton.addEventListener('click', () => {
                mainDivs.taskDisplay.innerHTML = '';
                project.pTaskArray.forEach((task, index) => {
                    taskDisplayer(task, theProject, index);
                });
            });
    
            // Display tasks of the current project
            project.pTaskArray.forEach((task, index) => {
                taskDisplayer(task, theProject, index);
            });
        });
    }
    

    loopTaskCreation(div){

        this.projectsArray.forEach((project, index) => {
            const projectButton = document.createElement('button');
            projectButton.classList.add('project-button')
            const projectIndex = index;
            projectButton.textContent = project.name ;
            div.appendChild(projectButton) ;
            
            projectButton.addEventListener('click', () => {
                selectedP = this.projectsArray[projectIndex];
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




export const defaultProj = new Project('No project') ;
export const mainKeeper = new Keeper;



