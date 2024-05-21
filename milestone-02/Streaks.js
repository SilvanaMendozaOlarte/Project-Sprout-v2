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
    return duration;    
}

days_of_week = [
    {
        day_of_week: "Mon",
        Date: "2019-01-01T00:00:00", // ? TODO how the heck do I work with time in js?
        Duration : getDurationByDay("2019-01-01T00:00:00")
        // Duration : getDurationByDay(days_of_week[0].Date) // TODO get date
    },
    {
        day_of_week: "Tue",
        Date: "2019-01-01T00:00:00", 
        Duration : getDurationByDay("2019-01-01T00:00:00")
    },
    {
        day_of_week: "Wed",
        Date: "2019-01-01T00:00:00", 
        Duration : getDurationByDay("2019-01-01T00:00:00")
    },
    {
        day_of_week: "Thu",
        Date: "2019-01-01T00:00:00", 
        Duration: getDurationByDay("2019-01-01T00:00:00")
    },
    {
        day_of_week: "Fri",
        Date: "2019-01-01T00:00:00", 
        Duration: getDurationByDay("2019-01-01T00:00:00")
    },
    {
        day_of_week: "Sat",
        Date: "2019-01-01T00:00:00", 
        Duration: getDurationByDay("2019-01-01T00:00:00")
    },
    {
        day_of_week: "Sun",
        Date: "2019-01-01T00:00:00", 
        Duration: getDurationByDay("2019-01-01T00:00:00")
    },
];

const buildStreaks = () =>{
    // TODO use relative height in css
    let week_days_durations = [];
    days_of_week.forEach(day => week_days_durations.push(day.Duration));
    //> for each pomodoro, get and store pomodoro duration
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: '# of Hours',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
}

buildStreaks();