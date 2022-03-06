var tasks=[];
var list=document.querySelector('#tasks-container ul');
function deleteTask(taskid){
    let size=tasks.length;
    tasks=tasks.filter(function(task){
        return task.id!=taskid;
    });
    if(size==tasks.length){
        showNotification('cannot delete this task');
        return;
    }
    renderList();
    showNotification('Succesfully deleted');
}
function toggle_task_status(task_id){
    var holder=tasks.filter(function(task){
        return task.id==task_id;
    });
    holder[0].done=!holder[0].done;
    renderList();
}
function handle_clicks(event){
    if(event.target.className=='delete'){
        const taskid=event.target.dataset.id;
         deleteTask(taskid);
    }
    else if(event.target.className=='custom-checkbox'){
        const taskid=event.target.id;
        toggle_task_status(taskid);
    }
}
const input=document.querySelector('#tasks-container input');
function addtask_to_Dom(task){
    const li=document.createElement('li');
    li.innerHTML=`<input type="checkbox" id="${task.id}" ${task.done ? 'checked':''} class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>    
    <img src="images/Capture.PNG"class="delete" data-id="${task.id}"></i>`;
    list.append(li);    
}
function showNotification(text){
    alert(text);
}
function renderList(){
    list.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        addtask_to_Dom(tasks[i]);
    }
}
function take_Input(event){
    if(event.key=='Enter'){
        const text=event.target.value;
        if(!text){
            showNotification('Invalid Task');
            return;
        }
        const task={
            text,
            id: Date.now().toString(),
            done: false
        };
        tasks.push(task);
        renderList();
        showNotification('Task added');
    }
}
document.addEventListener('click',handle_clicks);
document.addEventListener('keyup',take_Input);
console.log(x);