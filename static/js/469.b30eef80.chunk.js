"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[469],{6502:function(n,t,e){e.d(t,{Ai:function(){return o},Z6:function(){return a},gO:function(){return i}});var o=function(n){return n.profile.profile},a=function(n){return n.profile.status},i=function(n){return n.profile.follow}},8469:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var o=e(2791),a="Setting_profileInfoForm__0zC+k",i="Setting_itemFormInput__T1BVl",r="Setting_inputUploadPhoto__p3uZS",s="Setting_blockUploadPhoto__522c0",l="Setting_textUploadPhoto__8gA17",u=e(885),c=e(5705),b=e(6434),h=e(5992),x=e(8755),j=e(6502),p=e(184),f=(0,b.$j)((function(n){return{}}),{ProfileThunkCreator:h.WE,userProfileThunkCreator:h.Hw})((function(){var n=(0,x.CG)(j.Ai),t=(0,x.TL)(),e=(0,o.useState)(!0),a=(0,u.Z)(e,2);a[0],a[1];return(0,p.jsx)(c.J9,{enableReinitialize:!0,initialValues:{fullName:n.fullName,lookingForAJob:n.lookingForAJob,lookingForAJobDescription:n.lookingForAJobDescription,aboutMe:n.aboutMe,contacts:n.contacts},validateOnBlur:!0,onSubmit:function(n){t((0,h.WE)(n))},children:function(t){t.enableReinitialize;var e=t.values,o=(t.errors,t.touched,t.handleBlur),a=t.handleChange,r=(t.isValid,t.handleSubmit),s=t.dirty;return(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{className:i,type:"text",name:"fullName",onChange:a,onBlur:o,disabled:!0,value:e.fullName||n.fullName||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Looking for a job:"}),(0,p.jsx)("input",{type:"checkbox",name:"lookingForAJob",onChange:a,onBlur:o,value:e.lookingForAJob?["lookingForAJob"]:[]}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Looking for a job description:"}),(0,p.jsx)("input",{className:i,type:"text",name:"lookingForAJobDescription",onChange:a,onBlur:o,value:e.lookingForAJobDescription||"",disabled:!e.lookingForAJob}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"About Me:"}),(0,p.jsx)("input",{className:i,type:"text",name:"aboutMe",onChange:a,onBlur:o,value:e.aboutMe||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"contacts:"}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"github:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.github",onChange:a,onBlur:o,value:e.contacts.github||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"vk:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.vk",onChange:a,onBlur:o,value:e.contacts.vk||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"facebook:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.facebook",onChange:a,onBlur:o,value:e.contacts.facebook||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"instagram:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.instagram",onChange:a,onBlur:o,value:e.contacts.instagram||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"twitter:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.twitter",onChange:a,onBlur:o,value:e.contacts.twitter||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"website:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.website",onChange:a,onBlur:o,value:e.contacts.website||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"youtube:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.youtube",onChange:a,onBlur:o,value:e.contacts.youtube||""}),(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"mainLink:"}),(0,p.jsx)("input",{className:i,type:"text",name:"contacts.mainLink",onChange:a,onBlur:o,value:e.contacts.mainLink||""}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{disabled:!s,onClick:function(){r()},type:"submit",children:"Save"})]})}})})),d=function(n){var t=(0,x.TL)(),e=(0,x.CG)(j.Ai);return(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Profile setting"}),(0,p.jsx)("div",{children:(0,p.jsxs)("label",{className:s,children:[(0,p.jsx)("a",{className:l,children:"Upload photo"}),(0,p.jsx)("img",{src:e.photos.large||n.defaultPhoto,alt:"avatar"}),(0,p.jsx)("input",{type:"file",onChange:function(n){n.target.files.length&&t((0,h.Tw)(n.target.files[0]))},className:r})]})}),(0,p.jsx)("div",{children:(0,p.jsx)(f,{})})]})},g=e(7781),m=e(3502),v=e(7368),k=(0,g.qC)(m.S)((function(){var n=(0,x.TL)(),t=(0,x.CG)(v.nT),e=(0,x.CG)(j.Ai),a=(0,x.CG)(v.Pg);return(0,o.useEffect)((function(){t!==e.userId&&n((0,h.Hw)(t))}),[]),(0,p.jsx)(d,{defaultPhoto:a})}))},3502:function(n,t,e){e.d(t,{S:function(){return x}});var o=e(8683),a=e(5671),i=e(3144),r=e(136),s=e(7277),l=e(2791),u=e(6434),c=e(6871),b=e(184),h=function(n){return{isAuth:n.auth.isAuth}},x=function(n){var t=function(t){(0,r.Z)(l,t);var e=(0,s.Z)(l);function l(){return(0,a.Z)(this,l),e.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,b.jsx)(n,(0,o.Z)({},this.props)):(0,b.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(h)(t)}}}]);
//# sourceMappingURL=469.b30eef80.chunk.js.map