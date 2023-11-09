import { createEffect, createEvent, createStore, sample } from 'effector'
import { TodoItem } from './types'

export const changeTaskName = createEvent<string>()
export const clearTask = createEvent()
export const $taskName = createStore('')
  .on(changeTaskName, (_, title) => title)
  .reset(clearTask)

const createTaskFx = createEffect<string, TodoItem>(async (title: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { id: Math.random() * 3, title, done: false }
})

export const createTask = createEvent()
export const $tasks = createStore<TodoItem[]>([]).on(
  createTaskFx.doneData,
  (tasks, task) => [...tasks, task],
)

sample({
  clock: createTask,
  source: $taskName,
  target: createTaskFx,
})
