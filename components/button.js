import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Alert } from 'react-native';


const Btn = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Button
                title="Checkout"
                color="#7C12A1"
                onPress={() => Alert.alert('Button pressed')} />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginLeft: 70,
        marginRight: 70,

    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
});

export default Btn;