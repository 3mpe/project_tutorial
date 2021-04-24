
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Button from "./Button";

export default function User({ data, onPressDelete, onPressEdit }) {
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <Text>{data.password}</Text>
            <View style={{ flexDirection: "row" }}>
                <Button text="Sil" onPress={() => { onPressDelete(data._id) }} />
                <Button text="Duzenle" onPress={() => { onPressEdit(data) }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get("window").width,
        flexDirection:"row",
        padding: 12,
        borderBottomWidth: 1.
    },
});
