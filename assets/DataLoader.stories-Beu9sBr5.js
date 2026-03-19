import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as c}from"./LoadingSpinner-CjBuAzHx.js";import{E as m}from"./ErrorState-Bqguu7fX.js";import"./index.es-BHEOqeAC.js";import"./iframe-BgNqSp98.js";import"./preload-helper-PPVm8Dsz.js";const g=e=>{if(e)return e};function d({loading:e,loaded:t,error:i,children:l}){const s=g(i);return r.jsxs(r.Fragment,{children:[e&&r.jsx(c,{}),s&&r.jsx(m,{message:s.message}),t&&l]})}d.__docgenInfo={description:"",methods:[],displayName:"DataLoader"};const j={component:d,decorators:[e=>r.jsx("div",{style:{padding:40},children:r.jsx(e,{})})]},o={args:{loading:!0,loaded:!1,error:null,children:r.jsx("div",{children:"Content"})}},n={args:{loading:!1,loaded:!0,error:null,children:r.jsx("div",{children:"Content"})}},a={args:{loading:!1,loaded:!1,error:new Error("Something went wrong"),children:r.jsx("div",{children:"Content"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    loaded: false,
    error: null,
    children: <div>Content</div>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    loaded: true,
    error: null,
    children: <div>Content</div>
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    loaded: false,
    error: new Error("Something went wrong"),
    children: <div>Content</div>
  }
}`,...a.parameters?.docs?.source}}};const E=["Loading","Loaded","WithError"];export{n as Loaded,o as Loading,a as WithError,E as __namedExportsOrder,j as default};
