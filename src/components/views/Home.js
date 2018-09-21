import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from '../Header';
class Home extends Component {
  render() {
    return (
      <ScrollView>
          <Header/>
        <Text style={styles.textFirst}> Home PAGE </Text>
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
export default Home;