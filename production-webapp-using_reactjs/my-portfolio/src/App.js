import React from 'react'
import Card from './components/Card'
import DarkMode from './components/DarkMode'
import profile from "../src/components/images/profile.jpg"
import naruto from "../src/components/images/naruto.jpg"


export default function App() {
  return (

    <>
      <div>
        <DarkMode />
        <Card designation={"Software Developer"} myName={"Faisal Moinuddin"}
          imageUri={profile}
        />

      </div>
      <br />
      <div className="container">
        <Card designation={"Software Tester"} myName={"Naruto Uzamaki"}
          imageUri={naruto}
        />
      </div>
    </>
  )
}
