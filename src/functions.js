import { mainDivs } from "./dom";
import { Task } from "./task";

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

    const priority = document.createElement('p');
    priority.textContent = "Priority: " ;
     
    const taskPrio1 = document.createElement('input') ;
    taskPrio1.setAttribute('type', 'checkbox') ;
    taskPrio1.setAttribute('class', 'priority-checkbox') ;
    taskPrio1.setAttribute('id', 'tp1') ;

    const taskPrio2 = document.createElement('input') ;
    taskPrio2.setAttribute('type', 'checkbox') ;
    taskPrio2.setAttribute('class', 'priority-checkbox')
    taskPrio2.setAttribute('id', 'tp2') ;

    const taskPrio3 = document.createElement('input') ;
    taskPrio3.setAttribute('type', 'checkbox') ;
    taskPrio3.setAttribute('class', 'priority-checkbox') ;
    taskPrio3.setAttribute('id', 'tp3')

    const priorityDiv = document.createElement('div') ;
    priorityDiv.setAttribute('id', 'priority-div') ;
    priorityDiv.appendChild(taskPrio1);
    priorityDiv.appendChild(taskPrio2);
    priorityDiv.appendChild(taskPrio3);
    


    const submitTask = document.createElement('button') ;
    submitTask.type = 'submit';
    submitTask.textContent = 'Submit' ;
    submitTask.addEventListener('click', () => {
        createTask(taskTitle.value , taskDescr.value, taskDue.value) ;
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
    formField.appendChild(priority) ;
    formField.appendChild(priorityDiv) ;
    formField.appendChild(submitCancelDiv) ;



    mainDivs.mainScreen.appendChild(formField) ;
    }


    const createTask = (title, description, due) => {
        const newTask = new Task(title, description, due) ;
        console.log(newTask) ;
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