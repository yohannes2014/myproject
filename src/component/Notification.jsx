import { cancelRemoveCard, deleteMusicRequest, fetchTotalRequest } from '../features/musicsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
   Notification,
   CancelNotificationBtn,
   NotificationCard,
   ConfirmNotificationBtn,
   SuccessNotification
} from "../styled/Notification.styles";

export const Warnning = () => {
   const music = useSelector((state) => state.musics.currentMusic)
   const dispatch = useDispatch();

   const warningConfirm = () => {
      dispatch(fetchTotalRequest());
      dispatch(deleteMusicRequest(music._id))
      dispatch(fetchTotalRequest());
      dispatch(cancelRemoveCard());
   }


   const warningCancel = () => {
      dispatch(cancelRemoveCard())
   }


   return (<Notification>
      <NotificationCard>
         <h4>Are you sure you want to delete</h4>
         <div>
            <ConfirmNotificationBtn onClick={() => warningConfirm()}>Yes</ConfirmNotificationBtn>
            <CancelNotificationBtn onClick={() => warningCancel()}>Cancel</CancelNotificationBtn>
         </div>
      </NotificationCard>
   </Notification>)
}

export const AddedSuccesfully = () => {
   return (
      <SuccessNotification>
         <h4>Music succesfully added</h4>
      </SuccessNotification>
   )
}


export const UpdatedSuccessfully = () => {
   return (
      <SuccessNotification>
         <h4>Music succesfully updated</h4>
      </SuccessNotification>
   )
}