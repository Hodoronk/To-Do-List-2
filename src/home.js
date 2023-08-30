import { taskArray } from "./utility";
import { mainDivs } from "./dom";
import { displayTask } from "./addTask";


const homeListener = () => {
    mainDivs.center.innerHTML = '';
    taskArray.forEach((task, index) => {
        const taskIndex = index;
        displayTask(task.title, task.description, task.dueDate, task.priority, taskIndex) ;
    });
}

export {
    homeListener,
}