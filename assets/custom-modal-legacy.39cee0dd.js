!function(){var t=document.createElement("style");t.innerHTML=".custom-modal .ant-modal-wrap .ant-modal{position:absolute;min-width:400px;min-height:140px;padding-bottom:0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content{height:100%}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header{display:flex;justify-content:space-between}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate{display:flex}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.open{display:block;width:21px;height:19px;margin-left:5px;line-height:56px;cursor:pointer;background:url(~@/assets/images/tool.png) no-repeat;border:0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.open{position:absolute;top:10px;left:50%;margin-left:-10px;background-position:0 0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.open:hover{background-position:0 -29px}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.min{background-position:-29px 0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.min:hover{background-position:-29px -29px}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.max{background-position:-60px 0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.max:hover{background-position:-60px -29px}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.revert{display:none;background-position:-149px 0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.revert:hover{background-position:-149px -29px}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.close{background-position:-89px 0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header .ant-modal-operate button.close:hover{background-position:-89px -29px}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-body{overflow:auto}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeL,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeT,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeR,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeB,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLT,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeTR,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLB{position:absolute;overflow:hidden;background:#000;opacity:0;filter:alpha(opacity=0)}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeL,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeR{top:0;width:5px;height:100%;cursor:w-resize}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeR{right:0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeT,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeB{width:100%;height:5px;cursor:n-resize}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeT{top:0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeB{bottom:0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLT,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeTR,.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLB{width:8px;height:8px;background:#ff0}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLT{top:0;left:0;cursor:nw-resize}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeTR{top:0;right:0;cursor:ne-resize}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeLB{bottom:0;left:0;cursor:ne-resize}.custom-modal .ant-modal-wrap .ant-modal .ant-modal-content .resizeBR{position:absolute;right:0;bottom:0;width:14px;height:14px;overflow:hidden;cursor:nw-resize}\n",document.head.appendChild(t),System.register(["./vendor-legacy.37c7624c.js","./index-legacy.637f3556.js","./index-legacy.f25f109a3.js","./index-legacy.d5824d17.js"],(function(t){"use strict";var e,o,a,n,l,d,m,s,i,r,u,c,p,f,v,h,y,b,g,w,x,z,R,k,L,T,B,E,C,H,W;return{setters:[function(t){e=t.r,o=t.bb,a=t.a6,n=t.o,l=t.a3,d=t.aA,m=t.bc,s=t.d,i=t.bd,r=t.A,u=t.b,c=t.c,p=t.F,f=t.y,v=t.e,h=t.B,y=t.z,b=t.w,g=t.v,w=t.a5,x=t.T,z=t.t,R=t.x,k=t.N,L=t.be,T=t.h,B=t.k,E=t.D,C=t.bf,H=t.aF},function(){},function(){},function(t){W=t._}],execute:function(){function M(t,{emit:s}){const i=e(null),r=e(null),u=e(null),c=e(null),p=e(null),f=e(null),v=e(null),h=e(null),y=e(null),b=e(null),g=e(null),w=e(null),x=e(null),z=e(null),R=e(null),k=e(null),L={x:0,y:0},T=t=>Object.assign(L,{x:t.pageX,y:t.pageY});document.documentElement.addEventListener("click",T,!0);const B=o("fade"),E=o("zoom",{onAfterLeave:()=>s("update:visible",!1)});let C,H,W,M,_,j=0;function F(t,e,o,a,n,l){e.onmousedown=function(d){const m=d.clientX-e.offsetLeft,s=d.clientY-e.offsetTop,i=t.offsetTop,r=t.offsetLeft,c=t.offsetWidth,p=t.offsetHeight,f=d=>{const f=d.clientX-m,v=d.clientY-s,h=document.documentElement.clientWidth-t.offsetLeft-2,y=document.documentElement.clientHeight-t.offsetTop-2;let b=o?c-f:e.offsetWidth+f,g=a?p-v:e.offsetHeight+v;return o&&(t.style.left=r+f+"px"),a&&(t.style.top=i+v+"px"),b<400&&(b=400),b>h&&(b=h),n||(u.value.style.width=b+"px"),g<140&&(g=140),g>y&&(g=y),l||(u.value.style.height=g-j-_+"px"),(o&&400==b||a&&140==g)&&(document.onmousemove=null),(o||a)&&(document.onmousemove=null),!1},v=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v)};return document.addEventListener("mousemove",f),document.addEventListener("mouseup",v),!1}}const S=()=>{!function(t,e){let o=0;(e=e||t).style.cursor="move",e.onmousedown=function(e){o=e.clientX-t.offsetLeft;const a=e.clientY-t.offsetTop,n=e=>{let n=e.clientX-o,l=e.clientY-a;const d=document.documentElement.clientWidth-t.offsetWidth,m=document.documentElement.clientHeight-t.offsetHeight;return n<=0&&(n=0),l<=0&&(l=0),n>=d&&(n=d),l>=m&&(l=m),t.style.left=n+"px",t.style.top=l+"px",!1},l=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",l)};return document.addEventListener("mousemove",n),document.addEventListener("mouseup",l),!1},R.value.onclick=function(){const{left:e,top:o}=getComputedStyle(t),{width:a,height:n}=getComputedStyle(u.value);console.log({width:a,height:n,left:e,top:o}),C=a,H=n,W=e,M=o,t.style.top=t.style.left=0,t.style.width=document.documentElement.clientWidth-2+"px",t.style.height=document.documentElement.clientHeight-2+"px",u.value.style.width=t.style.width,u.value.style.height=parseFloat(t.style.height)-_-j+"px",this.style.display="none",k.value.style.display="block"},k.value.onclick=function(){u.value.style.height=H,u.value.style.width=C,t.style.width=t.style.height="unset",t.style.left=W,t.style.top=M,this.style.display="none",R.value.style.display="block"}}(i.value,p.value),F(i.value,b.value,!0,!0,!1,!1),F(i.value,g.value,!1,!0,!1,!1),F(i.value,w.value,!1,!1,!1,!1),F(i.value,x.value,!0,!1,!1,!1),F(i.value,f.value,!0,!1,!1,!0),F(i.value,v.value,!1,!0,!0,!1),F(i.value,h.value,!1,!1,!1,!0),F(i.value,y.value,!1,!1,!0,!1),i.value.style.left=(document.documentElement.clientWidth-i.value.offsetWidth)/2+"px",i.value.style.top=t.centered?(document.documentElement.clientHeight-i.value.offsetHeight)/2+"px":"100px";const{left:e,top:o}=i.value.getBoundingClientRect(),{x:a,y:n}=L;r.value.style.transformOrigin=`${a-e}px ${n-o}px`},X=a.exports.debounce(S,30);return n((()=>{l((()=>t.visible),(t=>{t&&(d((()=>{var t,e;_=(null===(t=p.value)||void 0===t?void 0:t.offsetHeight)||0,j=(null===(e=c.value)||void 0===e?void 0:e.offsetHeight)||0,S()})),window.addEventListener("resize",X))}),{immediate:!0})})),m((()=>{window.removeEventListener("resize",X),document.documentElement.removeEventListener("click",T,!0),X.cancel,console.log("弹窗销毁了")})),{dragRef:i,modalWrapRef:r,modalBody:u,modalFooter:c,titleRef:p,resizeLRef:f,resizeTRef:v,resizeRRef:h,resizeBRef:y,resizeLTRef:b,resizeTRRef:g,resizeBRRef:w,resizeLBRef:x,minRef:z,maxRef:R,revertRef:k,maskTransitionProps:B,dialogTransitionProps:E,closeModal:()=>{s("update:visible",!1)}}}const _=s({name:"ACustomModal",components:{Transition:i},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{type:[String],default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},emits:["update:visible"],setup:(t,e)=>M(t,e)}),j={ref:"modalRootRef",class:"ant-modal-root custom-modal"},F={class:"ant-modal-mask"},S={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},X={ref:"dragRef",class:"ant-modal"},Y={class:"ant-modal-content"},A={ref:"titleRef",class:"ant-modal-header"},O={class:"ant-modal-title"},P={class:"ant-modal-operate"},$={ref:"minRef",type:"button",class:"min",title:"最小化"},D={ref:"maxRef",type:"button",class:"max",title:"最大化"},I={ref:"revertRef",type:"button",class:"revert",title:"还原"},N={ref:"resizeLRef",class:"resizeL"},U={ref:"resizeTRef",class:"resizeT"},q={ref:"resizeRRef",class:"resizeR"},G={ref:"resizeBRef",class:"resizeB"},J={ref:"resizeLTRef",class:"resizeLT"},K={ref:"resizeTRRef",class:"resizeTR"},Q={ref:"resizeBRRef",class:"resizeBR"},V={ref:"resizeLBRef",class:"resizeLB"},Z={ref:"modalBody",class:"ant-modal-body"},tt=T(" ① 窗口可以拖动；"),et=v("br",null,null,-1),ot=T(" ② 窗口可以通过八个方向改变大小；"),at=v("br",null,null,-1),nt=T(" ③ 窗口可以最小化、最大化、还原、关闭；"),lt=v("br",null,null,-1),dt=T(" ④ 限制窗口最小宽度/高度。 "),mt={key:0,ref:"modalFooter",class:"ant-modal-footer"},st=T("取 消"),it=T("确 认");var rt=W(_,[["render",function(t,e,o,a,n,l){const d=r("a-button");return t.destroyOnClose&&!t.visible?(u(),c(p,{key:0},[],64)):(u(),f(L,{key:1,to:"body"},[v("div",j,[h(x,w({key:"mask"},t.maskTransitionProps),{default:y((()=>[b(v("div",F,null,512),[[g,t.visible]])])),_:1},16),h(x,w({key:"dialog"},t.dialogTransitionProps),{default:y((()=>[t.visible?(u(),c("div",S,[v("div",X,[v("div",Y,[v("div",A,[v("span",O,z(t.title),1),v("div",P,[v("button",$,null,512),v("button",D,null,512),v("button",I,null,512),v("button",{type:"button",class:"close",title:"关闭",onClick:e[0]||(e[0]=(...e)=>t.closeModal&&t.closeModal(...e))})])],512),v("div",N,null,512),v("div",U,null,512),v("div",q,null,512),v("div",G,null,512),v("div",J,null,512),v("div",K,null,512),v("div",Q,null,512),v("div",V,null,512),v("div",Z,[R(t.$slots,"default",{},(()=>[tt,et,ot,at,nt,lt,dt]))],512),null!=t.footer?(u(),c("div",mt,[R(t.$slots,"footer",{},(()=>[v("div",null,[h(d,{onClick:t.closeModal},{default:y((()=>[st])),_:1},8,["onClick"]),h(d,{type:"primary",loading:t.confirmLoading,onClick:t.closeModal},{default:y((()=>[it])),_:1},8,["loading","onClick"])])]))],512)):k("",!0)])],512)],512)):k("",!0)])),_:3},16)],512)]))}]]);const ut=T("弹出弹窗");t("default",s({setup(t){const e=B({visible:!1});return(t,o)=>{const a=r("a-button"),n=H;return u(),c("div",null,[h(E(C),{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),h(n,null,{default:y((()=>[h(a,{type:"primary",onClick:o[0]||(o[0]=t=>E(e).visible=!0)},{default:y((()=>[ut])),_:1})])),_:1}),h(E(rt),{visible:E(e).visible,"onUpdate:visible":o[1]||(o[1]=t=>E(e).visible=t)},null,8,["visible"])])}}}))}}}))}();
