import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {IMAGES, SvgDaha} from '../assets';

const Navbar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={IMAGES.Daha} />
      <View style={styles.right}>
        <TouchableOpacity style={styles.button}>
          <Text>Giriş Yap</Text>
        </TouchableOpacity>
        <SvgDaha />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 30,
    marginRight: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {width: 100, height: 50},
});

export {Navbar};
