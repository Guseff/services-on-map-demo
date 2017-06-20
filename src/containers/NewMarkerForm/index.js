import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Form';

import {
  regNewTask,
} from '../../actions/MarkerActions';

class NewMarkerForm extends Form {
  constructor() {
    super();

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    console.log(this.state);
    const { inpName, inpTitle, inpNum, inpText } = this.state;
    this.props.regNewTask(
      inpName,
      inpTitle,
      inpNum,
      inpText,
      this.props.clickCoords
    );
  }

  render() {
    const { err } = this.props;
    const { handleCloseModal } = this.props;
    return (
      <form>
        <h2>To offer new service, please, fill form below:</h2>
        <div>
          <label>
            Name:<br/>
            <input className={(err.name ? 'red' : '')}
              type="text" name="name"
              value={this.state.inpName} 
              onChange={this.nameChange}
              placeholder="What is your name?" />
          </label>
        </div>
        <div>
          <label>
            Title:<br/>
            <input className={(err.title ? 'red' : '')}
              type="text" name="title"
              value={this.state.inpTitle} 
              onChange={this.titleChange}
              placeholder="What kind of help do you need?"/>
          </label>
        </div>
        <div>
          <label>
            Cost:<br/>
            <input className={(err.cost ? 'red' : '')}
              type="number" name="cost"
              value={this.state.inpNum} 
              onChange={this.costChange}
              placeholder="How much you are going to pay?" />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea className={(err.text ? 'red' : '')} 
              type="text" name="text"
              value={this.state.inpText} 
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    regNewTask: bindActionCreators(regNewTask, dispatch),
  };
}

NewMarkerForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  err: PropTypes.object.isRequired,
  regNewTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMarkerForm);