import { View, Text, Pressable } from "react-native";
import React from "react";

export const Btn = ({ text, callBack }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity:0.8,backgroundColor: "#5B8FB9" } : { backgroundColor: "#5B8FB9" },
        {
          height: 40,
          width: 130,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        },
      ]}
      onPress={callBack}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
        {text}
      </Text>
    </Pressable>
  );
};
