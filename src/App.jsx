import { useState } from 'react'

export default function App() {

  return (
    <div>
        <h1>Todo list</h1>

        <Lego color="red"/>
    </div>
  )
}

function Lego(props) {
  const classes = "h-16 w-32"

  if (props.color) {
    classes += " bg-" + props.color
  }

  return (
    <div className={classes}></div>
  )
}
