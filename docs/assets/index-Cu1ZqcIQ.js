import{_ as x,b as y,a as f,r as V,c as l,o as b,g as k,p as i,j as t,f as n,k as o,a0 as R,a1 as C,a2 as I,i as q,I as F,J as S,q as U,y as z}from"./index-C7e8hTWE.js";const B=""+new URL("logo-text-2-CVewf8RJ.png",import.meta.url).href,K=r=>(F("data-v-7846fcc5"),r=r(),S(),r),M={class:"login-container"},N={class:"login-card"},J=K(()=>i("div",{class:"title"},[i("img",{src:B,alt:""})],-1)),L={class:"content"},j=U(" 登 录 "),E={setup(r){const g=y(),c=f(null),a=f(!1),e=V({username:"admin",password:"123456"}),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},p=()=>{var d;(d=c.value)==null||d.validate(s=>{if(s)a.value=!0,z().login({username:e.username,password:e.password}).then(()=>{console.log(a.value),g.push({path:"/"})}).catch(()=>{e.password=""}).finally(()=>{a.value=!1});else return!1})};return(d,s)=>{const m=l("el-input"),_=l("el-form-item"),h=l("el-button"),v=l("el-form");return b(),k("div",M,[i("div",N,[J,i("div",L,[t(v,{ref_key:"loginFormRef",ref:c,model:o(e),rules:w,onKeyup:R(p,["enter"])},{default:n(()=>[t(_,{prop:"username"},{default:n(()=>[t(m,{modelValue:o(e).username,"onUpdate:modelValue":s[0]||(s[0]=u=>o(e).username=u),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":o(C),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(_,{prop:"password"},{default:n(()=>[t(m,{modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=u=>o(e).password=u),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":o(I),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),t(h,{loading:a.value,type:"primary",size:"large",onClick:q(p,["prevent"])},{default:n(()=>[j]),_:1},8,["loading","onClick"])]),_:1},8,["model","onKeyup"])])])])}}},A=x(E,[["__scopeId","data-v-7846fcc5"]]);export{A as default};
