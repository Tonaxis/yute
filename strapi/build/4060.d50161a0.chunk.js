"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4060],{64060:(v,i,s)=>{s.r(i),s.d(i,{AdminSeatInfoEE:()=>B});var t=s(74081),M=s(74577),_=s(32370),e=s(10701),l=s(2981),D=s(50703),d=s(79213),a=s(87006),O=s(15206),n=s(48157),P=s(61020),E=s(59461),C=s(12847),r=s(66360),j=s(27279),S=s(40464),p=s(64797),y=s(85811),Z=s(30594),F=s(15816),H=s(97442),Q=s(13576),G=s(87830),N=s(47184),$=s(364),J=s(71563),V=s(49204),Y=s(47853),z=s(75719),X=s(74919),k=s(29206),b=s(98934),w=s(43433),q=s(8175);const R="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:o}=(0,P.Z)(),T=(0,E.v9)(C.s),{isLoading:m,allowedActions:{canRead:c,canCreate:W,canUpdate:g,canDelete:K}}=(0,a.ss)(T.settings.users),{license:{licenseLimitStatus:h,enforcementUserCount:A,permittedSeats:L,isHostedOnStrapiCloud:I},isError:f,isLoading:u}=(0,r.u)({enabled:!m&&c&&W&&g&&K});return f||(m||u)||!L?null:(0,t.jsxs)(M.P,{col:6,s:12,children:[(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:o({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,t.jsxs)(e.k,{gap:2,children:[(0,t.jsx)(e.k,{children:(0,t.jsx)(_.Z,{as:"p",children:o({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:L,enforcementUserCount:A,text:x=>(0,t.jsx)(_.Z,{fontWeight:"semiBold",textColor:A>L?"danger500":null,children:x})})})}),h==="OVER_LIMIT"&&(0,t.jsx)(l.u,{description:o({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,t.jsx)(D.J,{width:`${(0,a.Q1)(14)}rem`,height:`${(0,a.Q1)(14)}rem`,color:"danger500",as:O.Z})})]}),(0,t.jsx)(d.r,{href:I?R:U,isExternal:!0,endIcon:(0,t.jsx)(n.Z,{}),children:o({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})})]})}},66360:(v,i,s)=>{s.d(i,{u:()=>e});var t=s(27279),M=s(87006),_=s(40464);function e({enabled:l}={enabled:!0}){const{get:D}=(0,M.kY)(),{data:d,isError:a,isLoading:O}=(0,_.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await D("/admin/license-limit-information");return E},{enabled:l}),n=t.useMemo(()=>d??{},[d]),P=t.useCallback(E=>(n?.features??[]).find(r=>r.name===E)?.options??{},[n?.features]);return{license:n,getFeature:P,isError:a,isLoading:O}}}}]);
