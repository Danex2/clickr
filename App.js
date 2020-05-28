import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [timer, setTimer] = React.useState(60);
  React.useEffect(() => {
    const clickTimer = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);
    return () => clearInterval(clickTimer);
  }, [timer]);
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, marginTop: 50, fontSize: 30 }}>Clickr</Text>
      <Text style={{ flex: 1, fontSize: 50 }}>{count}</Text>
      <View style={{ flex: 2 }}>
        <Button
          onPress={() => setCount((prevCount) => prevCount + 1)}
          title="Tap to update count!"
          style={styles.button}
          disabled={timer === 0}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 50 }}>{timer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 300,
    flex: 1,
  },
});
