import React from 'react'
import CardWapper from './CardWrapper'
import Context from './CardContext'
import PropTypes from 'prop-types'
import './index.scss'
function CardSlide(props) {
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
    window.removeEventListener('touchstart', back)
  }

  function backAll(immediately) {
    if (immediately) {
      back()
    }
    window.addEventListener('touchstart', back)
  }
  const { leftButtons, rightButtons, renderList } = props

  return <div className="card-slide-warpper">
    <Context.Provider value={{ leftButtons, rightButtons }}>
      {renderList.map((Item, index) => <CardWapper item={Item} key={index} cardIndex={index} subscribeBackAll={subscribeBackAll} unsubscribeBackAll={unsubscribeBackAll} backAll={backAll}></CardWapper>)}
    </Context.Provider>

  </div >
}

CardSlide.defaultProps = {
  leftButtons: [],
  rightButtons: [],
  renderList: []
}

CardSlide.propTypes = {
  leftButtons: PropTypes.array,
  rightButtons: PropTypes.array,
  renderList: PropTypes.array,
}
export default CardSlide