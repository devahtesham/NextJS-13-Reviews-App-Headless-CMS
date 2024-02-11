"use strict";(self.webpackChunknext_reviews_cms=self.webpackChunknext_reviews_cms||[]).push([[7096],{27096:(Z,D,s)=>{s.d(D,{ProtectedSettingsPage:()=>K});var e=s(19968),r=s(62552),v=s(48112),x=s(28464),C=s(42816),o=s(48936),y=s(5e3),_=s(63358),h=s(28724),d=s(70996),c=s(62492),j=s(35933),T=s(13384),S=s(35676),i=s(16048),R=s(92508),A=s(14632),E=s(48632),L=s(13150),u=s(52540),I=s(44972);const f=u.kt().shape({email:u.Qb().email(i.aO.email).required(i.aO.required)}),B=L.cp.a`
  color: ${({theme:g})=>g.colors.primary600};
`,K=()=>(0,e.jsx)(i.rF,{permissions:I.P.settings,children:(0,e.jsx)(W,{})}),W=()=>{const g=(0,i.eo)(),{formatMessage:t}=(0,A.c)(),{lockApp:U,unlockApp:b}=(0,i.H6)(),{get:F,post:N}=(0,i.Qn)(),[a,Q]=r.useState(""),[V,M]=r.useState(!1),[O,$]=r.useState({}),{data:n,isLoading:P}=(0,E.useQuery)(["email","settings"],async()=>{const l=await F("/email/settings"),{data:{config:m}}=l;return m}),p=(0,E.useMutation)(async l=>{await N("/email/test",l)},{onError(){g({type:"warning",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.G0)(),r.useEffect(()=>{f.validate({email:a},{abortEarly:!1}).then(()=>M(!0)).catch(()=>M(!1))},[a]);const G=l=>{Q(()=>l.target.value)},H=async l=>{l.preventDefault();try{await f.validate({email:a},{abortEarly:!1})}catch(m){m instanceof u.$D&&$((0,i.CK)(m))}U(),p.mutate({to:a}),b()};return(0,e.jsxs)(v.G,{labelledBy:"title","aria-busy":P||p.isLoading,children:[(0,e.jsx)(i.K8,{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(x.a,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(C.S,{children:P?(0,e.jsx)(i.Wm,{}):n&&(0,e.jsx)("form",{onSubmit:H,children:(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(y.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.O,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(_.O,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(B,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(h.y,{gap:5,children:[(0,e.jsx)(d.C,{col:6,s:12,children:(0,e.jsx)(c.g,{name:"shipper-email",label:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:n.settings.defaultFrom})}),(0,e.jsx)(d.C,{col:6,s:12,children:(0,e.jsx)(c.g,{name:"response-email",label:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:n.settings.defaultReplyTo})}),(0,e.jsx)(d.C,{col:6,s:12,children:(0,e.jsx)(j.M,{name:"email-provider",label:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:n.provider,children:(0,e.jsx)(T.c,{value:n.provider,children:n.provider})})})]})]})}),(0,e.jsxs)(o.C,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(_.O,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(h.y,{gap:5,children:[(0,e.jsx)(d.C,{col:6,s:12,children:(0,e.jsx)(c.g,{id:"test-address-input",name:"test-address",onChange:G,label:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:O.email?.id&&t({id:`email.${O.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(d.C,{col:7,s:12,children:(0,e.jsx)(S.Z,{loading:p.isLoading,disabled:!V,type:"submit",startIcon:(0,e.jsx)(R.c,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);
