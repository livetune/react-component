import React, { Component } from 'react';
import './index.scss';
import image from './RA2MD.ico';
class CardScroll extends Component {
  state = {
    move: 0,
    moveStart: 0,
    distance: 0,
    rightOpen: false
  };
  componentDidMount() {
    this.left = this.refs.left.clientWidth;
    this.leftPos = -1 * this.refs.left.clientWidth;
    this.right = (this.refs.right.clientWidth + this.left) * -1;
    this.cardscroll = this.refs.cardscroll.clientWidth;
    this.setState({ move: 0, moveStart: 0, distance: -1 * this.left });
  }
  openLeftTip = () => {
    this.setState({ distance: 0, rightOpen: false });
  };
  openRightTip = () => {
    this.setState({ distance: this.right, rightOpen: true });
  };
  openCenterTip = () => {
    this.setState({ distance: this.leftPos, rightOpen: false });
  };
  scrollHandle = e => {
    this.setState({ move: e.targetTouches[0].pageX });
    let newMove = e.targetTouches[0].pageX;
    let { distance, move } = this.state;
    let tmpDistance = distance + newMove - move;
    this.animeHandle(tmpDistance);
  };
  animeHandle = tmpDistance => {
    if (tmpDistance >= 0) {
      this.setState({ distance: 0 });
    } else if (tmpDistance <= this.right) {
      this.setState({ distance: this.right });
    } else {
      return this.setState({ distance: tmpDistance });
    }
  };
  clean = () => {
    const { distance } = this.state;

    if (distance >= -1 * this.left - 12 && distance <= -1 * this.left + 12) {
      this.setState({ distance: -1 * this.left });
    } else {
      let flag = distance > -1 * this.left ? -11 : 11;
      requestAnimationFrame(() => {
        this.setState({ distance: distance + flag });
        this.clean();
      });
    }
  };
  startHandle = e => {
    e.preventDefault();

    this.setState({
      moveStart: e.targetTouches[0].pageX,
      move: e.targetTouches[0].pageX
    });
  };

  endHandle = e => {
    const { distance, move, moveStart, rightOpen } = this.state;
    console.log(move, moveStart);
    if (move === moveStart && distance !== -1 * this.left) {
      this.clean();
      return;
    }
    if (distance > -0.5 * this.left && distance <= 0) {
      this.openLeftTip();
    } else if (
      distance <= -0.5 * this.left &&
      distance >= this.right * 0.25 - this.left
    ) {
      this.openCenterTip();
    } else {
      if (rightOpen) {
        this.openCenterTip();
      } else {
        this.openRightTip();
      }
    }
  };
  render() {
    return (
      <div
        className="cardScroll-container"
        onTouchStart={this.startHandle}
        onTouchEnd={this.endHandle}
        onTouchMove={this.scrollHandle}
      >
        <div
          className="cardScroll-wrapper"
          style={{
            transform: `translateX(${this.state.distance}px)`
          }}
          ref="cardscroll"
        >
          <div className="left-tip-wrapper" ref="left">
            <div className="left-item">
              <span>标记为未读</span>
            </div>
          </div>

          <div className="cardScroll" ref="center">
            <img src={image} alt="" />
            <div className="card-right">
              <p className="item">
                <span>服务号</span>
                <span>下午22:30</span>
              </p>
              <p>QQ运动</p>
            </div>
          </div>
          <div className="right-tip-wrapper" ref="right">
            <div className="right-item">
              <span>更多</span>
            </div>
            <div className="right-item">
              <span>删除</span>
            </div>
            <div className="right-item">
              <span>删除</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardScroll;
