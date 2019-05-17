import gql from 'graphql-tag'

const GET_TASKS = gql`
  {
    allTasks {
      id
      name
      isDone
    }
  }
`

const CREATE_TASK = gql`
  mutation($name: String!) {
    createTask(name: $name) {
      id
      name
      isDone
    }
  }
`

const UPDATE_TASK = gql`
  mutation($id: String!, $isDone: Boolean!) {
    updateTaskStatus(id: $id, isDone: $isDone) {
      id
      name
      isDone
    }
  }
`

const REMOVE_TASK = gql`
  mutation($id: String!) {
    deleteTask(id: $id)
  }
`

export {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
}
