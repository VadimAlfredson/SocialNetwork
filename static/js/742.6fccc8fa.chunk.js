"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[742],{4742:function(e,s,a){a.r(s),a.d(s,{default:function(){return L}});var n=a(443),i=a(2791),t="Dialogs_dialogs__GBcEp",r="Dialogs_dialogsTitle__bxfTn",o="Dialogs_dialogsUsers__LBmt6",d="Dialogs_dialogItem__k9CuM",l="Dialogs_active__zK1A-",g="Dialogs_titleMessages__2oe-t",c="Dialogs_messages__Ly6dr",u="Dialogs_addMessage__+SI4K",_="Dialogs_inputAddMessage__KTTQa",h="Dialogs_buttonAddMessage__gnvoU",m="Dialogs_divAddMessage__EcDqL",f="Dialogs_iconMessage__L+5-e",v="Dialogs_message__pyaWz",x="Dialogs_divMessage__lpG8t",I="Dialogs_messageForm__5uYWH",M="Dialogs_divOwnerMessage__vv-7J",j="Dialogs_ownerMessageForm__zHNC0",D="Dialogs_textMessage__rleMB",p="Dialogs_ownerTextMessage__Sdmym",C="Dialogs_h3text__5icbU",N=a(3504),k=a(184),T=function(e){return(0,k.jsx)(N.OL,{to:"/dialogs/"+e.id,onClick:function(){e.onGetMessagesUser(e.id)},className:function(e){return e.isActive?l:d},children:e.name})},S=function(e){return(0,i.useEffect)((function(){e.getUsersIcon(e.senderId)}),[e.senderId]),(0,k.jsxs)("div",{className:e.senderId===e.OwnerId?M:x,children:[(0,k.jsx)("div",{children:(0,k.jsx)("img",{className:f,src:e.senderIcon})}),(0,k.jsx)("div",{className:e.senderId===e.OwnerId?j:I,children:(0,k.jsx)("a",{className:e.senderId===e.OwnerId?p:D,children:e.message})})]})},w=a(5705),b=a(132),A=function(e){var s=b.Z_();return(0,k.jsx)(w.J9,{initialValues:{textMessage:""},validateOnBlur:!0,onSubmit:function(s,a){var n=a.resetForm;!function(s){e.onMessageSentChange(e.dialogId,s)}(s.textMessage),console.log(s.textMessage),n({values:void 0})},validationSchema:s,children:function(e){var s=e.values,a=e.handleBlur,n=e.handleChange,i=e.isValid,t=e.handleSubmit,r=e.dirty;return(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)("input",{className:_,type:"textarea",name:"textMessage",onChange:n,onBlur:a,value:s.textMessage,placeholder:"Add new message"}),(0,k.jsx)("br",{}),(0,k.jsx)("button",{className:h,disabled:!i&&!r,onClick:function(){t()},type:"submit",children:"Sent"})]})}})},U=function(e){return(0,k.jsx)(A,{dialogId:e.dialogId,onMessageSentChange:e.onMessageSentChange})},y=function(e){(0,i.useEffect)((function(){e.getDialogsThunkCreator()}),[]);var s=function(s){e.getMessagesUserThunkCreator(s)},a=function(s){return e.getSenderIconThunkCreator(s)},n=e.dialogs.map((function(e){return(0,k.jsx)(T,{name:e.userName,id:e.id,onGetMessagesUser:s},e.id)})),d=e.messages[0]?e.messages.map((function(s){return(0,k.jsx)(S,{dialogs:e.dialogs,message:s.body,dialogId:e.dialogId,senderIcon:e.senderIcon,getUsersIcon:a,senderId:s.senderId,OwnerId:e.OwnerId},s.id)})):(0,k.jsx)("div",{children:(0,k.jsx)("h3",{className:C,children:"start chatting first"})});return(0,k.jsxs)("div",{className:t,children:[(0,k.jsxs)("div",{className:o,children:[(0,k.jsx)("div",{className:r,children:"Dialogs"}),n]}),(0,k.jsxs)("div",{className:c,children:[(0,k.jsx)("div",{className:g,children:"Messages"}),(0,k.jsx)("div",{className:v,children:d}),(0,k.jsx)("div",{className:u,children:(0,k.jsx)(U,{dialogId:e.dialogId,onMessageSentChange:function(s,a){e.postMessageToUserThunkCreator(s,a)}})})]})]})},O=a(6434),B=a(7781),Z=a(3502),L=(0,B.qC)((0,O.$j)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,isAuth:e.auth.isAuth,dialogId:e.dialogsPage.dialogId,senderIcon:e.dialogsPage.senderIcon,OwnerId:e.auth.userId}}),{getDialogsThunkCreator:n.kp,getMessagesUserThunkCreator:n.rm,postMessageToUserThunkCreator:n.C7,getSenderIconThunkCreator:n.uw}),Z.S)(y)},3502:function(e,s,a){a.d(s,{S:function(){return _}});var n=a(8683),i=a(5671),t=a(3144),r=a(136),o=a(7277),d=a(2791),l=a(6434),g=a(6871),c=a(184),u=function(e){return{isAuth:e.auth.isAuth}},_=function(e){var s=function(s){(0,r.Z)(d,s);var a=(0,o.Z)(d);function d(){return(0,i.Z)(this,d),a.apply(this,arguments)}return(0,t.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,n.Z)({},this.props)):(0,c.jsx)(g.Fg,{to:"/login"})}}]),d}(d.Component);return(0,l.$j)(u)(s)}}}]);
//# sourceMappingURL=742.6fccc8fa.chunk.js.map