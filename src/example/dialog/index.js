import React from 'react'
import useDialog from '../../component/dialog'
import './index.scss'
function DialogPage() {
  const { DialogModal, show } = useDialog()

  return <div className="dialog-page">
    <button onClick={show}>Show Dialog</button>
    <DialogModal onHide={()=>{
      console.log('hide')
    }}></DialogModal>
  </div>
}
export default DialogPage