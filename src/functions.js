import { mainDivs } from "./dom";
import { Task } from "./task";
import { mainKeeper, Project, defaultProj } from "./keeper";
import { buttons } from "./dom";


export let selectedP;
let priority;

export const createTaskForm = () => {
    const formField = document.createElement('div') ;
    formField.setAttribute('id', 'form-div') ;

    const taskTitle = document.createElement('input') ;
    taskTitle.setAttribute('type' , 'text') ;
    taskTitle.setAttribute('placeholder', 'Task Name') ;
    taskTitle.setAttribute('class', 'input-element') ;

    const taskDescr = document.createElement('input') ;
    taskDescr.setAttribute ('type', 'text') ;
    taskDescr.setAttribute ('placeholder', 'Task Description') ;
    taskDescr.setAttribute('class', 'input-element') ;

    const taskDue = document.createElement('input') ;
    taskDue.setAttribute ('type', 'date') ;
    taskDue.setAttribute('class', 'input-element') ;

    const priorityP = document.createElement('p');
    priorityP.textContent = "Priority: " ;
     
    const taskPrio1 = document.createElement('input') ;
    taskPrio1.setAttribute('type', 'checkbox') ;
    taskPrio1.setAttribute('class', 'priority-checkbox') ;
    taskPrio1.setAttribute('id', 'tp1') ;
    taskPrio1.addEventListener('click', () => {
        priorityHandler(taskPrio1, taskPrio2, taskPrio3) ;
        if(taskPrio1.checked === true){
            console.log(`High Priority`)
            return priority = 'High Priority' ;
        }
    })

    const taskPrio2 = document.createElement('input') ;
    taskPrio2.setAttribute('type', 'checkbox') ;
    taskPrio2.setAttribute('class', 'priority-checkbox')
    taskPrio2.setAttribute('id', 'tp2') ;
    taskPrio2.addEventListener('click', () => {
        priorityHandler(taskPrio1, taskPrio2, taskPrio3) ;
        if(taskPrio2.checked === true){
            console.log(`Normal Priority`);
            return priority = 'Medium Priority' ;
        }
    })

    const taskPrio3 = document.createElement('input') ;
    taskPrio3.setAttribute('type', 'checkbox') ;
    taskPrio3.setAttribute('class', 'priority-checkbox') ;
    taskPrio3.setAttribute('id', 'tp3')
    taskPrio3.addEventListener('click', () => {
        priorityHandler(taskPrio1, taskPrio2, taskPrio3) ;
        if(taskPrio3.checked === true){
            console.log('Low Priority') ;
            return priority = 'Low Priority' ;
        }
    })

    const priorityDiv = document.createElement('div') ;
    priorityDiv.setAttribute('id', 'priority-div') ;
    priorityDiv.appendChild(taskPrio1);
    priorityDiv.appendChild(taskPrio2);
    priorityDiv.appendChild(taskPrio3);






    const selectProjectP = document.createElement('p') ;
    selectProjectP.textContent = 'Select Project: ' ;
    const projectSelection = document.createElement('div') ;
    mainKeeper.loopTaskCreation(projectSelection) ;

   


    const submitTask = document.createElement('button') ;
    submitTask.type = 'submit';
    submitTask.textContent = 'Submit' ;
    submitTask.addEventListener('click', () => {
        createTask(taskTitle.value , taskDescr.value, taskDue.value, priority, selectedP) ;
        erase(mainDivs.mainScreen, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3)
    });

    const cancelTask = document.createElement('button') ;
    cancelTask.textContent = 'Cancel' ;

    cancelTask.addEventListener('click', () => {
        erase(mainDivs.mainScreen, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3)
    }) ;

    const submitCancelDiv = document.createElement('div') ;
    submitCancelDiv.id = 'submit-cancel-div' ;
    submitCancelDiv.appendChild(submitTask) ;
    submitCancelDiv.appendChild(cancelTask)




    formField.appendChild(taskTitle) ;
    formField.appendChild(taskDescr) ;
    formField.appendChild(taskDue) ;
    formField.appendChild(priorityP) ;
    formField.appendChild(priorityDiv) ;
    formField.appendChild(selectProjectP)
    formField.appendChild(projectSelection) ;
    formField.appendChild(submitCancelDiv) ;



    mainDivs.mainScreen.appendChild(formField) ;
    }


    const createTask = (title, description, due, priority, selected) => {
        const newTask = new Task(title, description, due, priority) ;
        mainKeeper.takeTask(newTask, selected) ;

        const doDiv = document.createElement('div') ;
        const doTitle = document.createElement('h4') ;
        doTitle.textContent = title;
        const doDesc = document.createElement('p') ;
        doDesc.textContent = `Description: ${description}`;
        const doDue = document.createElement('p') ;
        doDue.textContent = `Due date: ${due}` ;
        const doPriority = document.createElement('p') ;
        doPriority.textContent = priority ;
        const doProject = document.createElement('p') ;
        doProject.textContent = `Project: ${selected.name}` ;

        
        doDiv.appendChild( doTitle ) ;
        doDiv.appendChild( doDesc ) ;
        doDiv.appendChild( doDue ) ;
        doDiv.appendChild( doPriority ) ;
        doDiv.appendChild ( doProject ) ;

        mainDivs.mainScreen.appendChild(doDiv) ;










    }

    const erase = (parent, field, title, descr, due, prio1, prio2, prio3) => {
        parent.removeChild(field)
        title.value = '' ;
        descr.value = '' ;
        due.value = '' ;
        prio1.checked = false ;
        prio2.checked = false ;
        prio3.checked = false ;

    }


    export const createProject = () => {
        
        const projDiv = document.querySelector('#project-div') ;
        const pTitleInput = document.createElement('input') ;
        const xButton = document.createElement('button') ;
        const createProj = document.createElement('button') ;
        pTitleInput.value = '' ;
        createProj.textContent = 'Create' ;
        xButton.textContent = 'X' ;
        pTitleInput.setAttribute('id', 'pTitleInput') ;
        pTitleInput.type = 'text' ;
        pTitleInput.setAttribute('placeholder', 'Project Name') ;
        projDiv.appendChild(pTitleInput) ;
        projDiv.appendChild(xButton) ;
        projDiv.appendChild(createProj) ;
        projDiv.removeChild(buttons.addProj) ;


        xButton.addEventListener('click', () => {
            projDiv.removeChild(pTitleInput) ;
            projDiv.removeChild(xButton) ;
            projDiv.removeChild(createProj) ;
            projDiv.appendChild(buttons.addProj) ;
        }) ;

        createProj.addEventListener('click', () => {
            if(pTitleInput.value === '') {
                alert(`Project name can't be blank`);
                return;
            }
            const newProj = new Project(pTitleInput.value)
            mainKeeper.takeProject(newProj) ;
            mainKeeper.loopThroughProjects();
        


            projDiv.removeChild(pTitleInput) ;
            projDiv.removeChild(createProj) ;
            projDiv.removeChild(xButton) ;
            projDiv.appendChild(buttons.addProj) ;
            return newProj;
        }) ;

    }


    const priorityHandler = (high, med, low) => {
        high.checked = false;
        med.checked = false;
        low.checked = false;
        event.target.checked = true;
        return event.target.innerText;
    }
  