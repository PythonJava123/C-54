import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render() {
    return <Button color="red" title="Button 1" />;
  }
}

class BlueButton extends Component {
  render() {
    return <Button color="blue" title="Button 2" />;
  }
}

class BlackButton extends Component {
  render() {
    return <Button color="black" title="Button 3" />;
  }
}

class GreenButton extends Component {
  render() {
    return <Button color="green" title="Button 4" />;
  }
}

class PinkButton extends Component {
  render() {
    return <Button color="pink" title="Button 5" />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginBottom:50,}}>
             <Text style={{marginTop:20, margin:20}}>DJ MIXER APP</Text>
      <RedButton />
      <BlueButton />
      <BlackButton />
      <GreenButton />
      <PinkButton />
        </View>
    );
  }
}