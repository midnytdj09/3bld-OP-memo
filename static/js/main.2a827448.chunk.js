(this["webpackJsonpletter-pairs-memo"]=this["webpackJsonpletter-pairs-memo"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(4),s=r.n(a),i=(r(9),r(2)),l=(r(10),function(e){var t=Math.trunc(e/60),r=e%60;return(t<10?"0"+t:t)+":"+(r<10?"0"+r:r)}),o=r(0),j=["start","memorized","check","do again"],u="ABCDEFGJKLMNOPQRSTUVWX";function b(e){var t=e.level,r=e.controlLevel,c=e.timeMemo,n=e.timeRecall,a=e.onRight,s=e.numberAttempts,i=e.parcialResult;return Object(o.jsxs)("div",{className:"painel-start",children:[Object(o.jsx)("h5",{children:"Put Your Desire Level (Max 11)"}),Object(o.jsxs)("div",{className:"painel-level",children:[Object(o.jsx)("button",{onClick:function(){return r(-1)},className:"waves-effect waves-light btn-large",children:Object(o.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(o.jsx)("div",{className:"level-display",children:Object(o.jsx)("h1",{children:t})}),Object(o.jsx)("button",{onClick:function(){return r(1)},className:"waves-effect waves-light btn-large",children:Object(o.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]}),Object(o.jsxs)("div",{className:"grid-infos",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h5",{children:["Number Attempts: ",s]}),Object(o.jsxs)("h5",{children:["Last Result: ",null===a?"Unkown":a?"Right":"Wrong"]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h5",{children:["Total Right: ",i[0]]}),Object(o.jsxs)("h5",{children:["Total Wrong: ",i[1]]})]}),Object(o.jsxs)("div",{className:"times",children:[Object(o.jsxs)("h5",{children:["Last Time Memo: ",l(c)]}),Object(o.jsxs)("h5",{children:["Last Time Recall: ",l(n)]})]})]})]})}function h(e){var t=e.letterPairs;return Object(o.jsx)("div",{className:"grid-pairs",children:t.map((function(e){return Object(o.jsx)("div",{className:"letter-pair",children:e})}))})}function d(e){var t=e.pairsToCheck,r=e.setPairsToCheck;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Put the pairs in the right order using space between them:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:t,onChange:function(e){return r(e.target.value.toUpperCase())},autoFocus:!0})]})}function O(e){var t=e.letterPairs,r=e.answers,c=e.pairsToCheck.split(" "),n=-1,a={borderColor:"red",color:"red"},s={borderColor:"#64dd17",color:"#64dd17"};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"grid-pairs",children:t.map((function(e){return Object(o.jsx)("div",{className:"letter-pair",children:e})}))}),Object(o.jsx)("div",{className:"grid-pairs",children:c.map((function(e){return n++,Object(o.jsx)("div",{style:r[n]?s:a,className:"letter-pair",children:e})}))})]})}var v=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(0),s=Object(i.a)(a,2),l=s[0],v=s[1],f=Object(c.useState)(0),m=Object(i.a)(f,2),x=m[0],p=m[1],g=Object(c.useState)(!1),S=Object(i.a)(g,2),N=S[0],k=S[1],C=Object(c.useState)(!1),w=Object(i.a)(C,2),I=w[0],T=w[1],P=Object(c.useState)(!1),R=Object(i.a)(P,2),L=R[0],M=R[1],y=Object(c.useState)(j[0]),F=Object(i.a)(y,2),A=F[0],W=F[1],B=Object(c.useState)([]),D=Object(i.a)(B,2),J=D[0],U=D[1],E=Object(c.useState)(""),_=Object(i.a)(E,2),z=_[0],G=_[1],K=Object(c.useState)([]),Q=Object(i.a)(K,2),V=Q[0],X=Q[1],Y=Object(c.useState)(null),q=Object(i.a)(Y,2),H=q[0],Z=q[1],$=Object(c.useState)(0),ee=Object(i.a)($,2),te=ee[0],re=ee[1],ce=Object(c.useState)([0,0]),ne=Object(i.a)(ce,2),ae=ne[0],se=ne[1],ie=function(){le(),oe()},le=function(){for(var e=2*r,t=[],c=function(e,t){for(var r=[],c=function(){var e=Math.floor(Math.random()*t);r.some((function(t){return t===e}))||r.push(e)};r.length<e;)c();return r}(e,u.length),n=0;n<e;n+=2){var a=u[c[n]]+u[c[n+1]];t.push(a)}U(t)},oe=function(){var e=0;if(!N){var t=setInterval((function(){e++,v(e)}),1e3);localStorage.clear(),localStorage.setItem("intervalId",t)}N&&clearInterval(localStorage.getItem("intervalId"))},je=function(){ue(),be(),he()},ue=function(){var e=[],t=z.replace(/\s+/g,"").match(/.{1,2}/g);if(null!==t){for(var c in J)J[c]===t[c]?e.push(!0):e.push(!1);X(e),G(t.join(" ")),t.length===J.length&&e.every((function(e){return e}))?(n(r<11?function(e){return e+1}:r),Z(!0),se((function(e){return[e[0]+1,e[1]]}))):(n(r>1?function(e){return e-1}:r),Z(!1),se((function(e){return[e[0],e[1]+1]})))}else n(r>1?function(e){return e-1}:r)},be=function(){var e=0;if(!I){var t=setInterval((function(){e++,p(e)}),1e3);localStorage.clear(),localStorage.setItem("intervalId2",t)}I&&clearInterval(localStorage.getItem("intervalId2"))},he=function(){re((function(e){return e+1}))};return Object(o.jsxs)("div",{className:"painel center-align",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("u",{children:"LetterPair Memory Trainer"})}),N?Object(o.jsx)(h,{level:r,letterPairs:J}):I?Object(o.jsx)(d,{pairsToCheck:z,setPairsToCheck:G}):L?Object(o.jsx)(O,{answers:V,pairsToCheck:z,letterPairs:J}):Object(o.jsx)(b,{parcialResult:ae,numberAttempts:te,onRight:H,timeMemo:l,timeRecall:x,level:r,controlLevel:function(e){if(r>=1&&r<=11){if(1===r&&e<0)return;if(11===r&&e>0)return;n((function(t){return t+e}))}}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return function(){switch(A){case j[0]:W(j[1]),k(!0),v(0),p(0),ie();break;case j[1]:W(j[2]),k(!1),T(!0),oe(),be();break;case j[2]:W(j[3]),M(!0),T(!1),je();break;case j[3]:W(j[0]),M(!1),X([]),G("");break;default:W(j[0]),M(!1),k(!1),T(!1)}}()},className:"btn-large",children:A}),N||I||L?Object(o.jsx)("h6",{}):Object(o.jsx)("h6",{children:"by Willian Pessoa"})]})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),f()},9:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.2a827448.chunk.js.map