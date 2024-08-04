import React from 'react'

const ErrorModal = () => {
  return (
    <div className='items-center justify-center my-auto'>
        <h1>Please define the props properly.</h1>
        <div>
        <p className='text-left font-semibold'>Example:</p>
        </div>
        <div>
        <pre>
          <code>
            {"<ModalButton modal={{label:'Add New User', component:'ADD_USER_MODAL'}}/>"}
          </code>
        </pre>
        </div>
    </div>
  )
}

export default ErrorModal