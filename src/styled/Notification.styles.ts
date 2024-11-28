import styled from "@emotion/styled";


export const Notification = styled.div`
width:100%;
height:100%;
position:fixed;
display:flex;
align-items:center;
flex-direction:column;
background-color: rgba(205, 209, 234, 0.3);
backdrop-filter:blur(4px);
z-index:100;
top:0;
left:0;
right:0;
`;

export const CancelNotificationBtn = styled.button`
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

export const NotificationCard = styled.div`
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

export const ConfirmNotificationBtn = styled.button`
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

export const SuccessNotification = styled.div`
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