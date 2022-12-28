import React from "react";
import { StyleSheet, Text, View, SafeAreaView, } from "react-native";
import Btn from "./components/button";

const Payment = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={styles.head}>
        <View style={{ flexDirection: 'row' }} >
          <View style={{ flex: 3, padding: 30 }}>
            <Text style={{ fontWeight: 'bold', fontSize: '25px', color: "white" }}>
              Order
            </Text>
          </View>
          <View style={{ flex: 3, padding: 30, flexDirection: "row-reverse" }}>
            <Text style={{ fontSize: '20px', color: "white" }}>Close</Text>
          </View>
        </View>
      </View>


      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View style={{ flex: 1 }}>
            <Text >
              Subtotal
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>
              $44.8
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View style={{ flex: 1 }}>
            <Text>
              Text & Fee
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>
              $3.50
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View style={{ flex: 1 }}>
            <Text>
              Delivery
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>
              Free
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View style={{ flex: 1 }}>
            <Text style={styles.txt}>
              Total
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.txt}>
              $48
            </Text>
          </View>
        </View>
      </View>


      <View style={{ marginTop: 40 }}>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 1 }}>
              <Text >
                Subtotal
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text>
                440$
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 1 }}>
              <Text>
                Text & Fee
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text>
                $3.50
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 1 }}>
              <Text>
                Delivery
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text>
                Free
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 1 }}>
              <Text style={styles.txt}>
                Total
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.txt}>
                $48
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Btn />
      </View>



    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: -30,
    color: '#fff',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  head: {
    flex: 1,
    backgroundColor: "#7C12A1",
    height: '30%',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
  },
  txt: {
    fontWeight: 'bold'
  }

});

export default Payment;