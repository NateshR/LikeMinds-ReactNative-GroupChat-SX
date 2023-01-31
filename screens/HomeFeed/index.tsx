import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {dummyData} from '../../assets/dummyResponse/dummyData';
import HomeFeedExplore from '../../components/HomeFeedExplore';
import HomeFeedItem from '../../components/HomeFeedItem';
import STYLES from '../../constants/Styles';
import styles from './styles';

interface Props {
  navigation: any;
}

const HomeFeed = ({navigation}: Props) => {
  const [chats, setChats] = useState(dummyData.data.my_chatrooms);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity>
          <Text
            style={{
              color: STYLES.$COLORS.PRIMARY,
              fontSize: STYLES.$FONT_SIZES.XL,
              fontWeight: STYLES.$FONT_WEIGHTS.BOLD,
            }}>
            Community
          </Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: STYLES.$COLORS.TERTIARY,
              fontSize: STYLES.$FONT_SIZES.XL,
            }}>
            R
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.page}>
      <FlatList
        data={chats}
        ListHeaderComponent={() => <HomeFeedExplore newCount={5} />}
        renderItem={({item}) => {
          const homeFeedProps = {
            title: item?.chatroom?.title!,
            avatar: item?.chatroom?.chatroom_image_url!,
            lastMessage: item?.last_conversation?.answer!,
            lastMessageUser: item?.last_conversation?.member?.name!,
            time: item?.last_conversation?.reply_conversation_object
              ?.created_epoch!,

            unreadCount: item?.unseen_conversation_count!,
            pinned: false,
          };
          return <HomeFeedItem {...homeFeedProps} />;
        }}
        keyExtractor={item => item.chatroom.id.toString()}
      />
    </View>
  );
};

export default HomeFeed;
