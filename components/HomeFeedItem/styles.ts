import {Platform, StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: STYLES.$PADDINGS.MEDIUM,
    alignItems: 'center',
    backgroundColor: STYLES.$COLORS.TERTIARY,
  },
  avatar: {
    width: STYLES.$AVATAR.WIDTH,
    height: STYLES.$AVATAR.HEIGHT,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.SMALL,
  },
  lockIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: STYLES.$FONT_SIZES.XL,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    color: STYLES.$COLORS.PRIMARY,
    maxWidth: '80%',
  },
  time: {
    color: STYLES.$COLORS.MSG,
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
  },
  lastMessage: {
    color: STYLES.$COLORS.PRIMARY,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    width: '85%',
    // width: 240,
  },
  deletedMessage: {
    color: STYLES.$COLORS.PRIMARY,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    fontStyle: 'italic',
    width: '85%',
    // width: 240,
  },
  attachment_msg: {
    color: STYLES.$COLORS.PRIMARY,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  pinned: {
    width: 20,
    height: 20,
    backgroundColor: STYLES.$COLORS.PRIMARY,
    borderRadius: 10,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  unreadCountContainer: {
    minWidth: 25,
    minHeight: 25,
    backgroundColor: STYLES.$COLORS.PRIMARY,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: 5,
    bottom: 16,
    right: 20,
  },
  unreadCount: {
    color: STYLES.$COLORS.TERTIARY,
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
    marginTop: Platform.OS === 'ios' ? 2 : -1
    // padding: 5,
    // backgroundColor:'yellow'
  },
});
