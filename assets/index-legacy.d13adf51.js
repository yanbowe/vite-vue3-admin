System.register(["./dynamic-table-legacy.cb3ed346.js","./index-legacy.6e435a78.js","./vendor-legacy.37c7624c.js","./index-legacy.d5824d17.js"],(function(e){"use strict";var t,n,a,i,c,r;return{setters:[function(e){t=e._},function(e){n=e.g},function(e){a=e.d,i=e.b,c=e.y,r=e.D},function(){}],execute:function(){e("default",a({name:"LoginLog",setup(e){const a=async({page:e,limit:t})=>await n({page:e,limit:t}),d=[{title:"用户名",dataIndex:"username",width:280,align:"center"},{title:"登录IP",dataIndex:"ip",width:150,align:"center"},{title:"登录时间",dataIndex:"time",align:"center",formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"}];return(e,n)=>(i(),c(r(t),{"data-request":a,columns:d}))}}))}}}));
