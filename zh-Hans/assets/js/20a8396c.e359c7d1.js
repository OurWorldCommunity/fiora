(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(7),o=(n(0),n(88)),i={id:"faq",title:"\u95ee\u9898\u89e3\u7b54",sidebar_label:"\u95ee\u9898\u89e3\u7b54"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"\u95ee\u9898\u89e3\u7b54",description:"\u8bbe\u7f6e\u7ba1\u7406\u5458",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/FAQ.md",slug:"/faq",permalink:"/fiora/zh-Hans/docs/faq",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/FAQ.md",version:"current",sidebar_label:"\u95ee\u9898\u89e3\u7b54",sidebar:"docs",previous:{title:"\u811a\u672c",permalink:"/fiora/zh-Hans/docs/script"},next:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/fiora/zh-Hans/docs/changelog"}},s=[{value:"\u8bbe\u7f6e\u7ba1\u7406\u5458",id:"\u8bbe\u7f6e\u7ba1\u7406\u5458",children:[]},{value:"\u4fee\u6539\u9ed8\u8ba4\u7fa4\u7ec4\u540d\u79f0",id:"\u4fee\u6539\u9ed8\u8ba4\u7fa4\u7ec4\u540d\u79f0",children:[]},{value:"\u81ea\u5b9a\u4e49\u57df\u540d, \u901a\u8fc7 nginx \u53cd\u5411\u4ee3\u7406",id:"\u81ea\u5b9a\u4e49\u57df\u540d-\u901a\u8fc7-nginx-\u53cd\u5411\u4ee3\u7406",children:[]},{value:"\u7981\u6b62\u6ce8\u518c, \u624b\u52a8\u5206\u914d\u8d26\u53f7",id:"\u7981\u6b62\u6ce8\u518c-\u624b\u52a8\u5206\u914d\u8d26\u53f7",children:[]},{value:"\u5220\u9664\u7528\u6237",id:"\u5220\u9664\u7528\u6237",children:[]}],l={toc:s};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u8bbe\u7f6e\u7ba1\u7406\u5458"},"\u8bbe\u7f6e\u7ba1\u7406\u5458"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u83b7\u53d6\u7528\u6237 id, \u6267\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"yarn script getUserId [username]")),Object(o.b)("li",{parentName:"ol"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"li"},"Administrator")," \u914d\u7f6e\u9879, \u6539\u4e3a\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684 id"),Object(o.b)("li",{parentName:"ol"},"\u91cd\u542f\u670d\u52a1\u5668")),Object(o.b)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4\u7fa4\u7ec4\u540d\u79f0"},"\u4fee\u6539\u9ed8\u8ba4\u7fa4\u7ec4\u540d\u79f0"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultGroupName")," \u914d\u7f6e\u9879"),Object(o.b)("li",{parentName:"ol"},"\u91cd\u542f\u670d\u52a1\u5668")),Object(o.b)("h2",{id:"\u81ea\u5b9a\u4e49\u57df\u540d-\u901a\u8fc7-nginx-\u53cd\u5411\u4ee3\u7406"},"\u81ea\u5b9a\u4e49\u57df\u540d, \u901a\u8fc7 nginx \u53cd\u5411\u4ee3\u7406"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u8bf7\u4fee\u6539\u6ce8\u91ca\u9879\u7684\u914d\u7f6e")),Object(o.b)("p",null,"\u793a\u4f8b\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'server {\n   listen 80;\n   # \u4fee\u6539\u4e3a\u4f60\u7684\u57df\u540d\n   server_name fiora.suisuijiang.com;\n\n   location / {\n      proxy_set_header   X-Real-IP        $remote_addr;\n      proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n      proxy_set_header   Host             $http_host;\n      proxy_set_header   Upgrade          $http_upgrade;\n      proxy_set_header   X-NginX-Proxy    true;\n      proxy_set_header   Connection "upgrade";\n      proxy_http_version 1.1;\n      proxy_pass         http://localhost:9200;\n   }\n}\n')),Object(o.b)("p",null,"\u914d\u7f6e HTTPS + HTTP 2.0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'server {\n   listen 80;\n   # \u4fee\u6539\u4e3a\u4f60\u7684\u57df\u540d\n   server_name fiora.suisuijiang.com;\n   return 301 https://fiora.suisuijiang.com$request_uri;\n}\nserver {\n   listen 443 ssl http2;\n   # \u4fee\u6539\u4e3a\u4f60\u7684\u57df\u540d\n   server_name  fiora.suisuijiang.com;\n\n   ssl on;\n   # \u4fee\u6539\u4e3a\u4f60\u7684ssl\u8bc1\u4e66\u4f4d\u7f6e\n   ssl_certificate ./ssl/fiora.suisuijiang.com.crt;\n   ssl_certificate_key ./ssl/fiora.suisuijiang.com.key;\n   ssl_session_timeout 5m;\n   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n   ssl_prefer_server_ciphers on;\n\n   location / {\n      proxy_set_header   X-Real-IP        $remote_addr;\n      proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n      proxy_set_header   Host             $http_host;\n      proxy_set_header   Upgrade          $http_upgrade;\n      proxy_set_header   X-NginX-Proxy    true;\n      proxy_set_header   Connection "upgrade";\n      proxy_http_version 1.1;\n      proxy_pass         http://localhost:9200;\n   }\n}\n')),Object(o.b)("h2",{id:"\u7981\u6b62\u6ce8\u518c-\u624b\u52a8\u5206\u914d\u8d26\u53f7"},"\u7981\u6b62\u6ce8\u518c, \u624b\u52a8\u5206\u914d\u8d26\u53f7"),Object(o.b)("p",null,"\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"DisableRegister")," \u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a true, \u91cd\u542f\u670d\u52a1\u5668\u751f\u6548"),Object(o.b)("p",null,"\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"yarn script register [username] [password]")," \u624b\u52a8\u6ce8\u518c\u65b0\u7528\u6237"),Object(o.b)("h2",{id:"\u5220\u9664\u7528\u6237"},"\u5220\u9664\u7528\u6237"),Object(o.b)("p",null,"\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"yarn script deleteUser [userId]")))}p.isMDXComponent=!0},88:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=t,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:r},l),{},{components:n})):a.a.createElement(f,c({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);