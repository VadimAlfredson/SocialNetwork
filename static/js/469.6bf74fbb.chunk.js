"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[469],{8469:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(2791),a="Setting_profileInfoForm__0zC+k",r="Setting_itemFormInput__T1BVl",i="Setting_inputUploadPhoto__p3uZS",s="Setting_blockUploadPhoto__522c0",l="Setting_textUploadPhoto__8gA17",u=n(5705),c=n(6434),h=n(2005),b=n(8755),x=n(184),d=(0,c.$j)((function(e){return{}}),{ProfileThunkCreator:h.WE,userProfileThunkCreator:h.Hw})((function(e){var t=(0,b.CG)((function(e){return e.profile.profile})),n=(0,b.TL)();return(0,x.jsx)(u.J9,{enableReinitialize:!0,initialValues:{fullName:t.fullName,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,aboutMe:t.aboutMe,contacts:t.contacts},validateOnBlur:!0,onSubmit:function(e){n((0,h.WE)(e))},children:function(e){e.enableReinitialize;var n=e.values,o=(e.errors,e.touched,e.handleBlur),a=e.handleChange,i=e.isValid,s=e.handleSubmit,l=e.dirty;return(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{className:r,type:"text",name:"fullName",onChange:a,onBlur:o,disabled:!0,value:n.fullName||t.fullName||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"Looking for a job:"}),(0,x.jsx)("input",{type:"checkbox",name:"lookingForAJob",onChange:a,onBlur:o}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"Looking for a job description:"}),(0,x.jsx)("input",{className:r,type:"text",name:"lookingForAJobDescription",onChange:a,onBlur:o,value:n.lookingForAJobDescription||"",disabled:!n.lookingForAJob}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"About Me:"}),(0,x.jsx)("input",{className:r,type:"text",name:"aboutMe",onChange:a,onBlur:o,value:n.aboutMe||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"contacts:"}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"github:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.github",onChange:a,onBlur:o,value:n.contacts.github||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"vk:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.vk",onChange:a,onBlur:o,value:n.contacts.vk||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"facebook:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.facebook",onChange:a,onBlur:o,value:n.contacts.facebook||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"instagram:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.instagram",onChange:a,onBlur:o,value:n.contacts.instagram||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"twitter:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.twitter",onChange:a,onBlur:o,value:n.contacts.twitter||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"website:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.website",onChange:a,onBlur:o,value:n.contacts.website||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"youtube:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.youtube",onChange:a,onBlur:o,value:n.contacts.youtube||""}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"mainLink:"}),(0,x.jsx)("input",{className:r,type:"text",name:"contacts.mainLink",onChange:a,onBlur:o,value:n.contacts.mainLink||""}),(0,x.jsx)("br",{}),(0,x.jsx)("button",{disabled:!i&&!l,onClick:function(){s()},type:"submit",children:"Save"})]})}})})),p=function(e){var t=(0,b.CG)((function(e){return e.profile.profile}));return(0,x.jsxs)("div",{className:a,children:[(0,x.jsx)("h3",{children:"Profile setting"}),(0,x.jsx)("div",{children:(0,x.jsxs)("label",{className:s,children:[(0,x.jsx)("a",{className:l,children:"Upload photo"}),(0,x.jsx)("img",{src:t.photos.large||e.defaultPhoto,alt:"avatar"}),(0,x.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhotoTC(t.target.files[0])},className:i})]})}),(0,x.jsx)("div",{children:(0,x.jsx)(d,{})})]})},f=n(7781),j=n(3502),m=(0,f.qC)(j.S,(0,c.$j)((function(e){return{ownerId:e.auth.userId,userId:e.profile.profile.userId,defaultPhoto:e.profile.defaultPhoto}}),{userProfileThunkCreator:h.Hw,savePhotoTC:h.Tw}))((function(e){return(0,o.useEffect)((function(){e.ownerId!==e.userId&&e.userProfileThunkCreator(e.ownerId)}),[]),(0,x.jsx)(p,{savePhotoTC:e.savePhotoTC,defaultPhoto:e.defaultPhoto})}))},3502:function(e,t,n){n.d(t,{S:function(){return x}});var o=n(8683),a=n(5671),r=n(3144),i=n(136),s=n(7277),l=n(2791),u=n(6434),c=n(6871),h=n(184),b=function(e){return{isAuth:e.auth.isAuth}},x=function(e){var t=function(t){(0,i.Z)(l,t);var n=(0,s.Z)(l);function l(){return(0,a.Z)(this,l),n.apply(this,arguments)}return(0,r.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(e,(0,o.Z)({},this.props)):(0,h.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(b)(t)}}}]);
//# sourceMappingURL=469.6bf74fbb.chunk.js.map