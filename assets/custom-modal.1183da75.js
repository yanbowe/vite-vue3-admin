import{r as e,bb as t,a6 as l,o,a3 as s,aA as n,bc as i,d as a,bd as u,A as d,b as r,c,F as f,y as m,e as v,B as p,z as y,w as h,v as b,a5 as g,T as R,t as z,x as L,N as x,be as k,h as E,k as T,D as w,bf as B,aF as C}from"./vendor.5e124c15.js";/* empty css              *//* empty css               */import{_ as H}from"./index.7c366795.js";function W(a,{emit:u}){const d=e(null),r=e(null),c=e(null),f=e(null),m=e(null),v=e(null),p=e(null),y=e(null),h=e(null),b=e(null),g=e(null),R=e(null),z=e(null),L=e(null),x=e(null),k=e(null),E={x:0,y:0},T=e=>Object.assign(E,{x:e.pageX,y:e.pageY});document.documentElement.addEventListener("click",T,!0);const w=t("fade"),B=t("zoom",{onAfterLeave:()=>u("update:visible",!1)});let C,H,W,_,M,j=0;function F(e,t,l,o,s,n){t.onmousedown=function(i){const a=i.clientX-t.offsetLeft,u=i.clientY-t.offsetTop,d=e.offsetTop,r=e.offsetLeft,f=e.offsetWidth,m=e.offsetHeight,v=i=>{const v=i.clientX-a,p=i.clientY-u,y=document.documentElement.clientWidth-e.offsetLeft-2,h=document.documentElement.clientHeight-e.offsetTop-2;let b=l?f-v:t.offsetWidth+v,g=o?m-p:t.offsetHeight+p;return l&&(e.style.left=r+v+"px"),o&&(e.style.top=d+p+"px"),b<400&&(b=400),b>y&&(b=y),s||(c.value.style.width=b+"px"),g<140&&(g=140),g>h&&(g=h),n||(c.value.style.height=g-j-M+"px"),(l&&400==b||o&&140==g)&&(document.onmousemove=null),(l||o)&&(document.onmousemove=null),!1},p=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",p)};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",p),!1}}const X=()=>{!function(e,t){let l=0;(t=t||e).style.cursor="move",t.onmousedown=function(t){l=t.clientX-e.offsetLeft;const o=t.clientY-e.offsetTop,s=t=>{let s=t.clientX-l,n=t.clientY-o;const i=document.documentElement.clientWidth-e.offsetWidth,a=document.documentElement.clientHeight-e.offsetHeight;return s<=0&&(s=0),n<=0&&(n=0),s>=i&&(s=i),n>=a&&(n=a),e.style.left=s+"px",e.style.top=n+"px",!1},n=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",n)};return document.addEventListener("mousemove",s),document.addEventListener("mouseup",n),!1},x.value.onclick=function(){const{left:t,top:l}=getComputedStyle(e),{width:o,height:s}=getComputedStyle(c.value);console.log({width:o,height:s,left:t,top:l}),C=o,H=s,W=t,_=l,e.style.top=e.style.left=0,e.style.width=document.documentElement.clientWidth-2+"px",e.style.height=document.documentElement.clientHeight-2+"px",c.value.style.width=e.style.width,c.value.style.height=parseFloat(e.style.height)-M-j+"px",this.style.display="none",k.value.style.display="block"},k.value.onclick=function(){c.value.style.height=H,c.value.style.width=C,e.style.width=e.style.height="unset",e.style.left=W,e.style.top=_,this.style.display="none",x.value.style.display="block"}}(d.value,m.value),F(d.value,b.value,!0,!0,!1,!1),F(d.value,g.value,!1,!0,!1,!1),F(d.value,R.value,!1,!1,!1,!1),F(d.value,z.value,!0,!1,!1,!1),F(d.value,v.value,!0,!1,!1,!0),F(d.value,p.value,!1,!0,!0,!1),F(d.value,y.value,!1,!1,!1,!0),F(d.value,h.value,!1,!1,!0,!1),d.value.style.left=(document.documentElement.clientWidth-d.value.offsetWidth)/2+"px",d.value.style.top=a.centered?(document.documentElement.clientHeight-d.value.offsetHeight)/2+"px":"100px";const{left:e,top:t}=d.value.getBoundingClientRect(),{x:l,y:o}=E;r.value.style.transformOrigin=`${l-e}px ${o-t}px`},Y=l.exports.debounce(X,30);return o((()=>{s((()=>a.visible),(e=>{e&&(n((()=>{var e,t;M=(null==(e=m.value)?void 0:e.offsetHeight)||0,j=(null==(t=f.value)?void 0:t.offsetHeight)||0,X()})),window.addEventListener("resize",Y))}),{immediate:!0})})),i((()=>{window.removeEventListener("resize",Y),document.documentElement.removeEventListener("click",T,!0),Y.cancel,console.log("弹窗销毁了")})),{dragRef:d,modalWrapRef:r,modalBody:c,modalFooter:f,titleRef:m,resizeLRef:v,resizeTRef:p,resizeRRef:y,resizeBRef:h,resizeLTRef:b,resizeTRRef:g,resizeBRRef:R,resizeLBRef:z,minRef:L,maxRef:x,revertRef:k,maskTransitionProps:w,dialogTransitionProps:B,closeModal:()=>{u("update:visible",!1)}}}const _=a({name:"ACustomModal",components:{Transition:u},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{type:[String],default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},emits:["update:visible"],setup:(e,t)=>W(e,t)}),M={ref:"modalRootRef",class:"ant-modal-root custom-modal"},j={class:"ant-modal-mask"},F={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},X={ref:"dragRef",class:"ant-modal"},Y={class:"ant-modal-content"},A={ref:"titleRef",class:"ant-modal-header"},O={class:"ant-modal-title"},P={class:"ant-modal-operate"},S={ref:"minRef",type:"button",class:"min",title:"最小化"},$={ref:"maxRef",type:"button",class:"max",title:"最大化"},D={ref:"revertRef",type:"button",class:"revert",title:"还原"},I={ref:"resizeLRef",class:"resizeL"},N={ref:"resizeTRef",class:"resizeT"},U={ref:"resizeRRef",class:"resizeR"},q={ref:"resizeBRef",class:"resizeB"},G={ref:"resizeLTRef",class:"resizeLT"},J={ref:"resizeTRRef",class:"resizeTR"},K={ref:"resizeBRRef",class:"resizeBR"},Q={ref:"resizeLBRef",class:"resizeLB"},V={ref:"modalBody",class:"ant-modal-body"},Z=E(" ① 窗口可以拖动；"),ee=v("br",null,null,-1),te=E(" ② 窗口可以通过八个方向改变大小；"),le=v("br",null,null,-1),oe=E(" ③ 窗口可以最小化、最大化、还原、关闭；"),se=v("br",null,null,-1),ne=E(" ④ 限制窗口最小宽度/高度。 "),ie={key:0,ref:"modalFooter",class:"ant-modal-footer"},ae=E("取 消"),ue=E("确 认");var de=H(_,[["render",function(e,t,l,o,s,n){const i=d("a-button");return e.destroyOnClose&&!e.visible?(r(),c(f,{key:0},[],64)):(r(),m(k,{key:1,to:"body"},[v("div",M,[p(R,g({key:"mask"},e.maskTransitionProps),{default:y((()=>[h(v("div",j,null,512),[[b,e.visible]])])),_:1},16),p(R,g({key:"dialog"},e.dialogTransitionProps),{default:y((()=>[e.visible?(r(),c("div",F,[v("div",X,[v("div",Y,[v("div",A,[v("span",O,z(e.title),1),v("div",P,[v("button",S,null,512),v("button",$,null,512),v("button",D,null,512),v("button",{type:"button",class:"close",title:"关闭",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})])],512),v("div",I,null,512),v("div",N,null,512),v("div",U,null,512),v("div",q,null,512),v("div",G,null,512),v("div",J,null,512),v("div",K,null,512),v("div",Q,null,512),v("div",V,[L(e.$slots,"default",{},(()=>[Z,ee,te,le,oe,se,ne]))],512),null!=e.footer?(r(),c("div",ie,[L(e.$slots,"footer",{},(()=>[v("div",null,[p(i,{onClick:e.closeModal},{default:y((()=>[ae])),_:1},8,["onClick"]),p(i,{type:"primary",loading:e.confirmLoading,onClick:e.closeModal},{default:y((()=>[ue])),_:1},8,["loading","onClick"])])]))],512)):x("",!0)])],512)],512)):x("",!0)])),_:3},16)],512)]))}]]);const re=E("弹出弹窗"),ce=a({setup(e){const t=T({visible:!1});return(e,l)=>{const o=d("a-button"),s=C;return r(),c("div",null,[p(w(B),{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),p(s,null,{default:y((()=>[p(o,{type:"primary",onClick:l[0]||(l[0]=e=>w(t).visible=!0)},{default:y((()=>[re])),_:1})])),_:1}),p(w(de),{visible:w(t).visible,"onUpdate:visible":l[1]||(l[1]=e=>w(t).visible=e)},null,8,["visible"])])}}});export{ce as default};
