import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#FFFFFF")
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }

  return (
  <>
  <StatusBar backgroundColor={randomBackground}/>
  <View style={[styles.container, {backgroundColor: randomBackground}]}>
    <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionButton}>
        <Text style={styles.actionBtnTxt}>Press Me</Text>
      </View>
    </TouchableOpacity>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  }
});

export default App;
