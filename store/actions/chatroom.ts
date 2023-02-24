import {Dispatch} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {myClient} from '../..';
import {CALL_API} from '../apiMiddleware';
import {
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_FAILED,
  GET_CONVERSATIONS_SUCCESS,
  ON_CONVERSATIONS_CREATE,
  ON_CONVERSATIONS_CREATE_FAILED,
  ON_CONVERSATIONS_CREATE_SUCCESS,
} from '../types/types';

export const getConversations =
  (payload: any, showLoader:boolean) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: GET_CONVERSATIONS_SUCCESS,
        [CALL_API]: {
          func: myClient.getConversations(payload),
          body: payload,
          types: [
            GET_CONVERSATIONS,
            GET_CONVERSATIONS_SUCCESS,
            GET_CONVERSATIONS_FAILED,
          ],
          showLoader: showLoader,
        },
      });
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };

export const onConversationsCreate =
  (payload: any) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: ON_CONVERSATIONS_CREATE_SUCCESS,
        [CALL_API]: {
          func: myClient.onConversationsCreate(payload),
          body: payload,
          types: [
            ON_CONVERSATIONS_CREATE,
            ON_CONVERSATIONS_CREATE_SUCCESS,
            ON_CONVERSATIONS_CREATE_FAILED,
          ],
          showLoader: true,
        },
      });
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };
