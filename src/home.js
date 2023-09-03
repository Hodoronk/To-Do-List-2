import { taskArray } from "./utility";
import { mainButtons, mainDivs, projCreation } from "./dom";
import { displayTask } from "./addTask";


const homeListener = () => {
    if(!mainDivs.leftDiv.contains(mainButtons.addTask)){
        mainDivs.leftDiv.insertBefore(mainButtons.addTask, mainButtons.projects) ;
    }

    
        mainDivs.center.innerHTML = '';


    taskArray.forEach((task, index) => {
        const taskIndex = index;
        displayTask(task.title, task.description, task.dueDate, task.priority, taskIndex) ;
    });
}

export {
    homeListener,
}



