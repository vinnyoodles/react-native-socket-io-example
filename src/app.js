var React = require('react');
var ReactNative = require('react-native');
var SocketIOClient = require('socket.io-client');
var { View, Text } = ReactNative;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:3000');
  }

  render() {
    return (
        <View>
          <Text>Hello world</Text>
        </View>
    );
  }
}

module.exports = Main;
