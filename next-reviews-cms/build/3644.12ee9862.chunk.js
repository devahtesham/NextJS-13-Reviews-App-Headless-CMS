(self.webpackChunknext_reviews_cms=self.webpackChunknext_reviews_cms||[]).push([[3644],{81768:(_,T,s)=>{var e=s(83504),d=s(87184),n=s(10320),u=s(12480),l=s(85968),h=s(49264),c=200;function p(y,j,O,P){var G=-1,K=d,$=!0,R=y.length,b=[],w=j.length;if(!R)return b;O&&(j=u(j,l(O))),P?(K=n,$=!1):j.length>=c&&(K=h,$=!1,j=new e(j));e:for(;++G<R;){var B=y[G],W=O==null?B:O(B);if(B=P||B!==0?B:0,$&&W===W){for(var H=w;H--;)if(j[H]===W)continue e;b.push(B)}else K(j,W,P)||b.push(B)}return b}_.exports=p},80232:(_,T,s)=>{var e=s(48208),d=s(62632),n=d(e);_.exports=n},22488:(_,T,s)=>{var e=s(80232),d=s(16005);function n(u,l){var h=-1,c=d(u)?Array(u.length):[];return e(u,function(p,y,j){c[++h]=l(p,y,j)}),c}_.exports=n},24576:(_,T,s)=>{var e=s(12480),d=s(64316),n=s(24020),u=s(22488),l=s(92048),h=s(85968),c=s(71456),p=s(45504),y=s(75516);function j(O,P,G){P.length?P=e(P,function(R){return y(R)?function(b){return d(b,R.length===1?R[0]:R)}:R}):P=[p];var K=-1;P=e(P,h(n));var $=u(O,function(R,b,w){var B=e(P,function(W){return W(R)});return{criteria:B,index:++K,value:R}});return l($,function(R,b){return c(R,b,G)})}_.exports=j},92048:_=>{function T(s,e){var d=s.length;for(s.sort(e);d--;)s[d]=s[d].value;return s}_.exports=T},13052:(_,T,s)=>{var e=s(36792);function d(n,u){if(n!==u){var l=n!==void 0,h=n===null,c=n===n,p=e(n),y=u!==void 0,j=u===null,O=u===u,P=e(u);if(!j&&!P&&!p&&n>u||p&&y&&O&&!j&&!P||h&&y&&O||!l&&O||!c)return 1;if(!h&&!p&&!P&&n<u||P&&l&&c&&!h&&!p||j&&l&&c||!y&&c||!O)return-1}return 0}_.exports=d},71456:(_,T,s)=>{var e=s(13052);function d(n,u,l){for(var h=-1,c=n.criteria,p=u.criteria,y=c.length,j=l.length;++h<y;){var O=e(c[h],p[h]);if(O){if(h>=j)return O;var P=l[h];return O*(P=="desc"?-1:1)}}return n.index-u.index}_.exports=d},62632:(_,T,s)=>{var e=s(16005);function d(n,u){return function(l,h){if(l==null)return l;if(!e(l))return n(l,h);for(var c=l.length,p=u?c:-1,y=Object(l);(u?p--:++p<c)&&h(y[p],p,y)!==!1;);return l}}_.exports=d},92096:(_,T,s)=>{var e=s(12480),d=s(24020),n=s(22488),u=s(75516);function l(h,c){var p=u(h)?e:n;return p(h,d(c,3))}_.exports=l},87144:(_,T,s)=>{var e=s(78456),d=s(24576),n=s(41912),u=s(53492),l=n(function(h,c){if(h==null)return[];var p=c.length;return p>1&&u(h,c[0],c[1])?c=[]:p>2&&u(c[0],c[1],c[2])&&(c=[c[0]]),d(h,e(c,1),[])});_.exports=l},96772:(_,T,s)=>{var e=s(35904);function d(n){var u=n==null?0:n.length;return u?e(n,1,u):[]}_.exports=d},54884:(_,T,s)=>{var e=s(81768),d=s(41912),n=s(90427),u=d(function(l,h){return n(l)?e(l,h):[]});_.exports=u},83644:(_,T,s)=>{"use strict";s.r(T),s.d(T,{default:()=>ds});var e=s(19968),d=s(62552),n=s(16048),u=s(49008),l=s(19480),h=s(5e3),c=s(48936),p=s(63358),y=s(32568),j=s(28724),O=s(70996),P=s(35480),G=s(42616),K=s(34404),$=s(12248),R=s(48112),b=s(28464),w=s(35676),B=s(42816),W=s(62492),H=s(25352),Oe=s(65280),Pe=s(48744),ne=s(76512),I=s(9752),Ce=s(23264),ye=s(3400),De=s(20596),Re=s(52051),Ae=s(42848),ve=s(20464),Le=s(46596),ie=s(53305),Te=s(15396),be=s(89940),Be=s(71324),Ue=s(48636),re=s(31812),S=s(14632),k=s(48632),v=s(33104),We=s(30840),ae=s(87144),z=s(85676),Y=s(13150),oe=s(29088),J=s(79804),Se=s(54884),Ie=s(92096),Ke=s(96772),le=s(35184),$e=s(67888),q=s(52540);const de=(0,d.createContext)({}),ce=({children:t,value:i})=>(0,e.jsx)(de.Provider,{value:i,children:t}),ee=()=>(0,d.useContext)(de);ce.propTypes={children:v.node.isRequired,value:v.object.isRequired};function Ne(t){switch(t){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return We(t.replace("api::","").replace("plugin::",""))}}const Fe=(t,i)=>{const r=Object.keys(i).sort().map(a=>({name:a,isOpen:!1}));return{...t,collapses:r}},ue=(0,Y.gV)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ge=(0,Y.cp)(h.k)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&ue}
  &:hover {
    ${ue}
  }
`,ke=Y.cp.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ge=({subCategory:t})=>{const{formatMessage:i}=(0,S.c)(),{onChange:r,onChangeSelectAll:a,onSelectedAction:m,selectedAction:o,modifiedData:E}=ee(),x=(0,d.useMemo)(()=>z(E,t.name,{}),[E,t]),f=(0,d.useMemo)(()=>Object.values(x).every(g=>g.enabled===!0),[x]),M=(0,d.useMemo)(()=>Object.values(x).some(g=>g.enabled===!0)&&!f,[x,f]),C=(0,d.useCallback)(({target:{name:g}})=>{a({target:{name:g,value:!f}})},[f,a]),D=(0,d.useCallback)(g=>o===g,[o]);return(0,e.jsxs)(h.k,{children:[(0,e.jsxs)(c.C,{justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(h.k,{paddingRight:4,children:(0,e.jsx)(p.O,{variant:"sigma",textColor:"neutral600",children:t.label})}),(0,e.jsx)(ke,{}),(0,e.jsx)(h.k,{paddingLeft:4,children:(0,e.jsx)(y.y,{name:t.name,value:f,onValueChange:g=>C({target:{name:t.name,value:g}}),indeterminate:M,children:i({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(c.C,{paddingTop:6,paddingBottom:6,children:(0,e.jsx)(j.y,{gap:2,style:{flex:1},children:t.actions.map(g=>{const A=`${g.name}.enabled`;return(0,e.jsx)(O.C,{col:6,children:(0,e.jsxs)(Ge,{isActive:D(g.name),padding:2,hasRadius:!0,children:[(0,e.jsx)(y.y,{value:z(E,A,!1),name:A,onValueChange:U=>r({target:{name:A,value:U}}),children:g.label}),(0,e.jsxs)("button",{type:"button",onClick:()=>m(g.name),style:{display:"inline-flex",alignItems:"center"},children:[(0,e.jsx)(P.K,{as:"span",children:i({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:g.name})}),(0,e.jsx)(Le.c,{})]})]})},g.name)})})})]})};ge.propTypes={subCategory:v.object.isRequired};const pe=({name:t,permissions:i})=>{const r=(0,d.useMemo)(()=>ae(Object.values(i.controllers).reduce((a,m,o)=>{const E=`${t}.controllers.${Object.keys(i.controllers)[o]}`,x=ae(Object.keys(m).reduce((f,M)=>[...f,{...m[M],label:M,name:`${E}.${M}`}],[]),"label");return[...a,{actions:x,label:Object.keys(i.controllers)[o],name:E}]},[]),"label"),[t,i]);return(0,e.jsx)(h.k,{padding:6,children:r.map(a=>(0,e.jsx)(ge,{subCategory:a},a.name))})};pe.propTypes={name:v.string.isRequired,permissions:v.object.isRequired};const Qe={collapses:[]},Ve=(t,i)=>(0,oe.cp)(t,r=>{switch(i.type){case"TOGGLE_COLLAPSE":{r.collapses=t.collapses.map((a,m)=>m===i.index?{...a,isOpen:!a.isOpen}:{...a,isOpen:!1});break}default:return r}}),we=()=>{const{modifiedData:t}=ee(),{formatMessage:i}=(0,S.c)(),[{collapses:r},a]=(0,d.useReducer)(Ve,Qe,o=>Fe(o,t)),m=o=>a({type:"TOGGLE_COLLAPSE",index:o});return(0,e.jsx)(c.C,{direction:"column",alignItems:"stretch",gap:1,children:r.map((o,E)=>(0,e.jsxs)(G.G,{expanded:o.isOpen,onToggle:()=>m(E),variant:E%2===0?"secondary":void 0,children:[(0,e.jsx)(K.M,{title:Ne(o.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:o.name}),variant:E%2?"primary":"secondary"}),(0,e.jsx)($.u,{children:(0,e.jsx)(pe,{permissions:t[o.name],name:o.name})})]},o.name))})},He=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ye=(0,Y.cp)(h.k)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function se({route:t}){const{formatMessage:i}=(0,S.c)(),{method:r,handler:a,path:m}=t,o=m?Ke(m.split("/")):[],[E="",x=""]=a?a.split("."):[],f=He(t.method);return(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(p.O,{variant:"delta",as:"h3",children:[i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:E}),(0,e.jsxs)(p.O,{variant:"delta",textColor:"primary600",children:[".",x]})]}),(0,e.jsxs)(c.C,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(Ye,{background:f.background,borderColor:f.border,padding:2,children:(0,e.jsx)(p.O,{fontWeight:"bold",textColor:f.text,children:r})}),(0,e.jsx)(h.k,{paddingLeft:2,paddingRight:2,children:Ie(o,M=>(0,e.jsxs)(p.O,{textColor:M.includes(":")?"neutral600":"neutral900",children:["/",M]},M))})]})]})}se.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},se.propTypes={route:v.shape({handler:v.string,method:v.string,path:v.string})};const ze=()=>{const{formatMessage:t}=(0,S.c)(),{selectedAction:i,routes:r}=ee(),a=Se(i.split("."),"controllers"),m=z(r,a[0]),o=a.slice(1).join("."),E=J(m)?[]:m.filter(x=>x.handler.endsWith(o));return(0,e.jsx)(O.C,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:i?(0,e.jsx)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:E.map((x,f)=>(0,e.jsx)(se,{route:x},f))}):(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.O,{variant:"delta",as:"h3",children:t({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(p.O,{as:"p",textColor:"neutral600",children:t({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Xe=(t,i,r)=>({...t,initialData:i,modifiedData:i,routes:r}),Ze={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},Je=(t,i)=>(0,oe.cp)(t,r=>{switch(i.type){case"ON_CHANGE":{const a=i.keys.length,m=i.keys[a-1]==="enabled";if(i.value&&m){const o=$e(i.keys,a-1).join(".");r.selectedAction=o}le(r,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const a=["modifiedData",...i.keys],m=z(t,a,{}),o=Object.keys(m).reduce((E,x)=>(E[x]={...m[x],enabled:i.value},E),{});le(r,a,o);break}case"ON_RESET":{r.modifiedData=t.initialData;break}case"ON_SUBMIT_SUCCEEDED":{r.initialData=t.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:a}=i;r.selectedAction=a===t.selectedAction?"":a;break}default:return r}}),me=(0,d.forwardRef)(({permissions:t,routes:i},r)=>{const{formatMessage:a}=(0,S.c)(),[m,o]=(0,d.useReducer)(Je,Ze,C=>Xe(C,t,i));(0,d.useImperativeHandle)(r,()=>({getPermissions(){return{permissions:m.modifiedData}},resetForm(){o({type:"ON_RESET"})},setFormAfterSubmit(){o({type:"ON_SUBMIT_SUCCEEDED"})}}));const M={...m,onChange:({target:{name:C,value:D}})=>o({type:"ON_CHANGE",keys:C.split("."),value:D==="empty__string_value"?"":D}),onChangeSelectAll:({target:{name:C,value:D}})=>o({type:"ON_CHANGE_SELECT_ALL",keys:C.split("."),value:D}),onSelectedAction:C=>o({type:"SELECT_ACTION",actionToSelect:C})};return(0,e.jsx)(ce,{value:M,children:(0,e.jsxs)(j.y,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(O.C,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.O,{variant:"delta",as:"h2",children:a({id:(0,l.g)("Plugins.header.title"),defaultMessage:"Permissions"})}),(0,e.jsx)(p.O,{as:"p",textColor:"neutral600",children:a({id:(0,l.g)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),(0,e.jsx)(we,{})]})}),(0,e.jsx)(ze,{})]})})});me.propTypes={permissions:v.object.isRequired,routes:v.object.isRequired};const he=(0,d.memo)(me),Ee=q.kt().shape({name:q.Qb().required(n.aO.required),description:q.Qb().required(n.aO.required)}),qe=t=>Object.keys(t).reduce((i,r)=>{const a=t[r].controllers,m=Object.keys(a).reduce((o,E)=>(J(a[E])||(o[E]=a[E]),o),{});return J(m)||(i[r]={controllers:m}),i},{}),fe=()=>{const t=(0,n.eo)(),{get:i}=(0,n.Qn)(),{formatAPIError:r}=(0,n.An)(l.g),[{data:a,isLoading:m,error:o,refetch:E},{data:x,isLoading:f,error:M,refetch:C}]=(0,k.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:A}}=await i("/users-permissions/permissions");return A}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:A}}=await i("/users-permissions/routes");return A}}]),D=async()=>{await Promise.all([E(),C()])};(0,d.useEffect)(()=>{o&&t({type:"warning",message:r(o)})},[t,o,r]),(0,d.useEffect)(()=>{M&&t({type:"warning",message:r(M)})},[t,M,r]);const g=m||f;return{permissions:a?qe(a):{},routes:x??{},getData:D,isLoading:g}},es=()=>{const{formatMessage:t}=(0,S.c)(),i=(0,n.eo)(),{goBack:r}=(0,u.Uz)(),{lockApp:a,unlockApp:m}=(0,n.H6)(),{isLoading:o,permissions:E,routes:x}=fe(),{trackUsage:f}=(0,n.m4)(),M=d.useRef(),{post:C}=(0,n.Qn)(),D=(0,k.useMutation)(A=>C("/users-permissions/roles",A),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){f("didCreateRole"),i({type:"success",message:{id:(0,l.g)("Settings.roles.created"),defaultMessage:"Role created"}}),r()}}),g=async A=>{a();const U=M.current.getPermissions();await D.mutate({...A,...U,users:[]}),m()};return(0,e.jsxs)(R.G,{children:[(0,e.jsx)(n.K8,{name:"Roles"}),(0,e.jsx)(re.QJ,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:g,validationSchema:Ee,children:({handleSubmit:A,values:U,handleChange:Q,errors:L})=>(0,e.jsxs)(n.QF,{noValidate:!0,onSubmit:A,children:[(0,e.jsx)(b.a,{primaryAction:!o&&(0,e.jsx)(w.Z,{type:"submit",loading:D.isLoading,startIcon:(0,e.jsx)(ie.c,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:t({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:t({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),(0,e.jsx)(B.S,{children:(0,e.jsxs)(c.C,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",children:[(0,e.jsx)(p.O,{variant:"delta",as:"h2",children:t({id:(0,l.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.y,{gap:4,children:[(0,e.jsx)(O.C,{col:6,children:(0,e.jsx)(W.g,{name:"name",value:U.name||"",onChange:Q,label:t({id:"global.name",defaultMessage:"Name"}),error:L?.name?t({id:L.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(O.C,{col:6,children:(0,e.jsx)(H.A,{id:"description",value:U.description||"",onChange:Q,label:t({id:"global.description",defaultMessage:"Description"}),error:L?.description?t({id:L.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!o&&(0,e.jsx)(he,{ref:M,permissions:E,routes:x})]})})]})})]})},ss=()=>(0,e.jsx)(n.rF,{permissions:l.P.createRole,children:(0,e.jsx)(es,{})}),ts=()=>{const{formatMessage:t}=(0,S.c)(),i=(0,n.eo)(),{lockApp:r,unlockApp:a}=(0,n.H6)(),{params:{id:m}}=(0,u.SU)("/settings/users-permissions/roles/:id"),{get:o}=(0,n.Qn)(),{isLoading:E,routes:x}=fe(),{data:f,isLoading:M,refetch:C}=(0,k.useQuery)(["users-permissions","role",m],async()=>{const{data:{role:L}}=await o(`/users-permissions/roles/${m}`);return L}),D=d.useRef(),{put:g}=(0,n.Qn)(),{formatAPIError:A}=(0,n.An)(),U=(0,k.useMutation)(L=>g(`/users-permissions/roles/${m}`,L),{onError(L){i({type:"warning",message:A(L)})},async onSuccess(){i({type:"success",message:{id:(0,l.g)("Settings.roles.created"),defaultMessage:"Role edited"}}),await C()}}),Q=async L=>{r();const N=D.current.getPermissions();await U.mutate({...L,...N,users:[]}),a()};return M?(0,e.jsx)(n.Wm,{}):(0,e.jsxs)(R.G,{children:[(0,e.jsx)(n.K8,{name:"Roles"}),(0,e.jsx)(re.QJ,{enableReinitialize:!0,initialValues:{name:f.name,description:f.description},onSubmit:Q,validationSchema:Ee,children:({handleSubmit:L,values:N,handleChange:X,errors:V})=>(0,e.jsxs)(n.QF,{noValidate:!0,onSubmit:L,children:[(0,e.jsx)(b.a,{primaryAction:!E&&(0,e.jsx)(w.Z,{disabled:f.code==="strapi-super-admin",type:"submit",loading:U.isLoading,startIcon:(0,e.jsx)(ie.c,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:f.name,subtitle:f.description,navigationAction:(0,e.jsx)(n.cH,{startIcon:(0,e.jsx)(Te.c,{}),to:"/settings/users-permissions/roles",children:t({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(B.S,{children:(0,e.jsxs)(c.C,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(p.O,{variant:"delta",as:"h2",children:t({id:(0,l.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.y,{gap:4,children:[(0,e.jsx)(O.C,{col:6,children:(0,e.jsx)(W.g,{name:"name",value:N.name||"",onChange:X,label:t({id:"global.name",defaultMessage:"Name"}),error:V?.name?t({id:V.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(O.C,{col:6,children:(0,e.jsx)(H.A,{id:"description",value:N.description||"",onChange:X,label:t({id:"global.description",defaultMessage:"Description"}),error:V?.description?t({id:V.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!E&&(0,e.jsx)(he,{ref:D,permissions:f.permissions,routes:x})]})})]})})]})},ns=()=>(0,e.jsx)(n.rF,{permissions:l.P.updateRole,children:(0,e.jsx)(ts,{})}),is=(0,Y.cp)(Oe.c)`
  align-items: center;
  height: ${(0,n.W8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:t})=>`${t.spaces[2]}}`};
  width: ${(0,n.W8)(32)};

  svg {
    height: ${(0,n.W8)(12)};
    width: ${(0,n.W8)(12)};

    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.neutral800};
      }
    }
  }
`,te=({sortedRoles:t,canDelete:i,permissions:r,setRoleToDelete:a,onDelete:m})=>{const{formatMessage:o}=(0,S.c)(),{push:E}=(0,u.Uz)(),[x,f]=m,M=g=>i&&!["public","authenticated"].includes(g.type),C=g=>{a(g),f(!x)},D=g=>{E(`/settings/users-permissions/roles/${g}`)};return(0,e.jsx)(Pe.K,{children:t?.map(g=>(0,e.jsxs)(ne.Tr,{...(0,n.on)({fn:()=>D(g.id)}),children:[(0,e.jsx)(I.Td,{width:"20%",children:(0,e.jsx)(p.O,{children:g.name})}),(0,e.jsx)(I.Td,{width:"50%",children:(0,e.jsx)(p.O,{children:g.description})}),(0,e.jsx)(I.Td,{width:"30%",children:(0,e.jsx)(p.O,{children:o({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:g.nb_users})})}),(0,e.jsx)(I.Td,{children:(0,e.jsxs)(c.C,{justifyContent:"end",...n.Ii,children:[(0,e.jsx)(n.Yj,{permissions:r.updateRole,children:(0,e.jsx)(is,{to:`/settings/users-permissions/roles/${g.id}`,"aria-label":o({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${g.name}`}),children:(0,e.jsx)(be.c,{})})}),M(g)&&(0,e.jsx)(n.Yj,{permissions:r.deleteRole,children:(0,e.jsx)(Ce.w,{onClick:()=>C(g.id),noBorder:!0,icon:(0,e.jsx)(Be.c,{}),label:o({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${g.name}`})})})]})})]},g.name))})};te.defaultProps={canDelete:!1},te.propTypes={onDelete:v.array.isRequired,permissions:v.object.isRequired,setRoleToDelete:v.func.isRequired,sortedRoles:v.array.isRequired,canDelete:v.bool};const rs=async(t,i)=>{try{const{get:r}=(0,n.YF)(),{data:a}=await r("/users-permissions/roles");return i("The roles have loaded successfully"),a}catch(r){throw t({type:"warning",message:{id:"notification.error"}}),new Error(r)}},as=async(t,i)=>{try{const{del:r}=(0,n.YF)();await r(`/users-permissions/roles/${t}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},os=()=>{const{trackUsage:t}=(0,n.m4)(),{formatMessage:i,locale:r}=(0,S.c)(),a=(0,n.eo)(),{notifyStatus:m}=(0,ye.O)(),[{query:o}]=(0,n.WK)(),E=o?._q||"",[x,f]=(0,d.useState)(!1),[M,C]=(0,d.useState)(!1),[D,g]=(0,d.useState)();(0,n.G0)();const{isLoading:A,allowedActions:{canRead:U,canDelete:Q}}=(0,n.aU)({create:l.P.createRole,read:l.P.readRoles,update:l.P.updateRole,delete:l.P.deleteRole}),{isLoading:L,data:{roles:N},isFetching:X,refetch:V}=(0,k.useQuery)("get-roles",()=>rs(a,m),{initialData:{},enabled:U}),{includes:xe}=(0,n.WO)(r,{sensitivity:"base"}),_e=(0,n.In)(r,{sensitivity:"base"}),Me=L||X,cs=()=>{f(!x)},us={roles:{id:(0,l.g)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,l.g)("Roles.empty.search"),defaultMessage:"No roles match the search."}},gs=i({id:"global.roles",defaultMessage:"Roles"}),ps=(0,k.useMutation)(F=>as(F,a),{async onSuccess(){await V()}}),ms=async()=>{C(!0),await ps.mutateAsync(D),f(!x),C(!1)},Z=(N||[]).filter(F=>xe(F.name,E)||xe(F.description,E)).sort((F,je)=>_e.compare(F.name,je.name)||_e.compare(F.description,je.description)),hs=E&&!Z.length?"search":"roles",Es=4,fs=(N?.length||0)+1;return(0,e.jsxs)(De._,{children:[(0,e.jsx)(n.K8,{name:gs}),(0,e.jsxs)(R.G,{"aria-busy":Me,children:[(0,e.jsx)(b.a,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:(0,e.jsx)(n.Yj,{permissions:l.P.createRole,children:(0,e.jsx)(n.EZ,{to:"/settings/users-permissions/roles/new",onClick:()=>t("willCreateRole"),startIcon:(0,e.jsx)(Ue.c,{}),size:"S",children:i({id:(0,l.g)("List.button.roles"),defaultMessage:"Add new role"})})})}),(0,e.jsx)(Re.U,{startActions:(0,e.jsx)(n.w9,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),(0,e.jsxs)(B.S,{children:[!U&&(0,e.jsx)(n.o5,{}),(Me||A)&&(0,e.jsx)(n.Wm,{}),U&&Z&&Z?.length?(0,e.jsxs)(Ae.o,{colCount:Es,rowCount:fs,children:[(0,e.jsx)(ve.o,{children:(0,e.jsxs)(ne.Tr,{children:[(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.O,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.O,{variant:"sigma",textColor:"neutral600",children:i({id:"global.description",defaultMessage:"Description"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.O,{variant:"sigma",textColor:"neutral600",children:i({id:"global.users",defaultMessage:"Users"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(P.K,{children:i({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(te,{sortedRoles:Z,canDelete:Q,permissions:l.P,setRoleToDelete:g,onDelete:[x,f]})]}):(0,e.jsx)(n.Su,{content:us[hs]})]}),(0,e.jsx)(n.cz,{isConfirmButtonLoading:M,onConfirm:ms,onToggleDialog:cs,isOpen:x})]})]})},ls=()=>(0,e.jsx)(n.rF,{permissions:l.P.accessRoles,children:(0,e.jsx)(os,{})}),ds=()=>(0,e.jsx)(n.rF,{permissions:l.P.accessRoles,children:(0,e.jsxs)(u.Wk,{children:[(0,e.jsx)(u.kX,{path:"/settings/users-permissions/roles/new",component:ss,exact:!0}),(0,e.jsx)(u.kX,{path:"/settings/users-permissions/roles/:id",component:ns,exact:!0}),(0,e.jsx)(u.kX,{path:"/settings/users-permissions/roles",component:ls,exact:!0}),(0,e.jsx)(u.kX,{path:"",component:n.wF})]})})}}]);
