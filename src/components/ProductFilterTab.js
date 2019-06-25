import React, { Component } from 'react'

class FilterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "all"
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(tab) {
    this.setState({tab})
    this.props.setFilter(tab);
  }
  render() {
    const css = {
      list: "filter-tab-list list-inline border-bottom h4 mb-2",
      item: "list-inline-item p-2 mr-0 ",
      items: {
        all: "border-primary",
        available: "border-success",
        soldout: "border-danger"
      }
    }
    const active = (tab) => {
      if(this.state.tab !== tab) return "";
      return css.items[tab];
    };
    return (
      <ul className={css.list}>
        <li className={css.item + active("all")}>
          <a href="#all" onClick={this.handleClick.bind(this, "all")}>All</a>
        </li>
        <li className={css.item + active("available")}>
          <a className="text-success" href="#available" onClick={this.handleClick.bind(this, "available")}>Available</a>
        </li>
        <li className={css.item + active("soldout")}>
          <a className="text-danger" href="#soldout" onClick={this.handleClick.bind(this, "soldout")}>Sold Out</a>
        </li>
      </ul>
    )
  }
}

export default FilterTab;