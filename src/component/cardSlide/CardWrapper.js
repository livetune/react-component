import React, { useRef, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import context from './CardContext'

function CardWapper(props = { leftButtons: [] }) {
  const [distance, setDistance] = useState(0)
  const [inTouch, setInTouch] = useState(false)
  const [touchPos, setTouchPos] = useState(0)
  const scrollRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const ctx = useContext(context)
  const getLeft = () => leftRef.current.clientWidth * -1

  useEffect(() => {
    leftRef.current.style.display = ''
    setDistance(getLeft())
  }, [])
  useEffect(() => {
    props.subscribeBackAll(back)
    return () => props.unsubscribeBackAll(back)
  })

  function back() {
    // console.log(distance)
    if (distance === getLeft()) {
      return
    }
    scrollRef.current.classList.add('back-transition')
    setDistance(getLeft())
  }

  function touchStart(e) {
    setTouchPos(e.targetTouches[0].pageX)
    setInTouch(true)
  }

  function touchEnd(e) {
    setInTouch(false)
    // console.log(distance)
    const rightBord = getLeft() - rightRef.current.clientWidth // transform 可位移的最大距离

    // 左边自动归位    
    const left = getLeft()
    if (distance === left) {
      return
    }
    if (distance > left * 0.5) {
      // console.log('归位')
      setDistance(0)
    } else if (distance < left - 0.5 * rightRef.current.clientWidth) {
      setDistance(rightBord)
    } else {
      setDistance(left)
    }
    // 注册一个回位事件
    props.backAll()
  }

  function transitionEnd(e) {
    scrollRef.current.classList.remove('back-transition')
  }

  function setWapperDistance(moveDis) {
    const rightBord = getLeft() - rightRef.current.clientWidth // transform 可位移的最大距离
    const dis = distance - touchPos + moveDis
    if (dis >= 0) {
      setDistance(0)
    } else if (dis <= rightBord) {
      setDistance(rightBord)
    } else {
      setDistance(dis)
    }
    setTouchPos(moveDis)
  }

  function touchMove(e) {
    e.stopPropagation()
    if (inTouch) {
      setWapperDistance(e.targetTouches[0].pageX)
    }
  }


  return <div className="card-wapper" ref={scrollRef} style={{ transform: `translateX(${distance}px)` }} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} onTransitionEnd={transitionEnd}>
    <div className="card-button-list" style={{ display: 'none' }} ref={leftRef}>
      {
        ctx.leftButtons.map((item, index) =>
          <button style={item.style}
            onClick={e => item.onClick && item.onClick(item, props.cardIndex, e)}
            key={index}
          >
            {item.label}
          </button>)
      }
    </div>
    {props.item}
    <div className="card-button-list" ref={rightRef}>
      {
        ctx.rightButtons.map((item, index) =>
          <button style={item.style}
            onClick={e => item.onClick && item.onClick(item, props.cardIndex, e)}
            key={index}
          >
            {item.label}
          </button>)
      }
    </div>
  </div>
}
CardWapper.propTypes = {
  backAll: PropTypes.func,
  subscribeBackAll: PropTypes.func,
  unsubscribeBackAll: PropTypes.func,
  cardIndex: PropTypes.any,
  item: PropTypes.element,
}
export default CardWapper