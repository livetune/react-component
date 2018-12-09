import React, { Component } from 'react';
import CardScroll from '../../component/cardScroll';
class CardScrollPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((v, index) => {
          return <CardScroll key={index} />;
        })}
      </div>
    );
  }
}

export default CardScrollPage;
