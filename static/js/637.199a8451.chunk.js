"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[637],{8637:function(e,o,t){t.r(o),t.d(o,{default:function(){return J}});var n=t(5671),r=t(3144),s=t(136),i=t(7277),a=t(8683),l=t(2791),u=t(2005),c="Post_post__akrs7",f="Post_img__LCZ5K",d="Post_messageBlock__DTacw",p="Post_message__WRFZD",h="Post_like__wbWe1",x=t(184),j=function(e){return(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)("img",{className:f,src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}),(0,x.jsx)("div",{className:d,children:(0,x.jsx)("div",{className:p,children:e.message})}),(0,x.jsxs)("div",{className:h,children:[e.likeCount," like"]})]})},b={createText:"MyPosts_createText__T-jsH",buttonAddPost:"MyPosts_buttonAddPost__QtbW7",addpost:"MyPosts_addpost__+irvX"},g=t(5705),v=l.memo((function(e){return console.log("rerenderPost"),(0,x.jsx)(g.J9,{initialValues:{newPost:""},validateOnBlur:!0,onSubmit:function(o,t){var n=t.resetForm;e.createNewPost(o.newPost),console.log(o.newPost),n({values:void 0})},children:function(e){var o=e.values,t=e.handleBlur,n=e.handleChange,r=e.isValid,s=e.handleSubmit,i=e.dirty;return(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"input",name:"newPost",onChange:n,placeholder:"Add text",className:b.createText,value:o.newPost,onBlur:t}),(0,x.jsx)("button",{className:b.buttonAddPost,disabled:!r&&!i,onClick:function(){s()},type:"submit",children:"Send"})]})}})})),m=function(e){var o=e.posts.map((function(e){return(0,x.jsx)(j,{message:e.message,likeCount:e.likeCount},e.id)}));return console.log("Rerender"),(0,x.jsxs)("div",{children:[(0,x.jsx)(v,{createNewPost:e.createNewPost}),(0,x.jsx)("div",{className:b.post,children:o})]})},P=t(6434),C=(0,P.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{createNewPost:function(o){e((0,u.HP)(o))}}}))(m),k=t(885),_={profileClass:"Profile_profileClass__eq7lO",profileInfo:"Profile_profileInfo__OVCEI",avatarSide:"Profile_avatarSide__M2bsj",avatarImg:"Profile_avatarImg__3Egiz",inputPhoto:"Profile_inputPhoto__RonUU",labelUpdatePhoto:"Profile_labelUpdatePhoto__rIkOS",name:"Profile_name__7N8LX",status:"Profile_status__pnE9e",aboutMe:"Profile_aboutMe__UjygN",editMode:"Profile_editMode__71+RX",informationUser:"Profile_informationUser__7qzE9",buttonFollow:"Profile_buttonFollow__w3i6m",buttonUnfollow:"Profile_buttonUnfollow__wXenc",buttonEditInfo:"Profile_buttonEditInfo__iPGTb",profilePost:"Profile_profilePost__xVBaE"},w=t(4374),y=function(e){var o=(0,l.useState)(!1),t=(0,k.Z)(o,2),n=t[0],r=t[1],s=(0,l.useState)(e.status),i=(0,k.Z)(s,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){u(e.status)}),[e.status]),(0,x.jsxs)("div",{children:["  ",!n&&(0,x.jsx)("div",{children:(0,x.jsx)("span",{onDoubleClick:function(){return r(!0)},children:e.status||"status"})}),n&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.putStatusThunkCreator(a)},value:a})})]})},T=(0,P.$j)((function(e){return{isAuth:e.auth.isAuth,profile:e.profilePage.profile}}),{ProfileThunkCreator:u.WE})((function(e){return(0,x.jsx)(g.J9,{initialValues:{fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,aboutMe:e.profile.aboutMe,contacts:e.profile.contacts},validateOnBlur:!0,onSubmit:function(o){console.log(o),console.log(e.profile),e.ProfileThunkCreator(o),e.editModeOnOff(!1)},children:function(o){var t=o.values,n=(o.errors,o.touched,o.handleBlur),r=o.handleChange,s=o.isValid,i=o.handleSubmit,a=o.dirty;return(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"text",name:"fullName",onChange:r,onBlur:n,disabled:!0,value:t.fullName||e.profile.fullName||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"Looking for a job:"}),(0,x.jsx)("input",{type:"checkbox",name:"lookingForAJob",onChange:r,onBlur:n}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"Looking for a job description:"}),(0,x.jsx)("input",{type:"text",name:"lookingForAJobDescription",onChange:r,onBlur:n,value:t.lookingForAJobDescription||"",disabled:!t.lookingForAJob}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"About Me:"}),(0,x.jsx)("input",{type:"text",name:"aboutMe",onChange:r,onBlur:n,value:t.aboutMe||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"contacts:"}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"github:"}),(0,x.jsx)("input",{type:"text",name:"contacts.github",onChange:r,onBlur:n,value:t.contacts.github||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"vk:"}),(0,x.jsx)("input",{type:"text",name:"contacts.vk",onChange:r,onBlur:n,value:t.contacts.vk||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"facebook:"}),(0,x.jsx)("input",{type:"text",name:"contacts.facebook",onChange:r,onBlur:n,value:t.contacts.facebook||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"instagram:"}),(0,x.jsx)("input",{type:"text",name:"contacts.instagram",onChange:r,onBlur:n,value:t.contacts.instagram||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"twitter:"}),(0,x.jsx)("input",{type:"text",name:"contacts.twitter",onChange:r,onBlur:n,value:t.contacts.twitter||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"website:"}),(0,x.jsx)("input",{type:"text",name:"contacts.website",onChange:r,onBlur:n,value:t.contacts.website||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"youtube:"}),(0,x.jsx)("input",{type:"text",name:"contacts.youtube",onChange:r,onBlur:n,value:t.contacts.youtube||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"mainLink:"}),(0,x.jsx)("input",{type:"text",name:"contacts.mainLink",onChange:r,onBlur:n,value:t.contacts.mainLink||""}),(0,x.jsx)("br",{}),(0,x.jsx)("button",{disabled:!s&&!a,onClick:function(){i()},type:"submit",children:"Save"})]})}})})),N=t(3504),F=function(e){var o=e.contactTitle,t=e.contactValue;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("b",{children:[o,":"]})," ",t]})},S=function(e){var o=e.profile,t=e.isOwner,n=(0,l.useState)(!1),r=(0,k.Z)(n,2),s=r[0],i=r[1],a=function(e){return i(e)};return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[t||!s&&(0,x.jsx)("button",{className:_.buttonEditInfo,onClick:function(){a(!0)},children:"edit information"}),!t&&s&&(0,x.jsx)("div",{children:(0,x.jsx)(T,{editModeOnOff:a})}),s||(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"looking for a job:"})," ",o.lookingForAJob?"yes":"no"]}),o.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"looking for a job description:"})," ",o.lookingForAJobDescription]})]}),(0,x.jsxs)("div",{className:_.aboutMe,children:[(0,x.jsx)("b",{children:"About me:"}),o.aboutMe]})]}),(0,x.jsx)("div",{className:_.contacts,children:!t&&s||Object.keys(o.contacts).filter((function(e){return o.contacts[e]})).map((function(e){return(0,x.jsx)(F,{contactTitle:e,contactValue:o.contacts[e]},e)}))})]})},O=function(e){if(!e.profile)return(0,x.jsx)(w.Z,{});return(0,x.jsxs)("div",{className:_.profileClass,children:[(0,x.jsxs)("div",{className:_.avatarSide,children:[(0,x.jsx)("img",{className:_.avatarImg,src:e.profile.photos.large||"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}),e.isOwner||(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:_.labelUpdatePhoto,children:"upload photo"}),(0,x.jsx)("input",{className:_.inputPhoto,type:"file",onChange:function(o){o.target.files.length&&e.savePhotoTC(o.target.files[0])}})]})]}),(0,x.jsxs)("div",{className:_.profileInfo,children:[(0,x.jsx)("div",{className:_.name,children:(0,x.jsx)("b",{children:e.profile.fullName})}),(0,x.jsx)("div",{className:_.status,children:(0,x.jsx)(y,{status:e.status,putStatusThunkCreator:e.putStatusThunkCreator})}),(0,x.jsx)("div",{className:_.editMode,children:e.isOwner&&(0,x.jsx)("button",{className:e.follow?_.buttonUnfollow:_.buttonFollow,onClick:function(){e.onFollowProfileChange(e.profile.userId,e.follow)},children:e.follow?"Unfollow":"Follow"})}),(0,x.jsx)("div",{className:_.editMode,children:e.isOwner&&(0,x.jsx)(N.OL,{to:"/dialogs/"+e.profile.userId,className:_.buttonFollow,onClick:function(){e.onPutDialogOnProfileChange(e.profile.userId)},children:"Send message"})}),(0,x.jsx)("div",{className:_.informationUser,children:(0,x.jsx)(S,{profile:e.profile,isOwner:e.isOwner})})]})]})},A=function(e){return(0,x.jsxs)("div",{className:_.profileContent,children:[(0,x.jsx)("div",{className:_.profileInfo,children:(0,x.jsx)(O,{savePhotoTC:e.savePhotoTC,isOwner:e.isOwner,profile:e.profile,putStatusThunkCreator:e.putStatusThunkCreator,status:e.status,follow:e.follow,onFollowProfileChange:e.onFollowProfileChange,onPutDialogOnProfileChange:e.onPutDialogOnProfileChange})}),(0,x.jsx)("div",{className:_.profilePost,children:(0,x.jsx)(C,{})})]})},I=t(6871),B=t(7781),M=t(3502),U=t(1333),Z=t(443);var D=function(e){(0,s.Z)(t,e);var o=(0,i.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=o.call.apply(o,[this].concat(s))).onFollowProfileChange=function(o,t){e.props.onFollowProfileChangeThunkCreator(o,t),e.props.getSubscriptionsThunkCreator(!0)},e.onPutDialogOnProfileChange=function(o){e.props.putDialogUserThunkCreator(o)},e}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId),this.props.userProfileThunkCreator(e),this.props.getStatusThunkCreator(e),this.props.getFollowThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,o,t){this.props.router.params.userId==e.router.params.userId&&this.props.router.params.follow==e.router.params.follow||this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(A,(0,a.Z)((0,a.Z)({},this.props),{},{isOwner:!!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,putStatusThunkCreator:this.props.putStatusThunkCreator,savePhotoTC:this.props.savePhotoTC,follow:this.props.follow,onFollowProfileChange:this.onFollowProfileChange,onPutDialogOnProfileChange:this.onPutDialogOnProfileChange}))}}]),t}(l.Component),J=(0,B.qC)((function(e){return function(o){var t=(0,I.TH)(),n=(0,I.s0)(),r=(0,I.UO)();return(0,x.jsx)(e,(0,a.Z)((0,a.Z)({},o),{},{router:{location:t,navigate:n,params:r}}))}}),(0,P.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,follow:e.profilePage.follow}}),{setUserProfile:u.$l,userProfileThunkCreator:u.Hw,getStatusThunkCreator:u.xD,putStatusThunkCreator:u.FY,savePhotoTC:u.Tw,getFollowThunkCreator:u.fB,onFollowProfileChangeThunkCreator:u.Gv,getSubscriptionsThunkCreator:U.pt,putDialogUserThunkCreator:Z.yZ}),M.S)(D)},3502:function(e,o,t){t.d(o,{S:function(){return p}});var n=t(8683),r=t(5671),s=t(3144),i=t(136),a=t(7277),l=t(2791),u=t(6434),c=t(6871),f=t(184),d=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var o=function(o){(0,i.Z)(l,o);var t=(0,a.Z)(l);function l(){return(0,r.Z)(this,l),t.apply(this,arguments)}return(0,s.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,n.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(d)(o)}}}]);
//# sourceMappingURL=637.199a8451.chunk.js.map