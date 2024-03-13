import{r as u,u as v,k as R,aw as A,j as e,s as E,I as p,B as C,n as N,as as U,m as G,aF as H,aG as P,aH as K,aI as z}from"./index-DRKdyhzb.js";import{u as L}from"./index-2UGuc62r.js";import{u as D,O as I,T as Q}from"./MemoView-Cm1UAYRp.js";import{g as B,s as X}from"./CommonDialog-aMGtbYQ-.js";import{I as S,u as q}from"./useLoading-Dble4Yjd.js";import{a as F}from"./VisibilityIcon-ijzoLo4J.js";var O={};Object.defineProperty(O,"__esModule",{value:!0});var W=u,J=function(n,r){return typeof r=="boolean"?r:!n},Y=function(n){return W.useReducer(J,n)},Z=O.default=Y;const k=n=>{const r=`#${n}`.match(Q);return!(!r||r[1]!==n)},V=n=>{const{destroy:r}=n,s=v(),x=R(),a=D(),[g,l]=u.useState(""),[d,o]=u.useState([]),[c,j]=u.useState(!1),i=a.state.tags,h=d.filter(t=>!i.includes(t));u.useEffect(()=>{A.getTagSuggestions({user:x.name}).then(({tags:t})=>{o(t.filter(b=>k(b)))})},[i]);const m=t=>{t.key==="Enter"&&T()},f=t=>{const b=t.target.value;l(b.trim())},y=async t=>{await a.upsertTag(t)},w=()=>{j(t=>!t)},T=async()=>{if(!k(g)){N.error(s("tag.invalid-tag-name"));return}try{await a.upsertTag(g),l("")}catch(t){console.error(t),N.error(t.response.data.message)}},_=async t=>{await a.deleteTag(t)},$=async()=>{for(const t of d)k(t)&&await a.upsertTag(t)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dialog-header-container",children:[e.jsx("p",{className:"title-text",children:s("tag.create-tag")}),e.jsx(E,{size:"sm",onClick:()=>r(),children:e.jsx(p.X,{className:"w-5 h-auto"})})]}),e.jsxs("div",{className:"dialog-content-container !w-80",children:[e.jsx(S,{className:"mb-2",size:"md",placeholder:s("tag.tag-name"),value:g,onChange:f,onKeyDown:m,fullWidth:!0,startDecorator:e.jsx(p.Hash,{className:"w-4 h-auto"}),endDecorator:e.jsx(p.Check,{onClick:T,className:"w-4 h-auto cursor-pointer hover:opacity-80"})}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"w-full mt-2 mb-1 text-sm text-gray-400",children:s("tag.all-tags")}),e.jsx("div",{className:"w-full flex flex-row justify-start items-start flex-wrap",children:Array.from(i).sort().map(t=>e.jsx(I,{className:"max-w-[120px] text-sm mr-2 mt-1 font-mono cursor-pointer dark:text-gray-300 hover:opacity-60 hover:line-through",children:e.jsxs("span",{className:"w-full",onClick:()=>_(t),children:["#",t]})},t))})]}),h.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 mb-1 text-sm w-full flex flex-row justify-start items-center",children:[e.jsx("span",{className:"text-gray-400 mr-2",children:s("tag.tag-suggestions")}),e.jsx("span",{className:"text-xs border border-gray-200 rounded-md px-1 leading-5 cursor-pointer text-gray-600 hover:shadow dark:border-zinc-700 dark:text-gray-400",onClick:w,children:s(c?"tag.hide":"tag.show")})]}),c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex flex-row justify-start items-start flex-wrap mb-2",children:h.map(t=>e.jsx(I,{className:"max-w-[120px] text-sm mr-2 mt-1 font-mono cursor-pointer dark:text-gray-300 hover:opacity-60",children:e.jsxs("span",{className:"w-full",onClick:()=>y(t),children:["#",t]})},t))}),e.jsx(C,{size:"sm",variant:"outlined",onClick:$,children:s("tag.save-all")})]})]})]})]})};function ee(){B({className:"create-tag-dialog",dialogName:"create-tag-dialog"},V)}const te=n=>{const{tag:r,destroy:s}=n,x=v(),a=L(),g=R(),[l,d]=u.useState(r),o=q(!1),c=i=>{d(i.target.value.trim())},j=async()=>{if(!l||l.includes(" ")){N.error("Tag name cannot be empty or contain spaces");return}if(l===r){N.error("New name cannot be the same as the old name");return}try{await A.renameTag({user:g.name,oldName:r,newName:l}),N.success("Rename tag successfully"),a.setTagFilter(l)}catch(i){console.error(i),N.error(i.details)}s()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dialog-header-container",children:[e.jsx("p",{className:"title-text",children:"Rename tag"}),e.jsx(E,{size:"sm",onClick:()=>s(),children:e.jsx(p.X,{className:"w-5 h-auto"})})]}),e.jsxs("div",{className:"dialog-content-container max-w-xs",children:[e.jsxs("div",{className:"w-full flex flex-col justify-start items-start mb-3",children:[e.jsxs("div",{className:"relative w-full mb-2 flex flex-row justify-start items-center space-x-2",children:[e.jsx("span",{className:"w-20 text-sm whitespace-nowrap shrink-0 text-right",children:"Old Name"}),e.jsx(S,{className:"w-full",readOnly:!0,disabled:!0,type:"text",placeholder:"A new tag name",size:"md",value:r})]}),e.jsxs("div",{className:"relative w-full mb-2 flex flex-row justify-start items-center space-x-2",children:[e.jsx("span",{className:"w-20 text-sm whitespace-nowrap shrink-0 text-right",children:"New Name"}),e.jsx(S,{className:"w-full",type:"text",placeholder:"A new tag name",size:"md",value:l,onChange:c})]}),e.jsxs(U,{className:"!leading-5",size:"sm",marker:"disc",children:[e.jsx(F,{children:"All your memos with this tag will be updated."}),e.jsx(F,{children:"If the number of related memos is large, it will take longer and the server load will become higher."})]})]}),e.jsxs("div",{className:"w-full flex flex-row justify-end items-center mt-2 space-x-2",children:[e.jsx(C,{color:"neutral",variant:"plain",disabled:o.isLoading,loading:o.isLoading,onClick:s,children:x("common.cancel")}),e.jsx(C,{color:"primary",disabled:o.isLoading,loading:o.isLoading,onClick:j,children:x("common.confirm")})]})]})]})};function se(n){B({className:"rename-tag-dialog",dialogName:"rename-tag-dialog"},te,n)}const ce=()=>{const n=v(),r=L(),s=D(),x=G(),a=s.state.tags,g=r.state,[l,d]=u.useState([]);return u.useEffect(()=>{s.fetchTags()},[x.size()]),u.useEffect(()=>{const o=Array.from(a).sort(),c={subTags:[]};for(const j of o){const i=j.split("/");let h=c,m="";for(let f=0;f<i.length;f++){const y=i[f];f===0?m+=y:m+="/"+y;let w=null;for(const T of h.subTags)if(T.text===m){w=T;break}w||(w={key:y,text:m,subTags:[]},h.subTags.push(w)),h=w}}d(c.subTags)},[a]),e.jsxs("div",{className:"flex flex-col justify-start items-start w-full mt-3 px-1 h-auto shrink-0 flex-nowrap hide-scrollbar",children:[e.jsxs("div",{className:"flex flex-row justify-start items-center w-full",children:[e.jsx("span",{className:"text-sm leading-6 font-mono text-gray-400",children:n("common.tags")}),e.jsx("button",{onClick:()=>ee(),className:"flex flex-col justify-center items-center w-5 h-5 bg-gray-200 dark:bg-zinc-800 rounded ml-2 hover:shadow",children:e.jsx(p.Plus,{className:"w-4 h-4 text-gray-400"})})]}),e.jsx("div",{className:"flex flex-col justify-start items-start relative w-full h-auto flex-nowrap",children:l.map((o,c)=>e.jsx(M,{tag:o,tagQuery:g.tag},o.text+"-"+c))})]})},M=n=>{const r=v(),s=L(),x=D(),{tag:a,tagQuery:g}=n,l=g===a.text,d=a.subTags.length>0,[o,c]=Z(!1),j=()=>{l?s.setTagFilter(void 0):s.setTagFilter(a.text)},i=m=>{m.stopPropagation(),c()},h=async()=>{X({title:"Delete Tag",content:"Are you sure to delete this tag?",style:"danger",dialogName:"delete-tag-dialog",onConfirm:async()=>{await x.deleteTag(a.text)}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative group flex flex-row justify-between items-center w-full h-8 py-0 mt-px first:mt-1 rounded-lg text-base sm:text-sm cursor-pointer select-none shrink-0 hover:opacity-80",children:[e.jsxs("div",{className:`flex flex-row justify-start items-center truncate shrink leading-5 mr-1 text-gray-600 dark:text-gray-400 ${l&&"!text-blue-600"}`,children:[e.jsxs(H,{children:[e.jsx(P,{slots:{root:"div"},children:e.jsx("div",{className:"shrink-0",children:e.jsx(p.Hash,{className:"w-4 h-auto shrink-0 opacity-60 mr-1"})})}),e.jsxs(K,{size:"sm",placement:"bottom-start",children:[e.jsx(z,{onClick:()=>se({tag:a.text}),children:r("common.rename")}),e.jsx(z,{color:"danger",onClick:h,children:r("common.delete")})]})]}),e.jsx("span",{className:"truncate",onClick:j,children:a.key})]}),e.jsx("div",{className:"flex flex-row justify-end items-center",children:d?e.jsx("span",{className:`flex flex-row justify-center items-center w-6 h-6 shrink-0 transition-all rotate-0 ${o&&"rotate-90"}`,onClick:i,children:e.jsx(p.ChevronRight,{className:"w-5 h-5 opacity-40 dark:text-gray-400"})}):null})]}),d?e.jsx("div",{className:`w-[calc(100%-0.5rem)] flex flex-col justify-start items-start h-auto ml-2 pl-2 border-l-2 border-l-gray-200 dark:border-l-zinc-800 ${!o&&"!hidden"}`,children:a.subTags.map((m,f)=>e.jsx(M,{tag:m,tagQuery:g},m.text+"-"+f))}):null]})};export{ce as T};
