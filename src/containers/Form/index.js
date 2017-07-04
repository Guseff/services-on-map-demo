import { Component } from 'react';

import './style.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      inpName: '',
      inpTitle: '',
      inpText: '',
      inpNum: 0,
      err: {
        name: false,
        title: false,
      },
    }

    this.nameChange = this.nameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.costChange = this.costChange.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.nameCheck = this.nameCheck.bind(this);
    this.titleCheck = this.titleCheck.bind(this);
  }

  // Functions for change and display text inside input fields
  nameChange(e) {
    this.setState({inpName: e.target.value});
    this.setState({err: Object.assign(
        this.state.err,
        {name: false},
      )});
  }
  titleChange(e) {
    this.setState({inpTitle: e.target.value});
    this.setState({err: Object.assign(
        this.state.err,
        {title: false},
      )});
  }
  textChange(e) {
    this.setState({inpText: e.target.value});
  }
  costChange(e) {
    const value = parseInt(e.target.value, 10);

    this.setState({inpNum: (value >= 0) ? value : 0});
  }

  // functions for check correctness of input fields values 
  nameCheck() {
    if (this.state.inpName.length < 3) {
      this.setState({err: Object.assign(
        this.state.err,
        {name: true},
      )})
      return true;
    }
    return false;
  }
  titleCheck() {
    if (this.state.inpTitle.length < 3) {
      this.setState({err: Object.assign(
        this.state.err,
        {title: true},
      )})
      return true;
    }
    return false;
  }
  
  // function for correct Date showing 
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