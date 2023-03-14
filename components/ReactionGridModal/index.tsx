import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MyTabs from '../TopTabNavigator';

interface ReactionGridModal {
  modalVisible: boolean;
  setModalVisible: (val: any) => void;
  reactionArr: any;
  defaultReactionArr: any;
}

const ReactionGridModal = ({
  modalVisible,
  setModalVisible,
  reactionArr,
  defaultReactionArr,
}: ReactionGridModal) => {
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <Modal
      //   animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Pressable style={styles.centeredView} onPress={handleModalClose}>
        <View style={styles.modalParent}>
          <Pressable onPress={() => {}} style={[styles.modalView]}>
            <View style={styles.bar} />
            <View style={{padding: 20, paddingTop: 10, height: '100%'}}>
              <Text style={styles.text}>Reactions</Text>
              <MyTabs
                defaultReactionArr={defaultReactionArr}
                reactionArr={reactionArr}
              />
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ReactionGridModal;
