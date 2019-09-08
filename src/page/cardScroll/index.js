import React, { Component } from 'react';

import CardScroll from '../../component/cardScroll/CardScrollWapper';
import TestCard from '../../component/cardScroll/TestCard'
class CardScrollPage extends Component {
  state = {
    isClick: false
  }
  componentDidMount() {

  }

  clickToChangeState = () => {
    this.setState({ isClick: true })
  }

  renderList = () => {

    return [1, 2, 3, 4, 5, 6].map((v, index) => {
      return <TestCard key={index} isClick={this.state.isClick} onClick={this.clickToChangeState} />;
    })

  }

  render() {
    return (
      <div>
        <CardScroll renderList={this.renderList()}></CardScroll>

      </div>
    );
  }
}

export default CardScrollPage;
