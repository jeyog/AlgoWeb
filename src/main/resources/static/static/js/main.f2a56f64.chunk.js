(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{226:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(55),o=n.n(s),i=(n(226),n(25)),c=n(26),l=n(56),d=n(35),h=n(34),j=n(203),u=n(20),b=n(3),p=n(386),O=n(423),x=n(424),g=n(425),m=n(411),f=n(403),C=n(413),w=n(419),v=n(201),E=n.n(v),S=n(4),k=n(190),y=n.n(k),I=n(28),M=n(387),R=n(1),D=Object(b.a)("div")((function(e){var t=e.theme;return Object(S.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(M.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(M.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),L=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.light,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),P=Object(b.a)(I.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(S.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsxs)(D,{children:[Object(R.jsx)(L,{children:Object(R.jsx)(y.a,{})}),Object(R.jsx)(P,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),T=n(133),B=n.n(T),F=n(407),N=n(409),A=n(412),U=n(397),H=n(414),z=n(415),J=n(405),G=n(417),V=n(416),q=n(394),K=n(418),Q=n(399),X=n(402),Y=n(400),Z=n(193),$=n.n(Z),_=n(192),ee=n.n(_),te=n(191),ne=n.n(te),re=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(S.a)({},e.target.name,e.target.value))},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&B.a.post("/api/v1/auth/authenticate",t).then((function(e){B.a.defaults.headers.common.Authorization="Bearer "+e.data.token,r.handleClose()})).catch((function(e){if(e.response){var t=e.response.data;r.setState({login:{error:!t.result,message:t.message}}),t.result&&r.handleOpenSnackbar(t.message)}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsxs)(F.a,{open:this.props.open,onClose:this.handleClose,children:[Object(R.jsxs)(N.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(R.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(R.jsx)(ne.a,{})}):null]}),Object(R.jsx)(A.a,{children:Object(R.jsxs)(C.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(R.jsx)(U.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(R.jsxs)(H.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(R.jsx)(z.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(R.jsx)(J.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(R.jsx)(G.a,{position:"end",children:Object(R.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(R.jsx)(ee.a,{}):Object(R.jsx)($.a,{})})})}),Object(R.jsx)(V.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(R.jsx)(H.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(R.jsx)(q.a,{error:!0,children:this.state.login.message})}):null,Object(R.jsx)(K.a,{control:Object(R.jsx)(Q.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(R.jsx)(w.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(R.jsx)(X.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(R.jsx)(Y.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),ae=n(420),se=n(406),oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsx)(ae.a,{maxWidth:!1,children:Object(R.jsx)(se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(R.jsx)(C.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),ie=oe,ce=n(421),le=n(194),de=n.n(le),he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsxs)(ae.a,{maxWidth:!1,children:[Object(R.jsx)(ce.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(R.jsx)(de.a,{})}),"Hello Board!"]})}}]),n}(r.Component),je=n(410),ue=n(422),be=n(53),pe=n(408),Oe=n(396),xe=n(195),ge=n.n(xe),me=n(196),fe=n.n(me),Ce=n(197),we=n.n(Ce),ve=n(198),Ee=n.n(ve),Se=n(199),ke=n.n(Se),ye=Object(b.a)("div")((function(e){e.theme;return{}})),Ie=Object(b.a)(pe.a)((function(e){e.theme;return{marginBottom:10}})),Me=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),Re=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(be.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(be.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(be.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsxs)(ye,{className:"RichEditor-root",children:[Object(R.jsx)(Ie,{className:"RichEditor-controls",elevation:2,children:Object(R.jsxs)(se.a,{container:!0,children:[Object(R.jsx)(Oe.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(R.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(R.jsx)(ge.a,{})})}),Object(R.jsx)(Oe.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(R.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(R.jsx)(fe.a,{})})}),Object(R.jsx)(ue.a,{orientation:"vertical",flexItem:!0}),Object(R.jsx)(Oe.a,{title:"\uad75\uac8c",children:Object(R.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(R.jsx)(we.a,{})})}),Object(R.jsx)(Oe.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(R.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(R.jsx)(Ee.a,{})})}),Object(R.jsx)(Oe.a,{title:"\ubc11\uc904",children:Object(R.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(R.jsx)(ke.a,{})})}),Object(R.jsx)(ue.a,{orientation:"vertical",flexItem:!0})]})}),Object(R.jsx)(Me,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(R.jsx)(be.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),De=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(be.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(be.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(be.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:be.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsx)(ae.a,{maxWidth:!1,children:Object(R.jsx)(se.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(R.jsxs)(C.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(R.jsx)(je.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(R.jsx)(ue.a,{}),Object(R.jsxs)(C.a,{component:"form",children:[Object(R.jsx)(H.a,{margin:"normal",sx:{width:"100%"},children:Object(R.jsx)(J.a,{placeholder:"\uc81c\ubaa9"})}),Object(R.jsx)(H.a,{margin:"normal",sx:{width:"100%"},children:Object(R.jsx)(Re,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(R.jsx)(w.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),Le=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),Pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return Object(R.jsxs)(j.a,{children:[Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(Le,{children:Object(R.jsxs)(x.a,{children:[Object(R.jsx)(g.a,{style:{color:"inherit"},href:"/",children:Object(R.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(R.jsx)(E.a,{})})}),Object(R.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(R.jsx)(g.a,{underline:"none",href:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(R.jsx)(g.a,{underline:"none",href:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(R.jsx)(C.a,{sx:{flexGrow:1}}),Object(R.jsx)(W,{}),Object(R.jsx)(w.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(R.jsx)(re,{open:this.state.open,onClose:this.handleClose})]}),Object(R.jsxs)(u.c,{children:[Object(R.jsx)(u.a,{exact:!0,path:"/",component:ie}),Object(R.jsx)(u.a,{exact:!0,path:"/board",component:he}),Object(R.jsx)(u.a,{path:"/write",component:De})]})]})}}]),n}(a.a.Component),We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,426)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(Pe,{})}),document.getElementById("root")),We()}},[[350,1,2]]]);
//# sourceMappingURL=main.f2a56f64.chunk.js.map