import React, { useState } from 'react'
import Modal from '../modal/SimpleModal'

function useDialog() {
  const [isShow, setIsShow] = useState(true)
  function hide() {
    setIsShow(false)
  }
  function show() {
    setIsShow(true)
  }

  function DialogModal({ onHide }) {
    return isShow && <Modal>
      <div className="dialog" style={{ fontSize: '20px', width: '80%', background: '#fff', textAlign: 'center' }}>
        <p>Yes, this is a dialog</p>
        <button style={{ fontSize: '20px', lineHeight: '1.5em', width: '100%', borderTop: '1px solid #ececec', background: '#fff' }} onClick={()=>{hide();onHide&&onHide();}}>Cancel</button>
      </div>
    </Modal>
  }

  return {
    DialogModal,
    hide,
    show
  }
}

export default useDialog