import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as d}from"./product-CsUF4JJF.js";const m=e=>Math.round((e+Number.EPSILON)*100)/100,c=e=>e.reduce((n,r)=>n+Number(r.price)*r.quantity,0),l=e=>m(e.reduce((n,r)=>n+d(r.price,r.discount)*r.quantity,0)),p="_subtotalSection_4koo6_1",g="_price_4koo6_13",y="_oldPrice_4koo6_19",b="_discountPrice_4koo6_25",i={subtotalSection:p,price:g,oldPrice:y,discountPrice:b};function u({arr:e}){const n=e.find(r=>r.discount>0);return t.jsxs("section",{className:i.subtotalSection,children:["Subtotal:",t.jsx("div",{className:i.price,children:n?t.jsxs("div",{children:[t.jsxs("div",{className:i.oldPrice,children:["$",c(e).toFixed(2)]}),t.jsxs("div",{className:i.discountPrice,children:["$",l(e).toFixed(2)]})]}):t.jsxs("div",{children:["$",c(e).toFixed(2)]})})]})}u.__docgenInfo={description:"",methods:[],displayName:"Subtotal",props:{arr:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  img: string;
  price: number;
  discount: number;
  categoryName: string;
  quantity: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"img",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount",value:{name:"number",required:!0}},{key:"categoryName",value:{name:"string",required:!0}},{key:"quantity",value:{name:"number",required:!0}}]}}],raw:"OrderItem[]"},description:""}}};const _={component:u,decorators:[e=>t.jsx("div",{style:{maxWidth:"800px",margin:"20px"},children:t.jsx(e,{})})]},o={id:"1",name:"Sofa",price:100,discount:0,quantity:1,categoryName:"Sofas",img:"image"},s={args:{arr:[o,{...o,id:"2",price:200,quantity:2}]}},a={args:{arr:[o,{...o,id:"2",price:200,quantity:2,discount:20}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2
    }]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2,
      discount: 20
    }]
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","WithDiscount"];export{s as Default,a as WithDiscount,S as __namedExportsOrder,_ as default};
