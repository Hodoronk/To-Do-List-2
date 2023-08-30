import { mainDivs } from "./dom";
import { taskArray } from "./utility" ;
import { displayTask } from "./addTask";



const todayChecker = () => {
    mainDivs.center.innerHTML = '' ;
    taskArray.forEach((task , index ) => {
        const taskIndex = index;
        const dateFormat = new Date(task.dueDate) ;
        if(isToday(dateFormat)){

            displayTask(task.title, task.description, task.dueDate, task.priority, taskIndex) ;

        }
    })
}




const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}








export {
    todayChecker,
}