(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{232:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(48),o=n.n(s),i=(n(232),n(20)),c=n(23),l=n(55),d=n(25),h=n(24),u=n(136),j=n(21),b=n(3),p=n(393),O=n(430),g=n(431),x=n(432),m=n(418),f=n(410),C=n(420),v=n(426),w=n(409),S=n(407),y=n(208),E=n.n(y),k=n(80),I=n(192),M=n(76),A=n(1),L=["component","authenticated"],D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.component,n=e.authenticated,r=Object(I.a)(e,L);return Object(A.jsx)(j.b,Object(k.a)(Object(k.a)({},r),{},{render:function(e){return n?Object(A.jsx)(t,Object(k.a)({},e)):Object(A.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))}}]),n}(a.a.Component),R=n(4),W=n(198),P=n.n(W),T=n(31),B=n(394),F=Object(b.a)("div")((function(e){var t=e.theme;return Object(R.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(B.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(B.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),H=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.light,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),N=Object(b.a)(T.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(R.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(F,{children:[Object(A.jsx)(H,{children:Object(A.jsx)(P.a,{})}),Object(A.jsx)(N,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),z=n(116),J=n.n(z),G=n(414),V=n(416),q=n(419),K=n(404),Q=n(421),X=n(422),Y=n(412),Z=n(424),$=n(423),_=n(401),ee=n(425),te=n(406),ne=n(201),re=n.n(ne),ae=n(200),se=n.n(ae),oe=n(199),ie=n.n(oe),ce=n(77),le=Object(ce.b)({name:"auth",initialState:{isLoggedin:!1,token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,J.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token)}}}),de=le.actions.authenticationSuccess,he=le.reducer,ue="success",je="warning",be={open:!1,type:ue,message:""},pe=Object(ce.b)({name:"alert",initialState:be,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1,e.type=ue,e.message=""}}}),Oe=pe.actions,ge=Oe.openAlert,xe=Oe.closeAlert,me=pe.reducer,fe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(R.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&r.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&r.setState({passwordError:!1,passwordErrorMessage:""})},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&J.a.post("/api/v1/auth/authenticate",t).then((function(e){r.props.authenticationSuccess(e.data.token),r.handleClose()})).catch((function(e){if(e.response){var t=e.response.data;if(r.setState({login:{error:!t.result,message:t.message}}),t.result){var n={type:je,message:t.message};r.props.openAlert(n)}}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(G.a,{open:this.props.open,onClose:this.handleClose,children:[Object(A.jsxs)(V.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(A.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(ie.a,{})}):null]}),Object(A.jsx)(q.a,{children:Object(A.jsxs)(C.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(A.jsx)(K.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(A.jsxs)(Q.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(A.jsx)(X.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(A.jsx)(Y.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(A.jsx)(Z.a,{position:"end",children:Object(A.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(A.jsx)(se.a,{}):Object(A.jsx)(re.a,{})})})}),Object(A.jsx)($.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(A.jsx)(Q.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(A.jsx)(_.a,{error:!0,children:this.state.login.message})}):null,Object(A.jsx)(ee.a,{control:Object(A.jsx)(te.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(A.jsx)(v.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(A.jsx)(w.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsx)(S.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),Ce={authenticationSuccess:de,openAlert:ge},ve=Object(M.b)((function(e){return{auth:e.auth}}),Ce)(fe),we=(a.a.Component,n(427)),Se=n(413),ye=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsx)(we.a,{maxWidth:!1,children:Object(A.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(A.jsx)(C.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),Ee=ye,ke=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsx)(we.a,{maxWidth:!1,children:Object(A.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(A.jsx)(C.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"})})})}}]),n}(a.a.Component),Ie=ke,Me=n(428),Ae=n(202),Le=n.n(Ae),De=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(we.a,{maxWidth:!1,children:[Object(A.jsx)(Me.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(A.jsx)(Le.a,{})}),"Hello Board!"]})}}]),n}(r.Component),Re=n(417),We=n(429),Pe=n(58),Te=n(415),Be=n(403),Fe=n(203),He=n.n(Fe),Ne=n(204),Ue=n.n(Ne),ze=n(205),Je=n.n(ze),Ge=n(206),Ve=n.n(Ge),qe=n(207),Ke=n.n(qe),Qe=Object(b.a)("div")((function(e){e.theme;return{}})),Xe=Object(b.a)(Te.a)((function(e){e.theme;return{marginBottom:10}})),Ye=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),Ze=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(Pe.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(Pe.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(Pe.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(Qe,{className:"RichEditor-root",children:[Object(A.jsx)(Xe,{className:"RichEditor-controls",elevation:2,children:Object(A.jsxs)(Se.a,{container:!0,children:[Object(A.jsx)(Be.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(A.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(A.jsx)(He.a,{})})}),Object(A.jsx)(Be.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(A.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(A.jsx)(Ue.a,{})})}),Object(A.jsx)(We.a,{orientation:"vertical",flexItem:!0}),Object(A.jsx)(Be.a,{title:"\uad75\uac8c",children:Object(A.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(A.jsx)(Je.a,{})})}),Object(A.jsx)(Be.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(A.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(A.jsx)(Ve.a,{})})}),Object(A.jsx)(Be.a,{title:"\ubc11\uc904",children:Object(A.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(A.jsx)(Ke.a,{})})}),Object(A.jsx)(We.a,{orientation:"vertical",flexItem:!0})]})}),Object(A.jsx)(Ye,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(A.jsx)(Pe.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),$e=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(Pe.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(Pe.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(Pe.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:Pe.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(A.jsx)(we.a,{maxWidth:!1,children:Object(A.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(A.jsxs)(C.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(A.jsx)(Re.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(A.jsx)(We.a,{}),Object(A.jsxs)(C.a,{component:"form",children:[Object(A.jsx)(Q.a,{margin:"normal",sx:{width:"100%"},children:Object(A.jsx)(Y.a,{placeholder:"\uc81c\ubaa9"})}),Object(A.jsx)(Q.a,{margin:"normal",sx:{width:"100%"},children:Object(A.jsx)(Ze,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(A.jsx)(v.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),_e=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),et=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("token");null!==e&&this.props.authenticationSuccess(e)}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){var e=this.props,t=e.auth;e.user;return Object(A.jsxs)(u.a,{children:[Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(_e,{children:Object(A.jsxs)(g.a,{children:[Object(A.jsx)(x.a,{style:{color:"inherit"},href:"/",children:Object(A.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(A.jsx)(E.a,{})})}),Object(A.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(A.jsx)(x.a,{underline:"none",href:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(A.jsx)(x.a,{underline:"none",href:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(A.jsx)(C.a,{sx:{flexGrow:1}}),Object(A.jsx)(U,{}),t.isLoggedin?Object(A.jsx)("div",{children:Object(A.jsx)(m.a,{size:"large","aria-label":"user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"})}):Object(A.jsx)(v.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(A.jsx)(ve,{open:this.state.open,onClose:this.handleClose}),Object(A.jsx)(w.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsx)(S.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(A.jsxs)(j.d,{children:[Object(A.jsx)(j.b,{exact:!0,path:"/",component:t.isLoggedin?Ee:Ie}),Object(A.jsx)(D,{exact:!0,path:"/board",component:De,authenticated:t.isLoggedin}),Object(A.jsx)(D,{path:"/write",component:$e,authenticated:t.isLoggedin})]})]})}}]),n}(a.a.Component),tt={authenticationSuccess:de,openAlert:ge,closeAlert:xe},nt=Object(M.b)((function(e){return{alert:e.alert,auth:e.auth,user:e.user}}),tt)(et),rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},at=n(57),st=Object(at.b)({alert:me,auth:he,user:he}),ot=Object(ce.a)({reducer:st});o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(M.a,{store:ot,children:Object(A.jsx)(nt,{})})}),document.getElementById("root")),rt()}},[[357,1,2]]]);
//# sourceMappingURL=main.f88ee62b.chunk.js.map