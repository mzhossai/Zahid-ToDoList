import React, {useState} from 'react'


// Want an array of tasks
//      - each item is just a string



export default function List() {

    // this is a single array that react observes
    const [arrayTask, addArrayTask] = useState([]);
    // this is a single string that react observes
    const [task, newTask] = useState("");
    
    // give a name for the new task
    function handleNewTask(event) {
        newTask(event.target.value);    // changes what the task variabel holds
    }

    function addTask() {
        addArrayTask(prev => [...prev, task]);
        newTask("");
    }

    function enterKeyWasPressed(event) {
        {if (event.key === 'Enter') {
            addTask();
         };
        }
    }


    return(
        <>
        <div className="list-part">
            <p className='list-heading'>Today's Tasks</p>
            
            <div>
                <input 
                    className='input-bar'
                    type='text'
                    value={task}
                    onChange={handleNewTask}
                    onKeyDown={enterKeyWasPressed}
                    placeholder='Enter Task'
                    style={{textAlign: 'center'}}/>
            </div>

            <div className='div-list'>
                <ul className='actual-list'>
                    {arrayTask.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}