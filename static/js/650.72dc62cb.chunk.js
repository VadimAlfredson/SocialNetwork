"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[650],{650:function(e,o,t){t.r(o),t.d(o,{default:function(){return S}});var n=t(8683),s=t(2791),r=t(2005),i="Post_post__akrs7",l="Post_img__LCZ5K",a="Post_messageBlock__DTacw",u="Post_message__WRFZD",c="Post_like__wbWe1",d=t(184),f=function(e){return(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)("img",{className:l,src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}),(0,d.jsx)("div",{className:a,children:(0,d.jsx)("div",{className:u,children:e.message})}),(0,d.jsxs)("div",{className:c,children:[e.likeCount," like"]})]})},p={createText:"MyPosts_createText__T-jsH",buttonAddPost:"MyPosts_buttonAddPost__QtbW7",addpost:"MyPosts_addpost__+irvX"},h=t(5705),_=s.memo((function(e){return console.log("rerenderPost"),(0,d.jsx)(h.J9,{initialValues:{newPost:""},validateOnBlur:!0,onSubmit:function(o,t){var n=t.resetForm;e.createNewPost(o.newPost),console.log(o.newPost),n({values:void 0})},children:function(e){var o=e.values,t=e.handleBlur,n=e.handleChange,s=e.isValid,r=e.handleSubmit,i=e.dirty;return(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{type:"input",name:"newPost",onChange:n,placeholder:"Add text",className:p.createText,value:o.newPost,onBlur:t}),(0,d.jsx)("button",{className:p.buttonAddPost,disabled:!s&&!i,onClick:function(){r()},type:"submit",children:"Send"})]})}})})),j=function(e){var o=e.posts.map((function(e){return(0,d.jsx)(f,{message:e.message,likeCount:e.likeCount},e.id)}));return console.log("Rerender"),(0,d.jsxs)("div",{children:[(0,d.jsx)(_,{createNewPost:e.createNewPost}),(0,d.jsx)("div",{className:p.post,children:o})]})},v=(0,t(6434).$j)((function(e){return{posts:e.profile.posts,newPostText:e.profile.newPostText}}),(function(e){return{createNewPost:function(o){e((0,r.HP)(o))}}}))(j),x=t(885),m={profileClass:"Profile_profileClass__eq7lO",profileInfo:"Profile_profileInfo__OVCEI",avatarSide:"Profile_avatarSide__M2bsj",avatarImg:"Profile_avatarImg__3Egiz",inputPhoto:"Profile_inputPhoto__RonUU",labelUpdatePhoto:"Profile_labelUpdatePhoto__rIkOS",name:"Profile_name__7N8LX",status:"Profile_status__pnE9e",aboutMe:"Profile_aboutMe__UjygN",editMode:"Profile_editMode__71+RX",informationUser:"Profile_informationUser__7qzE9",buttonFollow:"Profile_buttonFollow__w3i6m",buttonUnfollow:"Profile_buttonUnfollow__wXenc",buttonEditInfo:"Profile_buttonEditInfo__iPGTb",profilePost:"Profile_profilePost__xVBaE"},P=t(4374),w=t(8755),b=function(e){var o=(0,w.TL)(),t=(0,s.useState)(!1),n=(0,x.Z)(t,2),i=n[0],l=n[1],a=(0,s.useState)(e.status),u=(0,x.Z)(a,2),c=u[0],f=u[1];return(0,s.useEffect)((function(){f(e.status)}),[e.status]),(0,d.jsxs)("div",{children:["  ",!i&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){return l(!e.isOwner)},children:e.status||"status"})}),i&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(e){f(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),o((0,r.FY)(c))},value:c})})]})},g=t(3504),C=function(e){var o=e.contactTitle,t=e.contactValue;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:[o,":"]})," ",t]})},N=function(e){var o=e.profile,t=e.isOwner,n=(0,s.useState)(!1),r=(0,x.Z)(n,2),i=r[0];r[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"looking for a job:"})," ",o.lookingForAJob?"yes":"no"]}),o.lookingForAJob&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"looking for a job description:"})," ",o.lookingForAJobDescription]})]}),(0,d.jsxs)("div",{className:m.aboutMe,children:[(0,d.jsx)("b",{children:"About me:"}),o.aboutMe]})]}),(0,d.jsx)("div",{className:m.contacts,children:!t&&i||Object.keys(o.contacts).filter((function(e){return o.contacts[e]})).map((function(e){return(0,d.jsx)(C,{contactTitle:e,contactValue:o.contacts[e]},e)}))})]})},k=function(e){return e.profile?(0,d.jsxs)("div",{className:m.profileClass,children:[(0,d.jsx)("div",{className:m.avatarSide,children:(0,d.jsx)("img",{className:m.avatarImg,src:e.profile.photos.large||"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"})}),(0,d.jsxs)("div",{className:m.profileInfo,children:[(0,d.jsx)("div",{className:m.name,children:(0,d.jsx)("b",{children:e.profile.fullName})}),(0,d.jsx)("div",{className:m.status,children:(0,d.jsx)(b,{status:e.status,isOwner:e.isOwner})}),(0,d.jsx)("div",{className:m.editMode,children:e.isOwner&&(0,d.jsx)("button",{className:e.follow?m.buttonUnfollow:m.buttonFollow,onClick:function(){e.onFollowProfileChange(e.profile.userId,e.follow)},children:e.follow?"Unfollow":"Follow"})}),(0,d.jsx)("div",{className:m.editMode,children:e.isOwner&&(0,d.jsx)(g.OL,{to:"/dialogs/"+e.profile.userId,className:m.buttonFollow,onClick:function(){e.onPutDialogOnProfileChange(e.profile.userId)},children:"Send message"})}),(0,d.jsx)("div",{className:m.informationUser,children:(0,d.jsx)(N,{profile:e.profile,isOwner:e.isOwner})})]})]}):(0,d.jsx)(P.Z,{})},y=function(e){return(0,d.jsxs)("div",{className:m.profileContent,children:[(0,d.jsx)("div",{className:m.profileInfo,children:(0,d.jsx)(k,{isOwner:e.isOwner,profile:e.profile,status:e.status,follow:e.follow,onFollowProfileChange:e.onFollowProfileChange,onPutDialogOnProfileChange:e.onPutDialogOnProfileChange})}),(0,d.jsx)("div",{className:m.profilePost,children:(0,d.jsx)(v,{})})]})},O=t(6871),I=t(7781),F=t(3502),Z=t(1333),T=t(443);var S=(0,I.qC)((function(e){return function(o){var t=(0,O.TH)(),s=(0,O.s0)(),r=(0,O.UO)();return(0,d.jsx)(e,(0,n.Z)((0,n.Z)({},o),{},{router:{location:t,navigate:s,params:r}}))}}),F.S)((function(e){var o=(0,w.TL)(),t=(0,w.CG)((function(e){return e.profile.profile})),i=(0,w.CG)((function(e){return e.profile.status})),l=(0,w.CG)((function(e){return e.profile.follow})),a=(0,w.CG)((function(e){return e.auth.userId}));(0,s.useEffect)((function(){var t=e.router.params.userId;t||(t=a),o((0,r.Hw)(t)),o((0,r.xD)(t)),o((0,r.fB)(t))}),[e.router.params.userId]),(0,s.useEffect)((function(){}),[]);return(0,d.jsx)(y,(0,n.Z)((0,n.Z)({},e),{},{isOwner:!!e.router.params.userId,profile:t,status:i,follow:l,onFollowProfileChange:function(e,t){o((0,r.Gv)(e,t)),o((0,Z.pt)(!0))},onPutDialogOnProfileChange:function(e){o((0,T.yZ)(e))}}))}))},3502:function(e,o,t){t.d(o,{S:function(){return p}});var n=t(8683),s=t(5671),r=t(3144),i=t(136),l=t(7277),a=t(2791),u=t(6434),c=t(6871),d=t(184),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var o=function(o){(0,i.Z)(a,o);var t=(0,l.Z)(a);function a(){return(0,s.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,n.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,u.$j)(f)(o)}}}]);
//# sourceMappingURL=650.72dc62cb.chunk.js.map