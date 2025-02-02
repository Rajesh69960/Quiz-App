# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 
- Quiz App
  -Home Page:
.Displays the title and topic of the quiz.
.Shows the time duration for the quiz.
.Includes a countdown timer that starts when the quiz begins.
.A Start button navigates to the quiz page.
  -Quiz Page:
.Displays one question at a time with multiple options.
 .When an option is clicked:
Correct answer → Background turns green.
Wrong answer → Background turns red, and the correct answer is displayed below.
.Includes Previous and Next buttons for navigation.
.The current question number and total questions are displayed in the center.
  -Score Page:
.After submission, users are navigated to the score page.
.The total score is calculated based on correct, wrong, and unattempted answers.
