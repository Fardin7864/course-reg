# Online Course Registration System

### Live-site: https://online-courses-by-fardin-hasan.netlify.app

## Features

### 1. Course Catalog

The Online Course Registration System provides a comprehensive course catalog that lists all available courses. Students can browse through the catalog, view course details, including title, description, price, and credit hours. This feature ensures that students have access to all the information they need to make informed course selections.

### 2. Shopping Cart

Users can add courses to their shopping cart for registration. The shopping cart keeps track of the selected courses, displaying the course titles, total credit hours, and total price. It also ensures that students do not exceed their maximum credit limit when selecting courses.

### 3. Duplicate Course Handling

The system includes functionality to prevent duplicate course selections. When a user attempts to add a course that is already in their shopping cart, the system alerts the user, ensuring that they do not accidentally register for the same course multiple times.

## State Management

In this project, state management is primarily handled using React's state and hooks, particularly the `useState` and `useEffect` hooks. Here's how state is managed in the project:

- **Courses and Cart Courses:** Two state variables, `courses` and `cartCourse`, are used to manage the course data and the user's selected courses, respectively. The `courses` state is initially populated with data fetched from 'CourseData.json' using the `useEffect` hook, ensuring that the component re-renders when the data is available. The `cartCourse` state is updated when a user selects or removes a course.

- **Total Credit and Credit Validation:** The project maintains state variables for calculating and displaying the total credits selected by the user (`TotalCredit`) and the remaining credit hours (`TotalCreditRmain`). These state variables are updated as courses are added or removed from the shopping cart, and credit validation is performed to prevent users from exceeding a predefined credit limit.

- **Alerts:** The project uses `alert` to display messages to the user in case of duplicate course selection or exceeding the credit limit. The state variable `isDuplicate` is used to determine if a course is a duplicate in the shopping cart, and alerts are shown accordingly.

- **Summary:** By using React's state management, the project ensures that the user interface remains synchronized with the data and user actions. It also provides a clear structure for handling course selection, credit validation, and preventing duplicates, making it a robust and user-friendly online course registration system.