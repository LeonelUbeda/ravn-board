## Ravn React Code Challenge

#### Description:

This is a code challenge from Ravn.
The application is a kind of a board like Jira or Trello where you can create a task with status, points estimate, assignee, due date and a title.
Because it was developed in a very short time and with only one developer, not much attention was paid to the commit messages.

This project uses the following technologies/libraries:

- Chakra UI: is used to be able to develop more quickly with the pre-built UI components.
- Date-fns: easy date manipulation
- Apollo client: is used to fech, cache and modify data application from a graphql api
- React-icons: simple use of the most famous icon libraries

### Project Structure:

The components are organized following the guidelines of atomic design to be able to classify them according to their complexity. Also, the project contains folders for constants, graphql queries, typescript enums and utilities.

## Project screenshots

### Dashboard page

![Dashboard](https://i.imgur.com/6JTZUUR.png)

### Dashboard create new task modal

![Dashboard modal](https://i.imgur.com/u2kS2xp.png)

### Modal submenu example

![Dashboard modal menus](https://i.imgur.com/wDrqJVb.png)

### filled

![Dashboard modal full](https://i.imgur.com/wtf24j5.png)

### task created

![task created](https://i.imgur.com/Q6RIpcI.png)

### delete task option

![Delete task](https://i.imgur.com/d1WOFsj.png)

### Full demostration
[full demostration](https://user-images.githubusercontent.com/26783789/176605950-5a1c3ed0-f7d4-4d64-863d-e45f477294ec.webm)

## Installation and Setup Instructions

Dependencies installation:
`yarn install`

#### api token

Environment variable `VITE_APOLLO_TOKEN` is used for the GraphQL API token
you can create `.env` file and insert it there. Example:
`VITE_APOLLO_TOKEN=exampleapitoken`

To start dev server:  
`yarn dev`

To build project:
`yarn build`

To start build server:
`yarn preview`
