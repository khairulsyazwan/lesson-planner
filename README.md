# Lesson Planner

Project is hosted [here](https://github.com/facebook/create-react-app).

## User Stories

A teacher needs a web application for making lesson plans. The web application must
enable the teacher to:

- Add a lesson plan
- List lesson plans
  To add a lesson plan must have the following details:
- Subject name (textfield, required)
- Date (datepicker, required)
- Lesson content (textarea, required)
- Draft (checkbox)
  A lesson plan list should:
- Display subject name
- Display planned lesson date
- Can be sorted by subject name
- Can be sorted by planned lesson date
  Technical requirements:

1. Html
2. Javascript/Typescript
3. A frontend framework is not required (but is nice to have)
4. Basic styling via css
5. Data can be stored in memory (or in browser)

## Breakdown

Technologies used:

1. React.js
2. CSS
3. Bootstrap
4. Moment.js
5. uuid
6. Sweetalert

Overview

- Data is stored in local storage, as user login is not needed.
- Ability to sort by subject and date in ascending and descending order.
- Lessons are able to be saved to drafts when needed.

Improvements

- Implemented CRUD functionality
