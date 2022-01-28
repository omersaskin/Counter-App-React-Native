import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function MyCustomButton(props) {
  return (
      <TouchableOpacity 
      style={[styles.button, props.style]} 
      onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    );
}

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image 
        source={{uri: "https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png"}} 
        style={styles.image}
        />
        <Text style={styles.text}>Counter: {count}</Text>
        <Text style={styles.subtitle}>
          Click buttons to change the counter.
        </Text>

        <View style={styles.buttonContainer}>
          <MyCustomButton title="Increment +" onPress={handleIncrement} />
          <MyCustomButton title="Decrement -" onPress={handleDecrement} style={{backgroundColor: "pink", marginStart: 16}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    marginTop: 4,
  },
  image: {
    height: 180,
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});

export default App;