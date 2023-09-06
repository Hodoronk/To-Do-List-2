import './style.css' ;
import { buttons } from './dom';
import {createTaskForm, createProject} from "./functions" ;
import { mainKeeper } from "./keeper" ;
import { todayHandler, weekHandler, monthHandler, yearHandler } from "./today" ;

mainKeeper.loopThroughProjects()
buttons.addTask.addEventListener('click', createTaskForm) ;
buttons.addProj.addEventListener('click', createProject) ;
buttons.allTime.addEventListener('click', () => {
    mainKeeper.listAllTasks();
}) ;
buttons.today.addEventListener ( 'click', todayHandler);
buttons.week.addEventListener ( 'click', weekHandler) ;
buttons.month.addEventListener ( 'click' , monthHandler) ;
buttons.year.addEventListener ( 'click' , yearHandler) ;

