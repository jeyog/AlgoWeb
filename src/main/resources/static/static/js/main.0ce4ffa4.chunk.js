(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{232:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(48),o=n.n(s),i=(n(232),n(22)),c=n(23),l=n(55),d=n(26),h=n(25),u=n(136),j=n(20),b=n(3),p=n(393),O=n(431),g=n(432),x=n(433),m=n(419),f=n(410),v=n(421),C=n(427),w=n(409),S=n(407),y=n(208),E=n.n(y),k=n(61),I=n(192),A=n(77),M=n(1),L=["component","authenticated"],D=function(e){var t=e.component,n=e.authenticated,r=Object(I.a)(e,L);return Object(M.jsx)(j.b,Object(k.a)(Object(k.a)({},r),{},{render:function(e){return n?Object(M.jsx)(t,Object(k.a)({},e)):Object(M.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))},R=n(4),T=n(198),W=n.n(T),P=n(31),B=n(394),F=Object(b.a)("div")((function(e){var t=e.theme;return Object(R.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(B.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(B.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),H=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.light,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),N=Object(b.a)(P.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(R.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(F,{children:[Object(M.jsx)(H,{children:Object(M.jsx)(W.a,{})}),Object(M.jsx)(N,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),z=n(116),J=n.n(z),G=n(415),V=n(417),q=n(420),K=n(404),Q=n(422),X=n(423),Y=n(412),Z=n(425),$=n(424),_=n(401),ee=n(426),te=n(406),ne=n(201),re=n.n(ne),ae=n(200),se=n.n(ae),oe=n(199),ie=n.n(oe),ce=n(78),le=Object(ce.b)({name:"auth",initialState:{isLoggedin:!1,token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,J.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token)}}}),de=le.actions.authenticationSuccess,he=le.reducer,ue="success",je="warning",be={open:!1,type:ue,message:""},pe=Object(ce.b)({name:"alert",initialState:be,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1,e.type=ue,e.message=""}}}),Oe=pe.actions,ge=Oe.openAlert,xe=Oe.closeAlert,me=pe.reducer,fe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(R.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&r.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&r.setState({passwordError:!1,passwordErrorMessage:""})},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&J.a.post("/api/v1/auth/authenticate",t).then((function(e){r.props.authenticationSuccess(e.data.token),r.handleClose()})).catch((function(e){if(e.response){var t=e.response.data;if(r.setState({login:{error:!t.result,message:t.message}}),t.result){var n={type:je,message:t.message};r.props.openAlert(n)}}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(G.a,{open:this.props.open,onClose:this.handleClose,children:[Object(M.jsxs)(V.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(M.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(M.jsx)(ie.a,{})}):null]}),Object(M.jsx)(q.a,{children:Object(M.jsxs)(v.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(M.jsx)(K.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(M.jsxs)(Q.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(M.jsx)(X.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(M.jsx)(Y.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(M.jsx)(Z.a,{position:"end",children:Object(M.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(M.jsx)(se.a,{}):Object(M.jsx)(re.a,{})})})}),Object(M.jsx)($.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(M.jsx)(Q.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(M.jsx)(_.a,{error:!0,children:this.state.login.message})}):null,Object(M.jsx)(ee.a,{control:Object(M.jsx)(te.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(M.jsx)(C.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(M.jsx)(w.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(M.jsx)(S.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),ve={authenticationSuccess:de,openAlert:ge},Ce=Object(A.b)((function(e){return{auth:e.auth}}),ve)(fe),we=n(413),Se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"stringToColor",value:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var r="#",a=0;a<3;a++){r+="00".concat((t>>8*a&255).toString(16)).substr(-2)}return r}},{key:"stringAvatar",value:function(e){return console.log(e),{sx:{bgcolor:this.stringToColor.bind(this,e)},children:"".concat(e.substr(1))}}},{key:"render",value:function(){var e=this.props.user;return Object(M.jsx)(we.a,Object(k.a)({},this.stringAvatar.bind(this,e.name)))}}]),n}(a.a.Component),ye=n(428),Ee=n(414),ke=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(ye.a,{maxWidth:!1,children:Object(M.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsx)(v.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),Ie=ke,Ae=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(ye.a,{maxWidth:!1,children:Object(M.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsx)(v.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"})})})}}]),n}(a.a.Component),Me=Ae,Le=n(429),De=n(202),Re=n.n(De),Te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(ye.a,{maxWidth:!1,children:[Object(M.jsx)(Le.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(M.jsx)(Re.a,{})}),"Hello Board!"]})}}]),n}(r.Component),We=n(418),Pe=n(430),Be=n(58),Fe=n(416),He=n(403),Ne=n(203),Ue=n.n(Ne),ze=n(204),Je=n.n(ze),Ge=n(205),Ve=n.n(Ge),qe=n(206),Ke=n.n(qe),Qe=n(207),Xe=n.n(Qe),Ye=Object(b.a)("div")((function(e){e.theme;return{}})),Ze=Object(b.a)(Fe.a)((function(e){e.theme;return{marginBottom:10}})),$e=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),_e=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(Be.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(Be.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(Be.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(Ye,{className:"RichEditor-root",children:[Object(M.jsx)(Ze,{className:"RichEditor-controls",elevation:2,children:Object(M.jsxs)(Ee.a,{container:!0,children:[Object(M.jsx)(He.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(M.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(M.jsx)(Ue.a,{})})}),Object(M.jsx)(He.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(M.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(M.jsx)(Je.a,{})})}),Object(M.jsx)(Pe.a,{orientation:"vertical",flexItem:!0}),Object(M.jsx)(He.a,{title:"\uad75\uac8c",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(M.jsx)(Ve.a,{})})}),Object(M.jsx)(He.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(M.jsx)(Ke.a,{})})}),Object(M.jsx)(He.a,{title:"\ubc11\uc904",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(M.jsx)(Xe.a,{})})}),Object(M.jsx)(Pe.a,{orientation:"vertical",flexItem:!0})]})}),Object(M.jsx)($e,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(M.jsx)(Be.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),et=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(Be.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(Be.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(Be.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:Be.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(ye.a,{maxWidth:!1,children:Object(M.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsxs)(v.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(M.jsx)(We.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(M.jsx)(Pe.a,{}),Object(M.jsxs)(v.a,{component:"form",children:[Object(M.jsx)(Q.a,{margin:"normal",sx:{width:"100%"},children:Object(M.jsx)(Y.a,{placeholder:"\uc81c\ubaa9"})}),Object(M.jsx)(Q.a,{margin:"normal",sx:{width:"100%"},children:Object(M.jsx)(_e,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(M.jsx)(C.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),tt=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),nt=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("token");null!==e&&this.props.authenticationSuccess(e)}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){var e=this.props,t=e.auth,n=e.user;return console.log(n),Object(M.jsxs)(u.a,{children:[Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(tt,{children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(x.a,{style:{color:"inherit"},href:"/",children:Object(M.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(M.jsx)(E.a,{})})}),Object(M.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(M.jsx)(x.a,{underline:"none",href:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(M.jsx)(x.a,{underline:"none",href:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(M.jsx)(v.a,{sx:{flexGrow:1}}),Object(M.jsx)(U,{}),t.isLoggedin?Object(M.jsx)("div",{children:Object(M.jsx)(m.a,{size:"large","aria-label":"user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(M.jsx)(Se,{user:n})})}):Object(M.jsx)(C.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(M.jsx)(Ce,{open:this.state.open,onClose:this.handleClose}),Object(M.jsx)(w.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(M.jsx)(S.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(M.jsxs)(j.d,{children:[Object(M.jsx)(j.b,{exact:!0,path:"/",component:t.isLoggedin?Ie:Me}),Object(M.jsx)(D,{exact:!0,path:"/board",component:Te,authenticated:t.isLoggedin}),Object(M.jsx)(D,{path:"/write",component:et,authenticated:t.isLoggedin})]})]})}}]),n}(a.a.Component),rt={authenticationSuccess:de,openAlert:ge,closeAlert:xe},at=Object(A.b)((function(e){return{alert:e.alert,auth:e.auth,user:e.user}}),rt)(nt),st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},ot=n(57),it=Object(ot.b)({alert:me,auth:he,user:he}),ct=Object(ce.a)({reducer:it});o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(A.a,{store:ct,children:Object(M.jsx)(at,{})})}),document.getElementById("root")),st()}},[[357,1,2]]]);
//# sourceMappingURL=main.0ce4ffa4.chunk.js.map