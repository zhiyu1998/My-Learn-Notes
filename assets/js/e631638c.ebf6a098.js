"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740",o={unversionedId:"Java/leetcode/src/Daily/\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1",id:"Java/leetcode/src/Daily/\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1",title:"\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740",description:"https://leetcode.cn/problems/unique-email-addresses/",source:"@site/docs/Java/leetcode/src/Daily/929-\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1.md",sourceDirName:"Java/leetcode/src/Daily",slug:"/Java/leetcode/src/Daily/\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Daily/\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/Daily/929-\u72ec\u7279\u7684\u7535\u5b50\u90ae\u7bb1.md",tags:[],version:"current",sidebarPosition:929,frontMatter:{},sidebar:"sidebars",previous:{title:"\u8def\u5f84\u603b\u548c",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u8def\u5f84\u603b\u548c"},next:{title:"\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 II",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/LinkedList/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 II"}},c={},s=[{value:"\u60f3\u6cd5\u4e00\uff1aAPI",id:"\u60f3\u6cd5\u4e00api",level:2},{value:"\u6765\u4e00\u6ce2\u53cd\u5411\u4f18\u5316",id:"\u6765\u4e00\u6ce2\u53cd\u5411\u4f18\u5316",level:2},{value:"StringBuilder\u6b63\u5411\u4f18\u5316",id:"stringbuilder\u6b63\u5411\u4f18\u5316",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740"},"\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/unique-email-addresses/"},"https://leetcode.cn/problems/unique-email-addresses/")),(0,a.kt)("h2",{id:"\u60f3\u6cd5\u4e00api"},"\u60f3\u6cd5\u4e00\uff1aAPI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public int numUniqueEmails(String[] emails) {\n    HashSet<String> set = new HashSet<>();\n    for (String email : emails) {\n        String[] split = email.split("@");\n        String localName = split[0];\n        int plus = localName.indexOf("+");\n        if (plus != -1) {\n            localName = localName.substring(0, plus);\n        }\n        if (localName.contains(".")) {\n            localName = localName.replace(".", "");\n        }\n        set.add(localName + "@" + split[1]);\n    }\n    return set.size();\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a14 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8661.10% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a41.7 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8655.78% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a185 / 185")),(0,a.kt)("h2",{id:"\u6765\u4e00\u6ce2\u53cd\u5411\u4f18\u5316"},"\u6765\u4e00\u6ce2\u53cd\u5411\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public int numUniqueEmails(String[] emails) {\n        return (int)Arrays.stream(emails).map(email -> {\n            String[] sp = email.split("@");\n            if (sp[0].contains("+")) {\n                return sp[0].substring(0, sp[0].indexOf("+")).replace(".", "") + "@" + sp[1];\n            } else {\n                return sp[0].replace(".", "") + "@" + sp[1];\n            }\n        }).distinct().count();\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a15 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8658.44% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a42.1 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8627.32% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a185 / 185")),(0,a.kt)("h2",{id:"stringbuilder\u6b63\u5411\u4f18\u5316"},"StringBuilder\u6b63\u5411\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int numUniqueEmails(String[] emails) {\n        Set<String> set = new HashSet<>();\n        for (String s : emails) {\n            StringBuilder sb = new StringBuilder();\n            int n = s.length(), i = 0;\n            boolean ok = true;\n            while (i < n) {\n                char c = s.charAt(i);\n                if (c == '@') break;\n                if (c == '.' && ++i >= 0) continue;\n                if (c == '+') ok = false;\n                if (ok) sb.append(c);\n                i++;\n            }\n            set.add(sb.append(s.substring(i)).toString());\n        }\n        return set.size();\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a7 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8690.70% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a41.2 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8687.10% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a185 / 185")))}u.isMDXComponent=!0}}]);