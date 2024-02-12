// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree/index'
import StepThreeOut from './components/StepThree/StepThreeOut'
import StepThreeImportWallet from './components/StepThreeImportWallet'
import StepFour from './components/StepFour'
import StepFive from './components/StepFive'
import StepSix from './components/StepSix'
import StepSeven from './components/StepSeven'
import StepEigth from './components/StepEigth'
import StepNine from './components/StepNine'
import StepTen from './components/StepTen'
import StepEleven from './components/StepEleven'
import StepTwelve from './components/StepTwelve'
import StepThirteen from './components/StepThirteen'
import StepFourteen from './components/StepFourteen'
import StepFifteen from './components/StepFifteen'
import StepSixteen from './components/StepSixteen'
import StepSeventeen from './components/StepSeventeen'
import StepEighteen from './components/StepEighteen'
import StepNineteen from './components/StepNineteen'
import StepTwenty from './components/StepTwenty'
import StepTwentyOne from './components/StepTwentyOne'
import StepTwentyTwo from './components/StepTwentyTwo'
import StepTwentyThree from './components/StepTwentyThree'
import StepTwentyFour from './components/StepTwentyFour'
import StepTwentyFive from './components/StepTwentyFive'
import LockScreen from './components/LockScreen'
import screen from './main'

function App() {
  if(screen.current == 'lock') return <div><LockScreen/></div>
  if(screen.current == 1) return <div><StepOne/></div>
  if(screen.current == 2) return <div><StepTwo/></div>
  if(screen.current == 3) return <div><StepThree/></div>
  if(screen.current == '3out') return <div><StepThreeOut/></div>
  if(screen.current == 'import') return <div><StepThreeImportWallet/></div>
  if(screen.current == 4) return <div><StepFour/></div>
  if(screen.current == 5) return <div><StepFive/></div>
  if(screen.current == 6) return <div><StepSix/></div>
  if(screen.current == 7) return <div><StepSeven/></div>
  if(screen.current == 8) return <div><StepEigth/></div>
  if(screen.current == 9) return <div><StepNine/></div>
    //8 - staking and pools
    // 9 - otpravka
    // 13 -dashboard
  if(screen.current == 10) return <div><StepTen/></div>
  if(screen.current == 11) return <div><StepEleven/></div>
  if(screen.current == 12) return <div><StepTwelve/></div>
  if(screen.current == 14) return <div><StepFourteen/></div>
  if(screen.current == 16) return <div><StepSixteen/></div>
  if(screen.current == 17) return <div><StepSeventeen/></div>
  if(screen.current == 18) return <div><StepEighteen/></div>
  if(screen.current == 19) return <div><StepNineteen/></div>

  ////new///////////////

  if(screen.current == 20) return <div><StepTwenty/></div>
  if(screen.current == 21) return <div><StepTwentyOne/></div>
  if(screen.current == 22) return <div><StepTwentyTwo/></div>
  if(screen.current == 23) return <div><StepTwentyThree/></div>
  if(screen.current == 24) return <div><StepTwentyFour/></div>
  if(screen.current == 25) return <div><StepTwentyFive/></div>

  //Import wallet = не знаю куда

  //////////////
  return (
    <div>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepThreeImportWallet/>
      <StepFour/>
      <StepFive/>
      <StepSix/>
      <StepSeven/>
      <StepEigth/>
      <StepNine/>
      <StepTen/>
      <StepEleven/>
      <StepTwelve/>
      <StepThirteen/>
      <StepFourteen/>
      <StepFifteen/>
      <StepSixteen/>
      <StepSeventeen/>
      <StepEighteen/>
      <StepNineteen/>
      <StepTwenty/>
      <StepTwentyOne/>
      <StepTwentyTwo/>
      <StepTwentyThree/>
      <StepTwentyFour/>
      <StepTwentyFive/>
    </div>

  )
}

export default App
