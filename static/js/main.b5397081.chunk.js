(this.webpackJsonpscorehammer=this.webpackJsonpscorehammer||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),s=a.n(r),i=(a(12),a(3)),j=a(2),l=(a.p,a(13),a(0)),o=function(e){var t=Object(n.useState)(12),a=Object(j.a)(t,2),c=a[0],r=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:e.playerName}),Object(l.jsx)("div",{className:"commandDisplay",children:c}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{class:"addBtn",onClick:function(e){return r((function(e){return e+1}))},children:"+"}),Object(l.jsx)("button",{class:"subBtn",onClick:function(e){return r((function(e){return e-1}))},children:"-"})]})]})},d=[{cat:"Aeldari",name:"Asuryani"},{cat:"Aeldari",name:"Drukhari"},{cat:"Aeldari",name:"Harlequins"},{cat:"Aeldari",name:"Ynnari"},{cat:"Aeldari",name:"Aeldari"},{cat:"Chaos",name:"Chaos Knights"},{cat:"Chaos",name:"Daemons"},{cat:"Chaos",name:"Death Guard"},{cat:"Chaos",name:"Fallen"},{cat:"Chaos",name:"Gellerpox Infected"},{cat:"Chaos",name:"Heretic Astarties"},{cat:"Chaos",name:"Servants of the Abyss"},{cat:"Chaos",name:"Thousand Sons"},{cat:"Chaos",name:"Titanicus Traitoris"},{cat:"Chaos",name:"Chaos"},{cat:"Imperium",name:"Adepta Sororitas"},{cat:"Imperium",name:"Adeptus Astarties"},{cat:"Imperium",name:"Adeptus Custodies"},{cat:"Imperium",name:"Adeptus Mechanicus"},{cat:"Imperium",name:"Adeptus Titanicus"},{cat:"Imperium",name:"Astra Militarum"},{cat:"Imperium",name:"Elucidian Starstriders"},{cat:"Imperium",name:"Fallen"},{cat:"Imperium",name:"Grey Knights"},{cat:"Imperium",name:"Imperial Knights"},{cat:"Imperium",name:"Inquisition"},{cat:"Imperium",name:"Officio Assassinorum"},{cat:"Imperium",name:"Sisters of Silence"},{cat:"Imperium",name:"Imperium"},{cat:"Necrons",name:"Necrons"},{cat:"Orks",name:"Orks"},{cat:"T'au Empire",name:"T'au Emplire"},{cat:"Tyranids",name:"Brood Brothers"},{cat:"Tyranids",name:"Genestealer Cults"},{cat:"Tyranids",name:"Tyranids"}],m=[{cat:"Mission",name:"Mission Specific Secondary"},{cat:"Codex",name:"Codex Specific 1"},{cat:"Codex",name:"Codex Specific 2"},{cat:"Codex",name:"Codex Specific 3"},{cat:"Battlefield Supremacy",name:"Engage on All Fronts"},{cat:"Battlefield Supremacy",name:"Linebreaker"},{cat:"Battlefield Supremacy",name:"Domination"},{cat:"No Mercy, No Respite",name:"Thin Their Ranks"},{cat:"No Mercy, No Respite",name:"Grind Them Down"},{cat:"No Mercy, No Respite",name:"While We Stand, We Fight"},{cat:"Purge the Enemy",name:"Titan Hunter"},{cat:"Purge the Enemy",name:"Bring it Down"},{cat:"Purge the Enemy",name:"Cut Off the Head"},{cat:"Purge the Enemy",name:"Assassinate"},{cat:"Shadow Operations",name:"Raise the Banners High"},{cat:"Shadow Operations",name:"Investigate Sights"},{cat:"Shadow Operations",name:"Deploy Scramblers"},{cat:"Shadow Operations",name:"Teleport Homer"},{cat:"Warpcraft",name:"Abhor the Witch"},{cat:"Warpcraft",name:"Mental Interrogation"},{cat:"Warpcraft",name:"Psychic Ritual"},{cat:"Warpcraft",name:"Pierce the Veil"}],u=function(e){var t=d.reduce((function(e,t){return e[t.cat]=[].concat(Object(i.a)(e[t.cat]||[]),[t]),e}),{});return Object(l.jsxs)("select",{onChange:function(t){return e.handleChange(t.target.value)},children:[Object(l.jsx)("option",{disabled:"disabled",selected:"selected",children:"-- Choose Faction --"}),Object.keys(t).map((function(e){return Object(l.jsx)("optgroup",{label:e,children:t[e].map((function(e){return Object(l.jsx)("option",{children:e.name})}))})}))]})},h=function(e){var t=m.reduce((function(e,t){return e[t.cat]=[].concat(Object(i.a)(e[t.cat]||[]),[t]),e}),{});return Object(l.jsx)("select",{multiple:!0,onChange:function(t){return e.handleChange(Array.from(t.target.selectedOptions,(function(e){return e.value})))},children:Object.keys(t).map((function(e){return Object(l.jsx)("optgroup",{label:e,children:t[e].map((function(e){return Object(l.jsx)("option",{children:e.name})}))})}))})};var b=function(){var e=Object(n.useState)("Player 1"),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("Player 2"),s=Object(j.a)(r,2),d=s[0],m=s[1],b=Object(n.useState)(""),O=Object(j.a)(b,2),p=O[0],x=O[1],f=Object(n.useState)(""),y=Object(j.a)(f,2),g=y[0],C=y[1],S=Object(n.useState)([]),v=Object(j.a)(S,2),N=v[0],A=v[1],I=Object(n.useState)([]),T=Object(j.a)(I,2),P=T[0],k=T[1],B=Object(n.useState)(Array(8).fill(0)),F=Object(j.a)(B,2),G=F[0],D=F[1],E=Object(n.useState)(0),M=Object(j.a)(E,2),w=M[0],W=M[1],H=Object(n.useState)(Array(8).fill(0)),R=Object(j.a)(H,2),L=R[0],K=R[1],q=Object(n.useState)(0),J=Object(j.a)(q,2),V=J[0],Y=J[1],z=function(e,t,a,n,c){e[t]=a.target.valueAsNumber,n(e),c(e.reduce((function(e,t){return e+t})))},Q=function(e,t){z(G,e,t,D,W)},U=function(e,t){z(L,e,t,K,Y)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Scorehammer"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{id:"players",children:[Object(l.jsx)("h2",{children:"Players"}),Object(l.jsx)("h3",{children:"Player 1"}),Object(l.jsxs)("div",{className:"playerSetup",children:[Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)}})]}),Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Faction"}),Object(l.jsx)(u,{handleChange:x})]}),Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Secondaries (pick 3)"}),Object(l.jsx)(h,{handleChange:function(e){console.log(e),A(e)}})]})]}),Object(l.jsx)("h3",{children:"Player 2"}),Object(l.jsxs)("div",{className:"playerSetup",children:[Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{value:d,onChange:function(e){return m(e.target.value)}})]}),Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Faction"}),Object(l.jsx)(u,{handleChange:C})]}),Object(l.jsxs)("div",{className:"formGroup",children:[Object(l.jsx)("label",{children:"Secondaries (pick 3)"}),Object(l.jsx)(h,{handleChange:k})]})]})]}),Object(l.jsxs)("section",{id:"scores",children:[Object(l.jsx)("h2",{children:"Score"}),Object(l.jsx)("h3",{children:"Primary"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Turn"}),Object(l.jsxs)("th",{children:[a," ",p]}),Object(l.jsxs)("th",{children:[d," ",g]})]})}),Object(l.jsx)("tbody",{children:Object(i.a)(Array(5).keys()).map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t+1}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"number",step:"5",onChange:function(e){return Q(t,e)},pattern:"\\d*"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"number",step:"5",onChange:function(e){return U(t,e)},pattern:"\\d*"})})]},t)}))})]}),Object(l.jsx)("h3",{children:"Secondary"}),Object(l.jsxs)("div",{className:"secondary",children:[Object(l.jsxs)("div",{className:"secondaryList",children:[Object(l.jsxs)("div",{children:[a," ",p]}),N.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:e}),Object(l.jsx)("input",{type:"number",onChange:function(e){return Q(5+t,e)},pattern:"\\d*"})]})}))]}),Object(l.jsxs)("div",{className:"secondaryList",children:[Object(l.jsxs)("div",{children:[d," ",g]}),P.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:e}),Object(l.jsx)("input",{type:"number",onChange:function(e){return U(5+t,e)},pattern:"\\d*"})]})}))]})]}),Object(l.jsx)("h3",{children:"Total"}),Object(l.jsxs)("div",{className:"scoreTotal",children:[Object(l.jsxs)("div",{children:[a," ",p,": ",w]}),Object(l.jsxs)("div",{children:[d," ",g,": ",V]})]})]}),Object(l.jsxs)("section",{id:"commandPoints",children:[Object(l.jsx)("h2",{children:"Command Points"}),Object(l.jsx)(o,{playerName:a}),Object(l.jsx)(o,{playerName:d})]})]}),Object(l.jsx)("footer",{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.b5397081.chunk.js.map