# React component
---
## CardSlide

列表可左滑以及右滑的组件，类似 QQ 或者微信的聊天列表

### ScreenShoot

![localhost_3000_.png](https://i.loli.net/2019/09/12/qhKXfUPEpsxuacB.png)

### Example
```js
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

```

### Props
属性 | 说明 | 类型 | 默认值 
---|---|---|---
renderList | 传入一个组件的数组，用来渲染每一条卡片的内容。 | Array | [ ]
leftButtons | 左侧按钮集合 | Array | [ ]
rightButtons | 右侧按钮集合 | Array | [ ]

---

Buttons

属性 | 说明 | 类型  
---|---|---
onClick | 按钮的点击事件 | (item, index, e) => void 
style | 按钮样式 | Object 
label | 按钮的文字 | String 
