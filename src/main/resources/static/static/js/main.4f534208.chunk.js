(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{238:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(49),i=a.n(o),c=(a(238),a(19)),l=a(20),d=a(27),h=a(23),u=a(22),j=a(63),b=a(24),p=a(3),O=a(401),x=a(444),g=a(445),m=a(429),f=a(419),v=a(431),w=a(437),C=a(418),y=a(415),S=a(214),E=a.n(S),k=a(51),I=a(113),A=a(72),M=a(57),L="error",P="warning",W={open:!1,type:"success",message:""},D=Object(M.c)({name:"alert",initialState:W,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1}}}),R=D.actions,T=R.openAlert,B=R.closeAlert,F=D.reducer,N=a(1),U=["component","auth"],z=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showMessage=n.showMessage.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isLoggedin||this.showMessage()}},{key:"showMessage",value:function(){var e={type:L,message:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."};this.props.openAlert(e)}},{key:"render",value:function(){var e=this.props,t=e.component,a=e.auth,n=Object(I.a)(e,U);return Object(N.jsx)(b.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return a.isLoggedin?Object(N.jsx)(t,Object(k.a)({},e)):Object(N.jsx)(b.a,{to:{pathname:"/",state:{from:e.location}}})}}))}}]),a}(s.a.Component),V={openAlert:T},H=Object(b.g)(Object(A.b)((function(e){return{auth:e.auth}}),V)(z)),J=a(4),G=a(201),q=a.n(G),K=a(32),Q=a(402),X=Object(p.a)("div")((function(e){var t=e.theme;return Object(J.a)({position:"relative",borderRadius:10,backgroundColor:Object(O.a)(Q.a[100],.3),"&:hover":{backgroundColor:Object(O.a)(Q.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),Y=Object(p.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.main,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Z=Object(p.a)(K.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(J.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),$=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(X,{children:[Object(N.jsx)(Y,{children:Object(N.jsx)(q.a,{})}),Object(N.jsx)(Z,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),a}(s.a.Component),_=a(425),ee=a(427),te=a(430),ae=a(412),ne=a(432),re=a(433),se=a(421),oe=a(435),ie=a(434),ce=a(409),le=a(436),de=a(414),he=a(121),ue=a.n(he),je=a(120),be=a.n(je),pe=a(203),Oe=a.n(pe),xe=a(142),ge=a.n(xe),me=a(202),fe=a(143),ve=a.n(fe),we=Object(M.b)("auth/authenticate",function(){var e=Object(me.a)(ge.a.mark((function e(t,a){var n,r,s,o;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,ve.a.post("/api/v1/auth/authenticate",t);case 4:return r=e.sent,s=r.res,e.abrupt("return",s);case 9:if(e.prev=9,e.t0=e.catch(1),(o=e.t0).response){e.next=14;break}throw e.t0;case 14:return e.abrupt("return",n(o.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}()),Ce=Object(M.c)({name:"auth",initialState:{isLoggedin:!1,error:!1,message:"",token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,ve.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token)}},extraReducers:(n={},Object(J.a)(n,we.fulfilled,(function(e,t){var a=t.payload;e.isLoggedin=a.result})),Object(J.a)(n,we.rejected,(function(e,t){var a=t.payload;e.isLoggedin=a.result,e.error=!0,e.message=a.message})),n)}),ye=Ce.actions.authenticationSuccess,Se=Ce.reducer,Ee=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleOpenSnackbar=function(e){n.setState({snackbar:{open:!0,message:e}})},n.handleCloseSnackbar=function(){n.setState({snackbar:{open:!1,message:""}})},n.handleChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&n.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&n.setState({passwordError:!1,passwordErrorMessage:""})},n.handleClose=function(){n.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),n.props.onClose()},n.handleClickShowPassword=function(){n.setState({showPassword:!n.state.showPassword})},n.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===n.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===n.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),n.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},n.handleSubmit=function(e){e.preventDefault();var t={username:n.state.studentId,password:n.state.password};n.validate()&&n.props.authenticate(t).unwrap().then((function(e){if(!e.result){var t={type:P,message:e.message};n.props.openAlert(t)}}))},n.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",login:{error:!1,message:""}},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(_.a,{open:this.props.open,onClose:this.handleClose,children:[Object(N.jsxs)(ee.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(N.jsx)(m.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(N.jsx)(Oe.a,{})}):null]}),Object(N.jsx)(te.a,{children:Object(N.jsxs)(v.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(N.jsx)(ae.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(N.jsxs)(ne.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(re.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(N.jsx)(se.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(N.jsx)(oe.a,{position:"end",children:Object(N.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(N.jsx)(be.a,{}):Object(N.jsx)(ue.a,{})})})}),Object(N.jsx)(ie.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.props.auth.error?Object(N.jsx)(ne.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(N.jsx)(ce.a,{error:!0,children:this.props.auth.message})}):null,Object(N.jsx)(le.a,{control:Object(N.jsx)(de.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(N.jsx)(w.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})})]})}}]),a}(r.Component),ke={authenticate:we,authenticationSuccess:ye,openAlert:T},Ie=Object(A.b)((function(e){return{auth:e.auth}}),ke)(Ee),Ae=a(423),Me=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"stringToColor",value:function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);for(var n="#",r=0;r<3;r++){n+="00".concat((t>>8*r&255).toString(16)).substr(-2)}return n}},{key:"stringAvatar",value:function(e){return{sx:{bgcolor:this.stringToColor(e)},children:e.substring(1,e.length)}}},{key:"render",value:function(){var e=this.props.user;return Object(N.jsx)(Ae.a,Object(k.a)({},this.stringAvatar(e.name)))}}]),a}(s.a.Component),Le=a(438),Pe=a(424),We=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsx)(Le.a,{maxWidth:!1,style:{height:"100vh"},children:Object(N.jsxs)(Pe.a,{container:!0,alignContent:"center",height:"100%",children:[Object(N.jsx)(v.a,{sx:{height:"64px"}}),Object(N.jsx)(v.a,{textAlign:"center",mx:"auto",children:"Hello World"})]})})}}]),a}(r.Component),De=We,Re=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsx)(Le.a,{maxWidth:!1,children:Object(N.jsxs)(Pe.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:[Object(N.jsx)(v.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"}),Object(N.jsx)(v.a,{textAlign:"center",mx:"auto",children:Object(N.jsx)(j.b,{to:"/application",children:Object(N.jsx)(w.a,{children:"\uc9c0\uc6d0\ud558\uae30"})})})]})})}}]),a}(s.a.Component),Te=Re,Be=a(428),Fe=a(439),Ne=a(416),Ue=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={step:0,studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",login:{error:!1,message:""}},n.isAuthStep=n.isAuthStep.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClickShowPassword=n.handleClickShowPassword.bind(Object(d.a)(n)),n.handleAuth=n.handleAuth.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"isAuthStep",value:function(){return 0===this.state.step}},{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&this.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&this.setState({passwordError:!1,passwordErrorMessage:""})}},{key:"handleClickShowPassword",value:function(){this.setState({showPassword:!this.state.showPassword})}},{key:"handleAuth",value:function(e){e.preventDefault(),this.setState({step:1})}},{key:"render",value:function(){return Object(N.jsxs)(Le.a,{maxWidth:!1,style:{height:"100vh"},children:[Object(N.jsx)(v.a,{sx:{height:"64px"}}),Object(N.jsx)(Pe.a,{container:!0,alignContent:"center",height:"91%",children:Object(N.jsxs)(v.a,{mx:"auto",width:"1920px",maxWidth:"1920px",children:[Object(N.jsx)(Be.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uc9c0\uc6d0\uc11c \uc791\uc131"}),Object(N.jsx)(Fe.a,{}),Object(N.jsxs)(v.a,{textAlign:"center",alignContent:"center",height:"800px",children:[Object(N.jsx)(Ne.a,{activeStep:0,alternativeLabel:!0}),this.isAuthStep()?Object(N.jsxs)(v.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleAuth,children:[Object(N.jsx)(ae.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(N.jsxs)(ne.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(re.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(N.jsx)(se.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(N.jsx)(oe.a,{position:"end",children:Object(N.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(N.jsx)(be.a,{}):Object(N.jsx)(ue.a,{})})})}),Object(N.jsx)(ie.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(N.jsx)(ne.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(N.jsx)(ce.a,{error:!0,children:this.state.login.message})}):null,Object(N.jsx)(w.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]}):Object(N.jsx)(v.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit})]})]})})]})}}]),a}(r.Component),ze=a(422),Ve=a(443),He=a(208),Je=a.n(He),Ge=a(440),qe=a(441),Ke=a(442),Qe=a(204),Xe=a.n(Qe),Ye=a(205),Ze=a.n(Ye),$e=a(206),_e=a.n($e),et=a(207),tt=a.n(et),at=["expand"],nt=Object(p.a)((function(e){e.expand;var t=Object(I.a)(e,at);return Object(N.jsx)(m.a,Object(k.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),rt=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={post:{user:{name:"\ud64d\uae38\ub3d9"},title:"\uc81c\ubaa9",content:"\ub0b4\uc6a9",createdAt:Date.now(),updatedAt:null},expanded:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(Ge.a,{sx:{m:2},children:[Object(N.jsxs)(v.a,{sx:{p:2,display:"flex"},children:[Object(N.jsx)(Me,{user:this.state.post.user}),Object(N.jsxs)(Pe.a,{sx:{mx:2,width:"100%"},children:[Object(N.jsx)(Be.a,{variant:"h5",children:this.state.post.title}),Object(N.jsxs)(Pe.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(N.jsx)(Be.a,{variant:"subtitle1",children:this.state.post.user.name}),Object(N.jsx)(Be.a,{variant:"caption",sx:{mx:1,color:"text.secondary"},children:this.state.post.createdAt.toString()})]})]})]}),Object(N.jsx)(Fe.a,{}),Object(N.jsx)(qe.a,{children:this.state.post.content}),Object(N.jsxs)(Ke.a,{disableSpacing:!0,children:[Object(N.jsx)(m.a,{"aria-label":"add to favorites",children:Object(N.jsx)(Xe.a,{})}),Object(N.jsx)(m.a,{"aria-label":"show comment",children:Object(N.jsx)(Ze.a,{})}),Object(N.jsx)(m.a,{"aria-label":"share",children:Object(N.jsx)(_e.a,{})}),Object(N.jsx)(nt,{expand:this.state.expanded,"aria-expanded":this.state.expanded,"aria-label":"show more",children:Object(N.jsx)(tt.a,{})})]})]})}}]),a}(s.a.Component),st=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(Le.a,{maxWidth:!1,children:[Object(N.jsx)(v.a,{sx:{height:"64px"}}),Object(N.jsxs)(ze.a,{children:[Object(N.jsx)(rt,{}),Object(N.jsx)(rt,{})]}),Object(N.jsx)(j.b,{to:"/write",children:Object(N.jsx)(Ve.a,{color:"primary","aria-label":"add",sx:{position:"fixed",display:"",bottom:16,right:16},children:Object(N.jsx)(Je.a,{})})})]})}}]),a}(r.Component),ot=a(60),it=a(426),ct=a(411),lt=a(209),dt=a.n(lt),ht=a(210),ut=a.n(ht),jt=a(211),bt=a.n(jt),pt=a(212),Ot=a.n(pt),xt=a(213),gt=a.n(xt),mt=Object(p.a)("div")((function(e){e.theme;return{}})),ft=Object(p.a)(it.a)((function(e){e.theme;return{marginBottom:10}})),vt=Object(p.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),wt=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClickUndo=function(){n.onChange(ot.EditorState.undo(n.props.editorState))},n.onClickRedo=function(){n.onChange(ot.EditorState.redo(n.props.editorState))},n.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),n.onChange(ot.RichUtils.toggleInlineStyle(n.props.editorState,e))}},n.hasInlineStyle=function(e){return n.props.editorState.getCurrentInlineStyle().has(e)},n.setEditor=function(e){n.editor=e},n.onFocusEditor=function(){n.editor&&n.editor.focus()},n.onChange=n.props.onChange.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(mt,{className:"RichEditor-root",children:[Object(N.jsx)(ft,{className:"RichEditor-controls",elevation:2,children:Object(N.jsxs)(Pe.a,{container:!0,children:[Object(N.jsx)(ct.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(N.jsx)(m.a,{onClick:this.onClickUndo.bind(this),children:Object(N.jsx)(dt.a,{})})}),Object(N.jsx)(ct.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(N.jsx)(m.a,{onClick:this.onClickRedo.bind(this),children:Object(N.jsx)(ut.a,{})})}),Object(N.jsx)(Fe.a,{orientation:"vertical",flexItem:!0}),Object(N.jsx)(ct.a,{title:"\uad75\uac8c",children:Object(N.jsx)(m.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(N.jsx)(bt.a,{})})}),Object(N.jsx)(ct.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(N.jsx)(m.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(N.jsx)(Ot.a,{})})}),Object(N.jsx)(ct.a,{title:"\ubc11\uc904",children:Object(N.jsx)(m.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(N.jsx)(gt.a,{})})}),Object(N.jsx)(Fe.a,{orientation:"vertical",flexItem:!0})]})}),Object(N.jsx)(vt,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(N.jsx)(ot.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),a}(s.a.Component),Ct=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClickUndo=function(){n.onEditorStateChange(ot.EditorState.undo(n.state.editorState))},n.onClickRedo=function(){n.onEditorStateChange(ot.EditorState.redo(n.state.editorState))},n.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),n.onEditorStateChange(ot.RichUtils.toggleInlineStyle(n.state.editorState,e))}},n.onEditorChange=function(e){n.setState({editorState:e})},n.state={editorState:ot.EditorState.createEmpty()},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsx)(Le.a,{maxWidth:!1,children:Object(N.jsxs)(Pe.a,{container:!0,alignContent:"center",height:"100vh",children:[Object(N.jsx)(v.a,{sx:{height:"64px"}}),Object(N.jsxs)(v.a,{textAlign:"center",mx:"auto",width:"1920px",maxWidth:"1920px",children:[Object(N.jsx)(Be.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(N.jsx)(Fe.a,{}),Object(N.jsxs)(v.a,{component:"form",children:[Object(N.jsx)(ne.a,{margin:"normal",sx:{width:"100%"},children:Object(N.jsx)(se.a,{placeholder:"\uc81c\ubaa9"})}),Object(N.jsx)(ne.a,{margin:"normal",sx:{width:"100%"},children:Object(N.jsx)(wt,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(N.jsx)(w.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})]})})}}]),a}(s.a.Component),yt=Object(p.a)(x.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(O.a)("#ffffff",.72)}})),St=Object(p.a)(j.b)((function(e){var t=e.theme;return{textDecoration:"inherit","&:visited":{color:t.palette.primary.main,textDecoration:"inherit"},"&:hover":{color:t.palette.primary.dark,textDecoration:"inherit"}}})),Et=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={open:!1},n.handleClickOpen=n.handleClickOpen.bind(Object(d.a)(n)),n.handleClose=n.handleClose.bind(Object(d.a)(n)),n.handleCloseAlert=n.handleCloseAlert.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("token");null!==e&&this.props.authenticationSuccess(e)}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.user;return Object(N.jsxs)(j.a,{children:[Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(yt,{children:Object(N.jsxs)(g.a,{children:[Object(N.jsx)(j.b,{style:{color:"inherit"},to:"/",children:Object(N.jsx)(m.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(N.jsx)(E.a,{})})}),Object(N.jsxs)(f.a,{"aria-label":"breadcrumb",children:[Object(N.jsx)(St,{to:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(N.jsx)(St,{to:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(N.jsx)(v.a,{sx:{flexGrow:1}}),Object(N.jsx)($,{}),t.isLoggedin?Object(N.jsx)("div",{children:Object(N.jsx)(m.a,{"aria-label":"user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(N.jsx)(Me,{user:a})})}):Object(N.jsx)(w.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(N.jsx)(Ie,{open:this.state.open,onClose:this.handleClose}),Object(N.jsx)(C.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(N.jsx)(y.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(N.jsxs)(b.d,{children:[Object(N.jsx)(b.b,{exact:!0,path:"/",component:t.isLoggedin?De:Te}),Object(N.jsx)(b.b,{exact:!0,path:"/application",component:Ue}),Object(N.jsx)(H,{exact:!0,path:"/board",component:st}),Object(N.jsx)(H,{path:"/write",component:Ct})]})]})}}]),a}(s.a.Component),kt={authenticationSuccess:ye,openAlert:T,closeAlert:B},It=Object(A.b)((function(e){return{alert:e.alert,auth:e.auth,user:e.user}}),kt)(Et),At=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,446)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))},Mt=a(58),Lt=Object(M.c)({name:"user",initialState:{studentId:"",name:""},reducers:{setName:function(e,t){e.name=t.payload}}}).reducer,Pt=Object(Mt.b)({alert:F,auth:Se,user:Lt}),Wt=Object(M.a)({reducer:Pt});i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(A.a,{store:Wt,children:Object(N.jsx)(It,{})})}),document.getElementById("root")),At()}},[[364,1,2]]]);
//# sourceMappingURL=main.4f534208.chunk.js.map