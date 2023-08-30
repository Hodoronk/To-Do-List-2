import { projCreation, mainDivs } from "./dom";

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
        const newProject = new Project (name) ;
        const projectButton = document.createElement('button') ;
        projectButton.textContent = name;
        mainDivs.leftDiv.appendChild (projectButton) ;
    }) ;







export{
    projectListener,
}