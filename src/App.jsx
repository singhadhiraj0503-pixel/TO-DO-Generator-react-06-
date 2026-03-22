import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'


const App = () => {
  return (
    <main className='w-full h-screen bg-[#212121] text-white p-4'>
      <Header />
      <Form />
      {/* <Card /> */}
    </main>
  )
}

export default App