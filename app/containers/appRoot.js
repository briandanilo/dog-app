'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import Questions from '../components/questions';
import { connect } from 'react-redux';
import container from './all'
import {View,StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class AppRoot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Counter/>
        <Questions/>
      </View>
    );
  }
}

export default connect(container.allState)(AppRoot);
