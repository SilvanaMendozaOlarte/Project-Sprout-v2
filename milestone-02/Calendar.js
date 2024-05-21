const buildCalendar = () => {
    // > placeholder, should be dynamic
    numRows = 8;
    days_of_week = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
    ];
    calendar = document.getElementById("calendar");
  
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){

            // ? How do i declare w/o initializing?
            let day_item = document.createElement("div");
            let text = document.createTextNode("")

            // > creates a th if on first row, else creates a td
            if(i < 1){
                day_item = document.createElement("div");
                text = document.createTextNode(days_of_week[j]);
            }
            else{
                day_item = document.createElement("div");
                // > placeholder, will display day number, will do l8r
                text = document.createTextNode("0");
            }

            day_item.appendChild(text);
            day_item.classList.add("calendar_day");
            calendar.appendChild(day_item);  
    
            //! adding click function to every day
            //square.addEventListener("click", onclick(i,j));

        }
    }
}
buildCalendar();
