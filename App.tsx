// Example to Use Ionicons in React Native using react-native-ionicons
// https://aboutreact.com/react-native-ionicons/

// Import React
import React from 'react';
// Import required components
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Icons, {IIcon, CustomIcon} from './components/Icon';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example of Different React Native Icons
        </Text>        
         <Icons.Entypo name="camera" size={24} color="black"  /> 
            <Icons.SimpleLineIcons name="plane" size={24} color="black"  /> 
            <IIcon name="bicycle" size="extraLarge" color="red" /> 
            <CustomIcon name="test-tube" size="extraLarge" color="blue"  /> 
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    margin: 10,
  },
});
