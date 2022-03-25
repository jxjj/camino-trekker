var Pe=Object.defineProperty,Ne=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var me=(e,t,o)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ge=(e,t)=>{for(var o in t||(t={}))Ee.call(t,o)&&me(e,o,t[o]);if(ve)for(var o of ve(t))Oe.call(t,o)&&me(e,o,t[o]);return e},he=(e,t)=>Ne(e,Be(t));import{r as D,o as r,c as $,a as fe,b as k,d as ce,e as c,F as w,f as M,g as h,w as y,h as R,t as f,i as b,j as i,k as m,u as H,l as P,m as l,p as E,n as O,q as qe,s as C,v as F,y as T,x as te,z as S,A as ue,B as N,C as He,D as be,E as q,G as ie,H as Fe,I as oe,J as De,K as z,L as ze,M as Ue,N as Ve,O as je,R as Ge,P as Je,Q as Ke,S as We,T as Ze,U as Xe,V as Ye,W as Qe,X as et,Y as tt,Z as ot,_ as st,$ as at}from"./vendor.3d735b57.js";const nt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};nt();var g=(e,t)=>{const o=e.__vccOpts||e;for(const[s,a]of t)o[s]=a;return o};const rt={};function lt(e,t){const o=D("router-view");return r(),$(o)}var ct=g(rt,[["render",lt]]),ee=(...e)=>t=>e.reduce((o,s)=>s(o),t);const Z={VITE_MAPBOX_ACCESS_TOKEN:"pk.eyJ1Ijoiam9obnNvanIiLCJhIjoiY2t5MzdwMmFmMHNiNDJvbzBrZTlpaWRndiJ9.QL88g10hiKLOLz6ohLcuow",VITE_BASE_DIR:"/camino-trekker/",VITE_API_HOST:"https://cla-camino-dev.oit.umn.edu",BASE_URL:"/camino-trekker/",MODE:"production",DEV:!1,PROD:!0};var B={apiBaseUrl:Z.VITE_API_HOST,imageStorageBase:`${Z.VITE_API_HOST}/storage`,baseDir:Z.VITE_BASE_DIR,mapBox:{accessToken:Z.VITE_MAPBOX_ACCESS_TOKEN}};const X=[],_e={get(e){return fe(`${B.apiBaseUrl}/api/tour/${e}`).then(ee(...X)).then(t=>t.data).catch(console.error)},applyMiddlewares(e){return ee(...X)(e)},list(){return fe(`${B.apiBaseUrl}/api/tours`).then(ee(...X)).then(e=>e.data).catch(console.error)},use(e){X.push(e)}};function ut([e,t],o){const a=JSON.stringify(o).replace(new RegExp(`"${e}":`,"g"),`"${t}":`);return JSON.parse(a)}function it(e){const t=ut(["English","en"],e.data);return he(ge({},e),{data:t})}_e.use(it);const _t={class:"home-page container"},pt=i("h1",null,"Camino",-1),dt={key:0},vt={setup(e){const t=k([]);return ce(async()=>{t.value=await _e.list()}),(o,s)=>{const a=D("router-link");return r(),c("div",_t,[pt,t.value.length?(r(),c("ul",dt,[(r(!0),c(w,null,M(t.value,n=>(r(),c("li",{key:n.id},[h(a,{to:`/tours/${n.id}/stops/0`},{default:y(()=>[R(f(n.title),1)]),_:2},1032,["to"])]))),128))])):b("",!0)])}}};var mt=e=>e.charAt(0).toUpperCase()+e.slice(1);const gt=e=>e.type==="navigation",ht=e=>e.stop_content.stages.filter(gt),ft=e=>e.flatMap(t=>t.route);var yt=e=>e.stops.map(o=>{const s=ht(o);return ft(s)}),St=e=>{const t=e.start_location,o=xe("type","navigation",e).map(s=>s.targetPoint);return[t,...o]};const Y=e=>(t,o)=>e(t,o),Q=e=>t=>t[e];var le=e=>{if(!Array.isArray(e))throw Error(`listOfLngLats is not an array ${JSON.stringify(e)}`);const t=e.map(Q("lng")).reduce(Y(Math.min),1/0),o=e.map(Q("lat")).reduce(Y(Math.min),1/0),s=e.map(Q("lng")).reduce(Y(Math.max),-1/0),a=e.map(Q("lat")).reduce(Y(Math.max),-1/0);return[[t,o],[s,a]]},$t=(e,t,o)=>o.stop_content.stages.filter(s=>s[e]===t),xe=(e,t,o)=>o.stops.flatMap(s=>$t(e,t,s)),bt=e=>{const o=xe("type","navigation",e).flatMap(s=>s.route);return[e.start_location,...o]};const U=()=>{const e=H();return{tour:m(()=>e.state.tour)}},V=()=>{const e=H();return{stopIndex:m(()=>e.getters.stopIndex)}},j=()=>{const e=H();return{locale:m(()=>e.state.locale),setLocale:t=>e.dispatch("setLocale",t)}},xt=()=>({accessToken:m(()=>B.mapBox.accessToken)}),kt=()=>{const{tour:e}=U();return{tourLocales:m(()=>e.value.tour_content.languages)}};var It="/camino-trekker/assets/umn-logo.b8420373.svg";const Tt=e=>(E("data-v-f4c1c422"),e=e(),O(),e),Lt={class:"app-header container"},wt=["src"],Mt=Tt(()=>i("h1",null,"Camino",-1)),Rt={setup(e){return(t,o)=>(r(),c("header",Lt,[P(t.$slots,"default",{},()=>[i("img",{src:l(It),alt:"University of Minnesota"},null,8,wt),Mt],!0)]))}};var At=g(Rt,[["__scopeId","data-v-f4c1c422"]]);const Ct=e=>(E("data-v-2271b65e"),e=e(),O(),e),Pt={class:"progress-indicator"},Nt=Ct(()=>i("span",{class:"item__dot material-icons"},"circle",-1)),Bt={class:"item__index"},Et={props:{total:{type:Number,required:!0},active:{type:Number,required:!0}},setup(e){const t=e,o=m(()=>qe(t.total)),s=a=>a===t.active;return(a,n)=>(r(),c("ol",Pt,[(r(!0),c(w,null,M(l(o),(u,p)=>(r(),c("li",{key:p,class:C(["item",{"item--is-active":s(p)}])},[Nt,i("span",Bt,f(p===0?"Start":p+1),1)],2))),128))]))}};var Ot=g(Et,[["__scopeId","data-v-2271b65e"]]);const ke=e=>(E("data-v-b6b0298c"),e=e(),O(),e),qt={class:"sheet__inner"},Ht={class:"sheet__header"},Ft={class:"sheet__title"},Dt=ke(()=>i("span",{class:"material-icons"},"close",-1)),zt=ke(()=>i("span",{class:"sr-only"},"Close",-1)),Ut=[Dt,zt],Vt={class:"sheet__body"},jt=R("Sheet Contents"),Gt={props:{title:{type:String,default:""},isOpen:{type:Boolean,default:!0}},emits:["close"],setup(e){return(t,o)=>(r(),c("aside",{class:C(["sheet",{"sheet--is-open":e.isOpen}])},[i("div",qt,[i("header",Ht,[i("h2",Ft,f(e.title),1),i("button",{class:"sheet__close-button",onClick:o[0]||(o[0]=s=>t.$emit("close"))},Ut)]),i("div",Vt,[P(t.$slots,"default",{},()=>[jt],!0)])])],2))}};var pe=g(Gt,[["__scopeId","data-v-b6b0298c"]]);const Jt={props:{center:F({lng:T().isRequired,lat:T().isRequired}).isRequired,zoom:T().isRequired,bounds:te(te(T())),mapStyle:S().def("streets"),accessToken:S().isRequired},setup(e){const t=e,o=k(null),s=k(null),{center:a,zoom:n,bounds:u,mapStyle:p}=ue(t),v={streets:"mapbox://styles/mapbox/streets-v11",outdoors:"mapbox://styles/mapbox/outdoors-v11",light:"mapbox://styles/mapbox/light-v10",dark:"mapbox://styles/mapbox/dark-v10",satellite:"mapbox://styles/mapbox/satellite-streets-v11","navigation-day":"mapbox://styles/mapbox/navigation-day-v1","navigation-night":"mapbox://styles/mapbox/navigation-night-v1"},_=x=>x==="satellite"?18:22;function d(){s.value=new q.exports.Map({container:o.value,style:v[t.mapStyle],center:[a.value.lng,a.value.lat],zoom:n.value,accessToken:t.accessToken,maxZoom:_(t.mapStyle)}),s.value.addControl(new q.exports.FullscreenControl).addControl(new q.exports.GeolocateControl).addControl(new q.exports.ScaleControl({unit:"imperial"})),t.bounds&&s.value.fitBounds(u.value,{padding:64})}return N(p,()=>{const x=p.value;s.value.setStyle(v[x]),s.value.setMaxZoom(_(x))}),N(u,()=>{s.value.fitBounds(u.value,{padding:64})}),ce(()=>{d()}),He(()=>{}),be("map",s),(x,de)=>(r(),c("div",{ref_key:"mapContainerRef",ref:o,class:"map-container"},[P(x.$slots,"default",{},void 0,!0)],512))}};var Kt=g(Jt,[["__scopeId","data-v-5a110396"]]);const Wt=({lng:e,lat:t})=>[e,t],Zt=e=>({type:"Feature",properties:{},geometry:{type:"LineString",coordinates:e.map(Wt)}}),Xt={props:{positions:te(F({lng:T().isRequired,lat:T().isRequired})),id:S().isRequired,color:S()},setup(e){const t=e,o=ie("map",null),{color:s}=ue(t);function a({id:n,positions:u,color:p}){const v=o.value;if(!!v){if(!n)throw Error(`addDataLayer is missing id '${n}'`);if(!Array.isArray(u))throw Error(`addDataLayer is missing positions '${u}'`);v.getLayer(n)&&v.removeLayer(n),v.getSource(n)&&v.removeSource(n),o.value.addSource(n,{type:"geojson",data:Zt(u)}).addLayer({id:n,source:n,type:"line",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":p||"#0472f8","line-width":6}})}}return N(o,()=>{!o.value||(o.value.on("load",()=>a(t)),o.value.on("style.load",()=>a(t)))}),N(s,()=>{const n=()=>o.value.setPaintProperty(t.id,"line-color",s.value);if(o.value.isStyleLoaded())return n();o.value.on("style.load",n)}),(n,u)=>P(n.$slots,"default")}};var Yt=(e,t)=>{const o=k(null);return N([e,t],()=>{const s=l(e);if(!s)return;const a=l(o);a&&a.remove(),o.value=new q.exports.Marker({color:t.color}).setLngLat([t.lng,t.lat]).addTo(s)}),{marker:o}};const Qt={props:{lng:T().isRequired,lat:T().isRequired,color:S()},setup(e){const t=e,o=ie("map"),{marker:s}=Yt(o,t);return be("marker",s),(a,n)=>P(a.$slots,"default")}};const eo={setup(e){const t=ie("marker"),o=k(null);return N([t,o],()=>{if(!t.value||!o.value)return;const s=new q.exports.Popup().setDOMContent(o.value);t.value.setPopup(s)}),(s,a)=>(r(),c("div",{ref_key:"popupRef",ref:o,class:"map-popup"},[P(s.$slots,"default")],512))}};const to={key:0,class:"material-icons"},oo=R("Button Text"),so={props:{icon:{type:String,default:null},variant:{type:String,validator(e){return["primary","secondary","inverse"].includes(e)},default:"secondary"},iconPosition:{type:String,default:"before"}},setup(e){const t=e,o=m(()=>({"button--primary":t.variant==="primary","button--icon-position-end":t.iconPosition==="end","button--inverse":t.variant==="inverse"}));return(s,a)=>(r(),c("button",{class:C(["button",l(o)])},[e.icon?(r(),c("span",to,f(e.icon),1)):b("",!0),P(s.$slots,"default",{},()=>[oo],!0)],2))}};var G=g(so,[["__scopeId","data-v-2df047d2"]]);function ye(e=0,t,o){const s=e>0?t[e-1]:null,a=o[e],n=t[e];return[s,...a,n].filter(Boolean)}function Se(e){const[[t,o],[s,a]]=e;return{lng:(t+s)/2,lat:(o+a)/2}}const Ie=e=>(E("data-v-50097fb4"),e=e(),O(),e),ao={key:0,class:"button-bar"},no={class:"map-popup__stop-number-container"},ro={class:"map-popup__stop-number"},lo={class:"map-popup__stop-title"},co={class:"map-popup__link-container"},uo=Ie(()=>i("span",{class:"material-icons"},"arrow_forward",-1)),io=Ie(()=>i("span",{class:"sr-only"},"Go to Stop",-1)),_o={props:{type:Fe(),stopIndex:T().isRequired,initialMapStyle:S().def("light"),showMapStyleControl:oe().def(!0)},setup(e){const t=e;function o({tour:L,locale:K}){return L.stops.map((W,I)=>({title:W.stop_content.title[K],href:`/tours/${W.tour_id}/stops/${I}`,number:I+1}))}function s(L){return L<u.value?"#7EEAFC":L===u.value?"#0A84FF":"#999"}function a(L){se.value=L}const{tour:n}=U(),{stopIndex:u}=ue(t),{locale:p}=j(),{accessToken:v}=xt(),_=k(null),d=k(null),x=k(10),de=["dark","satellite","streets","light"].sort(),se=k(t.initialMapStyle),Ae=m(()=>bt(n.value)),ae=m(()=>yt(n.value)),ne=m(()=>St(n.value)),Ce=m(()=>n.value.start_location),re=m(()=>o({tour:n.value,locale:p.value}));if(t.type==="tour"&&(_.value=le(Ae.value),d.value=Ce.value),t.type==="stop"){const L=ye(u.value,ne.value,ae.value);_.value=le(L),d.value=Se(_.value),x.value=16}return N(u,()=>{if(t.type!=="stop")return;const L=ye(u.value,ne.value,ae.value);_.value=le(L),d.value=Se(_.value)}),(L,K)=>{const W=D("router-link");return r(),c("div",{class:C(["tour-map",`tour-map--${e.initialMapStyle}`]),onPointerdown:K[0]||(K[0]=I=>I.stopPropagation())},[e.showMapStyleControl?(r(),c("div",ao,[(r(!0),c(w,null,M(l(de),I=>(r(),$(G,{key:I,class:C(["button-bar__button",{"button-bar__button--is-active":I===se.value}]),onClick:A=>a(I)},{default:y(()=>[R(f(l(mt)(I)),1)]),_:2},1032,["class","onClick"]))),128))])):b("",!0),d.value?(r(),$(Kt,{key:1,class:"map-sheet__map-container",center:d.value,zoom:x.value,bounds:_.value,mapStyle:se.value,accessToken:l(v)},{default:y(()=>[(r(!0),c(w,null,M(l(ae),(I,A)=>(r(),$(Xt,{id:`route-${A}`,key:A,positions:I,color:s(A)},null,8,["id","positions","color"]))),128)),(r(!0),c(w,null,M(l(ne),(I,A)=>(r(),$(Qt,{key:A,lng:I.lng,lat:I.lat,color:s(A)},{default:y(()=>[h(eo,null,{default:y(()=>[i("p",no,[i("span",ro,f(l(re)[A].number),1)]),i("h2",lo,f(l(re)[A].title),1),i("p",co,[h(W,{to:l(re)[A].href,class:"map-popup__link"},{default:y(()=>[uo,io]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1032,["lng","lat","color"]))),128))]),_:1},8,["center","zoom","bounds","mapStyle","accessToken"])):b("",!0)],34)}}};var Te=g(_o,[["__scopeId","data-v-50097fb4"]]);const po={props:{isOpen:{type:Boolean,default:!1}},emits:["close"],setup(e){const{stopIndex:t}=V();return(o,s)=>(r(),$(pe,{class:"map-sheet",title:"Map","is-open":e.isOpen,onClose:s[0]||(s[0]=a=>o.$emit("close"))},{default:y(()=>[h(Te,{initialMapStyle:"streets",type:"tour",stopIndex:l(t)},null,8,["stopIndex"])]),_:1},8,["is-open"]))}};const vo={class:"menu-sheet__list"},mo={class:"menu-sheet__list-item"},go={key:0,class:"material-icons"},ho={props:{isOpen:{type:Boolean,default:!1}},emits:["close"],setup(e){const t=[{icon:"home",text:"Home",href:"/"},{icon:"settings",text:"Settings",href:"/settings"},{icon:"help_outline",text:"Help",href:"/help"}];return(o,s)=>{const a=D("router-link");return r(),$(pe,{class:"menu-sheet",title:"Menu","is-open":e.isOpen,onClose:s[0]||(s[0]=n=>o.$emit("close"))},{default:y(()=>[i("ol",vo,[(r(),c(w,null,M(t,(n,u)=>h(a,{key:u,to:n.href},{default:y(()=>[i("li",mo,[n.icon?(r(),c("span",go,f(n.icon),1)):b("",!0),i("span",null,f(n.text),1)])]),_:2},1032,["to"])),64))])]),_:1},8,["is-open"])}}};var fo=g(ho,[["__scopeId","data-v-4f35d8b7"]]);const yo={class:"stoplist"},So={class:"stoplist__number"},$o={emits:["close"],setup(e){const t=H(),{stopIndex:o}=V(),{locale:s}=j(),a=m(()=>t.getters.allStops),n=u=>u.stop_content.title[s.value];return(u,p)=>{const v=D("router-link");return r(),$(pe,{class:"stoplist-sheet",title:"Tour Stops",onClose:p[1]||(p[1]=_=>u.$emit("close"))},{default:y(()=>[i("ol",yo,[(r(!0),c(w,null,M(l(a),(_,d)=>(r(),$(v,{key:_.id,to:`/tours/${_.tour_id}/stops/${d}`,onClick:p[0]||(p[0]=x=>u.$emit("close"))},{default:y(()=>[i("li",{class:C(["stoplist__item",{"stoplist__item--is-active":d===l(o)}])},[i("div",So,f(d+1),1),R(" "+f(n(_)),1)],2)]),_:2},1032,["to"]))),128))])]),_:1})}}};var bo=g($o,[["__scopeId","data-v-d9903b78"]]);const J=e=>(E("data-v-bc23e1e4"),e=e(),O(),e),xo={class:"bottom-nav"},ko={class:"bottom-nav__navbar"},Io=J(()=>i("span",{class:"material-icons"},"menu",-1)),To=J(()=>i("span",{class:"sr-only"},"Menu",-1)),Lo=[Io,To],wo=J(()=>i("span",{class:"sr-only"},"Open Tour Stops",-1)),Mo=J(()=>i("span",{class:"material-icons"},"map",-1)),Ro=J(()=>i("span",{class:"sr-only"},"Map",-1)),Ao=[Mo,Ro],Co={setup(e){const t={MENU:"MENU",STOPLIST:"STOPLIST",MAP:"MAP"},o=k(null),s=H(),a=m(()=>s.getters.stopIndex),n=m(()=>s.getters.totalStops),u=_=>{o.value=t[_]},p=()=>o.value=null,v=_=>o.value===_;return(_,d)=>(r(),c("div",xo,[i("nav",ko,[i("button",{class:"bottom-nav__button",onClick:d[0]||(d[0]=x=>u(t.MENU))},Lo),i("button",{class:"bottom-nav__progress-button",onClick:d[1]||(d[1]=x=>u(t.STOPLIST))},[h(Ot,{total:l(n),active:l(a)},null,8,["total","active"]),wo]),i("button",{class:"bottom-nav__button",onClick:d[2]||(d[2]=x=>u(t.MAP))},Ao)]),i("div",null,[h(fo,{"is-open":v(t.MENU),onClose:d[3]||(d[3]=x=>p())},null,8,["is-open"]),h(bo,{"is-open":v(t.STOPLIST),onClose:d[4]||(d[4]=x=>p())},null,8,["is-open"]),h(po,{"is-open":v(t.MAP),onClose:d[5]||(d[5]=x=>p())},null,8,["is-open"])])]))}};var Po=g(Co,[["__scopeId","data-v-bc23e1e4"]]);const No={class:"stop-header__content"},Bo={class:"stop-header__number"},Eo={class:"stop-header__title h2"},Oo={key:0,class:"stop-header__subtitle"},qo={class:"stop-header__img-container"},Ho=["src","alt"],Fo={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},stopNumber:T().isRequired,imageSrc:S(),imageAlt:S()},setup(e){return De(t=>({"22d1dc81":e.stopNumber})),(t,o)=>(r(),c("header",{class:C(["stop-header",{"stop-header--no-img":!e.imageSrc}])},[i("div",No,[i("p",Bo,f(e.stopNumber===1?"Start":e.stopNumber),1),i("h2",Eo,f(e.title),1),e.subtitle?(r(),c("p",Oo,f(e.subtitle),1)):b("",!0),P(t.$slots,"default",{},void 0,!0)]),i("div",qo,[e.imageSrc?(r(),c("img",{key:0,class:"stop-header__img",src:e.imageSrc,alt:e.imageAlt},null,8,Ho)):b("",!0)])],2))}};var Le=g(Fo,[["__scopeId","data-v-3128c2f3"]]);const Do=e=>(E("data-v-8ab40eb4"),e=e(),O(),e),zo={class:"tour-stop"},Uo=Do(()=>i("div",{class:"tour-stop__stages container"},[i("div",{class:"skeleton-block skeleton--small"}),i("div",{class:"skeleton-block skeleton-block--medium"}),i("div",{class:"skeleton-block skeleton-block--large"})],-1)),Vo={props:{tour:z().isRequired,locale:S().isRequired,stopIndex:T().def(0)},setup(e){const t=e,o=m(()=>t.tour.stops[t.stopIndex]),s=m(()=>{var u,p;const n=(p=(u=o.value)==null?void 0:u.stop_content)==null?void 0:p.header_image;return n?`${B.apiBaseUrl}${n.src}`:null}),a=m(()=>{var u,p;const n=(p=(u=o.value)==null?void 0:u.stop_content)==null?void 0:p.header_image;return n?n.alt:null});return(n,u)=>(r(),c("div",zo,[h(Le,{title:e.stopIndex===0?e.tour.title:l(o).stop_content.title[e.locale],subtitle:`${e.tour.geocoded.city}, ${e.tour.geocoded.state}`,stopNumber:e.stopIndex+1,imageSrc:l(s),imageAlt:l(a)},null,8,["title","subtitle","stopNumber","imageSrc","imageAlt"]),Uo]))}};var jo=g(Vo,[["__scopeId","data-v-8ab40eb4"]]);const Go=["src","alt"],Jo={props:{email:{type:String,default:null},name:{type:String,required:!0},size:{type:Number,default:200},variant:{type:String,default:"medium"}},setup(e){const t=e,o=a=>ze(a.trim().toLowerCase()),s=m(()=>o(t.email));return(a,n)=>(r(),c("div",{class:C(["gravatar",{"gravatar--small":e.variant==="small","gravatar--large":e.variant==="large"}])},[R(f(e.name.charAt(0))+" ",1),e.email?(r(),c("img",{key:0,src:`https://www.gravatar.com/avatar/${l(s)}?s=${e.size}`,alt:e.name},null,8,Go)):b("",!0)],2))}};var Ko=g(Jo,[["__scopeId","data-v-34c63ab6"]]);const Wo={class:"tour-author"},Zo={class:"tour-author__body"},Xo={class:"tour-author__name"},Yo={class:"tour-author__title"},Qo={props:{author:F({name:S().isRequired,email:S().isRequired,title:S().def("Tour Guide"),institution:S()})},setup(e){return(t,o)=>(r(),c("div",Wo,[h(Ko,{class:"tour-author__img",email:e.author.email,name:e.author.name},null,8,["email","name"]),i("div",Zo,[i("p",Xo,f(e.author.name),1),i("p",Yo,f(e.author.title),1)])]))}};var es=g(Qo,[["__scopeId","data-v-486aa66a"]]);const ts=e=>(E("data-v-1a603bbc"),e=e(),O(),e),os={class:"language-stage"},ss=ts(()=>i("h3",null,"Language",-1)),as=["value","checked","onChange"],ns=R("Save"),rs={props:{locale:{type:String,required:!0},locales:te(S())},emits:["setLocale"],setup(e,{emit:t}){const s=k(e.locale),a=u=>{s.value=u},n=u=>t("setLocale",u);return(u,p)=>(r(),c("div",os,[e.locales.length>1?(r(),c("form",{key:0,class:"lanugage-stage__form",onSubmit:p[0]||(p[0]=Ue(v=>n(s.value),["prevent"]))},[ss,(r(!0),c(w,null,M(e.locales,(v,_)=>(r(),c("label",{key:_,class:"input-group"},[i("input",{name:"locale",type:"radio",value:v,checked:s.value===v,onChange:d=>a(v)},null,40,as),R(" "+f(e.locale),1)]))),128)),h(G,{class:"save-button",type:"submit",variant:"primary"},{default:y(()=>[ns]),_:1})],32)):b("",!0)]))}};var ls=g(rs,[["__scopeId","data-v-1a603bbc"]]);const cs={setup(e){const{locale:t,setLocale:o}=j(),{tourLocales:s}=kt();return(a,n)=>(r(),$(ls,{locale:l(t),locales:l(s),onSetLocale:l(o)},null,8,["locale","locales","onSetLocale"]))}};var us=g(cs,[["__scopeId","data-v-2fbf05b7"]]);const is=["innerHTML"],we={props:{content:S().def("")},setup(e){const t=e,o=ee(je.parse,Ve.sanitize),s=m(()=>o(t.content));return(a,n)=>(r(),c("div",{class:"markdown",innerHTML:l(s)},null,8,is))}};const _s={class:"guide-stage"},ps={props:{stage:F().loose,locale:{type:String,default:"en"}},setup(e){const t=e,o=m(()=>t.stage.text[t.locale]);return(s,a)=>(r(),c("div",_s,[h(we,{content:l(o)},null,8,["content"])]))}};var ds=g(ps,[["__scopeId","data-v-4a6966e8"]]);const vs={class:"separator-stage"},ms={props:{stage:F({text:z().def({en:""})}).loose,locale:S().isRequired},setup(e){const t=e,o=m(()=>t.stage.text[t.locale]);return(s,a)=>(r(),c("h3",vs,f(l(o)),1))}};var gs=g(ms,[["__scopeId","data-v-10a6ebf9"]]);const hs={class:"navigation-stage"},fs=R(" Show Map "),ys={key:1,class:"navigation-stage__tour-map-wrapper"},Ss={props:{stage:F().loose,locale:S().isRequired,hasShowMapToggle:oe().def(!0)},setup(e){const t=e,o=m(()=>t.stage.text[t.locale]),{stopIndex:s}=V(),a=k(!t.hasShowMapToggle),n=()=>a.value=!a.value;return(u,p)=>(r(),c("div",hs,[h(we,{content:l(o)},null,8,["content"]),e.hasShowMapToggle?(r(),$(G,{key:0,icon:"map",onClick:n},{default:y(()=>[fs]),_:1})):b("",!0),a.value?(r(),c("div",ys,[h(Te,{initialMapStyle:"satellite",type:"stop",stopIndex:l(s)},null,8,["stopIndex"])])):b("",!0)]))}};const $s={class:"gallery-stage"},bs={class:"gallery-stage__thumbnails"},xs=["onClick"],ks={class:"gallery-stage__figure-image-wrap"},Is=["src","alt"],Ts={key:0,class:"gallery-stage__figure-figcaption"},Ls={props:{stage:{type:Object,required:!0},locale:{type:String,default:"en"}},setup(e){const t=e,o=k(0),s=m(()=>t.stage.images.map(p=>({src:`${B.imageStorageBase}/${p.src}`,alt:p.text[t.locale],title:p.text[t.locale]}))),a=k(!1),n=p=>{o.value=p,a.value=!0},u=()=>{a.value=!1};return(p,v)=>(r(),c("div",$s,[i("div",bs,[(r(!0),c(w,null,M(l(s),(_,d)=>(r(),c("figure",{key:d,class:"gallery__figure",onClick:x=>n(d)},[i("div",ks,[i("img",{src:_.src,alt:_.alt,loading:"lazy"},null,8,Is)]),_.title?(r(),c("figcaption",Ts,f(_.title),1)):b("",!0)],8,xs))),128)),h(l(Ge),{scrollDisabled:"",escDisabled:"",moveDisabled:"",loop:"",visible:a.value,imgs:l(s),index:o.value,teleport:"body",onHide:u},null,8,["visible","imgs","index"])])]))}};var ws=g(Ls,[["__scopeId","data-v-6dc438c4"]]);const Ms={class:"ar-stage"},Rs=R("Look Around"),As=["src"],Cs={props:{stage:z().isRequired,simulateLocation:oe().def(!1),locale:S().def("en")},setup(e){const t=e,{tour:o}=U(),{stopIndex:s}=V(),a=k(!1);function n(){console.log("toggleShowAr"),a.value=!a.value}const u=m(()=>`${B.apiBaseUrl}/ar/${o.value.id}/${s.value}/English/${t.simulateLocation}`);return(p,v)=>(r(),c("div",Ms,[h(G,{icon:"travel_explore",onClick:n},{default:y(()=>[Rs]),_:1}),a.value?(r(),c("iframe",{key:0,class:"ar-iframe",src:l(u),frameborder:"0",width:"100%",height:"100%"},`
      Loading AR...
    `,8,As)):b("",!0)]))}};const Ps={key:1,class:"stage-unknown"},Ns={props:{stage:{type:Object,required:!0}},setup(e){const t=e,o={language:us,guide:ds,separator:gs,navigation:Ss,gallery:ws,ar:Cs},s=m(()=>o[t.stage.type]);return(a,n)=>l(s)?(r(),$(Je(l(s)),{key:0,stage:e.stage},null,8,["stage"])):(r(),c("div",Ps,[i("h3",null,f(e.stage.type),1),i("pre",null,f(e.stage),1)]))}};var Bs=g(Ns,[["__scopeId","data-v-97a59022"]]);const Es={class:"tour-stop"},Os={class:"tour-stop__stages container"},qs={key:0},Hs=R(" Continue "),Fs={props:{stopIndex:T().def(0),stop:z().isRequired,isLastStop:oe().def(!1)},setup(e){const t=e,{tour:o}=U(),{locale:s}=j(),a=m(()=>t.stopIndex===0),n=m(()=>{var v,_;return(_=(v=t.stop)==null?void 0:v.stop_content)==null?void 0:_.stages})||[],u=m(()=>{var _,d;const v=(d=(_=t.stop)==null?void 0:_.stop_content)==null?void 0:d.header_image;return v?`${B.apiBaseUrl}${v.src}`:null}),p=m(()=>{var _,d;const v=(d=(_=t.stop)==null?void 0:_.stop_content)==null?void 0:d.header_image;return v?v.alt:null});return(v,_)=>(r(),c("div",Es,[h(Le,{title:l(a)?l(o).title:e.stop.stop_content.title[l(s)],subtitle:`${l(o).geocoded.city}, ${l(o).geocoded.state}`,stopNumber:e.stopIndex+1,imageSrc:l(u),imageAlt:l(p)},{default:y(()=>[l(a)&&l(o).author?(r(),$(es,{key:0,author:l(o).author},null,8,["author"])):b("",!0)]),_:1},8,["title","subtitle","stopNumber","imageSrc","imageAlt"]),i("div",Os,[l(a)?(r(),c("h2",qs,"Start")):b("",!0),(r(!0),c(w,null,M(l(n),d=>(r(),c("section",{key:`${e.stop.id}-${d.id}`},[h(Bs,{stage:d,locale:l(s)},null,8,["stage","locale"])]))),128)),e.isLastStop?b("",!0):(r(),$(G,{key:1,icon:"arrow_forward",iconPosition:"end",variant:"primary",onClick:_[0]||(_[0]=d=>v.$router.push(`/tours/${l(o).id}/stops/${e.stopIndex+1}`))},{default:y(()=>[Hs]),_:1}))])]))}};var Ds=g(Fs,[["__scopeId","data-v-5683acb7"]]);const zs={props:{tour:z().isRequired,stopIndex:T().def(0),locale:S().isRequired},setup(e){const t=e,o=k(null),s=Ke();function a(u){o.value=u}function n(u){Ze(()=>{s.push(`/tours/${t.tour.id}/stops/${u.activeIndex}`)})}return N(()=>t.stopIndex,()=>{!o.value||o.value.slideTo(t.stopIndex,0)}),(u,p)=>(r(),$(l(We),{"slides-per-view":1,"space-between":16,initialSlide:e.stopIndex,onSwiper:a,onSlideChangeTransitionEnd:n},{default:y(()=>[(r(!0),c(w,null,M(e.tour.stops,(v,_)=>(r(),$(l(Xe),{key:_,autoHeight:!0},{default:y(()=>[e.stopIndex===_?(r(),$(Ds,{key:0,stop:v,stopIndex:_},null,8,["stop","stopIndex"])):(r(),$(jo,{key:1,tour:e.tour,stopIndex:_,locale:e.locale},null,8,["tour","stopIndex","locale"]))]),_:2},1024))),128))]),_:1},8,["initialSlide"]))}};const Us={setup(e){const{directions:t}=Ye(window,{onScroll:s,throttle:300}),o=k(!1);function s(){t.bottom&&(o.value=!0),t.top&&(o.value=!1)}return(a,n)=>(r(),c("div",{class:C(["tuck-on-scroll",{"tuck-on-scroll--is-tucked":o.value}])},[P(a.$slots,"default",{},void 0,!0)],2))}};var Vs=g(Us,[["__scopeId","data-v-dc8fad7a"]]);const js={class:"tour-page"},Gs={key:0,class:"loading"},Js={key:1},Ks={setup(e){const t=H(),{stopIndex:o}=V(),{tour:s}=U(),{locale:a}=j(),n=m(()=>t.state.isLoading);return ce(()=>{t.dispatch("fetchTour",t.state.route.params.tourId)}),(u,p)=>(r(),c("div",js,[h(Vs,null,{default:y(()=>[h(At,{class:"tour-page__app-header"})]),_:1}),l(n)?(r(),c("div",Gs,"Loading...")):b("",!0),l(n)?b("",!0):(r(),c("div",Js,[h(zs,{tour:l(s),stopIndex:l(o),locale:l(a)},null,8,["tour","stopIndex","locale"]),h(Po)]))]))}};var Ws=g(Ks,[["__scopeId","data-v-83e80184"]]);const Zs={};function Xs(e,t){return r(),c("h1",null,"Settings Page")}var Ys=g(Zs,[["render",Xs]]);const Qs={};function ea(e,t){return r(),c("h1",null,"Help Page")}var ta=g(Qs,[["render",ea]]);const oa=[{path:"/",component:vt},{path:"/tours/:tourId/stops/:stopIndex",component:Ws},{path:"/settings",component:Ys},{path:"/help",component:ta}],Me=Qe({history:et(B.baseDir),routes:oa,scrollBehavior(e,t,o){return o||{top:0}}}),$e=e=>Number.parseInt(e,10),sa={tour:null,isLoading:!0,locale:"en",errors:[]},aa={allStops(e){const{tour:t}=e;return t?t.stops:[]},totalStops(e){return e.tour?e.tour.stops.length:0},stopIndex(e){return $e(e.route.params.stopIndex||0)},tourId(e){return $e(e.route.params.tourId)},isFirstStop(e,t){return t.stopIndex===0},isLastStop(e,t){return t.stopIndex===t.totalStops-1},currentStop(e,t){var o;return((o=t.allStops)==null?void 0:o[t.stopIndex])||null},nextStop(e,t){return t.isLastStop?null:e.getters.allStops[t.stopIndex+1]},previousStop(e,t){return t.isFirstStop?null:e.getters.allStops[t.stopIndex-1]}},na={fetchTourStarted(e){e.isLoading=!0},fetchTourSucceeded(e,t){e.isLoading=!1,e.tour=t},fetchTourFailed(e,t){e.isLoading=!1,e.errors.push(t)},setLocale(e,t){e.locale=t}},ra={fetchTour({commit:e},t){e("fetchTourStarted"),_e.get(t).then(o=>{e("fetchTourSucceeded",o)}).catch(o=>{console.error(o),e("fetchTourFailed",o)})},setLocale({commit:e},t){e("setLocale",t)}},la={state:()=>sa,getters:aa,mutations:na,actions:ra,plugins:[tt()]},Re=ot(la);st(Re,Me);const ca=at(ct);ca.use(Me).use(Re).mount("#app");
//# sourceMappingURL=index.1f2393bc.js.map
