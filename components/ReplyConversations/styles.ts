import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  messageParent: {
    margin: 20,
    marginBottom: 0,
  },
  replyMessage: {
    padding: 10,
    // margin: 10,
    // maxWidth: '80%',
    width: '80%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: '#fff',
    // elevation: 2,
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderBottomRightRadius: 0,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
    // maxWidth: '80%',
    // textAlign: 'left',
  },
  messageDate: {
    fontSize: 10,
    color: '#aaa',
    // marginTop: 5,
    textAlign: 'right',
  },
  replySender: {
    color: 'green',
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
  },
  replyBox: {
    maxHeight: 60,
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: STYLES.$COLORS.SECONDARY,
    padding: 10,
    overflow: 'hidden',
    marginBottom: STYLES.$MARGINS.XS,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  alignRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
