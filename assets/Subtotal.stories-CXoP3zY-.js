import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{g as m}from"./product-CsUF4JJF.js";const d=e=>Math.round((e+Number.EPSILON)*100)/100,o=e=>e.reduce((t,r)=>t+Number(r.price)*r.quantity,0),l=e=>d(e.reduce((t,r)=>t+m(r.price,r.discount)*r.quantity,0)),g="_subtotalSection_4koo6_1",p="_price_4koo6_13",y="_oldPrice_4koo6_19",b="_discountPrice_4koo6_25",i={subtotalSection:g,price:p,oldPrice:y,discountPrice:b};function c({arr:e}){const t=e.find(r=>r.discount>0);return n.jsxs("section",{className:i.subtotalSection,children:["Subtotal:",n.jsx("div",{className:i.price,children:t?n.jsxs("div",{children:[n.jsxs("div",{className:i.oldPrice,children:["$",o(e).toFixed(2)]}),n.jsxs("div",{className:i.discountPrice,children:["$",l(e).toFixed(2)]})]}):n.jsxs("div",{children:["$",o(e).toFixed(2)]})})]})}c.__docgenInfo={description:"",methods:[],displayName:"Subtotal",props:{arr:{required:!0,tsType:{name:"union",raw:"OrderItem[] | OrderItemResponse[]",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  img: string;
  price: number;
  discount: number;
  categoryName: string;
  quantity: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"img",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount",value:{name:"number",required:!0}},{key:"categoryName",value:{name:"string",required:!0}},{key:"quantity",value:{name:"number",required:!0}}]}}],raw:"OrderItem[]"},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  product: {
    id: string;
    name: string;
    categoryName: string;
    price: number;
    discount: number;
    releaseDate: number;
    imagesUrls: string[];
  };

  price: number;
  discount: number;
  quantity: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"product",value:{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  categoryName: string;
  price: number;
  discount: number;
  releaseDate: number;
  imagesUrls: string[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"categoryName",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount",value:{name:"number",required:!0}},{key:"releaseDate",value:{name:"number",required:!0}},{key:"imagesUrls",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount",value:{name:"number",required:!0}},{key:"quantity",value:{name:"number",required:!0}}]}}],raw:"OrderItemResponse[]"}]},description:""}}};const k={component:c,decorators:[e=>n.jsx("div",{style:{maxWidth:"800px",margin:"20px"},children:n.jsx(e,{})})]},u={id:"1",name:"Sofa",price:100,discount:0,quantity:1,categoryName:"Sofas",img:"image"},a={args:{arr:[u,{...u,id:"2",price:200,quantity:2}]}},s={args:{arr:[u,{...u,id:"2",price:200,quantity:2,discount:20}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2,
      discount: 20
    }]
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithDiscount"];export{a as Default,s as WithDiscount,x as __namedExportsOrder,k as default};
