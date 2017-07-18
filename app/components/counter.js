import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

class Counter extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this)
  }

  log(){
    this.props.dispatch({type:"ADD_TO_COUNTER"})
  }

  render() {
    console.log("render ",this.props)
    const { counter, increment, decrement } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.counter.count}</Text>
        <TouchableOpacity onPress={this.log} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect((state)=> { return state})(Counter)
