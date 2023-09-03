import { mainButtons, mainDivs } from "./dom" ;
import {addTask} from "./addTask" ;
import { todayChecker } from "./today" ;
import { homeListener } from "./home" ;
import { taskArray } from "./utility" ;
import { projectListener } from "./project" ;


document.body.appendChild(mainDivs.leftDiv);
document.body.appendChild(mainDivs.center);

mainDivs.leftDiv.appendChild ( mainButtons.home ) ;
mainDivs.leftDiv.appendChild ( mainButtons.today ) ; 
mainDivs.leftDiv.appendChild ( mainButtons.week ) ; 
mainDivs.leftDiv.appendChild ( mainButtons.addTask ) ;
mainDivs.leftDiv.appendChild ( mainButtons.projects ) ;
mainDivs.leftDiv.appendChild ( mainButtons.addProject )


mainButtons.addTask.addEventListener('click', () => {
    addTask(taskArray);
})
mainButtons.today.addEventListener('click' , todayChecker)
mainButtons.home.addEventListener('click' , homeListener) ;
mainButtons.addProject.addEventListener ( 'click' , projectListener)


