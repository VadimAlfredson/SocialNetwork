"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[218],{1218:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(2791),o=n(3502),a=n(8755),i=n(4686);function s(e){if(null==e)throw new TypeError("Cannot destructure "+e)}var c=n(6871),l=n(4942),d=n(3366),u=n(7462),p=n(8182),f=n(4419),m=n(627),v=n(2065),y=n(6934),b=n(1402),g=n(3701),Z=n(9103),h=n(162),x=n(2071),I=n(6199),w=n(5878),C=n(1217);function S(e){return(0,C.Z)("MuiListItem",e)}var j=(0,w.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var P=(0,w.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function k(e){return(0,C.Z)("MuiListItemSecondaryAction",e)}(0,w.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var R=n(184),A=["className"],L=(0,y.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,u.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),O=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,a=(0,d.Z)(n,A),i=r.useContext(I.Z),s=(0,u.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,f.Z)(r,k,n)}(s);return(0,R.jsx)(L,(0,u.Z)({className:(0,p.Z)(c.root,o),ownerState:s,ref:t},a))}));O.muiName="ListItemSecondaryAction";var N=O,T=["className"],M=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],G=(0,y.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,u.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,u.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,l.Z)({},"& > .".concat(P.root),{paddingRight:48}),(t={},(0,l.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,l.Z)(t,"&.".concat(j.selected),(0,l.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,v.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,v.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,l.Z)(t,"&.".concat(j.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,l.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(j.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,v.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,v.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),F=(0,y.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),D=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,a=void 0===o?"center":o,i=n.autoFocus,s=void 0!==i&&i,c=n.button,l=void 0!==c&&c,v=n.children,y=n.className,w=n.component,C=n.components,P=void 0===C?{}:C,k=n.componentsProps,A=void 0===k?{}:k,L=n.ContainerComponent,O=void 0===L?"li":L,D=n.ContainerProps,V=(void 0===D?{}:D).className,B=n.dense,E=void 0!==B&&B,_=n.disabled,q=void 0!==_&&_,W=n.disableGutters,Q=void 0!==W&&W,z=n.disablePadding,H=void 0!==z&&z,Y=n.divider,$=void 0!==Y&&Y,J=n.focusVisibleClassName,K=n.secondaryAction,U=n.selected,X=void 0!==U&&U,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,oe=(0,d.Z)(n.ContainerProps,T),ae=(0,d.Z)(n,M),ie=r.useContext(I.Z),se=r.useMemo((function(){return{dense:E||ie.dense||!1,alignItems:a,disableGutters:Q}}),[a,ie.dense,E,Q]),ce=r.useRef(null);(0,h.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var le=r.Children.toArray(v),de=le.length&&(0,Z.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,u.Z)({},n,{alignItems:a,autoFocus:s,button:l,dense:se.dense,disabled:q,disableGutters:Q,disablePadding:H,divider:$,hasSecondaryAction:de,selected:X}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,f.Z)(i,S,r)}(ue),fe=(0,x.Z)(ce,t),me=re.root||P.Root||G,ve=te.root||A.root||{},ye=(0,u.Z)({className:(0,p.Z)(pe.root,ve.className,y),disabled:q},ae),be=w||"li";return l&&(ye.component=w||"div",ye.focusVisibleClassName=(0,p.Z)(j.focusVisible,J),be=g.Z),de?(be=ye.component||w?be:"div","li"===O&&("li"===be?be="div":"li"===ye.component&&(ye.component="div")),(0,R.jsx)(I.Z.Provider,{value:se,children:(0,R.jsxs)(F,(0,u.Z)({as:O,className:(0,p.Z)(pe.container,V),ref:fe,ownerState:ue},oe,{children:[(0,R.jsx)(me,(0,u.Z)({},ve,!(0,m.Z)(me)&&{as:be,ownerState:(0,u.Z)({},ue,ve.ownerState)},ye,{children:le})),le.pop()]}))})):(0,R.jsx)(I.Z.Provider,{value:se,children:(0,R.jsxs)(me,(0,u.Z)({},ve,{as:be,ref:fe},!(0,m.Z)(me)&&{ownerState:(0,u.Z)({},ue,ve.ownerState)},ye,{children:[le,K&&(0,R.jsx)(N,{children:K})]}))})}));function V(e){return(0,C.Z)("MuiListItemAvatar",e)}(0,w.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var B=["className"],E=(0,y.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,u.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),_=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemAvatar"}),o=n.className,a=(0,d.Z)(n,B),i=r.useContext(I.Z),s=(0,u.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,f.Z)(r,V,n)}(s);return(0,R.jsx)(E,(0,u.Z)({className:(0,p.Z)(c.root,o),ownerState:s,ref:t},a))})),q=n(220),W=n(890);function Q(e){return(0,C.Z)("MuiListItemText",e)}var z=(0,w.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),H=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Y=(0,y.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,l.Z)({},"& .".concat(z.primary),t.primary),(0,l.Z)({},"& .".concat(z.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,u.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),$=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemText"}),o=n.children,a=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,l=void 0!==c&&c,m=n.primary,v=n.primaryTypographyProps,y=n.secondary,g=n.secondaryTypographyProps,Z=(0,d.Z)(n,H),h=r.useContext(I.Z).dense,x=null!=m?m:o,w=y,C=(0,u.Z)({},n,{disableTypography:s,inset:l,primary:!!x,secondary:!!w,dense:h}),S=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,f.Z)(a,Q,t)}(C);return null==x||x.type===W.Z||s||(x=(0,R.jsx)(W.Z,(0,u.Z)({variant:h?"body2":"body1",className:S.primary,component:null!=v&&v.variant?void 0:"span",display:"block"},v,{children:x}))),null==w||w.type===W.Z||s||(w=(0,R.jsx)(W.Z,(0,u.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},g,{children:w}))),(0,R.jsxs)(Y,(0,u.Z)({className:(0,p.Z)(S.root,a),ownerState:C,ref:t},Z,{children:[x,w]}))})),J=function(e){var t=(0,a.CG)((function(e){return e.auth.defaultPhoto})),n=(0,c.s0)();return(0,R.jsxs)(D,{alignItems:"flex-start",sx:{backgroundColor:"#151515",mt:"1px"},children:[(0,R.jsx)(_,{children:(0,R.jsx)(q.Z,{alt:e.name,src:e.icon?e.icon:t,onClick:function(){n("/profile/".concat(e.userId))}})}),(0,R.jsx)($,{primary:(0,R.jsx)(W.Z,{sx:{display:"inline"},component:"span",variant:"subtitle2",color:"#327d9b",children:e.name}),secondary:(0,R.jsx)(r.Fragment,{children:(0,R.jsx)(W.Z,{sx:{display:"inline"},component:"span",variant:"body1",color:"#D0D3D4",children:e.message})})})]})},K=function(e){return e.chat.messages},U=function(e){return e.chat.status},X=n(493),ee=function(e){s(e);var t=(0,r.useRef)(null),n=(0,a.CG)(K);return(0,r.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end"})}),[n]),(0,R.jsxs)(X.Z,{sx:{width:"100% - 5px",maxHeight:600,overflow:"auto",paddingRight:"1px",mr:"5px","&::-webkit-scrollbar":{width:"1em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(50,125,155,0.20)",webkitBoxShadow:"inset 0 0 6px rgba(50,125,155,0.20)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(50,125,155,.1)",outline:"1px solid #327d9b"}},children:[n.map((function(e,t){return(0,R.jsx)(J,{userId:e.userId,icon:e.photo,message:e.message,name:e.userName},t)})),(0,R.jsx)("div",{ref:t})]})},te=n(885),ne=n(4554),re=n(5307),oe=n(6151),ae=function(e){s(e);var t=(0,a.CG)(U),n=(0,a.TL)(),o=(0,r.useState)(""),c=(0,te.Z)(o,2),l=c[0],d=c[1];return(0,R.jsxs)(ne.Z,{display:"flex",flexDirection:"row",gap:.5,children:[(0,R.jsx)(re.Z,{label:"message",id:"chatMessage",fullWidth:!0,variant:"outlined",onChange:function(e){return d(e.target.value)},value:l,color:"success",sx:{"& .MuiOutlinedInput-root":{"& > fieldset":{border:"1px solid grey"},"&:hover":{boxShadow:"0 0 3px  rgba(50,125,155)",backgroundColor:"rgba(50,125,155,0.05)"}},input:{color:"#D0D3D4"}},InputLabelProps:{sx:{color:"rgba(50,125,155,0.45)"}}}),(0,R.jsx)(oe.Z,{onClick:function(){""!==l&&n((0,i.ND)(l)),d("")},disabled:"ready"!==t,color:"success",variant:"ready"!==t?"outlined":"contained",children:"Send"})]})},ie=(0,o.S)((function(){var e=(0,a.TL)(),t=(0,r.useRef)(null);(0,a.CG)(K);return(0,r.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end"})}),[]),(0,r.useEffect)((function(){return e((0,i.QR)()),function(){e((0,i.Qm)())}}),[]),(0,R.jsxs)(ne.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,R.jsx)(ee,{}),(0,R.jsx)(ae,{}),(0,R.jsx)("div",{ref:t})]})}))},3502:function(e,t,n){n.d(t,{S:function(){return f}});var r=n(1413),o=n(5671),a=n(3144),i=n(136),s=n(7277),c=n(2791),l=n(8687),d=n(6871),u=n(184),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){(0,i.Z)(c,t);var n=(0,s.Z)(c);function c(){return(0,o.Z)(this,c),n.apply(this,arguments)}return(0,a.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,u.jsx)(e,(0,r.Z)({},this.props)):(0,u.jsx)(d.Fg,{to:"/login"})}}]),c}(c.Component);return(0,l.$j)(p)(t)}},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.Z)(o.key),o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},7277:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1120),o=n(8814),a=n(1002),i=n(7326);function s(e){var t=(0,o.Z)();return function(){var n,o=(0,r.Z)(e);if(t){var s=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===(0,a.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}(this,n)}}},1120:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},136:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9611);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},8814:function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=218.11453f50.chunk.js.map