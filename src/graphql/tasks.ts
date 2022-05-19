import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
  query {
    tasks(input: {}) {
      tags
      name
      pointEstimate
      dueDate
      id
      status
      assignee {
        fullName
        avatar
        id
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation createTask($task: CreateTaskInput!) {
    createTask(input: $task) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($task: DeleteTaskInput!) {
    deleteTask(input: $task) {
      id
    }
  }
`;
