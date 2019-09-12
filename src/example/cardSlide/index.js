import React, { Component } from 'react';

import CardSlide from '../../component/cardSlide';
import TestCard from './TestCard'

const leftButtons = [
  { label: '标记为未读', onClick: (item, index, e) => { console.log(item, index, e) } }
]
const rightButtons = [
  { label: '删除一些不必要的标签', style: { background: 'red', width: '100px' } },
  { label: '更多', style: { background: 'yellowgreen' } },
]

class CardSlidePage extends Component {
  renderList = () => {
    return [1, 2, 3, 4, 5, 6].map((v, index) => {
      return <TestCard key={index} />;
    })
  }
  render() {
    return (
      <div>
        <CardSlide renderList={this.renderList()} leftButtons={leftButtons} rightButtons={rightButtons}></CardSlide>
      </div>
    );
  }
}

export default CardSlidePage;
