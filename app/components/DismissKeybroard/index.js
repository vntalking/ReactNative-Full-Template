import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';

export default class DismissKeybroard extends React.Component<> {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {this.props.children}
      </TouchableWithoutFeedback>
    );
  }
}
