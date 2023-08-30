import { mainButtons, mainDivs } from "./dom" ;
import {addTask} from "./addTask" ;

document.body.appendChild(mainDivs.leftDiv);
document.body.appendChild(mainDivs.center);

mainDivs.leftDiv.appendChild (mainButtons.home) ;
mainDivs.leftDiv.appendChild (mainButtons.today) ; 
mainDivs.leftDiv.appendChild (mainButtons.week) ; 
mainDivs.leftDiv.appendChild (mainButtons.addTask) ;

mainButtons.addTask.addEventListener('click', addTask)