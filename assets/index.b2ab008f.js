import{r as t,p as s,q as e}from"./index.7c366795.js";function a(e){return t({url:s.info,method:"get",params:e})}function r(e){return t({url:s.list,method:"get",data:e})}function u(e){return t({url:s.page,method:"get",params:e})}function n(e){return t({url:s.add,method:"post",data:e},{successMsg:"创建角色成功"})}function o(e){return t({url:s.update,method:"post",data:e},{successMsg:"更新角色成功"})}function d(e){return t({url:s.delete,method:"post",data:e},{successMsg:"删除角色成功"})}function c(){return t({url:e.list,method:"get"})}function i(s){return t({url:"sys/dept/delete",method:"post",data:s},{successMsg:"删除成功"})}function p(s){return t({url:e.update,method:"post",data:s})}function f(s){return t({url:e.add,method:"post",data:s})}function l(s){return t({url:e.transfer,method:"post",data:s})}export{c as a,a as b,n as c,d,r as e,p as f,u as g,f as h,i,l as t,o as u};
