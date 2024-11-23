import { cancelRemoveCard, deleteMusicRequest, fetchTotalRequest } from '../features/musicsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Notification,
  CancelNotificationBtn,
  NotificationCard,
  ConfirmNotificationBtn,
  SuccessNotification
} from "../styled/Notification.styles";
import { RootState } from '../types/musicTypes';

// Define the types for Redux state and the music item
/* const music = useSelector((state: RootState) => state.musics); */


export const Warnning: React.FC = () => {
  const music = useSelector((state: RootState) => state.musics.currentMusic);
  const dispatch = useDispatch();

  const warningConfirm = () => {
    if (music) {
      dispatch(fetchTotalRequest());
      dispatch(deleteMusicRequest(music._id));
      dispatch(fetchTotalRequest());
      dispatch(cancelRemoveCard());
    }
  };

  const warningCancel = () => {
    dispatch(cancelRemoveCard());
  };

  return (
    <Notification>
      <NotificationCard>
        <h4>Are you sure you want to delete?</h4>
        <div>
          <ConfirmNotificationBtn onClick={warningConfirm}>Yes</ConfirmNotificationBtn>
          <CancelNotificationBtn onClick={warningCancel}>Cancel</CancelNotificationBtn>
        </div>
      </NotificationCard>
    </Notification>
  );
};

export const AddedSuccesfully: React.FC = () => {
  return (
    <SuccessNotification>
      <h4>Music successfully added</h4>
    </SuccessNotification>
  );
};

export const UpdatedSuccessfully: React.FC = () => {
  return (
    <SuccessNotification>
      <h4>Music successfully updated</h4>
    </SuccessNotification>
  );
};
