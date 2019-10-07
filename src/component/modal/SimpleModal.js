import { useEffect } from 'react'
import ReactDom from 'react-dom'
import './index.scss'
function SimpleModal(props) {
  const el = document.createElement('div')
  el.className = 'modal'
  useEffect(() => {
    const root = document.getElementById('root')
    root.appendChild(el)
    return () => root.removeChild(el)
  })
  return ReactDom.createPortal(props.children, el)
}

export default SimpleModal