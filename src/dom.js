import { btnMaker, divMaker, paraMaker, inputMaker } from "./utility"

const mainButtons = {
    home: btnMaker ( 'Home' ) ,
    week: btnMaker ( 'This Week' ) ,
    today: btnMaker ( 'Today' ) ,
    addTask: btnMaker ( 'Add Task' ) ,
    projects: paraMaker ( 'Projects' ) ,
    addProject: btnMaker ( 'Create Project' ) ,
    
}

const mainDivs = {
    leftDiv: divMaker(),
    center: divMaker(),
    projDiv: divMaker(),
}

const inputField = {
    container: divMaker(),

    titlePara: paraMaker ('Name your task: '),
    titleInput: inputMaker ('text'),

    descrPara: paraMaker('Describe your task: '), 
    descrInput: inputMaker ('text'),

    duePara: paraMaker ('Set your due date'),
    dueInput: inputMaker ('date'),

    priorityPara: paraMaker ('Set priority: ') ,
    highP: inputMaker ('checkbox') ,
    medP: inputMaker ('checkbox') ,
    lowP: inputMaker ('checkbox') ,

    create: btnMaker ('Create Task'),
    cancel: btnMaker ('Cancel'),
}

const taskElements = {
    container : divMaker() ,
    title : paraMaker () ,
    descr : paraMaker () ,
    due : paraMaker () ,
    priority : paraMaker () ,
    markComplete : btnMaker ('Mark Complete') ,
    cancel: btnMaker ('Cancel') ,
}

const projCreation = {
    createProj: btnMaker('New project') ,
    namePara: paraMaker('Name your project: ') ,
    name : inputMaker('text') ,
    plusBtn: btnMaker('+') ,
    projCancel: btnMaker ('Cancel') ,
    creationDiv: divMaker(),
}

const projectCenterDisplay = {
    h1 : document.createElement('h1'),
    addTask: btnMaker('Add Task'),
}



export{
    mainButtons,
    mainDivs,
    inputField,
    taskElements,
    projCreation,
    projectCenterDisplay,
}

