import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import Layout from '../../constants/Layout';
import STYLES from '../../constants/Styles';
import { styles } from './styles';

interface ImageScreen {
  navigation: any;
  route: any;
}

const ImageScreen = ({navigation, route}: ImageScreen) => {
  const {attachments} = route.params;
  const setInitialHeader = () => {
    navigation.setOptions({
      title: '',
      headerShadowVisible: false,
      headerLeft: () => (
        <View style={styles.headingContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require('../../assets/images/back_arrow3x.png')}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <View style={styles.chatRoomInfo}>
            <Text
              style={{
                color: STYLES.$COLORS.PRIMARY,
                fontSize: STYLES.$FONT_SIZES.LARGE,
                fontFamily: STYLES.$FONT_TYPES.BOLD,
              }}>
              {'Images'}
            </Text>
          </View>
        </View>
      ),
    });
  };

  useLayoutEffect(() => {
    setInitialHeader()
  }, [])
  return (
    <ScrollView>
      {attachments.map((val: any, index: any) => {
        return (
          <TouchableOpacity
            style={{
              marginTop:20
            }}
            onPress={() => {
              Linking.openURL(val?.url);
            }}
            key={val + index}>
            <Image
              style={{
                height: 250,
                width: '100%',
                resizeMode: 'contain',
              }}
              source={{uri: val?.url}}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ImageScreen;
