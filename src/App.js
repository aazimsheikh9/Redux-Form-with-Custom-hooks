import React from 'react'
import Form from './components/Form';

const App = () => {
  return (
    <>
      <h1 className='lg:text-5xl text-3xl text-center font-bold text-slate-700 py-10'>React Redux Form <br />With Custom Hooks</h1>
      <h3 className='lg:text-2xl text-lg text-center font-semibold text-slate-600 pt-10 pb-3'>Employment Form</h3>
      <div className="flex justify-center">
        <Form />
      </div>
    </>
  )
}

export default App