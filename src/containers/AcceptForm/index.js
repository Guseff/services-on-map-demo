import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import {  } from '../../actions/MarkerActions'

class AcceptForm extends Form {
  constructor() {
    super();

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
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
    const { err, clickedMarker, handleCloseModal } = this.props;
    const { inpName, inpTitle, inpNum, inpText } = this.state;
    return (
      <form>
        <h2>Offer details:</h2>
        <div>
          <b>Title:</b> {clickedMarker.title}<br/>
          <b>Offered by:</b> {clickedMarker.author}<br/>
          <b>Description:</b> {clickedMarker.text}<br/>
          <b>Data:</b> {this.formatDate(clickedMarker.modified)}
        </div>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

AcceptForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  err: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptForm);