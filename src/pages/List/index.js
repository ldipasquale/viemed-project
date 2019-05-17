import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { GET_TASKS, CREATE_TASK, UPDATE_TASK, REMOVE_TASK } from 'services/Tasks'

import Tasks from 'components/Tasks'
import Spinner from 'components/Spinner'

function List() {
  const {
    data: { allTasks: items },
    loading: isFetching,
    refetch: onFetchTasks,
  } = useQuery(GET_TASKS)

  const handleCreateTask = useMutation(CREATE_TASK)
  const handleUpdateTask = useMutation(UPDATE_TASK)
  const handleRemoveTask = useMutation(REMOVE_TASK)

  const onCreateTask = async (name) => {
    await handleCreateTask({ variables: { name }})
    onFetchTasks()
  }

  const onRemoveTask = async (id) => {
    await handleRemoveTask({ variables: { id }})
    onFetchTasks()
  }

  const onUpdateTask = (id, isDone) => handleUpdateTask({ variables: { id, isDone }})

  if (isFetching) {
    return (
      <Spinner />
    )
  }

  return (
    <Tasks
      onCreateItem={onCreateTask}
      onUpdateItem={onUpdateTask}
      onRemoveItem={onRemoveTask}
      items={items}
    />
  )
}

export default React.memo(List)
