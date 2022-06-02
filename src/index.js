import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                friends={state.friendsList.friends}
                /*state={state}*/
                AddPost={store.AddPost.bind(store)}
                AddMessageInDialogs={store.AddMessageInDialogs.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                updateMessageInDialogs={store.updateMessageInDialogs.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();

// export let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App
//                 posts={state.profilePage.posts}
//                 AddPost={AddPost}
//                 AddMessageInDialogs={AddMessageInDialogs}
//                 dialogs={state.dialogsPage.dialogs}
//                 messages={state.dialogsPage.messages}
//                 addNewMessage={state.dialogsPage.addNewMessage}
//                 newPostText={state.profilePage.newPostText}
//                 updatePostText={updatePostText}
//                 updateMessageInDialogs={updateMessageInDialogs}
//                 friends={state.friendsList.friends}
//             />
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }



