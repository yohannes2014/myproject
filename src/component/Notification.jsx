
import styled from "@emotion/styled";
import {  cancelRemoveCard, deleteMusicRequest, fetchTotalRequest } from '../features/musicsSlice';
import { useDispatch, useSelector } from 'react-redux';


    const Notification = styled.div`
            width:100%;
            height:100%;
            position:fixed;
            margin:auto;
            display:flex;
            align-items:center;
            flex-direction:column;
            border-radius:10px;
            background-color: rgba(205, 209, 234, 0.3);
            backdrop-filter:blur(4px);
            z-index:100;
            

`;
const CancelNotificationBtn = styled.button`
 margin:5px;
 cursor: pointer;
 padding:5px 20px;
 background-color:lightgray;
 border-radius:5px;
 transition:0.3s ease-in-out;
 :hover{
   background-color:gray;
   color:white;
 }
`;

const NotificationCard = styled.div`
             width:300px;
            height:150px;
            background-color:wheat;
            margin:auto;
            display:flex;
            align-items:center;
            justify-content:space-around;
            flex-direction:column;
            border-radius:10px;
            box-shadow:0px 0px 8px 0.2px black;

`;

const ConfirmNotificationBtn = styled.button`
         margin:5px;
         cursor: pointer;
         padding:5px 20px;
         background-color:skyblue;
         border-radius:5px;
         transition:0.3s ease-in-out;

         :hover{
            background-color:blue;
            color:white;
         }
`;

const SuccessNotification = styled.div`
             width:300px;
            height:150px;
            background-color:wheat;
            margin:auto;
            display:flex;
            align-items:center;
            justify-content:space-around;
            flex-direction:column;
            border-radius:10px;
            box-shadow:0px 0px 8px 0.2px black;
            z-index:10000;
            position:fixed;
            left:0;
            right:0;

`;




 export const Warnning = () => { 
   const music = useSelector((state)=>state.musics.currentMusic)
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
    return( <Notification>
    <NotificationCard>
    <h4>Are you sure you want to delete</h4>
    <div>
    <ConfirmNotificationBtn onClick={()=>warningConfirm()}>Yes</ConfirmNotificationBtn>

    <CancelNotificationBtn onClick={()=>warningCancel()}>Cancel</CancelNotificationBtn>
    </div>
    </NotificationCard>
    
    </Notification>)
    }
  


 export const AddedSuccesfully = () => { 
    return( 
    <SuccessNotification>
    <h4>Music succesfully added</h4>
    </SuccessNotification>
    )
    }


 export const UpdatedSuccessfully = () => { 
    return( 
    <SuccessNotification>
    <h4>Music succesfully updated</h4>
    </SuccessNotification>
   )
    }
  






