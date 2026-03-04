import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./cn-BKYOBV2n.js";const d="_horizontalScrollButton_ucn8q_1",u="_icon_ucn8q_20",f="_disabled_ucn8q_28",h="_left_ucn8q_38",p="_right_ucn8q_42",e={horizontalScrollButton:d,icon:u,disabled:f,left:h,right:p};function n({onClick:s,direction:a,className:c,disabled:l}){return t.jsx("button",{disabled:l,onClick:s,className:i(e.horizontalScrollButton,a==="left"?e.left:e.right,l&&e.disabled,c),"aria-label":a==="left"?"Scroll left":"Scroll right",children:t.jsx("svg",{className:e.icon,viewBox:"0 0 24 24",children:a==="left"?t.jsx("path",{d:"M16 4l-8 8 8 8"}):t.jsx("path",{d:"M8 4l8 8-8 8"})})})}n.__docgenInfo={description:"",methods:[],displayName:"HorizontalScrollButton"};const _={component:n,argTypes:{onClick:{action:"scroll"}},decorators:[s=>t.jsx("div",{style:{position:"relative",height:"200px",background:"#eee"},children:t.jsx(s,{})})]},o={args:{direction:"left",disabled:!1}},r={args:{direction:"right",disabled:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "left",
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const x=["LeftDefault","RightDefault"];export{o as LeftDefault,r as RightDefault,x as __namedExportsOrder,_ as default};
