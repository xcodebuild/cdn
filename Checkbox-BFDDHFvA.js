import{P as pe,Q as xe,r as z,y as ke,A as t,D as me,E as fe,j as b,G as F,J as Ce,F as ge,S as ye,K as I,N as J,O as $e}from"./index-DRKdyhzb.js";import{c as M}from"./createSvgIcon-DiGfNeH6.js";import{T as Ie}from"./Typography-B6lazjNl.js";import{F as ze}from"./useLoading-Dble4Yjd.js";function Fe(o){const{checked:e,defaultChecked:l,disabled:a,onBlur:i,onChange:s,onFocus:u,onFocusVisible:d,readOnly:h,required:C}=o,[j,B]=pe({controlled:e,default:!!l,name:"Switch",state:"checked"}),P=n=>r=>{var v;r.nativeEvent.defaultPrevented||(B(r.target.checked),s==null||s(r),(v=n.onChange)==null||v.call(n,r))},{isFocusVisibleRef:k,onBlur:T,onFocus:_,ref:H}=xe(),[p,x]=z.useState(!1);a&&p&&x(!1),z.useEffect(()=>{k.current=p},[p,k]);const g=z.useRef(null),A=n=>r=>{var v;g.current||(g.current=r.currentTarget),_(r),k.current===!0&&(x(!0),d==null||d(r)),u==null||u(r),(v=n.onFocus)==null||v.call(n,r)},N=n=>r=>{var v;T(r),k.current===!1&&x(!1),i==null||i(r),(v=n.onBlur)==null||v.call(n,r)},R=ke(H,g);return{checked:j,disabled:!!a,focusVisible:p,getInputProps:(n={})=>t({checked:e,defaultChecked:l,disabled:a,readOnly:h,ref:R,required:C,type:"checkbox",role:"switch","aria-checked":e},n,{onChange:P(n),onFocus:A(n),onBlur:N(n)}),inputRef:R,readOnly:!!h}}function Pe(o){return fe("MuiCheckbox",o)}const _e=me("MuiCheckbox",["root","checkbox","action","input","label","checked","disabled","focusVisible","indeterminate","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantOutlined","variantSoft","variantSolid"]),f=_e,Re=M(b.jsx("path",{d:"M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"}),"Check"),Ve=M(b.jsx("path",{d:"M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"}),"HorizontalRule"),je=["checked","uncheckedIcon","checkedIcon","label","defaultChecked","disabled","disableIcon","overlay","id","indeterminate","indeterminateIcon","name","onBlur","onChange","onFocus","onFocusVisible","readOnly","required","value","color","variant","size","component","slots","slotProps"],Be=o=>{const{checked:e,disabled:l,disableIcon:a,focusVisible:i,color:s,variant:u,size:d,indeterminate:h}=o,C={root:["root",e&&"checked",l&&"disabled",i&&"focusVisible",u&&`variant${J(u)}`,s&&`color${J(s)}`,d&&`size${J(d)}`],checkbox:["checkbox",e&&"checked",h&&"indeterminate",l&&"disabled"],action:["action",e&&"checked",a&&l&&"disabled",i&&"focusVisible"],input:["input"],label:["label"]};return $e(C,Pe,{})},Te=F("span",{name:"JoyCheckbox",slot:"Root",overridesResolver:(o,e)=>e.root})(({ownerState:o,theme:e})=>{var l,a,i;return t({"--Icon-fontSize":"var(--Checkbox-size)"},o.size==="sm"&&{"--Checkbox-size":"1rem","& ~ *":{"--FormHelperText-margin":"0 0 0 1.5rem"},fontSize:e.vars.fontSize.sm,gap:"var(--Checkbox-gap, 0.5rem)"},o.size==="md"&&{"--Checkbox-size":"1.25rem","& ~ *":{"--FormHelperText-margin":"0.25rem 0 0 1.875rem"},fontSize:e.vars.fontSize.md,gap:"var(--Checkbox-gap, 0.625rem)"},o.size==="lg"&&{"--Checkbox-size":"1.5rem","& ~ *":{"--FormHelperText-margin":"0.375rem 0 0 2.25rem"},fontSize:e.vars.fontSize.lg,gap:"var(--Checkbox-gap, 0.75rem)"},{position:o.overlay?"initial":"relative",display:"inline-flex",fontFamily:e.vars.fontFamily.body,lineHeight:"var(--Checkbox-size)",color:e.vars.palette.text.primary,[`&.${f.disabled}`]:{color:(l=e.variants.plainDisabled)==null||(l=l[o.color])==null?void 0:l.color}},o.disableIcon&&{color:(a=e.variants[o.variant])==null||(a=a[o.color])==null?void 0:a.color,[`&.${f.disabled}`]:{color:(i=e.variants[`${o.variant}Disabled`])==null||(i=i[o.color])==null?void 0:i.color}})}),He=F("span",{name:"JoyCheckbox",slot:"Checkbox",overridesResolver:(o,e)=>e.checkbox})(({theme:o,ownerState:e})=>{var l,a,i,s,u;const d=(l=o.variants[`${e.variant}`])==null?void 0:l[e.color];return[t({"--Icon-color":e.color!=="neutral"||e.variant==="solid"?"currentColor":o.vars.palette.text.icon,boxSizing:"border-box",borderRadius:`min(${o.vars.radius.sm}, 0.25rem)`,width:"var(--Checkbox-size)",height:"var(--Checkbox-size)",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0},e.disableIcon&&{display:"contents"},{[`&.${f.checked}, &.${f.indeterminate}`]:{"--Icon-color":"currentColor"}}),...e.disableIcon?[]:[t({},d,{backgroundColor:(a=d==null?void 0:d.backgroundColor)!=null?a:o.vars.palette.background.surface}),{"&:hover":{"@media (hover: hover)":(i=o.variants[`${e.variant}Hover`])==null?void 0:i[e.color]}},{"&:active":(s=o.variants[`${e.variant}Active`])==null?void 0:s[e.color]},{[`&.${f.disabled}`]:(u=o.variants[`${e.variant}Disabled`])==null?void 0:u[e.color]}]]}),Ae=F("span",{name:"JoyCheckbox",slot:"Action",overridesResolver:(o,e)=>e.action})(({theme:o,ownerState:e})=>{var l,a,i,s;return[{borderRadius:`var(--Checkbox-actionRadius, ${e.overlay?"var(--unstable_actionRadius, inherit)":"inherit"})`,textAlign:"left",position:"absolute",top:"calc(-1 * var(--variant-borderWidth, 0px))",left:"calc(-1 * var(--variant-borderWidth, 0px))",bottom:"calc(-1 * var(--variant-borderWidth, 0px))",right:"calc(-1 * var(--variant-borderWidth, 0px))",zIndex:1,[o.focus.selector]:o.focus.default},...e.disableIcon?[(l=o.variants[e.variant])==null?void 0:l[e.color],{"&:hover":(a=o.variants[`${e.variant}Hover`])==null?void 0:a[e.color]},{"&:active":(i=o.variants[`${e.variant}Active`])==null?void 0:i[e.color]},{[`&.${f.disabled}`]:(s=o.variants[`${e.variant}Disabled`])==null?void 0:s[e.color]}]:[]]}),Ne=F("input",{name:"JoyCheckbox",slot:"Input",overridesResolver:(o,e)=>e.input})(()=>({margin:0,opacity:0,position:"absolute",width:"100%",height:"100%",cursor:"pointer"})),Ee=F("label",{name:"JoyCheckbox",slot:"Label",overridesResolver:(o,e)=>e.label})(({ownerState:o})=>t({flex:1,minWidth:0},o.disableIcon&&{zIndex:1,pointerEvents:"none"})),Je=b.jsx(Re,{}),Le=b.jsx(Ve,{}),Oe=z.forwardRef(function(e,l){var a,i,s,u,d;const h=Ce({props:e,name:"JoyCheckbox"}),{checked:C,uncheckedIcon:j,checkedIcon:B=Je,label:P,defaultChecked:k,disabled:T,disableIcon:_=!1,overlay:H,id:p,indeterminate:x=!1,indeterminateIcon:g=Le,name:A,onBlur:N,onChange:R,onFocus:L,onFocusVisible:n,readOnly:r,required:v,value:U,color:G,variant:O,size:K="md",component:Q,slots:S={},slotProps:X={}}=h,Y=ge(h,je),c=z.useContext(ze),Z=(a=(i=e.disabled)!=null?i:c==null?void 0:c.disabled)!=null?a:T,w=(s=(u=e.size)!=null?u:c==null?void 0:c.size)!=null?s:K,W=ye(p??(c==null?void 0:c.htmlFor)),ee={checked:C,defaultChecked:k,disabled:Z,onBlur:N,onChange:R,onFocus:L,onFocusVisible:n},{getInputProps:oe,checked:E,disabled:le,focusVisible:ae}=Fe(ee),D=E||x,ie=D?O||"solid":O||"outlined",q=e.color||(c!=null&&c.error?"danger":(d=c==null?void 0:c.color)!=null?d:G),m=t({},h,{checked:E,disabled:le,disableIcon:_,overlay:H,focusVisible:ae,color:D?q||"primary":q||"neutral",variant:ie,size:w}),y=Be(m),$=t({},Y,{component:Q,slots:S,slotProps:X}),[re,ne]=I("root",{ref:l,className:y.root,elementType:Te,externalForwardedProps:$,ownerState:m}),[se,ce]=I("checkbox",{className:y.checkbox,elementType:He,externalForwardedProps:$,ownerState:m}),[te,de]=I("action",{className:y.action,elementType:Ae,externalForwardedProps:$,ownerState:m}),[ue,ve]=I("input",{additionalProps:t({id:W,name:A,value:U,readOnly:r,role:void 0,required:v??(c==null?void 0:c.required),"aria-describedby":c==null?void 0:c["aria-describedby"]},x&&{"aria-checked":"mixed"}),className:y.input,elementType:Ne,externalForwardedProps:$,getSlotProps:oe,ownerState:m}),[be,he]=I("label",{additionalProps:{htmlFor:W},className:y.label,elementType:Ee,externalForwardedProps:$,ownerState:m});let V=j;return _?V=null:x?V=g:E&&(V=B),b.jsxs(re,t({},ne,{children:[b.jsxs(se,t({},ce,{children:[b.jsx(te,t({},de,{children:b.jsx(ue,t({},ve))})),V]})),P&&b.jsx(Ie.Provider,{value:!0,children:b.jsx(be,t({},he,{children:P}))})]}))}),Se=Oe;export{Se as C,Fe as u};
