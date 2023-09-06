import './style.css' ;
import { buttons } from './dom';
import {createTaskForm, createProject} from "./functions" ;

buttons.addTask.addEventListener('click', createTaskForm) ;
buttons.addProj.addEventListener('click', createProject) ;