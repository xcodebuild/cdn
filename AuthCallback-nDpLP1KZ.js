import{u as g,a as h,i as m,d as p,r as l,h as x,f as S,n as v,j as t,I as y}from"./index-DRKdyhzb.js";import{l as j}from"./last-DXTTfs9a.js";const b=()=>{const c=g(),d=h(),[a]=m(),u=p(),[r,s]=l.useState({loading:!0,errorMessage:""});return l.useEffect(()=>{const o=a.get("code"),i=a.get("state");if(o&&i){const f=x("/auth/callback"),n=Number(j(i.split("-")));n&&S.signInWithSSO({idpId:n,code:o,redirectUri:f}).then(async({user:e})=>{s({loading:!1,errorMessage:""}),e?(await u.fetchCurrentUser(),d("/")):v.error(c("message.login-failed"))}).catch(e=>{console.error(e),s({loading:!1,errorMessage:JSON.stringify(e.response.data,null,2)})})}else s({loading:!1,errorMessage:"Failed to authorize. Invalid state passed to the auth callback."})},[a]),t.jsx("div",{className:"p-4 w-full h-full flex justify-center items-center",children:r.loading?t.jsx(y.Loader,{className:"animate-spin dark:text-gray-200"}):t.jsx("div",{className:"max-w-lg font-mono whitespace-pre-wrap opacity-80",children:r.errorMessage})})};export{b as default};
