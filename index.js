document.addEventListener('DOMContentLoaded', function(){
    const taskInputEl = document.getElementById('taskInput');
    const addTaskBtnEl = document.getElementById('addTask-btn');
    const taskListEl = document.getElementById('taskList');
    const dateEl = document.getElementById('date');

    let taskList = []; 
    addTaskBtnEl.addEventListener('click' , function(){
        let taskInputValue = taskInputEl.value.trim();
        let dateInputValue = dateEl.value.trim();    
        if (taskInputValue !== ' '){
           taskList.push({ task: taskInputValue, date: dateInputValue ,status:false});
           displayList();
           taskInputEl.value = '';
        }
    })

  

    function displayList(){
       taskListEl.innerHTML = '';

        for(let i = 0; i < taskList.length ; i++){
          console.log(`${ i + 1 }. ${taskList[i]}`)
          const newTask = document.createElement('li');
          newTask.textContent = `${ i + 1 }. ${taskList[i].task} ${taskList[i].date}` ; 
          taskListEl.appendChild(newTask);


          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
           deleteBtn.classList.add('delete-btn');
           deleteBtn.addEventListener('click', function(){
           deleteTask(i);
    });

    newTask.appendChild(deleteBtn);
    taskListEl.appendChild(newTask);
}
       
    }
function deleteTask(index){
    taskList.splice(index,1)
    displayList()
}

});

   
 





    
