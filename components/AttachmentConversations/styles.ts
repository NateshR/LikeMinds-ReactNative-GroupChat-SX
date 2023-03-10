import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: 5,
  },
  attachmentMessage: {
    padding: 10,
    width: '80%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: '#fff',
    // elevation: 2,
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
  alignRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
    padding: 10,
    borderRadius: 5,
  },
  docName: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
    width: '80%',
  },
  messageText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
    marginTop: 5,
  },
  messageDate: {
    fontSize: 10,
    color: '#aaa',
    textAlign: 'right',
  },
  fullListCount: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.LIGHT_BLUE,
    marginTop: 5,
  },
  singleImg: {height: 150, width: '100%', resizeMode: 'cover'},
  doubleImgParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 5,
  },
  doubleImg: {height: 150, width: '100%', resizeMode: 'cover', borderRadius: 5},
  multipleImg: {
    height: 150,
    width: '49%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  tripleImgText: {
    color: 'white',
    fontSize: STYLES.$FONT_SIZES.XXL,
  },
  tripleImgOverlay: {
    position: 'absolute',
    right: 0,
    height: 150,
    width: '50%',
    backgroundColor: 'black',
    opacity: 0.3,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableImg: {height: 150, width: '49%'},
});
