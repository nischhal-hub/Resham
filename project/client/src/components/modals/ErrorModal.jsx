import React from 'react'

const ErrorModal = () => {
  return (
    <div className='flex items-center justify-center'>
        <h1>Please define the props properly.</h1>
        <p>Example:</p>
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