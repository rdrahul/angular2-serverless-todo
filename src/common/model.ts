//Command to be added to the webtask
export interface AddTaskCommand{
    content : string
}

//the model for todo tasks
export interface Task{
    content : string,
    created : number
}