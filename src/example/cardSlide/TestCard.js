import React from 'react';
import './index.scss';
import image from './user.svg';
import PropTypes from 'prop-types'

function TestCard(props) {
  return <div className="card-slide">
    <img src={image} alt="" />
    <div className="card-right">
      <p className="item">
        <span>服务号</span>
        <span>下午22:30</span>
      </p>
      <p>QQ运动</p>
    </div>
  </div>
}
TestCard.propTypes = {
  isClick: PropTypes.bool
}


export default TestCard;
