import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeFeed from '../screens/HomeFeed';
import ExploreFeed from '../screens/ExploreFeed';
import ChatRoom from '../screens/ChatRoom';
import {useAppSelector} from '../store';
import ReportScreen from '../screens/ReportMessage';
import ImageScreen from '../components/ImageScreen';
import {
  LoaderChatroomComponent,
  LoaderComponent,
} from '../components/LoaderComponent';

const Stack = createNativeStackNavigator();

const SwitchComponent = () => {
  const {count, chatroomCount} = useAppSelector(state => state.loader);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeFeed">
          <Stack.Screen name="HomeFeed" component={HomeFeed} />
          <Stack.Screen name="ExploreFeed" component={ExploreFeed} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          <Stack.Screen name="Report" component={ReportScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {count > 0 && <LoaderComponent />}
      {chatroomCount > 0 && <LoaderChatroomComponent />}
    </View>
  );
};

export default SwitchComponent;
