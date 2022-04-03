import React from 'react'
import { StyleSheet, View, Text, Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../Button'


export default function FridgeRestockModal({isVisible, setModalVisible, title, description, price}) {
  return (
    <Modal  visible={isVisible} 
            animationType={'fade'}
            transparent={true}
            >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.outerContainer}>
                <Pressable style={styles.innerContainer} onPress={()=>{}}>
                    <Pressable onPress={()=>setModalVisible(false)}
                                style={styles.closeIcon}>
                        <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                    <View style={styles.content}>
                        <View style={styles.text}>
                            <Text style={styles.title}> {title} </Text>
                            <Text>
                                {description}
                            </Text>
                            <Text><Text style={styles.price}>Price: </Text>{price}</Text>
                        </View>
                        
                        <Button small title={'Okay'} onPress={()=>setModalVisible(false)}/>
                    </View>
                    
                </Pressable>
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
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '5%'
    },
    content: {
        alignItems: 'center',
        padding: '10%'
    },
    closeIcon: {
        flexDirection: 'row-reverse'
    },
    text: {
        alignItems: 'center',
        marginBottom: '5%'
    },
    price: {
        fontWeight: 'bold',
    }

})
