"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[469],{8469:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var o=e(2791),a="Setting_profileInfoForm__0zC+k",i="Setting_itemFormInput__T1BVl",s="Setting_inputUploadPhoto__p3uZS",r="Setting_blockUploadPhoto__522c0",l="Setting_textUploadPhoto__8gA17",u=e(885),c=e(5705),h=e(6434),b=e(2005),x=e(8755),p=e(184),j=(0,h.$j)((function(t){return{}}),{ProfileThunkCreator:b.WE,userProfileThunkCreator:b.Hw})((function(){var t=(0,x.CG)((function(t){return t.profile.profile})),n=(0,x.TL)(),e=(0,o.useState)(!0),a=(0,u.Z)(e,2);a[0],a[1];return(0,p.jsx)(c.J9,{enableReinitialize:!0,initialValues:{fullName:t.fullName,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,aboutMe:t.aboutMe,contacts:t.contacts},validateOnBlur:!0,onSubmit:function(t){n((0,b.WE)(t))},children:function(n){n.enableReinitialize;var e=n.values,o=(n.errors,n.touched,n.handleBlur),a=n.handleChange,s=(n.isValid,n.handleSubmit),r=n.dirty;return(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{className:i,type:"text",name:"fullName",onChange:a,onBlur:o,disabled:!0,value:e.fullName||t.fullName||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Looking for a job:"}),(0,p.jsx)("input",{type:"checkbox",name:"lookingForAJob",onChange:a,onBlur:o,value:e.lookingForAJob?["lookingForAJob"]:[]}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Looking for a job description:"}),(0,p.jsx)("input",{className:i,type:"text",name:"lookingForAJobDescription",onChange:a,onBlur:o,value:e.lookingForAJobDescription||"",disabled:!e.lookingForAJob}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"About Me:"}),(0,p.jsx)("input",{className:i,type:"text",name:"aboutMe",onChange:a,onBlur:o,value:e.aboutMe||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"contacts:"}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"github:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.github",onChange:a,onBlur:o,value:e.contacts.github||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"vk:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.vk",onChange:a,onBlur:o,value:e.contacts.vk||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"facebook:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.facebook",onChange:a,onBlur:o,value:e.contacts.facebook||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"instagram:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.instagram",onChange:a,onBlur:o,value:e.contacts.instagram||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"twitter:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.twitter",onChange:a,onBlur:o,value:e.contacts.twitter||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"website:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.website",onChange:a,onBlur:o,value:e.contacts.website||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"youtube:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.youtube",onChange:a,onBlur:o,value:e.contacts.youtube||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"mainLink:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.mainLink",onChange:a,onBlur:o,value:e.contacts.mainLink||""}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{disabled:!r,onClick:function(){s()},type:"submit",children:"Save"})]})}})})),d=function(t){var n=(0,x.TL)(),e=(0,x.CG)((function(t){return t.profile.profile}));return(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Profile setting"}),(0,p.jsx)("div",{children:(0,p.jsxs)("label",{className:r,children:[(0,p.jsx)("a",{className:l,children:"Upload photo"}),(0,p.jsx)("img",{src:e.photos.large||t.defaultPhoto,alt:"avatar"}),(0,p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n((0,b.Tw)(t.target.files[0]))},className:s})]})}),(0,p.jsx)("div",{children:(0,p.jsx)(j,{})})]})},f=e(7781),m=e(3502),g=(0,f.qC)(m.S)((function(t){var n=(0,x.TL)(),e=(0,x.CG)((function(t){return t.auth.userId})),a=(0,x.CG)((function(t){return t.profile.profile.userId}));return(0,o.useEffect)((function(){e!==a&&n((0,b.Hw)(t.ownerId))}),[]),(0,p.jsx)(d,{savePhotoTC:t.savePhotoTC,defaultPhoto:t.defaultPhoto})}))},3502:function(t,n,e){e.d(n,{S:function(){return x}});var o=e(8683),a=e(5671),i=e(3144),s=e(136),r=e(7277),l=e(2791),u=e(6434),c=e(6871),h=e(184),b=function(t){return{isAuth:t.auth.isAuth}},x=function(t){var n=function(n){(0,s.Z)(l,n);var e=(0,r.Z)(l);function l(){return(0,a.Z)(this,l),e.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(t,(0,o.Z)({},this.props)):(0,h.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(b)(n)}}}]);
//# sourceMappingURL=469.f135a344.chunk.js.map