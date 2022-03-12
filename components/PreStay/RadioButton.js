import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

export default function RadioButton(props) {
    return (
      <Pressable onPress={props.changeSelection}>
        <View style={[
          styles.radioButtonOuter, 
          props.color === 'white' ? styles.whiteOuter : styles.blackOuter, 
          props.style]}>
                  {
                    props.selected ?
                      <View style={[
                        styles.radioButtonInner, 
                        props.color === 'white' ? styles.whiteInner : styles.blackInner]}/>
                      : null
                  }
                </View>
      </Pressable>
        
    );
  }
  const styles = StyleSheet.create({
    radioButtonOuter: {
      height: 24,
      width: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    blackOuter: {
      
      borderWidth: 2,
      borderColor: '#000',
    },
    whiteOuter: {
      backgroundColor: '#fff',
      opacity: 0.5

    },
    radioButtonInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
    },
    blackInner: {
      backgroundColor: '#000',
    },
    whiteInner: {
      backgroundColor: '#fff',
      opacity: 1.0
    }
  }
  )