!function(){var e=document.createElement("style");e.innerHTML=".box[data-v-10e1533e]{display:flex;padding:12px;width:100%;height:calc(100vh - 280px);flex-direction:column;background-color:#fff}.box img[data-v-10e1533e]{min-height:0;flex:1}.box .ant-form[data-v-10e1533e]{flex:2}\n",document.head.appendChild(e),System.register(["./index-legacy.d5824d17.js","./vendor-legacy.37c7624c.js"],(function(e){"use strict";var n,o,t,i,a,s,r,d,g,w,l,u,c,p,m,b,f,v,h,x,_,k;return{setters:[function(e){n=e._,o=e.a,t=e.e,i=e.f},function(e){a=e.d,s=e.r,r=e.a2,d=e.b,g=e.c,w=e.B,l=e.z,u=e.D,c=e.b9,p=e.h,m=e.t,b=e.F,f=e.f,v=e.y,h=e.ba,x=e.p,_=e.g,k=e.e}],execute:function(){const y={class:"box"},M=(e=>(x("data-v-10e1533e"),e=e(),_(),e))((()=>k("img",{src:"/vite-vue3-admin/assets/analysis.04ad2692.svg"},null,-1)));e("default",n(a({name:"DashboardWelcome",setup(e){var n;const a=null===(n=o().userInfo)||void 0===n?void 0:n.loginIp,{online:x}=t(),{battery:_,batteryStatus:k,calcDischargingTime:I}=i(),q=s(function(e="en"){const n=navigator.userAgent.toLowerCase(),o=e=>e.test(n),t=e=>{var o;return null===(o=n.match(e))||void 0===o?void 0:o.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},i=new Map([[o(/windows|win32|win64|wow32|wow64/g),"windows"],[o(/macintosh|macintel/g),"macos"],[o(/x11/g),"linux"],[o(/android|adr/g),"android"],[o(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",a=new Map([["windows",new Map([[o(/windows nt 5.0|windows 2000/g),"2000"],[o(/windows nt 5.1|windows xp/g),"xp"],[o(/windows nt 5.2|windows 2003/g),"2003"],[o(/windows nt 6.0|windows vista/g),"vista"],[o(/windows nt 6.1|windows 7/g),"7"],[o(/windows nt 6.2|windows 8/g),"8"],[o(/windows nt 6.3|windows 8.1/g),"8.1"],[o(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",t(/os x [\d._]+/g)],["android",t(/android [\d._]+/g)],["ios",t(/os [\d._]+/g)]]).get(i)||"unknow";let s="unknow";"windows"===i||"macos"===i||"linux"===i?s="desktop":("android"===i||"ios"===i||o(/mobile/g))&&(s="mobile");const[r="unknow",d="unknow"]=new Map([[o(/applewebkit/g),["webkit",new Map([[o(/safari/g),"safari"],[o(/chrome/g),"chrome"],[o(/opr/g),"opera"],[o(/edge/g),"edge"]]).get(!0)]],[o(/gecko/g)&&o(/firefox/g),["gecko","firefox"]],[o(/presto/g),["presto","opera"]],[o(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],g=new Map([["webkit",t(/applewebkit\/[\d._]+/g)],["gecko",t(/gecko\/[\d._]+/g)],["presto",t(/presto\/[\d._]+/g)],["trident",t(/trident\/[\d._]+/g)]]).get(r)||"unknow",w=new Map([["firefox",t(/firefox\/[\d._]+/g)],["opera",t(/opr\/[\d._]+/g)],["iexplore",t(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",t(/edge\/[\d._]+/g)],["safari",t(/version\/[\d._]+/g)],["chrome",t(/chrome\/[\d._]+/g)]]).get(d)||"unknow",[l="none",u="unknow"]=new Map([[o(/micromessenger/g),["wechat",t(/micromessenger\/[\d._]+/g)]],[o(/qqbrowser/g),["qq",t(/qqbrowser\/[\d._]+/g)]],[o(/ucbrowser/g),["uc",t(/ucbrowser\/[\d._]+/g)]],[o(/qihu 360se/g),["360","unknow"]],[o(/2345explorer/g),["2345",t(/2345explorer\/[\d._]+/g)]],[o(/metasr/g),["sougou","unknow"]],[o(/lbbrowser/g),["liebao","unknow"]],[o(/maxthon/g),["maxthon",t(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({"内核":r,"内核版本":g,"平台":s,"载体":d,"载体版本":w,"系统":i,"系统版本":a},"none"===l?{}:{"外壳":l,"外壳版本":u}),en:Object.assign({engine:r,engineVs:g,platform:s,supporter:d,supporterVs:w,system:i,systemVs:a},"none"===l?{}:{shell:l,shellVs:u})}[e]}("zh-cn"));return r((()=>{Object.assign(q.value,{"距离电池充满需要":Number.isFinite(_.value.chargingTime)&&0!=_.value.chargingTime?I.value:"未知","剩余可使用时间":Number.isFinite(_.value.dischargingTime)&&0!=_.value.dischargingTime?I.value:"未知","电池状态":k.value,"当前电量":_.value.level+"%"})})),(e,n)=>(d(),g("div",y,[M,w(u(c),{title:"系统信息",bordered:""},{default:l((()=>[w(u(c).Item,{key:"IP",label:"IP"},{default:l((()=>[p(m(u(a)),1)])),_:1}),(d(!0),g(b,null,f(q.value,((e,n)=>(d(),v(u(c).Item,{key:n,label:n},{default:l((()=>[p(m(e),1)])),_:2},1032,["label"])))),128)),w(u(c).Item,{label:"网络状态"},{default:l((()=>[w(u(h),{status:u(x)?"processing":"default",text:u(x)?"在线":"离线"},null,8,["status","text"])])),_:1})])),_:1})]))}}),[["__scopeId","data-v-10e1533e"]]))}}}))}();
