import { btnMaker, divMaker, paraMaker, inputMaker } from "./utility"

const mainButtons = {
    home: btnMaker ('Home') ,
    week: btnMaker ('This Week') ,
    today: btnMaker ('Today') ,
    addTask: btnMaker ('Add Task') ,
}

const mainDivs = {
    leftDiv: divMaker(),
    center: divMaker(),
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




export{
    mainButtons,
    mainDivs,
    inputField,
    taskElements,
}

