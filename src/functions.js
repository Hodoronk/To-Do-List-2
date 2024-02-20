import { mainDivs, buttons, images } from './dom';
import { Task } from './task';
import { mainKeeper, Project, defaultProj } from './keeper';

export const selectedP = defaultProj;
let priority;

export const createTaskForm = () => {
  const formField = document.createElement('div');
  formField.setAttribute('id', 'form-div');
  
  const formHeader = document.createElement('h3')
  formHeader.textContent = 'Enter a new task'

  const taskTitle = document.createElement('input');
  taskTitle.setAttribute('type', 'text');
  taskTitle.setAttribute('placeholder', 'Task Name');
  taskTitle.setAttribute('class', 'input-element');

  const taskDescr = document.createElement('input');
  taskDescr.setAttribute('type', 'text');
  taskDescr.setAttribute('placeholder', 'Task Description');
  taskDescr.setAttribute('class', 'input-element');
  taskDescr.setAttribute('required', '')

  const taskDue = document.createElement('input');
  taskDue.setAttribute('type', 'date');
  taskDue.setAttribute('class', 'input-element');

  const priorityP = document.createElement('p');
  priorityP.textContent = 'Priority: ';

  const taskPrio1 = document.createElement('input');
  taskPrio1.setAttribute('type', 'checkbox');
  taskPrio1.setAttribute('class', 'priority-checkbox');
  taskPrio1.setAttribute('id', 'tp1');
  taskPrio1.addEventListener('click', () => {
    priorityHandler(taskPrio1, taskPrio2, taskPrio3);
    
    if (taskPrio1.checked === true) {
      return priority = 'High Priority';
    }
  });

  const taskPrio2 = document.createElement('input');
  taskPrio2.setAttribute('type', 'checkbox');
  taskPrio2.setAttribute('class', 'priority-checkbox');
  taskPrio2.setAttribute('id', 'tp2');
  taskPrio2.addEventListener('click', () => {
    priorityHandler(taskPrio1, taskPrio2, taskPrio3);
    if (taskPrio2.checked === true) {
      return priority = 'Medium Priority';
    }
  });

  const taskPrio3 = document.createElement('input');
  taskPrio3.setAttribute('type', 'checkbox');
  taskPrio3.setAttribute('class', 'priority-checkbox');
  taskPrio3.setAttribute('id', 'tp3');
  taskPrio3.addEventListener('click', () => {
    priorityHandler(taskPrio1, taskPrio2, taskPrio3);
    if (taskPrio3.checked === true) {
      return priority = 'Low Priority';
    }
  });

  const priorityDiv = document.createElement('div');
  priorityDiv.setAttribute('id', 'priority-div');
  priorityDiv.appendChild(taskPrio1);
  priorityDiv.appendChild(taskPrio2);
  priorityDiv.appendChild(taskPrio3);

  const selectProjectP = document.createElement('p');
  selectProjectP.textContent = 'Select Project: ';
  const projectSelection = document.createElement('div');
  mainKeeper.loopTaskCreation(projectSelection);

  const submitTask = document.createElement('button');
  submitTask.setAttribute('id', 'form-submit')
  submitTask.type = 'submit';
  submitTask.textContent = 'Submit';

  
  submitTask.addEventListener('click', () => {
    formField.classList.toggle('visible');
    setTimeout(() => {
      createTask(taskTitle.value, taskDescr.value, taskDue.value, priority, selectedP);
      erase(mainDivs.taskInputArea, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3);
      mainDivs.taskDisplay.innerHTML='';
      mainKeeper.loopThroughAll();
    }, 100); 

  });

  const cancelTask = document.createElement('button');
  cancelTask.setAttribute('id', 'task-form-cancel')
  cancelTask.textContent="Cancel";

  cancelTask.addEventListener('click', () => {
    formField.classList.toggle('visible');
    setTimeout(() => {
      erase(mainDivs.taskInputArea, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3);
    },500)
  });
  
  const submitCancelDiv = document.createElement('div');
  submitCancelDiv.id = 'submit-cancel-div'; 
  submitCancelDiv.appendChild(submitTask);
  submitCancelDiv.appendChild(cancelTask);
  
  formField.appendChild(formHeader);
  formField.appendChild(taskTitle);
  formField.appendChild(taskDescr);
  formField.appendChild(taskDue);
  formField.appendChild(priorityP);
  formField.appendChild(priorityDiv);
  formField.appendChild(selectProjectP);
  formField.appendChild(projectSelection);
  formField.appendChild(submitCancelDiv);
  
  mainDivs.taskInputArea.appendChild(formField);
  setTimeout(() => {
    formField.classList.toggle('visible');
  }, 0); 

};

const createTask = (title, description, due, priority, selected) => {
  const newTask = new Task(title, description, due, priority, selected);
  mainKeeper.takeTask(newTask, selected);

};

const erase = (parent, field, title, descr, due, prio1, prio2, prio3) => {
  parent.removeChild(field);
  title.value = '';
  descr.value = '';
  due.value = '';
  prio1.checked = false;
  prio2.checked = false;
  prio3.checked = false;
};

export const createProject = () => {
  const projDiv = document.querySelector('#project-div');
  const pTitleInput = document.createElement('input');
  const xButton = document.createElement('button');
  const createProj = document.createElement('button');
  pTitleInput.value = '';
  createProj.textContent = 'Create';
  xButton.textContent = 'X';
  createProj.setAttribute('id', 'create-proj-btn');
  xButton.setAttribute('id', 'proj-x-button');
  
  pTitleInput.setAttribute('id', 'pTitleInput');
  pTitleInput.type = 'text';
  pTitleInput.setAttribute('placeholder', 'Project Name');
  projDiv.appendChild(pTitleInput);
  projDiv.appendChild(xButton);
  projDiv.appendChild(createProj);
  projDiv.removeChild(buttons.addProj);

  xButton.addEventListener('click', () => {
    projDiv.removeChild(pTitleInput);
    projDiv.removeChild(xButton);
    projDiv.removeChild(createProj);
    projDiv.appendChild(buttons.addProj);
  });

  createProj.addEventListener('click', () => {
    if (pTitleInput.value === '') {
      alert('Project name can\'t be blank');
      return;
    }
    const newProj = new Project(pTitleInput.value);
    mainKeeper.takeProject(newProj);
    mainKeeper.loopThroughProjects();

    projDiv.removeChild(pTitleInput);
    projDiv.removeChild(createProj);
    projDiv.removeChild(xButton);
    projDiv.appendChild(buttons.addProj);
    return newProj;
  });
};

const priorityHandler = (high, med, low) => {
  high.checked = false;
  med.checked = false;
  low.checked = false;
  event.target.checked = true;
  return event.target.innerText;
};


const sidebarButton = document.querySelector('#mobile-sidebar-reveal');
sidebarButton.addEventListener('click', () => {
    mainDivs.sidebar.classList.toggle('invisible');
    setTimeout(() => {
      mainDivs.sidebar.classList.toggle('display-none')
    }, 200)
})