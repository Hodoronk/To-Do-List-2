import './style.css' ;
import { buttons } from './dom';
import {createTaskForm, createProject} from "./functions" ;
import { mainKeeper } from "./keeper" ;

buttons.addTask.addEventListener('click', createTaskForm) ;
buttons.addProj.addEventListener('click', createProject) ;
buttons.allTime.addEventListener('click', () => {
    mainKeeper.listAllTasks();
}) ;