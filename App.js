import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
export default class extends React.Component {
  state = {
    amount: 0,
    discount: 0,
    result: 0,
  };

  render() {
    return (
      <View style={style.container}>
        <Text
          style={{
            marginTop: 80,
            alignSelf: 'center',
            fontSize: 20,
            color: 'red',
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Discount Calculator
        </Text>
        <View style={{ marginLeft: 50 }}>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>Amount</Text>
          <TextInput
            placeholder={this.state.amount}
            style={[style.inputBox, { marginBottom: 30 }]}
            onChangeText={(data) => this.setState({ amount: data })}
          />
        </View>
        <View style={{ marginLeft: 50 }}>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>Discount %</Text>
          <TextInput
            placeholder={this.state.discount}
            style={[style.inputBox, { marginBottom: 30 }]}
            onChangeText={(data) => this.setState({ discount: data })}
          />
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            color: 'white',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={() =>
            this.setState({
              result: (this.state.amount * this.state.discount) / 100,
            })
          }>
          Calculate
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 15,
            color: this.state.result ? 'green' : 'red',
          }}>
          The Amount after discount
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 15,
            color: this.state.result ? 'green' : 'red',
          }}>
          {this.state.amount - this.state.result}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  inputBox: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: 250,
    padding: 7,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
});
