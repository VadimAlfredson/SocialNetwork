import React from "react";
import s from "../Dialogs.module.css";
import {AddMessageIDialogsActionCreator, UpdateMessageInDialogsActionCreator} from "../../../Redux/dialogs_reduser.ts";

export const AddMessage: React.FC = (props) => {
    let createMessage = React.createRef();

    let onMessageChange: React.FC = () => {
        let text: string = createMessage.current.value;
        props.UpdateMessageInDialogs(text)
    };

    let addMessageElement: React.FC = () => {
        props.AddMessageIDialogs();
    }

    return <div className={s.divAddMessage}>
        <div>
            <textarea
                placeholder={'Add message'}
                className={s.textareaAddMessage}
                ref={createMessage}
                onChange={onMessageChange}
                value={props.addNewMessage}
            />
        </div>
        <div>
            <button className={s.buttonAddMessage} onClick={addMessageElement}>Sent</button>
        </div>
    </div>
}
//const MyPosts = (props) => {
//     let postElements = props.posts.map(
//         p => <Post message={p.message} like={p.likeCount}/>
//     );
//
//     let newPostElement = React.createRef();
//
//     let createNewPost = () =>
//     {
//         props.createNewPost();
//     }
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text);
//     }
//     return (
//         <div>
//             <div className={s.addpost}>
//                 <div>
//                     <textarea onChange={onPostChange}
//                               placeholder='Add text'
//                               className={s.createText}
//                               ref={newPostElement}
//                               value={props.newPostText}
//                     />
//                 </div>
//                 <div>
//                     <button className={s.buttonAddPost} onClick={createNewPost}>Add post</button>
//                 </div>
//             </div>