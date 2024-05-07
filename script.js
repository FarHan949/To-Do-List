const addTask = () =>{
    const input  = document.getElementById('input')

    const TaskList = document.getElementById('taskList')
    const newTask = document.createElement('li')
    TaskList.append(newTask)

    newTask.textContent = input.value
    input.value = ""
    DeleteTask(newTask)
}

const DeleteTask = (newTask)=>{
   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Delete'
   newTask.append(deleteBtn)
   deleteBtn.onclick = function () {
     newTask.remove()
   }
}