import React, { Component } from 'react';

import './style.css';

class NewMarkerForm extends Component {
  constructor() {
    super();

    this.nameChange = this.nameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  nameChange(e) {
    // this.props.clickOnMap(e.latlng);
  }
  titleChange(e) {

  }

  render() {
    return (
      <form>
        <div>
          <label>
            Name:<br/>
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Title:<br/>
            <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label>
            Cost:<br/>
            <input type="text" name="cost" />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea type="text" name="text" />
          </label>
        </div>
        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default NewMarkerForm;