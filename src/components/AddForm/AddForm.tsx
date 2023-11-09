import React, { FormEventHandler, JSX } from 'react'
import { $taskName, changeTaskName, clearTask, createTask } from '../../model'
import { useUnit } from 'effector-react'

export function AddForm(): JSX.Element {
  const taskName = useUnit($taskName)

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    createTask()
    clearTask()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={taskName}
          onChange={(e) => changeTaskName(e.target.value)}
          name="task"
          type="text"
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
}
