import { addTask } from "./addTask";
import { mainButtons, mainDivs, projCreation, projectCreation, projectCenterDisplay } from "./dom"

class Project{
    constructor(name){
        this.name = name ;
        this.array = [] ;
    }
}





const projectListener = () => {
    projCreation.creationDiv.appendChild ( projCreation.namePara ) ;
    projCreation.creationDiv.appendChild ( projCreation.name ) ;
    projCreation.creationDiv.appendChild ( projCreation.plusBtn ) ;
    projCreation.creationDiv.appendChild ( projCreation.projCancel ) ;
    mainDivs.leftDiv.appendChild ( projCreation.creationDiv ) ;

    projCreation.projCancel.addEventListener( 'click', fieldRemove ) ;
    // projCreation.plusBtn.addEventListener ( 'click', create ) ;
}

const fieldRemove = () => {
    projCreation.creationDiv.innerHTML = '' ;
    projCreation.name.value = '' ;
}



export {
    projectListener
}