import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero1 from './components/Hero1'
import Video from './components/Video'
import Video1 from './components/Video1'
import DebtFreeWorkshopLanding from './components/DebtFreeWorkshopLanding'
import SuccessStories from './components/success-stories'
import WebinarEnrollment from './components/webinar-enrollment (1)'
import LastChanceEnrollment from './components/last-chance-enrollment'
import LoanFreedomProgram from './components/loan-freedom-program'

function App() {


  return (
    <div>
     {/* <Hero1 /> */}
     {/* <Video /> */}
      <LoanFreedomProgram />
     <Video1 />
     <DebtFreeWorkshopLanding />
     <SuccessStories />
     <WebinarEnrollment />
     <LastChanceEnrollment />


    </div>
  )
}

export default App
