import React, { Component, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function PizzaTranslator() {

  const [front, setFront] = useState('');
  const [rear, setRear] = useState('');

  const getToe = (front, rear) => {
    return Math.asin((rear - front) / 36) * (180 / Math.PI);
  };

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter the rear measurement"
        onChangeText={rear => setRear(rear)}
        defaultValue={rear}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Enter the front measurement"
        onChangeText={front => setFront(front)}
        defaultValue={front}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {getToe(front, rear).toFixed(2)}
      </Text>
    </View>
  );
}
