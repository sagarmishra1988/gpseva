"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[258],{7258:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(2791),a=r(4165),s=r(5861),o=r(9439),i=r(2302),l=r(3999),u=r(1512),c=r(9508),d=r(9895),p=r(2468),v=r(7689),h=r(3108),f=r(184),m=function(){var e=(0,c.x)(),n=e.isLoading,r=e.error,m=e.sendRequest,x=e.clearError,C=(0,t.useState)([]),E=(0,o.Z)(C,2),g=E[0],j=E[1],Z=(0,t.useContext)(h.V),b=(0,v.UO)().uid,y=(0,v.s0)(),N=(0,u.Z)((function(e){return""!==e.trim()})),k=N.value,w=N.entervalueisvalid,A=N.haserror,T=N.valuechangehandler,B=N.valueblurhandler,O=N.reset,R=(0,u.Z)((function(e){return e.includes("@")})),S=R.value,_=R.entervalueisvalid,D=R.haserror,P=R.valuechangehandler,F=R.valueblurhandler,I=R.reset,L=(0,u.Z)((function(e){return""!==e.trim()})),M=L.value,U=L.entervalueisvalid,q=L.haserror,H=L.valuechangehandler,J=L.valueblurhandler,Q=L.reset,V=(0,u.Z)((function(e){return""!==e.trim()})),W=V.value,z=V.entervalueisvalid,G=V.haserror,K=V.valuechangehandler,X=V.valueblurhandler,Y=V.reset,$=(0,t.useRef)(),ee=(0,t.useRef)(),ne=(0,t.useRef)(),re=(0,t.useRef)(),te=!1;w&&_&&U&&z&&(te=!0),(0,t.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("http://localhost:8000/api"+"/users/".concat(b));case 3:n=e.sent,j(n.users),console.log(n.users),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,b]);var ae=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),w){e.next=3;break}return e.abrupt("return");case 3:if(_){e.next=5;break}return e.abrupt("return");case 5:if(U){e.next=7;break}return e.abrupt("return");case 7:if(z){e.next=9;break}return e.abrupt("return");case 9:return O(),I(),Q(),Y(),e.prev=13,e.next=16,m("http://localhost:8000/api"+"/users/".concat(b),"PATCH",JSON.stringify({email:S,name:k,mobile:M,password:W}),{"Content-Type":"application/json"});case 16:y("/sellerlogin"),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(13);case 21:case"end":return e.stop()}}),e,null,[[13,19]])})));return function(n){return e.apply(this,arguments)}}(),se=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("http://localhost:8000/api"+"/users/".concat(b),"DELETE");case 3:Z.delet(),y("/sellerregistration"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),oe=A?"form-control invalid":"form-control",ie=q?"form-control invalid":"form-control",le=D?"form-control invalid":"form-control",ue=G?"form-control invalid":"form-control";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.Z,{error:r,onClear:x}),n&&(0,f.jsx)(d.Z,{asOverlay:!0}),(0,f.jsx)("h2",{children:"Edit Admin Details"}),(0,f.jsx)("div",{className:"form_input_div",children:(0,f.jsxs)("form",{onSubmit:ae,children:[(0,f.jsxs)("div",{className:oe,children:[(0,f.jsx)(i.Z,{id:"NAME",ref:$,onChange:T,onBlur:B,value:k||g.name}),A&&(0,f.jsx)("p",{children:"enter valid name"})]}),(0,f.jsxs)("div",{className:le,children:[(0,f.jsx)(i.Z,{id:"EMAIL",ref:ee,onChange:P,onBlur:F,value:S||g.email}),D&&(0,f.jsx)("p",{children:"enter valid email"})]}),(0,f.jsxs)("div",{className:ie,children:[(0,f.jsx)(i.Z,{id:"MOBILE",ref:ne,onChange:H,onBlur:J,value:M||g.mobile}),q&&(0,f.jsx)("p",{children:"enter valid mobile"})]}),(0,f.jsxs)("div",{className:ue,children:[(0,f.jsx)(i.Z,{id:"PASSWORD",ref:re,onChange:K,onBlur:X,value:W||g.password}),G&&(0,f.jsx)("p",{children:"enter valid password"})]}),(0,f.jsx)(l.Z,{disabled:!te,children:"Update"}),(0,f.jsx)(l.Z,{onClick:se,children:"Delete"})]})})]})},x=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{style:{marginTop:"100px"},children:(0,f.jsx)(m,{})})})}},2302:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},2468:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(2791),a=r(1413),s=r(4164),o=r(6928),i=r(184),l=function(e){return s.createPortal((0,i.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))},u=function(e){var n=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.createPortal(n,document.getElementById("modal-hook"))},c=function(e){return(0,i.jsxs)(t.Fragment,{children:[e.show&&(0,i.jsx)(l,{onClick:e.onCancel}),(0,i.jsx)(o.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(u,(0,a.Z)({},e))})]})},d=r(3999),p=function(e){return(0,i.jsx)(c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},1512:function(e,n,r){var t=r(9439),a=r(2791),s={value:"",isTouched:!1},o=function e(n,r){return"input"===r.type?{value:r.value,isTouched:n.isTouched}:"blur"===r.type?{isTouched:!0,value:n.value}:"reset"===r.type?{isTouched:!1,value:""}:e};n.Z=function(e){var n=(0,a.useReducer)(o,s),r=(0,t.Z)(n,2),i=r[0],l=r[1],u=e(i.value),c=!u&&i.isTouched;return{value:i.value,entervalueisvalid:u,haserror:c,valuechangehandler:function(e){l({type:"input",value:e.target.value})},valueblurhandler:function(){l({type:"blur"})},reset:function(){l({type:"reset"})}}}},6928:function(e,n,r){var t=r(7462),a=r(3366),s=r(4578),o=r(9252),i=r(2946),l=r(2791),u=r(7726),c=r(8852),d=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return(0,i.Z)(e,n)}))},p=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return(n=e.call.apply(e,[this].concat(t))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,r){var t=n.resolveArguments(e,r),a=t[0],s=t[1];n.removeClasses(a,"exit"),n.addClass(a,s?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,r)},n.onEntering=function(e,r){var t=n.resolveArguments(e,r),a=t[0],s=t[1]?"appear":"enter";n.addClass(a,s,"active"),n.props.onEntering&&n.props.onEntering(e,r)},n.onEntered=function(e,r){var t=n.resolveArguments(e,r),a=t[0],s=t[1]?"appear":"enter";n.removeClasses(a,s),n.addClass(a,s,"done"),n.props.onEntered&&n.props.onEntered(e,r)},n.onExit=function(e){var r=n.resolveArguments(e)[0];n.removeClasses(r,"appear"),n.removeClasses(r,"enter"),n.addClass(r,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var r=n.resolveArguments(e)[0];n.addClass(r,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var r=n.resolveArguments(e)[0];n.removeClasses(r,"exit"),n.addClass(r,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,r){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,r]},n.getClassNames=function(e){var r=n.props.classNames,t="string"===typeof r,a=t?""+(t&&r?r+"-":"")+e:r[e];return{baseClassName:a,activeClassName:t?a+"-active":r[e+"Active"],doneClassName:t?a+"-done":r[e+"Done"]}},n}(0,s.Z)(n,e);var r=n.prototype;return r.addClass=function(e,n,r){var t=this.getClassNames(n)[r+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===r&&a&&(t+=" "+a),"active"===r&&e&&(0,c.Q)(e),t&&(this.appliedClasses[n][r]=t,function(e,n){e&&n&&n.split(" ").forEach((function(n){return(0,o.Z)(e,n)}))}(e,t))},r.removeClasses=function(e,n){var r=this.appliedClasses[n],t=r.base,a=r.active,s=r.done;this.appliedClasses[n]={},t&&d(e,t),a&&d(e,a),s&&d(e,s)},r.render=function(){var e=this.props,n=(e.classNames,(0,a.Z)(e,["classNames"]));return l.createElement(u.ZP,(0,t.Z)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(l.Component);p.defaultProps={classNames:""},p.propTypes={},n.Z=p}}]);
//# sourceMappingURL=258.b32b6995.chunk.js.map