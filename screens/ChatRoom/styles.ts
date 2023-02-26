import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  selectedHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,
  },
  backBtn: {height: 40, width: 40, borderRadius: 10, resizeMode: 'contain'},
  selectedBackBtn: {height: 20, width: 20, resizeMode: 'contain'},
  threeDots: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  chatRoomInfo: {gap: 5},

  inputContainer: {
    flexDirection: 'row',
    // padding: 10,
    // backgroundColor: '#fff',
    // elevation: 2,
    flexGrow: 1,
    backgroundColor: 'pink',
  },
  emojiButton: {
    padding: 10,
  },
  emoji: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  disabledInput:{
    marginVertical: 20,
    marginHorizontal: 10,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
    borderRadius: 25,
    justifyContent:'center',
    borderColor: STYLES.$COLORS.MSG,
    borderWidth: 1,
  },
  disabledInputText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.MSG,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    // elevation: 2,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emojiPicker: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    // elevation: 2,
  },

  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 20,
  },
  modalView: {
    position: 'absolute',
    right: 0,
    marginLeft: 10,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    // width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  filtersView: {paddingHorizontal: 10, paddingVertical: 20},
  filterText: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
  },
});
