import { useState, useReducer } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';


export default function App() {
  
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);


  function handleAddTask(text: string) {

    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
    
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      taskId: taskId

    })
  }

  
  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        />
      
    </div>
  )
}

function taskReducer(tasks, action){

  if(action.type === 'added'){
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  }

  else if( action.type === 'changed'){
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  }

  else if( action.type === 'deleted'){

    return tasks.filter((t) => t.id !== action.id)

  }

  else{
    throw Error('Unknown action: ' + action.type);
    
  }

}
export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];


