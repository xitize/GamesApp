import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from '../Header';
class First extends Component {
  render() {
    return (
      <ScrollView>
        <Header></Header>
        <Text style={styles.textFirst}> FIRST PAGE </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300,
  },
});
export default First;