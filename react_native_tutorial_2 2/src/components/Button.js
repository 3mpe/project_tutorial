
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ text, onPress}) {
    return (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}
