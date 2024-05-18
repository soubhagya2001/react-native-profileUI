import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Profile = () => {
  return (
    <ScrollView style={{ backgroundColor: "#241332" }}>
      <ImageBackground
        source={require("../assets/photo.png")}
        style={{ height: 0.45 * h }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/icons-back-light.png")} />
          <Image source={require("../assets/filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            bottom: 0,
            zIndex: 1,
              height: 0.16 * h,
            width:w,
          }}
              >
                  <Text style={{
                      transform: [{ rotate: "-180deg" }],
                      color: "#FFF",
                      fontSize: 35,
                      marginVertical: 30,
                      alignSelf: "center",
                      fontFamily:"Montserrat_700Bold"
                  }}  >
                  Anushka Sahu
                  </Text> 
        </LinearGradient>
          </ImageBackground>
          <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal:35,
          }}>
              <View style={{ alignItems: "center" }}>
                  <Text style={{
                      fontSize: 30,
                      fontFamily: "Montserrat_700Bold",
                      color:"#FFF",
                  }}>
                      125
                  </Text>
                  <Text style={{
                      fontSize: 16,
                      fontFamily: "Montserrat_600SemiBold",
                      color:"#918998",
                  }}>
                      FOLLOWERS
                  </Text>
              </View>
          </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
