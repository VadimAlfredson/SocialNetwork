"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[346],{8346:function(e,s,n){n.r(s),n.d(s,{default:function(){return z}});var t=n(5671),r=n(3144),o=n(136),a=n(7277),i=n(2791),l=n(6434),u="users_usersComponent__8nRZo",c="users_itemUser__x5owb",h="users_avatar__erVMZ",g="users_infoUser__y2HtR",p="users_followButton__ExoVv",d="users_massageButton__-K1Un",_="users_buttonStyle__jG05x",C="users_nameUser__9hBV1",f="users_statusUser__F2WyE",m="users_navLinkToLogin__wH+jC",j=n(3504),v=n(885),x="paginator_activePage__eWc4N",w="paginator_paginator__QVHI9",k="paginator_pageNumber__7A1XW",P=n(184),F=function(e){for(var s=Math.ceil(e.totalUsersCount/e.pageSize),n=[],t=1;t<=s;t++)n.push(t);var r=Math.ceil(s/10),o=(0,i.useState)(1),a=(0,v.Z)(o,2),l=a[0],u=a[1],c=10*(l-1)+1,h=10*l;return(0,P.jsxs)("div",{className:w,children:[l>1&&(0,P.jsx)("button",{className:k,onClick:function(){u(l-1)},children:"left"}),n.filter((function(e){return e>=c&&e<=h})).map((function(s){return(0,P.jsx)("span",{className:e.currentPage===s?x:k,onClick:function(){e.onPageChange(s)},children:s},s)})),r>l&&(0,P.jsx)("button",{className:k,onClick:function(){u(l+1)},children:"right"})]})},N=n(4374),U=function(e){return(0,P.jsxs)("div",{className:u,children:[(0,P.jsx)(F,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChange:e.onPageChange}),e.isFetching?(0,P.jsx)(N.Z,{}):(0,P.jsx)("div",{children:e.users.map((function(s){return(0,P.jsxs)("div",{className:c,children:[(0,P.jsx)("div",{className:h,children:(0,P.jsx)(j.OL,{to:"/profile/"+s.id,children:(0,P.jsx)("img",{src:null!==s.photos.small?s.photos.small:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"})})}),(0,P.jsxs)("div",{className:p,children:[e.isAuth&&(0,P.jsx)("button",{className:_,disabled:e.followingInProgress.includes(s.id),onClick:function(){return e.onFollowChange(s.id,s.followed)},children:s.followed?"Unfollow":"Follow"}),!e.isAuth&&(0,P.jsx)(j.OL,{className:m,to:"../login",children:"Register to subscribe"})]}),(0,P.jsx)("div",{className:d,children:e.isAuth&&(0,P.jsx)("button",{className:_,onClick:function(){},children:"Message"})}),(0,P.jsxs)("div",{className:g,children:[(0,P.jsx)("div",{className:C,children:s.name}),(0,P.jsx)("div",{className:f,children:s.status})]})]},s.id)}))})]})},b=n(9662),y=n(7781),S=n(2931),Z=function(e){(0,o.Z)(n,e);var s=(0,a.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=s.call.apply(s,[this].concat(o))).onPageChange=function(s){e.props.onPageChangeThunkCreator(s,e.props.pageSize)},e.onFollowChange=function(s,n){e.props.onFollowChangeThunkCreator(s,n)},e}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(U,{isAuth:this.props.isAuth,isFetching:this.props.isFetching,users:this.props.users,pageSize:this.props.pageSize,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,onPageChange:this.onPageChange,onFollowChange:this.onFollowChange,followingInProgress:this.props.followingInProgress})})}}]),n}(i.Component),z=(0,y.qC)((0,l.$j)((function(e){return{users:(0,S.Rf)(e),pageSize:(0,S.b7)(e),totalUsersCount:(0,S.qZ)(e),currentPage:(0,S.FZ)(e),followingInProgress:(0,S.yg)(e),isAuth:(0,S.Od)(e),isFetching:(0,S.ab)(e)}}),{followed:b.Gp,setUsers:b.HM,setCurrentPage:b.D4,setTotalUsersCount:b.K1,toggleIsFetching:b.MO,toggleIsFollowing:b.zF,getUsersThunkCreator:b.Uk,onPageChangeThunkCreator:b.Pv,onFollowChangeThunkCreator:b.uq}))(Z)}}]);
//# sourceMappingURL=346.2a43819b.chunk.js.map