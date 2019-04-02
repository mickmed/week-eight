import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Dimensions} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://source.unsplash.com/user/erondu/1600x900" }}
          style={{
            justifyContent: "center",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        >
          {/* <Image
          source={{
            uri: "https://source.unsplash.com/user/erondu/1600x900"
          }}
          style={{ width: 1600, height: 20 }}
        /> */}
          <Button
            title="To weather"
            onPress={() => this.props.navigation.navigate("Weather")}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});