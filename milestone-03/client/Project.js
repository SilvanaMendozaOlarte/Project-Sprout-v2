let addProject = async(name) => {
    await fetch(`http://127.0.0.1:3260/addProject?name=${name}`, {
        method:'POST'
    });
}

let addTask = async(project, name, date) => {
    await fetch(`http://127.0.0.1:3260/addTask?project=${project}&name=${name}&due=${date}`, {
        method:'POST'
    });
}

let deleteProject = async(project) => {
    await fetch(`http://127.0.0.1:3260/removeProject?project=${project}`, {
        method:'DELETE'
    });
}

let deleteTask = async(project, task) => {
    await fetch(`http://127.0.0.1:3260/removeTask?project=${project}&task=${task}`, {
        method:'DELETE'
    });
}

let getProjects = async() => {
    let ret = await fetch(`http://127.0.0.1:3260/projects`);
    let ret2 = await ret.json();
    return ret2;
}

let render = async() => {
    let data = await getProjects();
    let collapsibleWrapper = document.getElementById("collapsibles");
    collapsibleWrapper.innerHTML = "";
    let projList = document.getElementById("projectList");
    let projRmList = document.getElementById("projectRemoveList");
    let taskRmProjectList = document.getElementById("taskRmProjectList");
    projList.innerHTML = "";
    projRmList.innerHTML = "";
    taskRmProjectList.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        let projectName = data[i].name;
        const newButton = document.createElement("button");
        newButton.setAttribute("type", "button");
        newButton.classList.add("collapsible");
        newButton.setAttribute("id", "button"+projectName);
        newButton.innerHTML = projectName;
        newButton.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
        const newDiv = document.createElement("div");
        newDiv.classList.add("content");
        newDiv.setAttribute("id", "div"+projectName);
        const newMenu = document.createElement("menu");
        newMenu.setAttribute("id", "menu"+projectName);
        newDiv.appendChild(newMenu);
        collapsibleWrapper.appendChild(newButton);
        collapsibleWrapper.appendChild(newDiv);
        let newProjListOption = document.createElement("option");
        newProjListOption.setAttribute("value", projectName);
        newProjListOption.setAttribute("id", "projlist"+projectName);
        newProjListOption.innerHTML = projectName;
        if (projectName != "Miscellaneous Tasks") {
            const newProjRmListOption = document.createElement("option");
            newProjRmListOption.setAttribute("value", projectName);
            newProjRmListOption.setAttribute("id", "rmList"+projectName);
            newProjRmListOption.innerHTML = projectName;
            projRmList.appendChild(newProjRmListOption);
        }
        const newTaskRmProjListOption = document.createElement("option");
        newTaskRmProjListOption.setAttribute("value", projectName);
        newTaskRmProjListOption.setAttribute("id", "taskrmprojlist"+projectName);
        newTaskRmProjListOption.innerHTML = projectName;
        taskRmProjectList.appendChild(newTaskRmProjListOption);
        projList.appendChild(newProjListOption);
        for(let j = 0; j < data[i].tasks.length; j++) {
            let taskName = data[i].tasks[j];
            const projMenu = document.getElementById("menu"+projectName);
            const newListElement = document.createElement("li");
            newListElement.setAttribute("id", projectName+"list"+taskName.name);
            newListElement.setAttribute("value", taskName.name);
            newListElement.innerHTML = `<input type="checkbox"> `+ taskName.name + " (Due Date: " + taskName.due + ")";
            projMenu.appendChild(newListElement);
            const newTaskRmTaskListOption = document.createElement("option");
            newTaskRmTaskListOption.setAttribute("value", taskName.name);
            newTaskRmTaskListOption.setAttribute("id", "taskrmtasklist"+taskName.name);
            newTaskRmTaskListOption.setAttribute("style", "display: none;");
            let trimProjectList = projectName.replace(/\s/g, '');
            newTaskRmTaskListOption.classList.add("taskrmproj"+trimProjectList);
            newTaskRmTaskListOption.innerHTML = taskName.name;
            const taskRmTaskList = document.getElementById("taskRmTaskList");
            taskRmTaskList.appendChild(newTaskRmTaskListOption);
        }
    }
}
let createProject = document.getElementById("createProject");
let createTask = document.getElementById("createTask");
let removeProject = document.getElementById("removeProject");
let chooseTask = document.getElementById("chooseTask");
// Creates a new project, clears the text box in the "Create New Project" 
// popup, and closes the popup
createProject.addEventListener("click", async function () {
    let projName = document.getElementById("projectName");
    let checkProjectName = projName.value.trim();
    if (checkProjectName.length != 0 && !document.getElementById("button"+projName.value)) {
        await addProject(projName.value);
        await render();
    }
    projName.value = "";
});
// Creates a new task, clears the text box in the "Create New Task" popup, 
// and closes the popup
createTask.addEventListener("click", async function () {
    let tskName = document.getElementById("taskName");
    let checkTaskName = tskName.value.trim();
    let taskDueDate = document.getElementById("dueDate");
    if (checkTaskName.length != 0 && !document.getElementById(projectList.value+"list"+tskName.value) && taskDueDate.value != "") {
        await addTask(projectList.value, tskName.value, taskDueDate.value);
        await render();
    }
    tskName.value = "";
});
// Deletes the chosen project and closes the "Delete Project" popup
removeProject.addEventListener("click", async function () {
    await deleteProject(projectRemoveList.value);
    await render();
});
chooseTask.addEventListener("click", async function () {
    await deleteTask(taskRmProjectList.value, taskRmTaskList.value);
    await render();
});

render()