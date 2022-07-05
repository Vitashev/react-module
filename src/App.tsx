import React from 'react'
import logo from './logo.svg'
import styles from './App.module.css'

function App() {
  const option1 = 1
  const option2 = 2
  const option3 = 3

  return (
    <div className="App">
      <div className={styles['option-' + option1]}>Red</div>
      <div className={styles['option-' + option2]}>Green</div>
      <div className={styles['option-' + option3]}>Blue</div>
    </div>
  )
}

export default App
