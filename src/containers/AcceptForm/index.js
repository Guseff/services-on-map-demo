import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import { acceptTask } from '../../actions/MarkerActions';

import './style.css';

class AcceptForm extends Form {
  constructor() {
    super();

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    if (this.nameCheck() || this.titleCheck()) return;
    const { inpName, inpTitle, inpText } = this.state;
    this.props.acceptTask(
      inpName,
      inpTitle,
      inpText,
      this.props.clickedMarker._id
    );
  }
  
  render() {
    const { clickedMarker, handleCloseModal } = this.props;
    const { inpName, inpTitle, inpText } = this.state;
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
            <input className={((this.state.err.name ? 'red' : ''))}
              type="text" name="name"
              value={inpName} 
              onChange={this.nameChange}
              placeholder="What is your name?" />
          </label>
        </div>
        <div>
          <label>
            Phone Number:<br/>
            <input className={(this.state.err.title ? 'red' : '')}
              type="text" name="name"
              value={inpTitle} 
              onChange={this.titleChange}
              placeholder="Enter your phone number or e-mail here, please." />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea className={('')} 
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    acceptTask: bindActionCreators(acceptTask, dispatch),
  };
}

AcceptForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  acceptTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptForm);