import { Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

async function play00() {
    console.log('Loading Sound');
    var s = await Audio.Sound.createAsync(require('../assets/note00.m4a'));

    console.log('Playing Sound');
    s.sound.playAsync();
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title = 'Play Sound' onPress = { play00 } />
    </View>
  );
}
