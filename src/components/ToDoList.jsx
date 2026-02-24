import ToDoItem from "./ToDoItem";

function ToDoList({tasks, deleteTask, 
    editTask,toggleComplete}){
     
    return(
        <>
        <div className="to-do">
         {tasks.map(task => (
            <ToDoItem 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
            />
         ))}
         
        </div>
        </>
    );
}
export default ToDoList;