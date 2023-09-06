import { mainKeeper, Keeper, Projects, defaultProject,  } from "./keeper"
import { Task } from "./task"
const todayArray = [] ;
export const todayHandler = () => {
    mainKeeper.projectsArray.forEach((project, index) => {

    const today = new Date() ;
    project.pTaskArray.forEach((task, index) => {
        const theDate = new Date(task.getDue()) ;
        if (
            theDate.getDate() === today.getDate() &&
            theDate.getMonth() === today.getMonth() &&
            theDate.getFullYear() === today.getFullYear()
          ){
            todayArray.push(task) ;
          }
          console.log(`Task Title : ${task.title}`) ;
          console.log(`Task Description : ${task.description}`) ;
          console.log(`Task Due: ${task.getDue()}`) ;
          console.log(`Task Priority: ${task.priority}`) ;
          console.log(`Task Project: ${project.name}`) ;
    })
})



}