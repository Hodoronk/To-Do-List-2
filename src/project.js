import { projCreation, mainDivs, projectCenterDisplay } from "./dom";
import { addTask } from "./addTask";

class Project{
    constructor(name){
        this.name = name ; 
    }
}

const projectListener = () => {
    mainDivs.center.innerHTML = '' ;
    mainDivs.projDiv.appendChild (projCreation.namePara ) ;
    mainDivs.projDiv.appendChild (projCreation.name ) ;
    mainDivs.projDiv.appendChild (projCreation.plusBtn ) ;
    mainDivs.projDiv.appendChild (projCreation.projCancel ) ;
    mainDivs.leftDiv.appendChild ( mainDivs.projDiv ) ;
    }

    projCreation.projCancel.addEventListener('click', () => {
        mainDivs.projDiv.innerHTML = '' ;
    }) ;

    projCreation.plusBtn.addEventListener('click', () => {
        mainDivs.projDiv.innerHTML = '' ;
        const name = projCreation.name.value ;
        projCreation.name.value = '' ;
        const newProject = new Project (name) ;
        const projectButton = document.createElement('button') ;
        projectButton.textContent = name;
        mainDivs.leftDiv.appendChild (projectButton) ;


        // Will possibly need to move this elsewhere: 
        projectButton.addEventListener('click', () =>{
            selectProj(name) ;
        })
    }) ;

    const selectProj = (name) => {
        mainDivs.center.innerHTML = '';
        projectCenterDisplay.h1.textContent = name
        mainDivs.center.appendChild(projectCenterDisplay.h1);
        addTask();

    }






export{
    projectListener,
}