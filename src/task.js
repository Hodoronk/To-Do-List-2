export class Task{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description ;
        this.dueDate = dueDate ;
        this.priority = priority ;
        this.project = project ;
    }

    getProject(){
        return this.project.value;
    }
    getDue(){
        return this.dueDate;
    }
    
}