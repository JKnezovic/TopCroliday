import React from 'react'
import { StyleSheet, View, Text,Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import { modalText } from '../../assets/data';
import Button from '../Button';
import { AntDesign } from '@expo/vector-icons';


export default function SubmitModal({isVisible, submit, setModalVisible}) {
  return (
    <Modal  visible={isVisible} 
            animationType={'fade'}
            transparent={true}
            >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Pressable onPress={()=>setModalVisible(false)}>
                        <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                    
                    <Text> {modalText.title} </Text>
                    <Text>
                        {modalText.description}
                    </Text>
                    <Button small title={'I understand'} onPress={submit}/>
                </View>
            </View>    
        </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innerContainer: {
        height: '40%',
        width: '90%',
        padding: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10

    },
    title: {

    },
    description: {

    }

})
