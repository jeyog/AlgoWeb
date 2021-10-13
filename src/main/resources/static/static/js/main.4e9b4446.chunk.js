(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{232:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(48),o=n.n(s),i=(n(232),n(23)),c=n(24),l=n(55),d=n(28),h=n(27),j=n(136),u=n(20),b=n(3),p=n(393),O=n(430),g=n(431),x=n(432),m=n(418),f=n(410),C=n(420),v=n(426),w=n(409),S=n(407),E=n(208),y=n.n(E),k=n(79),I=n(192),M=n(69),A=n(76),L=n(112),D=n.n(L),R=Object(A.b)({name:"auth",initialState:{isLoggedin:!1,token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,D.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token)}}}),W=R.actions.authenticationSuccess,P=function(e){return e.auth},T=R.reducer,B=n(1),F=["component"];var H=function(e){var t=e.component,n=Object(I.a)(e,F),r=Object(M.c)(P);return Object(B.jsx)(u.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return r.isLoggendin?Object(B.jsx)(t,Object(k.a)({},e)):Object(B.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},N=n(4),U=n(198),z=n.n(U),J=n(31),G=n(394),V=Object(b.a)("div")((function(e){var t=e.theme;return Object(N.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(G.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(G.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),q=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.light,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),K=Object(b.a)(J.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(N.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsxs)(V,{children:[Object(B.jsx)(q,{children:Object(B.jsx)(z.a,{})}),Object(B.jsx)(K,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),X=n(414),Y=n(416),Z=n(419),$=n(404),_=n(421),ee=n(422),te=n(412),ne=n(424),re=n(423),ae=n(401),se=n(425),oe=n(406),ie=n(201),ce=n.n(ie),le=n(200),de=n.n(le),he=n(199),je=n.n(he),ue="success",be="warning",pe={open:!1,type:ue,message:""},Oe=Object(A.b)({name:"alert",initialState:pe,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1,e.type=ue,e.message=""}}}),ge=Oe.actions,xe=ge.openAlert,me=ge.closeAlert,fe=Oe.reducer,Ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(N.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&r.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&r.setState({passwordError:!1,passwordErrorMessage:""})},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&D.a.post("/api/v1/auth/authenticate",t).then((function(e){r.props.authenticationSuccess(e.data.token),r.handleClose()})).catch((function(e){if(e.response){var t=e.response.data;if(r.setState({login:{error:!t.result,message:t.message}}),t.result){var n={type:be,message:t.message};r.props.openAlert(n)}}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsxs)(X.a,{open:this.props.open,onClose:this.handleClose,children:[Object(B.jsxs)(Y.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(B.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(B.jsx)(je.a,{})}):null]}),Object(B.jsx)(Z.a,{children:Object(B.jsxs)(C.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(B.jsx)($.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(B.jsxs)(_.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(B.jsx)(ee.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(B.jsx)(te.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(B.jsx)(ne.a,{position:"end",children:Object(B.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(B.jsx)(de.a,{}):Object(B.jsx)(ce.a,{})})})}),Object(B.jsx)(re.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(B.jsx)(_.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(B.jsx)(ae.a,{error:!0,children:this.state.login.message})}):null,Object(B.jsx)(se.a,{control:Object(B.jsx)(oe.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(B.jsx)(v.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(B.jsx)(w.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(B.jsx)(S.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),ve={authenticationSuccess:W,openAlert:xe},we=Object(M.b)((function(e){return{auth:e.auth}}),ve)(Ce),Se=n(427),Ee=n(413),ye=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsx)(Se.a,{maxWidth:!1,children:Object(B.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(B.jsx)(C.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),ke=ye,Ie=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsx)(Se.a,{maxWidth:!1,children:Object(B.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(B.jsx)(C.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"})})})}}]),n}(a.a.Component),Me=Ie,Ae=n(428),Le=n(202),De=n.n(Le),Re=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsxs)(Se.a,{maxWidth:!1,children:[Object(B.jsx)(Ae.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(B.jsx)(De.a,{})}),"Hello Board!"]})}}]),n}(r.Component),We=n(417),Pe=n(429),Te=n(58),Be=n(415),Fe=n(403),He=n(203),Ne=n.n(He),Ue=n(204),ze=n.n(Ue),Je=n(205),Ge=n.n(Je),Ve=n(206),qe=n.n(Ve),Ke=n(207),Qe=n.n(Ke),Xe=Object(b.a)("div")((function(e){e.theme;return{}})),Ye=Object(b.a)(Be.a)((function(e){e.theme;return{marginBottom:10}})),Ze=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),$e=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(Te.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(Te.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(Te.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsxs)(Xe,{className:"RichEditor-root",children:[Object(B.jsx)(Ye,{className:"RichEditor-controls",elevation:2,children:Object(B.jsxs)(Ee.a,{container:!0,children:[Object(B.jsx)(Fe.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(B.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(B.jsx)(Ne.a,{})})}),Object(B.jsx)(Fe.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(B.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(B.jsx)(ze.a,{})})}),Object(B.jsx)(Pe.a,{orientation:"vertical",flexItem:!0}),Object(B.jsx)(Fe.a,{title:"\uad75\uac8c",children:Object(B.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(B.jsx)(Ge.a,{})})}),Object(B.jsx)(Fe.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(B.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(B.jsx)(qe.a,{})})}),Object(B.jsx)(Fe.a,{title:"\ubc11\uc904",children:Object(B.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(B.jsx)(Qe.a,{})})}),Object(B.jsx)(Pe.a,{orientation:"vertical",flexItem:!0})]})}),Object(B.jsx)(Ze,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(B.jsx)(Te.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),_e=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(Te.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(Te.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(Te.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:Te.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(B.jsx)(Se.a,{maxWidth:!1,children:Object(B.jsx)(Ee.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(B.jsxs)(C.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(B.jsx)(We.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(B.jsx)(Pe.a,{}),Object(B.jsxs)(C.a,{component:"form",children:[Object(B.jsx)(_.a,{margin:"normal",sx:{width:"100%"},children:Object(B.jsx)(te.a,{placeholder:"\uc81c\ubaa9"})}),Object(B.jsx)(_.a,{margin:"normal",sx:{width:"100%"},children:Object(B.jsx)($e,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(B.jsx)(v.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),et=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),tt=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("token");null!==e&&(console.log(e),this.props.authenticationSuccess(e))}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){var e=this.props.auth.auth;return Object(B.jsxs)(j.a,{children:[Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(et,{children:Object(B.jsxs)(g.a,{children:[Object(B.jsx)(x.a,{style:{color:"inherit"},href:"/",children:Object(B.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(B.jsx)(y.a,{})})}),Object(B.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(B.jsx)(x.a,{underline:"none",href:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(B.jsx)(x.a,{underline:"none",href:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(B.jsx)(C.a,{sx:{flexGrow:1}}),Object(B.jsx)(Q,{}),e.isLoggendin?Object(B.jsx)(v.a,{color:"primary",children:"\ub85c\uadf8\uc544\uc6c3"}):Object(B.jsx)(v.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(B.jsx)(we,{open:this.state.open,onClose:this.handleClose}),Object(B.jsx)(w.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(B.jsx)(S.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(B.jsxs)(u.d,{children:[Object(B.jsx)(u.b,{exact:!0,path:"/",children:e.isLoggendin?Object(B.jsx)(ke,{}):Object(B.jsx)(Me,{})}),Object(B.jsx)(H,{exact:!0,path:"/board",component:Re}),Object(B.jsx)(H,{path:"/write",component:_e})]})]})}}]),n}(a.a.Component),nt={authenticationSuccess:W,openAlert:xe,closeAlert:me},rt=Object(M.b)((function(e){return{alert:e.alert,auth:e.auth}}),nt)(tt),at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},st=n(56),ot=Object(st.b)({alert:fe,auth:T}),it=Object(A.a)({reducer:ot});o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(M.a,{store:it,children:Object(B.jsx)(rt,{})})}),document.getElementById("root")),at()}},[[357,1,2]]]);
//# sourceMappingURL=main.4e9b4446.chunk.js.map