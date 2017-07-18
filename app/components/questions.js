import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'

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

class Questions extends Component {
  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this)
  }

  getQuestions(){
    this.props.dispatch({type:"GET_NEW_Q"})
  }

  render() {
    console.log("rendering.  this is the state: ", this.props)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>"What is canada?"</Text>
        <TouchableOpacity onPress={this.getQuestions} style={styles.button}>
        <Text>New Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(container.allState)(Questions)
