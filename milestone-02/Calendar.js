let today = new Date();
let current_month = today.getMonth();
let current_year = today.getFullYear();
let current_day_number = today.getDate(); 

const buildCalendar = () => {
    days_of_week = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
    ];
    // * if feb, 28/29. if odd index has 31 days, else 30
    months_of_year = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ];
    // first day in week day: mon-sun
    let cur_day = new Date(current_year, current_month);
    let first_week_day = cur_day.getDate()
    let amount_days_in_month = current_month % 2 === 0 ? 30 : 31 ;
    let calendar = document.getElementById("calendar");
  
    let day_number = -7 + first_week_day; // day of month
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){

            // ? How do i declare w/o initializing?
            let day_item = document.createElement("div");
            let text = document.createTextNode("");
            day_item.classList.add("calendar_item");

            // > day of week label (mon-sun)
            if(i < 1){
                text = document.createTextNode(days_of_week[j]);
                day_item.classList.add("calendar_week_header");
            }
            // > dates numbers (1,2,...,31)
            else if(day_number <= amount_days_in_month){
                text = document.createTextNode(day_number.toString());
                day_item.classList.add("calendar_day");
            }

            day_item.appendChild(text);
            calendar.appendChild(day_item);  
    
            day_number++;
            //TODO: adding click function to every day
        }
    }
}
buildCalendar();
