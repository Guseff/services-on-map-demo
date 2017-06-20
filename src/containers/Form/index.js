import React, { Component } from 'react';

import './style.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      inpName: '',
      inpTitle: '',
      inpText: '',
      inpNum: 0,
      err: {},
    }

    this.nameChange = this.nameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.costChange = this.costChange.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  nameChange(e) {
    this.state.inpName = e.target.value;
  }
  titleChange(e) {
    this.state.inpTitle = e.target.value;
  }
  textChange(e) {
    this.state.inpText = e.target.value;
  }
  costChange(e) {
    this.state.inpNum = parseInt(e.target.value);
  }
  formatDate(date) {
    const d = new Date(date);
    let dd = d.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = d.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = d.getFullYear();

    return dd + '.' + mm + '.' + yy;
  }
}

export default Form;