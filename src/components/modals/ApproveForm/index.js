import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import { approveTask } from '../../../actions/MarkerActions';

class ApproveForm extends Form {
  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    const date = Date.now();
    this.props.approveTask(
      date,
      this.props.clickedMarker._id
    );
  }
  
  render() {
    const { clickedMarker, handleCloseModal } = this.props;
    return (
      <form>
        <h2>Offer details:</h2>
        <div>
          <b>Title:</b> {clickedMarker.title}<br/>
          <b>Offered by:</b> {clickedMarker.author}<br/>
          <b>Description:</b> {clickedMarker.text}<br/>
          <b>Data:</b> {this.formatDate(clickedMarker.modified)}
        </div>
        <h2>Accept details:</h2>
        <div>
          <b>Acceptor:</b> {clickedMarker.executor}<br/>
          <b>Phone:</b> {clickedMarker.exec_phone}<br/>
          <b>Description:</b> {clickedMarker.exec_text}<br/>
        </div>
        <br/><br/>
        <div>
          <input className="button" type="button" value="Approve" onClick={this.handleSubmitForm} />
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
    approveTask: bindActionCreators(approveTask, dispatch),
  };
}

ApproveForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  approveTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveForm);