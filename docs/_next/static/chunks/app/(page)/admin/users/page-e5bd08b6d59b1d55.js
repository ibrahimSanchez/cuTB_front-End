(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{9154:function(e,t,r){Promise.resolve().then(r.bind(r,4746))},4746:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),a=r(2265),n=r(9089),o=r(3367),l=r(2402),i=r(3804),c=r(4150);function u(){let[e,t]=(0,a.useState)([]),[r,u]=(0,a.useState)(!0),[d,m]=(0,a.useState)(!1),[p,b]=(0,a.useState)(!1),[f,x]=(0,a.useState)(!1),[h,y]=(0,a.useState)(null),[j,v]=(0,a.useState)(""),[g,N]=(0,a.useState)(!1),[O,w]=(0,a.useState)(null);(0,a.useEffect)(()=>{E()},[]);let E=async()=>{u(!0);try{let e=await (0,o.Rf)();t(e.data.users)}catch(e){console.error(e)}u(!1)},S=e=>{w(e),b(!0)},P=async()=>{if(b(!1),O)try{let e=await (0,o.h8)(O);console.log(e),v("Usuario eliminado exitosamente."),N(!1),E()}catch(e){console.log(e),v("Error al eliminar el usuario."),N(!0)}finally{x(!0),w(null)}},C=e=>{y(e),m(!0)},k=async e=>{try{h?(await (0,o._W)(e),v("Usuario modificado exitosamente.")):(await (0,o.l1)(e),v("Usuario a\xf1adido exitosamente.")),N(!1),m(!1),E()}catch(e){v("Error al guardar los cambios."),N(!0),console.error(e),m(!1)}finally{x(!0)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h2",{className:"subTitle mb-4",children:"Gesti\xf3n de Usuarios"}),(0,s.jsxs)("button",{onClick:()=>{y(null),m(!0)},className:"bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]",children:[(0,s.jsx)(n.wEH,{className:"mr-2"})," A\xf1adir Usuario"]})]}),(0,s.jsx)("div",{className:"overflow-x-auto max-h-80",children:(0,s.jsxs)("table",{className:"min-w-full bg-white rounded-lg shadow",children:[(0,s.jsx)("thead",{className:"bg-[--primary] text-white uppercase text-sm",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Nombre"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Usuario"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Tel\xe9fono"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Rol"}),(0,s.jsx)("th",{className:"px-4 py-2 border border-slate-600 text-start",children:"Acciones"})]})}),(0,s.jsx)("tbody",{children:r?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:6,className:"text-center py-4",children:(0,s.jsx)(c.Z,{})})}):e.map(e=>(0,s.jsxs)("tr",{className:"border-t",children:[(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.name}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.userName}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.phone}),(0,s.jsx)("td",{className:"px-4 py-2 border border-slate-700",children:e.role}),(0,s.jsxs)("td",{className:"px-4 py-2 flex space-x-2",children:[(0,s.jsx)("button",{onClick:()=>S(e.uid),className:"text-red-500 hover:text-red-700",children:(0,s.jsx)(n.Xm5,{})}),(0,s.jsx)("button",{onClick:()=>C(e),className:"text-[--primary] hover:text-[--secondary]",children:(0,s.jsx)(n.fmQ,{})})]})]},e.uid))})]})}),d&&(0,s.jsx)(l.default,{open:d,onClose:()=>m(!1),onSubmit:k,initialData:h||void 0}),p&&(0,s.jsx)(i.cV,{open:p,title:"Confirmar eliminaci\xf3n",message:"\xbfEst\xe1 seguro que desea eliminar este usuario? Esta acci\xf3n no se puede deshacer.",onConfirm:P,onCancel:()=>b(!1)}),f&&(0,s.jsx)(i.Ed,{open:f,title:g?"Error":"\xc9xito",message:j,isError:g,onClose:()=>x(!1)})]})}},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var s=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=s.createContext&&s.createContext(a),o=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>s.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:n,title:i}=e,u=function(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return void 0!==n?s.createElement(n.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[559,699,969,972,306,878,42,354,971,117,744],function(){return e(e.s=9154)}),_N_E=e.O()}]);