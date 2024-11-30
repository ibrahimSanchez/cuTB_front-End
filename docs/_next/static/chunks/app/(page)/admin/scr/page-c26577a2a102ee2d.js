(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{8875:function(e,t,r){Promise.resolve().then(r.bind(r,3673))},3673:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(2265),n=r(9089),o=r(3367),i=r(3804),l=r(123),c=r(4150);t.default=()=>{let[e,t]=(0,a.useState)([]),[r,d]=(0,a.useState)(!0),[u,m]=(0,a.useState)(!1),[p,f]=(0,a.useState)(null),[b,x]=(0,a.useState)(!1),[h,y]=(0,a.useState)(!1),[j,g]=(0,a.useState)(""),[v,w]=(0,a.useState)(!1),[N,O]=(0,a.useState)(null);(0,a.useEffect)(()=>{E()},[]);let E=async()=>{d(!0);try{let e=await (0,o.kw)();t(e.data.certification_records)}catch(e){console.error("Error fetching records:",e)}finally{d(!1)}},C=e=>{f(e),m(!0)},S=e=>{O(e),x(!0)},P=async()=>{if(x(!1),N)try{await (0,o.am)(N),g("Registro eliminado exitosamente."),w(!1),E()}catch(e){console.error("Error deleting record:",e),g("Error al eliminar el registro."),w(!0)}finally{y(!0),O(null)}},k=async e=>{try{p?(await (0,o.HC)(e),g("Registro actualizado exitosamente.")):(await (0,o.Ls)(e),g("Registro a\xf1adido exitosamente.")),m(!1),E()}catch(e){console.error("Error saving record:",e),g("Error al guardar el registro."),w(!0),m(!1)}finally{y(!0)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h2",{className:"subTitle mb-4",children:"Gesti\xf3n de Certificaciones"}),(0,s.jsxs)("button",{onClick:()=>{f(null),m(!0)},className:"bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]",children:[(0,s.jsx)(n.wEH,{className:"mr-2"})," A\xf1adir Registro"]})]}),(0,s.jsx)("div",{className:"overflow-x-auto max-h-80",children:(0,s.jsxs)("table",{className:"min-w-full bg-white rounded-lg shadow",children:[(0,s.jsx)("thead",{className:"bg-[--primary] text-white uppercase text-sm",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Nombre"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Certificaci\xf3n"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Nivel"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Fecha"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Acciones"})]})}),(0,s.jsx)("tbody",{children:r?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:5,className:"text-center py-4",children:(0,s.jsx)(c.Z,{})})}):e.map(e=>(0,s.jsxs)("tr",{className:"border-t",children:[(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.name}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.certification}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.level}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:new Date(e.date).toLocaleDateString()}),(0,s.jsxs)("td",{className:"px-4 py-2 flex space-x-2",children:[(0,s.jsx)("button",{onClick:()=>S(e.uid),className:"text-red-500 hover:text-red-700",children:(0,s.jsx)(n.Xm5,{})}),(0,s.jsx)("button",{onClick:()=>C(e),className:"text-[--primary] hover:text-[--secondary]",children:(0,s.jsx)(n.fmQ,{})})]})]},e.uid))})]})}),u&&(0,s.jsx)(l.default,{open:u,onClose:()=>m(!1),onSubmit:k,initialData:p||void 0}),b&&(0,s.jsx)(i.cV,{open:b,title:"Confirmar eliminaci\xf3n",message:"\xbfEst\xe1 seguro de que desea eliminar este registro? Esta acci\xf3n no se puede deshacer.",onConfirm:P,onCancel:()=>x(!1)}),h&&(0,s.jsx)(i.Ed,{open:h,title:v?"Error":"\xc9xito",message:j,isError:v,onClose:()=>y(!1)})]})}},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var s=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=s.createContext&&s.createContext(a),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>s.createElement(u,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:a,size:n,title:l}=e,d=function(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),u=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return void 0!==n?s.createElement(n.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[559,699,969,972,306,878,42,354,971,117,744],function(){return e(e.s=8875)}),_N_E=e.O()}]);