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
        <p className='font-semibold mt-2'>Incase of Keyboard shorcuts Provide modalKey:</p>
        <pre>
          <code>
            {"<Modal close={close}>{getModal(modalKey)}</Modal>"}
          </code>
        </pre>
        <p className='font-semibold mt-2'>Define the keys at:</p>
        <pre>
          <code>
            {"./modals/data.jsx"}
          </code>
        </pre>
        </div>
    </div>
  )
}

export default ErrorModal