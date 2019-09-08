import React from 'react'
import CardWapper from './CardWapper'
import './hookIndex.scss'
function CardScroll(props) {
  // 让所有元素归位
  const backArr = new Set()
  function subscribeBackAll(func) {
    backArr.add(func)
  }
  function unsubscribeBackAll(func) {
    backArr.delete(func)
  }

  function back() {
    [...backArr].forEach(v => {
      v()
    })
    window.removeEventListener('click', back)
  }

  function backAll(immediately) {
    if (immediately) {
      back()
    }
    window.addEventListener('click', back)
  }
  return <div className="card-scroll-warpper">
    {props.renderList.map((Item, index) => <CardWapper item={Item} key={index} subscribeBackAll={subscribeBackAll} unsubscribeBackAll={unsubscribeBackAll} backAll={backAll}></CardWapper>)}
  </div>
}

export default CardScroll