"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[346],{8346:function(e,n,s){s.r(n),s.d(n,{default:function(){return z}});var t=s(5671),r=s(3144),o=s(136),a=s(7277),i=s(2791),u=s(6434),l="users_usersComponent__8nRZo",c="users_itemUser__x5owb",h="users_avatar__erVMZ",g="users_infoUser__y2HtR",p="users_followButton__ExoVv",d="users_massageButton__-K1Un",f="users_buttonStyle__jG05x",C="users_nameUser__9hBV1",_="users_statusUser__F2WyE",m=s(3504),v=s(885),j="paginator_activePage__eWc4N",x="paginator_paginator__QVHI9",k="paginator_pageNumber__7A1XW",w=s(184),P=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),s=[],t=1;t<=n;t++)s.push(t);var r=Math.ceil(n/10),o=(0,i.useState)(1),a=(0,v.Z)(o,2),u=a[0],l=a[1],c=10*(u-1)+1,h=10*u;return(0,w.jsxs)("div",{className:x,children:[u>1&&(0,w.jsx)("button",{className:k,onClick:function(){l(u-1)},children:"left"}),s.filter((function(e){return e>=c&&e<=h})).map((function(n){return(0,w.jsx)("span",{className:e.currentPage===n?j:k,onClick:function(){e.onPageChange(n)},children:n},n)})),r>u&&(0,w.jsx)("button",{className:k,onClick:function(){l(u+1)},children:"right"})]})},F=s(4374),U=function(e){return(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)(P,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChange:e.onPageChange}),e.isFetching?(0,w.jsx)(F.Z,{}):(0,w.jsx)("div",{children:e.users.map((function(n){return(0,w.jsxs)("div",{className:c,children:[(0,w.jsx)("div",{className:h,children:(0,w.jsx)(m.OL,{to:"/profile/"+n.id,children:(0,w.jsx)("img",{src:null!==n.photos.small?n.photos.small:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"})})}),(0,w.jsx)("div",{className:p,children:(0,w.jsx)("button",{className:f,disabled:e.followingInProgress.includes(n.id),onClick:function(){return e.onFollowChange(n.id,n.followed)},children:n.followed?"Unfollow":"Follow"})}),(0,w.jsx)("div",{className:d,children:(0,w.jsx)("button",{className:f,onClick:function(){},children:"Message"})}),(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)("div",{className:C,children:n.name}),(0,w.jsx)("div",{className:_,children:n.status})]})]},n.id)}))})]})},N=s(9662),y=s(3502),Z=s(7781),b=s(2931),S=function(e){(0,o.Z)(s,e);var n=(0,a.Z)(s);function s(){var e;(0,t.Z)(this,s);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).onPageChange=function(n){e.props.onPageChangeThunkCreator(n,e.props.pageSize)},e.onFollowChange=function(n,s){e.props.onFollowChangeThunkCreator(n,s)},e}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(U,{isFetching:this.props.isFetching,users:this.props.users,pageSize:this.props.pageSize,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,onPageChange:this.onPageChange,onFollowChange:this.onFollowChange,followingInProgress:this.props.followingInProgress})})}}]),s}(i.Component),z=(0,Z.qC)(y.S,(0,u.$j)((function(e){return{users:(0,b.Rf)(e),pageSize:(0,b.b7)(e),totalUsersCount:(0,b.qZ)(e),currentPage:(0,b.FZ)(e),followingInProgress:(0,b.yg)(e),isAuth:(0,b.Od)(e),isFetching:(0,b.ab)(e)}}),{followed:N.Gp,setUsers:N.HM,setCurrentPage:N.D4,setTotalUsersCount:N.K1,toggleIsFetching:N.MO,toggleIsFollowing:N.zF,getUsersThunkCreator:N.Uk,onPageChangeThunkCreator:N.Pv,onFollowChangeThunkCreator:N.uq}))(S)},3502:function(e,n,s){s.d(n,{S:function(){return p}});var t=s(8683),r=s(5671),o=s(3144),a=s(136),i=s(7277),u=s(2791),l=s(6434),c=s(6871),h=s(184),g=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var n=function(n){(0,a.Z)(u,n);var s=(0,i.Z)(u);function u(){return(0,r.Z)(this,u),s.apply(this,arguments)}return(0,o.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(e,(0,t.Z)({},this.props)):(0,h.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(g)(n)}}}]);
//# sourceMappingURL=346.06394f96.chunk.js.map