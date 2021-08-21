import React from 'react'
import Card from './components/Card'
import DarkMode from './components/DarkMode'



export default function App() {
  return (
    <div>
      <DarkMode />
      <Card designation={"Software Developer"} myName={"Faisal Moinuddin"} />

    </div>
  )
}
