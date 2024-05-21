const response = await fetch('./fakedata.json');
const data = await response.json();

/* 
    gets task object:
        {
            "id": "1",
            "name": "task1",
            "project_id": "1",
            "due_date": "2019-01-01",
            "status": "done",
            "pomodoros": [
                1, 
                2, 
                3
            ]
        }
*/
function findTask(taskId){
    return data.tasks.find(task => task.id === taskId);
}

/* 
    gets pomodoro object:
        {
            "id": 1,
            "task_id": 1,
            "start_time": "2019-01-01T00:00:00",
            "end_time": "2019-01-01T00:25:00",
            "duration": 25
        }
*/
function findPomodoroById(pom_id){
    return data.pomodoros.find(pomodoro =>  pomodoro.id === pom_id);
}

function getTotalDurationOfTask(taskId) {
    // Find the task with the given ID
    const task = findTask(taskId);

    if(task){
        let duration_sum = 0;
        task.pomodoros.forEach(pomodoro_id => {
            let cur_pomodoro = findPomodoroById(pomodoro_id);
            if (cur_pomodoro){
                duration_sum += cur_pomodoro.duration;
            }
        });
        return duration_sum;
    }
   return null;
}

// date in this format "2019-01-01T00:00:00"
function getDurationByDay(date){
    let duration = 0;
    let pomodoros = data.pomodoros.forEach(p => {
        // > bars will show by start time
        if(p.start_time === date){
            duration+= getTotalDurationOfTask(p.taskId);
        }
    });
    // id
    
}
const buildStreaks = () =>{
    // TODO use relative height in css
    let week_days_durations = [];

    const pomodoros = getTotalDurationOfTask("1");
    // console.log(pomodoros); // yay it works
    
    //> for each pomodoro, get and store pomodoro duration
    
}

buildStreaks();