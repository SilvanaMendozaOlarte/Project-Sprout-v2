Project Sprout Documentation:

In our project, we have 4 main tabs:

- Pomodoro
- Farm
- Shop
- Projects

This is a single-page website that works by dynamically showing and hiding div elements containing the web pages. ChangePage.js is responsible for handling the changing of pages by clicking buttons in the navbar.

The sign in and sign up pages are purely decorational and don't actually sign a user in.

The Pomodoro tab brings up the user's dashboard. This dashboard contains a timer, pomodoro streaks tracker, and calendar. Currently, the streaks tracker and calendar are decorational but the timer is fully functional! The user enters in a number of Pomodoro rounds, the amount of time they want to work and take a break each round in minutes and seconds, and then presses start. The input fields are then disabled and the timer counts down via the setInterval method. Each time the work timer finishes, it switches to the break timer and vice-versa until the number of rounds has reached 0. Once the work is finished on the final round, input is enabled and the interval is cleared.

The farm tab allows the user to plant tomatoes representing each Pomodoro they've completed. The user enters the number of the goal they completed and then the number of Pomodoros they completed while working towards this goal. After pressing the submit button, these tomatoes are planted on the farm.

The shop tab has items for sale for improving the farm. The items are not statically coded into the page, they are dynamically added from fakedata.json. ChangeShopCategory.js is responsible for dynamically rendering each of the shop sub-pages. Currently, the Home, Garden, Plants, and Avatar tabs work and have items. These items can't currently be purchased, but we're planning on adding this functionality in the future.

The Projects and Tasks page is our most developed page as it's connected to our pouchDB backend