import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  changeName,
  changeTitle,
  changeCost,
  changeText,
} from '../../actions/MarkerActions'

import './style.css';

class AcceptForm extends Component {
  constructor() {
    super();

    this.nameChange = this.nameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.costChange = this.costChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  nameChange(e) {
    this.props.changeName(e.target.value);
  }
  titleChange(e) {
    this.props.changeTitle(e.target.value);
  }
  textChange(e) {
    this.props.changeText(e.target.value);
  }
  costChange(e) {
    this.props.changeCost(e.target.value);
  }
  handleSubmitForm() {
    this.props.regNewTask(
      this.props.inpName,
      this.props.inpTitle,
      Number(this.props.inpCost),
      this.props.inpText,
      this.props.clickCoords
    );
    this.props.handleCloseModal();
  }

  render() {
    const { err, inpName, inpTitle, inpCost, inpText } = this.props;
    const { handleCloseModal } = this.props;
    return (
      <form>
        <h2>To accept the offer, fill form below:</h2>
        <div>
          <label>
            Name:<br/>
            <input className={(err.name ? 'red' : '')}
              type="text" name="name"
              value={inpName} 
              onChange={this.nameChange}
              placeholder="What is your name?" />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea className={(err.text ? 'red' : '')} 
              type="text" name="text"
              value={inpText} 
              onChange={this.textChange} 
              placeholder="Enter your comment here..." />
          </label>
        </div>
        <div>
          <input className="button" type="button" value="Submit" onClick={this.handleSubmitForm} />
          <input className="button" type="reset" value="Cansel" onClick={handleCloseModal} />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    clickCoords: state.map.clickCoords,
    err: state.form.err,
    inpName: state.form.inpName,
    inpTitle: state.form.inpTitle,
    inpCost: state.form.inpCost,
    inpText: state.form.inpText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: bindActionCreators(changeName, dispatch),
    changeTitle: bindActionCreators(changeTitle, dispatch),
    changeText: bindActionCreators(changeText, dispatch),
    changeCost: bindActionCreators(changeCost, dispatch),
  };
}

AcceptForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  err: PropTypes.object.isRequired,
  inpName: PropTypes.string.isRequired,
  inpTitle: PropTypes.string.isRequired,
  inpCost: PropTypes.number.isRequired,
  inpText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptForm);