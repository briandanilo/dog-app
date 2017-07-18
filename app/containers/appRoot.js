'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import { connect } from 'react-redux';
import container from './all'

class AppRoot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Counter/>
    );
  }
}

export default connect(container.allState)(AppRoot);
