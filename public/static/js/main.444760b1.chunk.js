(this["webpackJsonpproject-showcase-client"]=this["webpackJsonpproject-showcase-client"]||[]).push([[0],{134:function(e,t,r){},147:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/undraw_uploading_go67.38d4dd8c.svg"},203:function(e,t,r){},232:function(e,t,r){},233:function(e,t,r){},234:function(e,t,r){},238:function(e,t,r){},239:function(e,t,r){},240:function(e,t,r){},246:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/undraw_profile_details_f8b7.74dcbddc.svg"},247:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(12),a=r.n(c),i=(r(134),r(22)),s=r(24),l=r(15),d=r(11),j=r(55),u=r(33),p=r(26),b=r.n(p);function m(e){return b.a.get("/projects/?sortBy="+e).then((function(e){return e.data}))}function h(e){return b.a.get("/users/".concat(e,"/projects")).then((function(e){return e.data}))}function g(e){return b.a.get("/users/".concat(e,"/upvoted")).then((function(e){return e.data}))}function f(e){return b.a.get("/projects/".concat(e)).then((function(e){return e.data}))}var O=function(e,t){return{type:"SET",payload:{projects:e,queryType:t}}},x=function(e,t,r){return{type:"SET_PROJECT_DETAILS",payload:{projects:e,queryType:t,projectDetails:r}}},y=r(4),v=r(144),C=r(6),w=r(304),I=r(286),k=r(283),B=r(285),E=r(249),S=r(284),D=r(287),N=r(154),T=r.n(N),F=(r(203),r(97)),P=r(155),R=r.n(P),L=r(289),_=r(165),U=r(288),A=r(305),W=r(1),q=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{color:"#e2f1f8"},title:{flexGrow:1},drawerList:{color:"#3F3D56"},a:{textDecoration:"none"}}}));function z(e){return Object(W.jsx)(E.a,Object(u.a)({button:!0,component:"a"},e))}var V=Object(l.g)((function(e){var t=Object(l.f)(),r=q(),c=Object(n.useState)("popular"),a=Object(i.a)(c,2),p=a[0],h=a[1];Object(n.useEffect)((function(){var t=!0;return t&&e.match.params.sortBy&&(document.getElementById(p).style.borderBottom="1px solid #262626",document.getElementById(p).style.fontWeight="500"),function(){t=!1}}),[e.match.params.sortBy]);var g=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),f=Object(i.a)(g,2),x=f[0],v=f[1],N=o.a.useState(null),P=Object(i.a)(N,2),V=P[0],J=P[1],G=Boolean(V),H=function(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&v(Object(u.a)(Object(u.a)({},x),{},Object(j.a)({},e,t)))}},M=function(e){"New"!==e&&"Trending"!==e&&"Popular"!==e||(document.getElementById("top-creators-list").style.display="none",document.getElementById("display-projects").style.display="block")},Q=function(e){return Object(W.jsx)("div",{className:Object(y.default)(r.list,r.drawerList,Object(j.a)({},r.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:function(){return H(e,!1)},onKeyDown:function(){return H(e,!1)},children:Object(W.jsxs)(k.a,{children:[Object(W.jsxs)(E.a,{button:!0,onClick:function(){return M("New")},children:[Object(W.jsx)(z,{href:"/new",children:Object(W.jsx)(S.a,{primary:"New"})}),Object(W.jsx)(B.a,{})]}),Object(W.jsxs)(E.a,{button:!0,onClick:function(){return M("Trending")},children:[Object(W.jsx)(z,{href:"/trending",children:Object(W.jsx)(S.a,{primary:"Trending"})}),Object(W.jsx)(B.a,{})]}),Object(W.jsxs)(E.a,{button:!0,onClick:function(){return M("Popular")},children:[Object(W.jsx)(z,{href:"/popular",children:Object(W.jsx)(S.a,{primary:"Popular"})}),Object(W.jsx)(B.a,{})]}),Object(W.jsxs)(E.a,{button:!0,role:"presentation",onClick:function(){return M("Creators")},children:[Object(W.jsx)(z,{href:"/creators",children:Object(W.jsx)(S.a,{primary:"Creators"})}),Object(W.jsx)(B.a,{})]}),localStorage.getItem("User")?Object(W.jsxs)(E.a,{button:!0,role:"presentation",onClick:function(){return M("Post Project")},children:[Object(W.jsx)(z,{href:"/project/post-project",children:Object(W.jsx)(S.a,{primary:"Post Project"})}),Object(W.jsx)(B.a,{})]}):Object(W.jsxs)(E.a,{button:!0,role:"presentation",onClick:function(){return M("Login")},children:[Object(W.jsx)(z,{href:"".concat(re,"/auth/google"),children:Object(W.jsx)(S.a,{primary:"Login"})}),Object(W.jsx)(B.a,{})]})]})})},K=Object(C.a)((function(e){return{root:{color:"#434E5C",backgroundColor:F.a[200]}}}))(I.a),Y=Object(d.b)(),X=function(){b.a.get("/auth/logout").then((function(e){return e.data})).then((function(e){Y({type:"LOGOUT"}),ee()}))},Z=function(e){h(e),"logo"!==e&&(document.getElementById(e).style.borderBottom="1px solid #262626",document.getElementById(e).style.fontWeight="500"),"logo"===e&&(document.getElementById("new").style.borderBottom="none",document.getElementById("new").style.fontWeight="400",document.getElementById("trending").style.borderBottom="none",document.getElementById("trending").style.fontWeight="400",document.getElementById("popular").style.borderBottom="none",document.getElementById("popular").style.fontWeight="400",t.push("/")),"popular"===e?(document.getElementById("new").style.borderBottom="none",document.getElementById("new").style.fontWeight="400",document.getElementById("trending").style.borderBottom="none",document.getElementById("trending").style.fontWeight="400"):"trending"===e?(document.getElementById("new").style.borderBottom="none",document.getElementById("new").style.fontWeight="400",document.getElementById("popular").style.borderBottom="none",document.getElementById("popular").style.fontWeight="400"):(document.getElementById("trending").style.borderBottom="none",document.getElementById("trending").style.fontWeight="400",document.getElementById("popular").style.borderBottom="none",document.getElementById("popular").style.fontWeight="400"),m(e).then((function(t){Y(O(t,e))}))},$=function(e){J(e.currentTarget)},ee=function(){J(null)},te=function(){e.history.push("/user/".concat(JSON.parse(localStorage.getItem("User")).id)),ee()},re="https://projstemp.herokuapp.com";return Object(W.jsxs)("nav",{children:[Object(W.jsx)(s.b,{onClick:function(){return Z("logo")},id:"logo",to:"/",className:"Link",children:Object(W.jsx)("h2",{children:"PS"})}),Object(W.jsxs)("ul",{children:[Object(W.jsx)("li",{id:"new",children:Object(W.jsx)(s.b,{onClick:function(){return Z("new")},activeClassName:"active",className:"Link",to:"/new",children:"New"})}),Object(W.jsx)("li",{id:"trending",children:Object(W.jsx)(s.b,{onClick:function(){return Z("trending")},activeClassName:"active",className:"Link",to:"/trending",children:"Trending"})}),Object(W.jsx)("li",{id:"popular",children:Object(W.jsx)(s.b,{onClick:function(){return Z("popular")},activeClassName:"active",className:"Link",to:"/popular",children:"Popular"})})]}),Object(W.jsx)("div",{id:"nav-buttons",children:localStorage.getItem("User")?Object(W.jsx)(o.a.Fragment,{children:Object(W.jsx)(s.b,{activeClassName:"active",className:"Link",to:"/project/post-project",children:Object(W.jsx)(K,{className:(r.margin,r.a),children:Object(W.jsx)("span",{style:{textDecoration:"none",color:"black"},children:"Post Project"})})})}):Object(W.jsx)(o.a.Fragment,{children:Object(W.jsx)(K,{className:(r.margin,r.a),children:Object(W.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"".concat(re,"/auth/google"),children:"Login"})})})}),Object(W.jsx)("div",{id:"menu",children:["right"].map((function(e){return Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsx)(I.a,{onClick:H(e,!0),children:Object(W.jsx)(D.a,{className:r.menuButton,color:"#434E5C","aria-label":"menu",children:Object(W.jsx)(T.a,{style:{color:F.a[800]}})})}),Object(W.jsx)(w.a,{anchor:e,open:x[e],onClose:H(e,!1),onClick:H(e,!1),children:Q(e)})]},e)}))}),localStorage.getItem("User")?Object(W.jsx)(U.a,{children:Object(W.jsx)("div",{children:JSON.parse(localStorage.getItem("User")).profilePic?Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsx)(D.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:$,children:Object(W.jsx)(A.a,{src:JSON.parse(localStorage.getItem("User")).profilePic.url})}),Object(W.jsxs)(_.a,{id:"menu-appbar",anchorEl:V,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:G,onClose:ee,children:[Object(W.jsx)(L.a,{onClick:function(){return te()},children:"Profile"}),Object(W.jsx)(L.a,{onClick:function(){return X()},children:"Logout"})]})]}):Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsx)(D.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:$,color:"inherit",children:Object(W.jsx)(R.a,{})}),Object(W.jsxs)(_.a,{id:"menu-appbar",anchorEl:V,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:G,onClose:ee,children:[Object(W.jsx)(L.a,{onClick:function(){return te()},children:"Profile"}),Object(W.jsx)(L.a,{onClick:function(){return X()},children:"Logout"})]})]})})}):Object(W.jsx)(o.a.Fragment,{})]})})),J=r(293),G=r(306),H=r(108),M=r(57),Q=r(96),K=r.n(Q),Y=r(35),X=r(62),Z=r(292);function $(){return b.a.get("users/?sortBy=popular").then((function(e){return e.data}))}var ee=function(e){return{type:"setTopCreators",payload:{data:e}}},te=Object(v.a)((function(e){e.palette;return{avatar:{borderRadius:8,backgroundColor:"#495869",position:"static"},overline:{fontSize:10,textTransform:"uppercase",letterSpacing:1,color:"#8D9CAD"},name:{fontSize:14,fontWeight:500,color:"#495869"},notUpvotedButton:{borderRadius:"10%",borderColor:"#E7EDF3",color:"#8D9CAD"},upvotedButton:{borderRadius:"10%",borderColor:"#E7EDF3",backgroundColor:"#0000000a",color:"#8D9CAD"}}})),re=Object(l.g)((function(e){var t=te(),r=Object(d.c)((function(e){return e.projects})),o=Object(d.b)(),c=Object(X.a)({overrides:{MuiSvgIcon:{colorPrimary:{color:"#8D9CAD"},colorSecondary:{color:"#5b6065"}}}}),a=Object(n.useState)(!1),s=Object(i.a)(a,2),l=s[0],j=s[1];console.log("BasicProfile PROPS",e),Object(n.useEffect)((function(){var t=!0;if(t&&localStorage.getItem("User")){var r=e.project.allVotes.find((function(e,t){return e.votedBy===JSON.parse(localStorage.getItem("User")).id}));j(!!r)}return function(){t=!1}}),[r]);var p=function(t){e.history.push("/user/".concat(t))};return Object(W.jsxs)(Y.Row,Object(u.a)(Object(u.a)({},e),{},{children:[Object(W.jsx)(Y.Item,{children:Object(W.jsx)(A.a,{onClick:function(){return p(e.profile.id)},style:{cursor:"pointer"},src:e.profile.profilePic?e.profile.profilePic.url:"",className:t.avatar,children:e.profile?e.profile.username?e.profile.username[0].toUpperCase():e.profile.first_name[0].toUpperCase():""})}),Object(W.jsxs)(Y.Item,{onClick:function(){return p(e.profile.id)},position:"middle",pl:{sm:.5,lg:.5},style:{cursor:"pointer"},children:[Object(W.jsx)(M.a,{className:t.overline,children:"CREATOR"}),Object(W.jsx)(M.a,{className:t.name,children:e.profile?e.profile.username?e.profile.username:e.profile.first_name+" "+e.profile.last_name:""})]}),Object(W.jsx)(Y.Item,{position:"right",children:Object(W.jsx)(Z.a,{theme:c,children:Object(W.jsxs)(I.a,{variant:"outlined",style:{cursor:"pointer"},className:l?t.upvotedButton:t.notUpvotedButton,onClick:function(){return t="new"!==e.projectsQueryType?e.project.project:e.project.id,void b.a.post("/projects/vote",{project:t}).then((function(t){"MainPage"===e.from?m(r.queryType?r.queryType:"popular").then((function(t){o(O(t,e.projectsQueryType))})):h(e.profile.id).then((function(t){o(O(t,e.projectsQueryType))})),$().then((function(e){o(ee(e))}))}));var t},children:[Object(W.jsx)(K.a,{color:l?"secondary":"primary"}),Object(W.jsx)(M.a,{style:{color:l?"#5b6065":"#8D9CAD"},children:e.project.allVotes.length})]})})})]}))})),ne=Object(v.a)((function(){return{root:{paddingBottom:0},title:{fontSize:"1.25rem",color:"#122740"},subheader:{fontSize:"0.875rem",color:"#495869"}}})),oe=Object(l.g)((function(e){var t=ne();return Object(W.jsx)(Y.Row,Object(u.a)(Object(u.a)({},e),{},{children:Object(W.jsxs)(Y.Item,{position:"middle",onClick:function(){return t=e.project.id,void e.history.push("/project/".concat(t));var t},style:{cursor:"pointer"},children:[Object(W.jsx)(M.a,{className:t.title,children:Object(W.jsx)("b",{children:e.project?e.project.title:""})}),Object(W.jsx)(M.a,{className:t.subheader,children:e.project?e.project.tagline:""})]})}))})),ce=Object(v.a)((function(){return{card:{border:"2px solid",borderColor:"#E7EDF3",borderRadius:16,transition:"0.4s","&:hover":{borderColor:"#5B9FED"}},image:{height:"160px",width:"100%",borderRadius:8},noImage:{display:"none"}}})),ae=function(e){var t="project-image-".concat(e);document.getElementById(t).style.display="none"},ie=o.a.memo((function(e){var t=ce(),r=Object(d.b)(),n=Object(d.c)((function(e){return e.projects.queryType})),o=Object(d.c)((function(e){return e.projects.projects}));console.log("PROJECT CARD PROPS",e);return Object(W.jsx)(J.a,{item:!0,xs:12,sm:"MainPage"===e.from?12:6,md:"MainPage"===e.from?6:4,children:Object(W.jsxs)(Y.Column,{className:t.card,p:{xs:.5,sm:.75,lg:1},gap:{xs:1,sm:1.5,lg:2},children:[Object(W.jsx)(oe,{project:"new"!==n?e.project.proj:e.project}),Object(W.jsx)(Y.Item,{onClick:function(){var t;f(t="new"!==n?e.project.project:e.project.id).then((function(c){r(x(o,n,c)),e.history.push("/project/".concat(t))}))},style:{cursor:"pointer"},children:null==e.project.image?Object(W.jsx)(H.a,{minHeight:160,maxHeight:160,bgcolor:"#F4F7FA",borderRadius:8}):Object(W.jsx)(H.a,{minHeight:160,maxHeight:160,bgcolor:"#F4F7FA",borderRadius:8,children:"new"!==n?Object(W.jsx)("img",{id:"project-image-".concat(e.project.project),className:t.image,src:e.project.image.url,onError:function(){ae(e.project.project)},alt:""}):Object(W.jsx)("img",{id:"project-image-".concat(e.project.id),className:t.image,src:e.project.image.url,onError:function(){ae(e.project.id)},alt:""})})}),Object(W.jsx)(re,{from:e.from,profile:e.project.user?e.project.user[0]:[],project:e.project,projectsQueryType:n})]})})})),se=Object(l.g)(ie),le=Object(G.a)()((function(e){var t=e.width,r=Object(d.c)((function(e){return e.projects}));console.log("DISPLAY PROJECTS STATE",r);var n=r.projects?r.projects.map((function(t,n){return Object(W.jsx)(se,{from:e.from,onClick:function(){f("new"!==r.queryState?t.project:t.id).then((function(e){console.log(e)}))},href:"/project/".concat("new"!==r.queryState?t.project:t.id),style:{cursor:"pointer"},project:t},n)})):"";return Object(W.jsx)("div",{id:"display-projects",children:Object(W.jsx)(J.a,{container:!0,spacing:{xs:1,sm:2,md:2,lg:2}[t],children:n})})})),de=(r(232),r(294)),je=Object(v.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),ue=Object(l.g)((function(e){Object(d.c)((function(e){return e.users}));var t=je();return Object(W.jsxs)(E.a,{alignItems:"flex-start",children:[Object(W.jsx)(de.a,{children:Object(W.jsx)(A.a,{alt:"Cindy Baker",src:e.user[0].profilePic.url,children:e.user[0].user[0].first_name?e.user[0].user[0].first_name[0].toUpperCase():e.user[0].user[0].username[0].toUpperCase()})}),Object(W.jsx)(S.a,{secondary:Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsx)(M.a,{component:"span",className:(t.inline,"creator-name"),color:"textPrimary",style:{cursor:"pointer"},onClick:function(){return t=e.user[0].userId,void e.history.push("/user/".concat(t));var t},children:e.user[0].user[0].first_name?e.user[0].user[0].first_name+" "+e.user[0].user[0].last_name:e.user[0].user[0].username}),Object(W.jsx)(M.a,{variant:"body2",style:{fontSize:"14px"},children:e.user[0].user[0].bio?e.user[0].user[0].bio:""})]})})]})})),pe=r(295),be=Object(v.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,borderRadius:10,boxShadow:"0px 1px 2px 0px rgba(0,0,0,0.25)",WebkitBoxShadow:"0px 1px 2px 0px rgba(0,0,0,0.25)",MozBoxShadow:"0px 1px 2px 0px rgba(0,0,0,0.25)"},inline:{display:"inline"},header:{fontWeight:"bold",borderRadius:10},divider:{marginBottom:"0.5rem"}}})),me=function(){var e=be(),t=Object(d.c)((function(e){return e.users})),r=t.users?t.users.map((function(e,t){return Object(W.jsx)(ue,{user:e},t)})):"";return Object(W.jsxs)(k.a,{className:e.root,subheader:Object(W.jsx)("li",{}),children:[Object(W.jsx)(pe.a,{className:e.header,children:"Top Creators of the week"}),Object(W.jsx)(B.a,{component:"li",className:e.divider}),r]})},he=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),ge=Object(l.g)((function(e){var t=Object(d.b)();Object(n.useEffect)((function(){var r=!0;return r&&(e.match.params.sortBy?"creators"===e.match.params.sortBy?(document.getElementById("top-creators-list").style.display="block",document.getElementById("display-projects").style.display="none",m(e.match.params.sortBy).then((function(r){t(O(r,e.match.params.sortBy))})),$().then((function(e){t(ee(e))}))):(m(e.match.params.sortBy).then((function(r){t(O(r,e.match.params.sortBy))})),$().then((function(e){t(ee(e))}))):(m("popular").then((function(e){t(O(e,"popular"))})),$().then((function(e){t(ee(e))})))),function(){r=!1}}),[]);var r=he();return Object(W.jsx)("div",{className:r.root,id:"main-page",children:Object(W.jsxs)(J.a,{container:!0,spacing:3,id:"main-page-grid",children:[Object(W.jsx)(J.a,{item:!0,sm:7,md:8,id:"display-projects",children:Object(W.jsx)(le,{from:"MainPage"})}),Object(W.jsx)(J.a,{item:!0,sm:5,md:4,id:"top-creators-list",children:Object(W.jsx)(me,{})})]})})})),fe=r(297),Oe=r(302),xe=r(296),ye=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},next:{margin:e.spacing(3,0,2),backgroundColor:"#3F3D56"},prev:{margin:e.spacing(3,0,2),backgroundColor:"#FFFFFF",color:"#000000",borderColor:"#000000"}}}));var ve=function(e){var t=e.userDetails,r=t.website,n=t.github,o=t.youtube,c=ye();return Object(W.jsxs)(xe.a,{component:"main",maxWidth:"xs",children:[Object(W.jsx)(fe.a,{}),Object(W.jsxs)("div",{className:c.paper,children:[Object(W.jsx)(M.a,{component:"h1",variant:"h5",children:"Step 2 of 2"}),Object(W.jsx)("form",{className:c.form,noValidate:!0,children:Object(W.jsxs)(J.a,{container:!0,spacing:2,children:[Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{autoComplete:"website",type:"url",name:"website",variant:"outlined",required:!0,fullWidth:!0,id:"website",label:"Live Link",autoFocus:!0,defaultValue:r,onChange:e.handleChange})}),Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{variant:"outlined",required:"true",fullWidth:!0,id:"github",label:"Github",name:"github",autoComplete:"github",defaultValue:n,onChange:e.handleChange})}),Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"youtube",label:"Youtube",name:"youtube",autoComplete:"youtube",defaultValue:o,onChange:e.handleChange})}),Object(W.jsx)(J.a,{item:!0,justify:"flex-start",children:Object(W.jsx)(I.a,{fullWidth:!0,variant:"outlined",className:c.prev,onClick:function(t){t.preventDefault(),e.prevStep()},children:"Back"})}),Object(W.jsx)(J.a,{item:!0,justify:"flex-start",children:Object(W.jsx)(I.a,{fullWidth:!0,type:"submit",variant:"contained",className:c.next,onClick:e.postProject,color:"primary",children:"Submit"})})]})})]})]})},Ce=r(156),we=r.n(Ce),Ie=r(98),ke=(r(233),Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#3F3D56"},imgPreview:{width:"300px",height:"250px"}}})));var Be=function(e){var t=ke(),r=Object(C.a)((function(e){return{root:{color:"#434E5C",backgroundColor:F.a[250]}}}))(I.a),o=Object(n.useState)({image:"",imageDetails:""}),c=Object(i.a)(o,2),a=c[0],s=c[1],l=e.userDetails,d=l.tagline,j=l.description,u=l.title,p=Object(n.useRef)(null);return Object(W.jsxs)(xe.a,{component:"main",maxWidth:"xs",children:[Object(W.jsx)(fe.a,{}),Object(W.jsxs)("div",{className:t.paper,children:[Object(W.jsx)(M.a,{component:"h1",variant:"h5",children:"Step 1 of 2"}),Object(W.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(W.jsxs)(J.a,{container:!0,spacing:2,children:[Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{variant:"outlined",required:"true",fullWidth:!0,id:"title",label:"Title",name:"title",autoComplete:"Title",defaultValue:u,onChange:e.handleChange})}),Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"tagline",label:"Tagline",type:"tagline",id:"tagline",autoComplete:"current-tagline",defaultValue:d,onChange:e.handleChange})}),Object(W.jsx)(J.a,{item:!0,xs:12,children:Object(W.jsx)(Oe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"description",label:"Description",type:"description",id:"description",autoComplete:"current-description",defaultValue:j,onChange:e.handleChange})}),Object(W.jsx)("input",{ref:p,type:"file",hidden:!0,onChange:function(t){return function(t){if(t.target.files&&t.target.files[0])if(t.target.files[0].size/1e3<250){e.onImageChange(t);var r=new FileReader;r.onload=function(e){s({image:e.target.result,imageDetails:t.target.files[0]}),document.getElementById("done-icon").style.display="block"},r.readAsDataURL(t.target.files[0])}else alert("File size cannot be greater than 250KB")}(t)},id:"image-input"}),Object(W.jsxs)("div",{id:"image-upload-section",children:[Object(W.jsx)("label",{htmlFor:"image-input",style:{marginTop:"8px",marginLeft:"8px"},children:Object(W.jsx)(r,{onClick:function(){p.current.click()},children:"Chose Image"})}),Object(W.jsx)("p",{style:{display:"flex",alignItems:"center",marginTop:"8px",marginLeft:"6px"},children:a.imageDetails.name}),Object(W.jsx)(we.a,{id:"done-icon",style:{color:Ie.a[800],display:"none"}})]}),Object(W.jsx)("br",{})]}),Object(W.jsx)(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault(),e.nextStep()},children:"Next"})]})]})]})},Ee=(r(234),r(26)),Se=Object(l.g)((function(e){var t=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))(),o=Object(n.useState)(1),c=Object(i.a)(o,2),a=c[0],s=c[1],l=Object(d.b)(),p=Object(d.c)((function(e){return e.projects.queryType})),b=Object(d.c)((function(e){return e.projects.projects})),m=Object(n.useState)({title:"",tagline:"",description:"",website:"",github:"",youtube:""}),h=Object(i.a)(m,2),g=h[0],O=h[1],y=Object(n.useState)({image:""}),C=Object(i.a)(y,2),w=C[0],I=C[1],k=function(){s(a+1)},B=function(e){O(Object(u.a)(Object(u.a)({},g),{},Object(j.a)({},e.target.name,e.target.value)))};switch(a){case 1:return Object(W.jsx)("div",{className:t.root,id:"post-project-page",children:Object(W.jsxs)(J.a,{container:!0,spacing:2,id:"post-project-grid",children:[Object(W.jsx)(J.a,{item:!0,md:6,id:"post-project-left",children:Object(W.jsx)(Be,{nextStep:k,userDetails:g,handleChange:B,onImageChange:function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;I({image:e.target.files[0]}),t.readAsDataURL(e.target.files[0])}},imageDetails:w})}),Object(W.jsx)(J.a,{item:!0,md:6,id:"post-project-right",children:Object(W.jsx)("img",{id:"post-project-ill",src:r(147).default,alt:"Illustration"})})]})});case 2:return Object(W.jsx)("div",{className:t.root,id:"post-project-page",children:Object(W.jsxs)(J.a,{container:!0,spacing:2,id:"post-project-grid",children:[Object(W.jsx)(J.a,{item:!0,md:6,id:"post-project-left",children:Object(W.jsx)(ve,{nextStep:k,prevStep:function(){s(a-1)},userDetails:g,handleChange:B,postProject:function(t){t.preventDefault();var r=!0;for(var n in g)"youtube"!==n&&"website"!==n&&""===g[n]&&(r=!1);if(r&&""!==w.image){var o=new FormData;for(var c in o.append("image",w.image),g)o.append(c,g[c]);Ee.post("/projects/",o,{headers:{"content-type":"multipart/form-data"}}).then((function(t){f(t.data.project.id).then((function(r){l(x(b,p,r)),alert("The file is successfully uploaded"),e.history.push("/project/".concat(t.data.project.id))})).catch((function(e){return console.log("ERROR",e)}))})).catch((function(e){console.log(e)}))}else alert("No form values can be empty")}})}),Object(W.jsx)(J.a,{item:!0,md:6,id:"post-project-right",children:Object(W.jsx)("img",{id:"post-project-ill",src:r(147).default,alt:"Illustration"})})]})});default:console.log("This is a multi-step form built with React.")}})),De=r(157),Ne=r.n(De);r(238);var Te=Object(l.g)((function(e){var t=Object(d.b)(),r=Object(d.c)((function(e){return e.projects.projectDetails})),c=Object(d.c)((function(e){return e.projects.projects})),a=Object(d.c)((function(e){return e.projects.queryType})),s=Object(n.useState)(!1),l=Object(i.a)(s,2),j=l[0],u=l[1];Object(n.useEffect)((function(){var r=!0;return r&&f(e.match.params.projectId).then((function(e){if(t(x(c,a,e)),localStorage.getItem("User")){var r=e.allVotes.find((function(e,t){return e.votedBy===JSON.parse(localStorage.getItem("User")).id}));u(!!r)}})).catch((function(e){return console.log("ERROR",e)})),function(){r=!1}}),[j]);var p={url:r?"".concat("https://projstemp.herokuapp.com/project","/").concat(r.id):"",identifier:r?r.id:"",title:"Project Showcase"},m=Object(v.a)((function(e){return{card:{border:"2px solid",borderColor:"#E7EDF3",borderRadius:16,transition:"0.4s","&:hover":{borderColor:"#5B9FED"}},image:{height:"100%",width:"100%",maxHeight:"42vh",borderRadius:8},noImage:{display:"none"},box:{minWidth:"52vw",minHeight:"42vh",maxHeight:"42vh"},root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},notUpvotedButton:{borderRadius:"10%",borderColor:"#E7EDF3",color:"#8D9CAD"},upvotedButton:{borderRadius:"10%",borderColor:"#E7EDF3",backgroundColor:"#0000000a",color:"#8D9CAD"}}}))(),h=Object(X.a)({overrides:{MuiSvgIcon:{colorPrimary:{color:"#8D9CAD"},colorSecondary:{color:"#5b6065"}}}});return Object(W.jsxs)("div",{id:"project-details",children:[Object(W.jsx)("h1",{children:r?r.title:""}),Object(W.jsx)("br",{}),Object(W.jsxs)(J.a,{container:!0,spacing:3,children:[Object(W.jsxs)(J.a,{item:!0,md:8,children:[Object(W.jsx)(H.a,{bgcolor:"#F4F7FA",className:m.box,borderRadius:8,children:r?Object(W.jsx)("img",{id:"img",className:m.image,src:r.image.url,alt:"",onError:function(){document.getElementById("img").style.display="none"}}):""}),Object(W.jsx)("br",{}),Object(W.jsxs)(J.a,{container:!0,spacing:3,children:[Object(W.jsx)(J.a,{style:{display:"flex",alignItems:"center"},item:!0,xs:8,children:Object(W.jsx)("h3",{children:r?r.tagline:""})}),Object(W.jsx)(J.a,{item:!0,xs:4,children:Object(W.jsx)(Y.Row,{children:Object(W.jsx)(Y.Item,{position:"right",children:Object(W.jsx)(Z.a,{theme:h,children:Object(W.jsxs)(I.a,{onClick:function(){return e=r.id,void b.a.post("/projects/vote",{project:e}).then((function(r){f(e).then((function(e){var r=e.allVotes.find((function(e,t){return e.votedBy===JSON.parse(localStorage.getItem("User")).id}));u(!!r),t(x(c,a,e))}))}));var e},variant:"outlined",className:j?m.upvotedButton:m.notUpvotedButton,children:[Object(W.jsx)(K.a,{color:j?"secondary":"primary"}),Object(W.jsx)(M.a,{style:{color:j?"#5b6065":"#8D9CAD"},children:r?r.allVotes.length:""})]})})})})})]}),Object(W.jsx)("br",{}),Object(W.jsx)("p",{children:r?r.description:""})]}),Object(W.jsx)(J.a,{item:!0,md:4,children:Object(W.jsxs)(E.a,{alignItems:"flex-start",style:{paddingTop:0},children:[Object(W.jsx)(de.a,{style:{marginTop:0},children:Object(W.jsx)(A.a,{alt:"Cindy Baker",src:r?r.user[0].profilePic.url:"",children:r?r.user[0].first_name?r.user[0].first_name[0].toUpperCase():r.user[0].username[0].toUpperCase():""})}),Object(W.jsx)(S.a,{style:{marginTop:-3},secondary:Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsx)(M.a,{component:"span",className:m.inline,color:"textPrimary",style:{cursor:"pointer"},onClick:function(){return t=r?r.user[0].id:"",void e.history.push("/user/".concat(t));var t},children:r?r.user[0].first_name?r.user[0].first_name+" "+r.user[0].last_name:r.user[0].username:""}),Object(W.jsx)(M.a,{variant:"body2",children:r?r.user[0].bio?r.user[0].bio:"CREATOR":""})]})})]})})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)("hr",{style:{borderTop:"1px"}}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)(Ne.a.DiscussionEmbed,{shortname:"projectshowcase",config:p})]})})),Fe=r(25),Pe=(r(239),Object(l.g)((function(e){var t=Object(n.useState)("projects-tab"),r=Object(i.a)(t,2),c=r[0],a=r[1],s=Object(d.b)();Object(n.useEffect)((function(){console.log("here");var t,r=!0;return r&&(t=e.match.params.userId,b.a.get("/users/".concat(t)).then((function(e){return e.data}))).then((function(e){s(function(e){return{type:"setUserProfile",payload:{data:e}}}(e)),"projects-tab"===c?h(e.id).then((function(e){s(O(e,"popular"))})):g(l.id).then((function(e){s(O(e,"popular"))}))})).catch((function(e){return console.log("Error",e)})),function(){r=!1}}),[]);var l=Object(d.c)((function(e){return e.users.profile})),j=Object(v.a)((function(e){return{root:{display:"flex",backgroundColor:"#F4F7FA",minHeight:"45vh",boxShadow:"none"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},img:{width:"13.5vw",height:"13.5vw",borderRadius:200},inline:{display:"inline"},listItemText:{marginLeft:"5%",marginTop:"2%"},bio:{marginTop:"6px",marginLeft:"1px"}}}))(),u=Object(Fe.a)();u.typography.h4={fontSize:"28px","@media (max-width:976px)":{fontSize:"25px"},"@media (max-width:425px)":{fontSize:"20px"}},u.typography.body2={fontSize:"22px","@media (max-width:976px)":{fontSize:"18px"},"@media (max-width:425px)":{fontSize:"15px"}};var p=function(e){a(e),"projects-tab"===e?(h(l.id).then((function(e){s(O(e,"popular"))})),document.getElementById("projects-tab").style.borderBottom="1px solid #262626",document.getElementById("upvoted-tab").style.borderBottom="none"):(g(l.id).then((function(e){s(O(e,"popular"))})),document.getElementById("upvoted-tab").style.borderBottom="1px solid #262626",document.getElementById("projects-tab").style.borderBottom="none")};return Object(W.jsxs)("div",{id:"all-components",children:[Object(W.jsx)("div",{children:Object(W.jsxs)(E.a,{alignItems:"flex-start",children:[Object(W.jsx)(de.a,{children:Object(W.jsx)(A.a,{className:j.img,src:l?l.profilePic.url:""})}),Object(W.jsx)(S.a,{className:j.listItemText,secondary:Object(W.jsx)(o.a.Fragment,{children:Object(W.jsxs)(Z.a,{theme:u,children:[Object(W.jsx)(M.a,{component:"span",className:j.inline,color:"textPrimary",variant:"h4",children:l?l.first_name+" "+l.last_name:""}),Object(W.jsx)(M.a,{variant:"body2",className:j.bio,children:l&&null!=l.bio?l.bio:"CREATOR"})]})})})]})}),Object(W.jsx)("div",{id:"profile-nav",children:Object(W.jsxs)("ul",{children:[Object(W.jsx)("li",{style:{marginLeft:"0.75rem",borderBottom:"1px solid #262626"},id:"projects-tab",onClick:function(){return p("projects-tab")},children:"Projects"}),Object(W.jsx)("li",{style:{marginLeft:"2rem"},id:"upvoted-tab",onClick:function(){return p("upvoted-tab")},children:"Upvoted"})]})}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)("div",{id:"profile-nav-content",children:Object(W.jsx)(le,{from:"Profile"})})]})}))),Re=(r(240),r(298)),Le=r(299),_e=r(300),Ue=r(158),Ae=r.n(Ue),We=r(159),qe=r(160),ze=r(161),Ve=Object(v.a)((function(){return{root:{maxWidth:343,margin:"auto",borderRadius:12,padding:12},media:{borderRadius:6},line:{"&::after":{display:"none"}}}})),Je=o.a.memo((function(e){var t=Ve(),r=Object(We.useFourThreeCardMediaStyles)(),n=Object(qe.useN04TextInfoContentStyles)(),o=Object(ze.useOverShadowStyles)({inactive:!0});return Object(W.jsxs)(Re.a,{className:Object(y.default)(t.root,o.root),children:[Object(W.jsx)(Le.a,{className:Object(y.default)(t.media,r.root),image:e.image}),Object(W.jsx)(_e.a,{children:Object(W.jsx)(Ae.a,{classes:n,heading:e.heading,body:e.body})})]})})),Ge=r(162),He=r.n(Ge),Me=r(164),Qe=r.n(Me),Ke=r(163),Ye=r.n(Ke),Xe=r(301),Ze=r.p+"static/media/undraw_features_overview_jg7a.e863bb8f.svg",$e=r.p+"static/media/undraw_Upvote_re_qn2k.ad5a5e33.svg",et=r.p+"static/media/undraw_online_cv_qy9w (1).dce13483.svg";var tt=function(){var e=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},footerIcons:{color:"#000"}}}))(),t=Object(l.f)();return Object(W.jsxs)(o.a.Fragment,{children:[Object(W.jsxs)("div",{className:e.root,id:"home-page",children:[Object(W.jsxs)(J.a,{container:!0,spacing:2,id:"home-page-grid",children:[Object(W.jsxs)(J.a,{style:{display:"flex",flexDirection:"column"},item:!0,md:6,id:"left",children:[Object(W.jsx)(M.a,{id:"home-title",variant:"h3",gutterBottom:!0,children:"Showcase and Discover Projects"}),Object(W.jsx)(M.a,{id:"home-description",variant:"body1",gutterBottom:!0,children:"A website for people to showcase their projects, discover projects by peers, get upvoted and build a project-centric profile."}),Object(W.jsx)("button",{id:"explore",onClick:function(){t.push("/popular")},children:"Explore"})]}),Object(W.jsx)(J.a,{item:!0,md:6,id:"right",children:Object(W.jsx)("img",{id:"main-ill",src:r(246).default,alt:"Illustration"})})]}),Object(W.jsx)(M.a,{id:"hiw",variant:"h4",children:"How It Works?"}),Object(W.jsxs)(J.a,{container:!0,spacing:2,id:"hiw-cards",children:[Object(W.jsx)(J.a,{item:!0,md:4,children:Object(W.jsx)(Je,{heading:"Showcase",body:"Let the community know about your projects and progress!",image:Ze})}),Object(W.jsx)(J.a,{item:!0,md:4,children:Object(W.jsx)(Je,{heading:"Grow",body:"Get upvotes and feedback for your project",image:$e})}),Object(W.jsx)(J.a,{item:!0,md:4,children:Object(W.jsx)(Je,{heading:"Profile",body:"Have all your projects at one place and race to become a top creator",image:et})})]})]}),Object(W.jsxs)("div",{id:"footer",children:[Object(W.jsx)(M.a,{id:"footer-text",variant:"caption",children:"For the community, by Vighnesh Kulkarni"}),Object(W.jsxs)("div",{id:"footer-icons",children:[Object(W.jsx)(Xe.a,{href:"https://github.com/vighnesh192",target:"_blank",children:Object(W.jsx)(He.a,{id:"github"})}),Object(W.jsx)(Xe.a,{href:"https://www.linkedin.com/in/vighnesh-kulkarni-vk192/",target:"_blank",children:Object(W.jsx)(Ye.a,{id:"linkedin"})}),Object(W.jsx)(Xe.a,{href:"https://twitter.com/vighnesh192",target:"_blank",children:Object(W.jsx)(Qe.a,{id:"twitter"})})]})]})]})};var rt=function(){var e=Object(d.b)(),t=Object(n.useState)(!1),r=Object(i.a)(t,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){var t=!0;return t&&b.a.get("/auth/checkLogin").then((function(e){return e.data})).then((function(t){t.id&&(e({type:"LOGIN",payload:t}),c(!0))})),function(){t=!1}}),[o]),Object(W.jsx)(s.a,{children:Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(V,{}),Object(W.jsxs)(l.c,{children:[Object(W.jsx)(l.a,{exact:!0,path:"/",component:tt}),Object(W.jsx)(l.a,{exact:!0,path:"/:sortBy",component:ge}),Object(W.jsx)(l.a,{exact:!0,path:"/project/post-project",component:Se}),Object(W.jsx)(l.a,{exact:!0,path:"/project/:projectId",component:Te}),Object(W.jsx)(l.a,{exact:!0,path:"/user/:userId",component:Pe})]})]})})},nt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,308)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))},ot=r(64),ct={user:void 0,loggedIn:void 0},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return e={user:t.payload,loggedIn:!0},localStorage.setItem("User",JSON.stringify(t.payload)),e;case"LOGOUT":return e={user:void 0,loggedIn:!1},localStorage.removeItem("User"),e;default:return e}},it={projects:void 0,queryType:"popular",projectDetails:void 0},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return e={projects:t.payload.projects,queryType:t.payload.queryType};case"SET_PROJECT_DETAILS":return e={projects:t.payload.projects,queryType:t.payload.queryType,projectDetails:t.payload.projectDetails};default:return e}},lt={users:void 0,profile:void 0},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setTopCreators":return e={users:t.payload.data};case"setUserProfile":return console.log("IN PROFILE REDUCER"),e={profile:t.payload.data};default:return e}},jt=Object(ot.b)({account:at,projects:st,users:dt}),ut=Object(ot.c)(jt);a.a.render(Object(W.jsx)(d.a,{store:ut,children:Object(W.jsx)(rt,{})}),document.getElementById("root")),nt()}},[[247,1,2]]]);
//# sourceMappingURL=main.444760b1.chunk.js.map