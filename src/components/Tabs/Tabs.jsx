import React, { Component } from 'react';

export default class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  };

  //   чи повинен компоненнт обновитись?
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }
  setActiveTabIdx = (idx) => {
    this.setState({ activeTabIdx: idx });
  };
  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];
    return (
      <div>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}>
              {item.label}
            </button>
          ))}
          ;
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}
