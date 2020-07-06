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
      <Text>Rear</Text>
      <TextInput
        style={{padding: 4, height: 40, borderColor: '#e0e0e0', borderWidth: 1}}
        placeholder="Enter the rear measurement (decimal inches)"
        onChangeText={rear => setRear(rear)}
        defaultValue={rear}
      />
      <Text>Front</Text>
      <TextInput
        style={{padding: 4, height: 40, borderColor: '#e0e0e0', borderWidth: 1}}
        placeholder="Enter the front measurement (decimal inches)"
        onChangeText={front => setFront(front)}
        defaultValue={front}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {getToe(front, rear).toFixed(2)}&deg;
      </Text>
      <Text style={{fontStyle: 'italic'}}>Cheatsheet:</Text>
      <Text>1/16 = .0625</Text>
      <Text>1/8 = .125</Text>
      <Text>3/16 = .1875</Text>
      <Text>1/4 = .25</Text>
      <Text>5/16 = .3125</Text>
      <Text>3/8 = .375</Text>
      <Text>7/16 = .4375</Text>
      <Text>1/2 = .5</Text>
      <Text>9/16 = .5625</Text>
      <Text>5/8 = .625</Text>
      <Text>11/16 = .6875</Text>
      <Text>3/4 = .75</Text>
      <Text>13/16 = .8125</Text>
      <Text>7/8 = .875</Text>
      <Text>15/16 = .9375</Text>
    </View>
  );
}
