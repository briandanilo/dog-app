import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import callApi from '../actions/api'

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

class ApiCaller extends Component {
  constructor(props) {
    super(props);
    this.callApi = this.callApi.bind(this)
  }

  callApi(){
    this.props.dispatch(callApi());
  }

  render() {
    console.log("rendering.  this is the state: ", this.props)
    console.log("rendering.  this is the the lines: ", this.props.api.line)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.api.line}</Text>
        <TouchableOpacity onPress={this.callApi} style={styles.button}>
        <Text>Get Lines</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(container.allState)(ApiCaller)
