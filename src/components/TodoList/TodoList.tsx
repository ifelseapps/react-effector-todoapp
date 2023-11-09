import { useUnit } from 'effector-react'
import React, { JSX } from 'react'
import { $tasks } from '../../model'

export function TodoList(): JSX.Element {
  const tasks = useUnit($tasks)

  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
