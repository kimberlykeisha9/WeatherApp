import React from "react";
import { Text, View, StyleSheet } from "react-native";

const RowText = (props) => {
    const { messageOne, messageTwo, messageOneStyles, messageTwoStyles, containerStyles } = props;
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    );
}

export default RowText;