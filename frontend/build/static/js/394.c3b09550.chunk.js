"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[394],{3394:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(2791),s=r(4165),a=r(5861),o=r(2302),i=r(3999),l=r(1512),u=r(9508),c=r(9895),d=r(2468),p=r(7689),v=r(3108),h=r(184),f=function(){var e=(0,u.x)(),n=e.isLoading,r=e.error,f=e.sendRequest,m=e.clearError,x=(0,t.useContext)(v.V),g=(0,p.s0)(),j=(0,l.Z)((function(e){return""!==e.trim()})),C=j.value,E=j.entervalueisvalid,b=j.haserror,Z=j.valuechangehandler,y=j.valueblurhandler,N=j.reset,k=(0,l.Z)((function(e){return e.includes("@")})),w=k.value,I=k.entervalueisvalid,A=k.haserror,L=k.valuechangehandler,O=k.valueblurhandler,R=k.reset,S=(0,l.Z)((function(e){return""!==e.trim()})),T=S.value,B=S.entervalueisvalid,_=S.haserror,P=S.valuechangehandler,D=S.valueblurhandler,F=S.reset,M=(0,l.Z)((function(e){return""!==e.trim()})),V=M.value,U=M.entervalueisvalid,q=M.haserror,H=M.valuechangehandler,J=M.valueblurhandler,Q=M.reset,W=(0,t.useRef)(),z=(0,t.useRef)(),G=(0,t.useRef)(),K=(0,t.useRef)(),X=!1;E&&I&&B&&U&&(X=!0);var Y=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),E){e.next=3;break}return e.abrupt("return");case 3:if(I){e.next=5;break}return e.abrupt("return");case 5:if(B){e.next=7;break}return e.abrupt("return");case 7:if(U){e.next=9;break}return e.abrupt("return");case 9:return N(),R(),F(),Q(),e.prev=13,e.next=16,f("http://localhost:8000/api/users/signup","POST",JSON.stringify({email:w,name:C,mobile:T,password:V}),{"Content-Type":"application/json"});case 16:r=e.sent,x.login(r.userId,r.token),g("/sellerlogin"),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(13);case 23:case"end":return e.stop()}}),e,null,[[13,21]])})));return function(n){return e.apply(this,arguments)}}(),$=b?"form-control invalid":"form-control",ee=_?"form-control invalid":"form-control",ne=A?"form-control invalid":"form-control",re=q?"form-control invalid":"form-control";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{error:r,onClear:m}),n&&(0,h.jsx)(c.Z,{asOverlay:!0}),!x.isLoggedIn&&(0,h.jsx)("h2",{children:"New Admin Registration"}),x.isLoggedIn&&(0,h.jsxs)("h2",{style:{textDecoration:"none"},children:["Hello ",x.userName]}),(0,h.jsx)("div",{className:"form_input_div",children:(0,h.jsxs)("form",{onSubmit:Y,children:[(0,h.jsxs)("div",{className:$,children:[(0,h.jsx)(o.Z,{id:"NAME",type:"text",ref:W,onChange:Z,onBlur:y,value:C}),b&&(0,h.jsx)("p",{children:"enter valid name"})]}),(0,h.jsxs)("div",{className:ne,children:[(0,h.jsx)(o.Z,{id:"EMAIL",type:"email",ref:z,onChange:L,onBlur:O,value:w}),A&&(0,h.jsx)("p",{children:"enter valid email"})]}),(0,h.jsxs)("div",{className:ee,children:[(0,h.jsx)(o.Z,{id:"MOBILE",type:"number",ref:G,onChange:P,onBlur:D,value:T}),_&&(0,h.jsx)("p",{children:"enter valid mobile"})]}),(0,h.jsxs)("div",{className:re,children:[(0,h.jsx)(o.Z,{id:"PASSWORD",type:"password",ref:K,onChange:H,onBlur:J,value:V}),q&&(0,h.jsx)("p",{children:"enter valid password"})]}),(0,h.jsx)(i.Z,{disabled:!X,children:"Signup"}),!x.isLoggedIn&&(0,h.jsx)(i.Z,{to:"/sellerlogin",children:"Login"})]})}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"div_button",children:[x.isLoggedIn&&(0,h.jsx)(i.Z,{to:"/".concat(x.userId,"/sellerupdate"),children:"Edit Seller"}),x.isLoggedIn&&(0,h.jsx)(i.Z,{to:"/sellernewproduct",children:"Upload Products"}),x.isLoggedIn&&(0,h.jsx)(i.Z,{to:"/".concat(x.userId,"/selleralluploadedproduct"),children:"View Uploaded Products"}),x.isLoggedIn&&(0,h.jsx)(i.Z,{to:"/".concat(x.userId,"/productcreator"),children:"View Order"})]})]})},m=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{style:{marginTop:"100px"},children:(0,h.jsx)(f,{})})})}},2302:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},2468:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(2791),s=r(1413),a=r(4164),o=r(6928),i=r(184),l=function(e){return a.createPortal((0,i.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))},u=function(e){var n=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(n,document.getElementById("modal-hook"))},c=function(e){return(0,i.jsxs)(t.Fragment,{children:[e.show&&(0,i.jsx)(l,{onClick:e.onCancel}),(0,i.jsx)(o.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(u,(0,s.Z)({},e))})]})},d=r(3999),p=function(e){return(0,i.jsx)(c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},1512:function(e,n,r){var t=r(9439),s=r(2791),a={value:"",isTouched:!1},o=function e(n,r){return"input"===r.type?{value:r.value,isTouched:n.isTouched}:"blur"===r.type?{isTouched:!0,value:n.value}:"reset"===r.type?{isTouched:!1,value:""}:e};n.Z=function(e){var n=(0,s.useReducer)(o,a),r=(0,t.Z)(n,2),i=r[0],l=r[1],u=e(i.value),c=!u&&i.isTouched;return{value:i.value,entervalueisvalid:u,haserror:c,valuechangehandler:function(e){l({type:"input",value:e.target.value})},valueblurhandler:function(){l({type:"blur"})},reset:function(){l({type:"reset"})}}}},6928:function(e,n,r){var t=r(7462),s=r(3366),a=r(4578),o=r(9252),i=r(2946),l=r(2791),u=r(7726),c=r(8852),d=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return(0,i.Z)(e,n)}))},p=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return(n=e.call.apply(e,[this].concat(t))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,r){var t=n.resolveArguments(e,r),s=t[0],a=t[1];n.removeClasses(s,"exit"),n.addClass(s,a?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,r)},n.onEntering=function(e,r){var t=n.resolveArguments(e,r),s=t[0],a=t[1]?"appear":"enter";n.addClass(s,a,"active"),n.props.onEntering&&n.props.onEntering(e,r)},n.onEntered=function(e,r){var t=n.resolveArguments(e,r),s=t[0],a=t[1]?"appear":"enter";n.removeClasses(s,a),n.addClass(s,a,"done"),n.props.onEntered&&n.props.onEntered(e,r)},n.onExit=function(e){var r=n.resolveArguments(e)[0];n.removeClasses(r,"appear"),n.removeClasses(r,"enter"),n.addClass(r,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var r=n.resolveArguments(e)[0];n.addClass(r,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var r=n.resolveArguments(e)[0];n.removeClasses(r,"exit"),n.addClass(r,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,r){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,r]},n.getClassNames=function(e){var r=n.props.classNames,t="string"===typeof r,s=t?""+(t&&r?r+"-":"")+e:r[e];return{baseClassName:s,activeClassName:t?s+"-active":r[e+"Active"],doneClassName:t?s+"-done":r[e+"Done"]}},n}(0,a.Z)(n,e);var r=n.prototype;return r.addClass=function(e,n,r){var t=this.getClassNames(n)[r+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===r&&s&&(t+=" "+s),"active"===r&&e&&(0,c.Q)(e),t&&(this.appliedClasses[n][r]=t,function(e,n){e&&n&&n.split(" ").forEach((function(n){return(0,o.Z)(e,n)}))}(e,t))},r.removeClasses=function(e,n){var r=this.appliedClasses[n],t=r.base,s=r.active,a=r.done;this.appliedClasses[n]={},t&&d(e,t),s&&d(e,s),a&&d(e,a)},r.render=function(){var e=this.props,n=(e.classNames,(0,s.Z)(e,["classNames"]));return l.createElement(u.ZP,(0,t.Z)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(l.Component);p.defaultProps={classNames:""},p.propTypes={},n.Z=p}}]);
//# sourceMappingURL=394.c3b09550.chunk.js.map