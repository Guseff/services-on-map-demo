import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import { acceptTask, editUserInfo } from '../../../actions/MarkerActions';
import { findOfferer, showUserModal } from '../../../actions/ModalActions';

import './style.css';

class AcceptForm extends Form {
  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      inpName: props.loggedUser.name,
      inpTitle: props.loggedUser.phone !== '' ? props.loggedUser.phone : '',
    });

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSeeProfile = this.handleSeeProfile.bind(this);
  }

  handleSubmitForm() {
    if (this.nameCheck() || this.titleCheck()) return;
    const { inpName, inpTitle, inpText } = this.state;
    this.props.acceptTask(
      this.props.loggedUser._id,
      inpName,
      inpTitle,
      inpText,
      this.props.clickedMarker._id
    );
    this.props.editUserInfo(
      inpName,
      this.props.loggedUser.email,
      inpTitle
    );
  }

  handleSeeProfile(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.findOfferer(this.props.clickedMarker.author_id);
    this.props.showUserModal();
  }
  
  render() {
    const { clickedMarker, handleCloseModal } = this.props;
    const { inpName, inpTitle, inpText, err } = this.state;
    return (
      <form>
        <h2>Offer details:</h2>
        <div>
          <b>Title:</b> {clickedMarker.title}<br/>
          <b>Offered by:</b> {clickedMarker.author} <button className='frofile-a' onClick={this.handleSeeProfile}>See Profile...</button><br/>
          <b>Description:</b> {clickedMarker.text}<br/>
          <b>Data:</b> {this.formatDate(clickedMarker.modified)}
        </div>
        <h2>To accept the offer, fill form below:</h2>
        <div>
          <label>
            Name:<br/>
            <input className={((err.name ? 'red' : ''))}
              type="text" name="name"
              value={inpName} 
              onChange={this.nameChange}
              placeholder="What is your name?" />
          </label>
        </div>
        <div>
          <label>
            Phone Number:<br/>
            <input className={(err.title ? 'red' : '')}
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
    loggedUser: state.login.loggedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    acceptTask: bindActionCreators(acceptTask, dispatch),
    findOfferer: bindActionCreators(findOfferer, dispatch),
    showUserModal: bindActionCreators(showUserModal, dispatch),
    editUserInfo: bindActionCreators(editUserInfo, dispatch),
  };
}

AcceptForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,

  acceptTask: PropTypes.func.isRequired,
  findOfferer: PropTypes.func.isRequired,
  showUserModal: PropTypes.func.isRequired,
  editUserInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptForm);