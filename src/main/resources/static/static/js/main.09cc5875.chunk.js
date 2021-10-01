(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{232:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(48),o=n.n(s),i=(n(232),n(23)),c=n(24),l=n(55),d=n(28),h=n(27),j=n(136),u=n(20),b=n(3),p=n(393),O=n(430),g=n(431),x=n(432),m=n(418),f=n(410),C=n(420),v=n(426),w=n(409),S=n(407),E=n(208),y=n.n(E),k=n(78),I=n(192),M=n(1),A=["component"];var L=function(e){var t=e.component,n=Object(I.a)(e,A);return Object(M.jsx)(u.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return localStorage.getItem("token")?Object(M.jsx)(t,Object(k.a)({},e)):Object(M.jsx)(u.a,{to:{pathname:"/landing",state:{from:e.location}}})}}))},D=n(4),R=n(197),W=n.n(R),P=n(31),T=n(394),B=Object(b.a)("div")((function(e){var t=e.theme;return Object(D.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(T.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(T.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),F=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.light,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),H=Object(b.a)(P.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(D.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(B,{children:[Object(M.jsx)(F,{children:Object(M.jsx)(W.a,{})}),Object(M.jsx)(H,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),U=n(116),z=n.n(U),J=n(414),G=n(416),V=n(419),q=n(404),K=n(421),Q=n(422),X=n(412),Y=n(424),Z=n(423),$=n(401),_=n(425),ee=n(406),te=n(201),ne=n.n(te),re=n(200),ae=n.n(re),se=n(199),oe=n.n(se),ie=n(81),ce=n(75),le=Object(ce.b)({name:"auth",initialState:{isLoggedin:!1,token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,z.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token),console.log(e)}}}),de=le.actions.authenticationSuccess,he=le.reducer,je="success",ue="warning",be={open:!1,type:je,message:""},pe=Object(ce.b)({name:"alert",initialState:be,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1,e.type=je,e.message=""}}}),Oe=pe.actions,ge=Oe.openAlert,xe=Oe.closeAlert,me=pe.reducer,fe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(D.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&r.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&r.setState({passwordError:!1,passwordErrorMessage:""})},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&z.a.post("/api/v1/auth/authenticate",t).then((function(e){r.props.authenticationSuccess(e.data.token),r.handleClose()})).catch((function(e){if(console.log(e),e.response){var t=e.response.data;if(r.setState({login:{error:!t.result,message:t.message}}),t.result){var n={type:ue,message:t.message};r.props.openAlert(n)}}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(J.a,{open:this.props.open,onClose:this.handleClose,children:[Object(M.jsxs)(G.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(M.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(M.jsx)(oe.a,{})}):null]}),Object(M.jsx)(V.a,{children:Object(M.jsxs)(C.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(M.jsx)(q.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(M.jsxs)(K.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(M.jsx)(Q.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(M.jsx)(X.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(M.jsx)(Y.a,{position:"end",children:Object(M.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(M.jsx)(ae.a,{}):Object(M.jsx)(ne.a,{})})})}),Object(M.jsx)(Z.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(M.jsx)(K.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(M.jsx)($.a,{error:!0,children:this.state.login.message})}):null,Object(M.jsx)(_.a,{control:Object(M.jsx)(ee.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(M.jsx)(v.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(M.jsx)(w.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(M.jsx)(S.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),Ce={authenticationSuccess:de,openAlert:ge},ve=Object(ie.b)((function(e){return{auth:e.auth}}),Ce)(fe),we=n(427),Se=n(413),Ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(we.a,{maxWidth:!1,children:Object(M.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsx)(C.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),ye=Ee,ke=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(we.a,{maxWidth:!1,children:Object(M.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsx)(C.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"})})})}}]),n}(a.a.Component),Ie=ke,Me=n(428),Ae=n(202),Le=n.n(Ae),De=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(we.a,{maxWidth:!1,children:[Object(M.jsx)(Me.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(M.jsx)(Le.a,{})}),"Hello Board!"]})}}]),n}(r.Component),Re=n(417),We=n(429),Pe=n(58),Te=n(415),Be=n(403),Fe=n(203),He=n.n(Fe),Ne=n(204),Ue=n.n(Ne),ze=n(205),Je=n.n(ze),Ge=n(206),Ve=n.n(Ge),qe=n(207),Ke=n.n(qe),Qe=Object(b.a)("div")((function(e){e.theme;return{}})),Xe=Object(b.a)(Te.a)((function(e){e.theme;return{marginBottom:10}})),Ye=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),Ze=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(Pe.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(Pe.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(Pe.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(Qe,{className:"RichEditor-root",children:[Object(M.jsx)(Xe,{className:"RichEditor-controls",elevation:2,children:Object(M.jsxs)(Se.a,{container:!0,children:[Object(M.jsx)(Be.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(M.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(M.jsx)(He.a,{})})}),Object(M.jsx)(Be.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(M.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(M.jsx)(Ue.a,{})})}),Object(M.jsx)(We.a,{orientation:"vertical",flexItem:!0}),Object(M.jsx)(Be.a,{title:"\uad75\uac8c",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(M.jsx)(Je.a,{})})}),Object(M.jsx)(Be.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(M.jsx)(Ve.a,{})})}),Object(M.jsx)(Be.a,{title:"\ubc11\uc904",children:Object(M.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(M.jsx)(Ke.a,{})})}),Object(M.jsx)(We.a,{orientation:"vertical",flexItem:!0})]})}),Object(M.jsx)(Ye,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(M.jsx)(Pe.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),$e=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(Pe.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(Pe.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(Pe.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:Pe.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(M.jsx)(we.a,{maxWidth:!1,children:Object(M.jsx)(Se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(M.jsxs)(C.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(M.jsx)(Re.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(M.jsx)(We.a,{}),Object(M.jsxs)(C.a,{component:"form",children:[Object(M.jsx)(K.a,{margin:"normal",sx:{width:"100%"},children:Object(M.jsx)(X.a,{placeholder:"\uc81c\ubaa9"})}),Object(M.jsx)(K.a,{margin:"normal",sx:{width:"100%"},children:Object(M.jsx)(Ze,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(M.jsx)(v.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),_e=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),et=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(l.a)(r));var a=sessionStorage.getItem("token");return null!==a&&(console.log(a),r.props.authenticationSuccess(a)),console.log(r.props.auth),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){return Object(M.jsxs)(j.a,{children:[Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(_e,{children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(x.a,{style:{color:"inherit"},href:"/",children:Object(M.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(M.jsx)(y.a,{})})}),Object(M.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(M.jsx)(x.a,{underline:"none",href:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(M.jsx)(x.a,{underline:"none",href:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(M.jsx)(C.a,{sx:{flexGrow:1}}),Object(M.jsx)(N,{}),Object(M.jsx)(v.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(M.jsx)(ve,{open:this.state.open,onClose:this.handleClose}),Object(M.jsx)(w.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(M.jsx)(S.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(M.jsxs)(u.d,{children:[Object(M.jsx)(u.b,{exact:!0,path:"/",component:this.props.auth.isLoggendin?ye:Ie}),Object(M.jsx)(L,{exact:!0,path:"/board",component:De}),Object(M.jsx)(L,{path:"/write",component:$e})]})]})}}]),n}(a.a.Component),tt={authenticationSuccess:de,openAlert:ge,closeAlert:xe},nt=Object(ie.b)((function(e){return{alert:e.alert,auth:e.auth}}),tt)(et),rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},at=n(57),st=Object(at.b)({alert:me,auth:he}),ot=Object(ce.a)({reducer:st});o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(ie.a,{store:ot,children:Object(M.jsx)(nt,{})})}),document.getElementById("root")),rt()}},[[357,1,2]]]);
//# sourceMappingURL=main.09cc5875.chunk.js.map