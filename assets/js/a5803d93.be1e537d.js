"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1873],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,v=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},98125:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={},l="\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",i={unversionedId:"Java/leetcode/src/BinaryTree/\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",id:"Java/leetcode/src/BinaryTree/\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",title:"\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",description:"https://leetcode-cn.com/problems/recover-binary-search-tree/",source:"@site/docs/Java/leetcode/src/BinaryTree/99-\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811.md",sourceDirName:"Java/leetcode/src/BinaryTree",slug:"/Java/leetcode/src/BinaryTree/\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/BinaryTree/99-\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"sidebars",previous:{title:"\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811"},next:{title:"\u76f8\u540c\u7684\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u76f8\u540c\u7684\u6811"}},c={},p=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u7b2c\u4e00\u60f3\u6cd5: \u4e2d\u5e8f\u904d\u5386",id:"\u7b2c\u4e00\u60f3\u6cd5-\u4e2d\u5e8f\u904d\u5386",level:2},{value:"\u5176\u4ed6\u89e3\u6cd5",id:"\u5176\u4ed6\u89e3\u6cd5",level:2},{value:"\u89e3\u6cd5\u4e8c\uff1a\u904d\u5386\u6574\u4e2a\u4e8c\u5206\u641c\u7d22\u6811\uff0c\u627e\u5230\u4e24\u4e2a\u4e0d\u6709\u5e8f\u7684\u4f4d\u7f6e",id:"\u89e3\u6cd5\u4e8c\u904d\u5386\u6574\u4e2a\u4e8c\u5206\u641c\u7d22\u6811\u627e\u5230\u4e24\u4e2a\u4e0d\u6709\u5e8f\u7684\u4f4d\u7f6e",level:3},{value:"\u89e3\u6cd5\u4e09\uff1a\u83ab\u91cc\u65af\u904d\u5386\u4f18\u5316\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u89e3\u6cd5\u4e09\u83ab\u91cc\u65af\u904d\u5386\u4f18\u5316\u7a7a\u95f4\u590d\u6742\u5ea6",level:3},{value:"\u7b97\u6cd5\u601d\u60f3",id:"\u7b97\u6cd5\u601d\u60f3",level:4},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:4}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811"},"\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/recover-binary-search-tree/"},"https://leetcode-cn.com/problems/recover-binary-search-tree/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u8be5\u6811\u4e2d\u7684 \u6070\u597d \u4e24\u4e2a\u8282\u70b9\u7684\u503c\u88ab\u9519\u8bef\u5730\u4ea4\u6362\u3002\u8bf7\u5728\u4e0d\u6539\u53d8\u5176\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\uff0c\u6062\u590d\u8fd9\u68f5\u6811 \u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u60f3\u6cd5-\u4e2d\u5e8f\u904d\u5386"},"\u7b2c\u4e00\u60f3\u6cd5: \u4e2d\u5e8f\u904d\u5386"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u5f02\u5e38\u70b9"),"\uff08\u524d\u4e00\u4e2a\u6570(pre.val) > \u5f53\u524d\u6570(root.val)\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7b2c\u4e00\u6b21\u601d\u8003"),"\uff1a\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u5f02\u5e38\u70b9"),"\uff08\u7b2c\u4e00\u6b21\u60f3\u7684\u65f6\u5019\u662f\u627e\u5230\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u5f53\u524d\u6570(root.val) > \u524d\u4e00\u4e2a\u6570\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u4fee\u6b63\u601d\u8003"),"\uff1a\u6240\u4ee5\u91c7\u7528\u601d\u8def2\u6765\u89e3\u51b3\u5982\u4f55\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\u5f02\u5e38\u70b92"),"\u7684\u60c5\u51b5\uff0c\u540c\u627e\u5230\u7b2c\u4e00\u4e2a\u5f02\u5e38\u70b9\u4e00\u6837\uff08\u524d\u4e00\u4e2a\u6570(pre.val) > \u5f53\u524d\u6570(root.val)\uff09\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u6b21\u7684\u6761\u4ef6\u662f\u627e\u5230\u4e86\u7b2c\u4e00\u4e2a\u5f02\u5e38\u70b9\u7684\u524d\u63d0\u4e0b\uff08anomalNode1 != null\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    TreeNode pre = new TreeNode(Integer.MIN_VALUE);\n\n    TreeNode anomalNode1 = null;\n    TreeNode anomalNode2 = null;\n    \n    public void recoverTree(TreeNode root) {\n        inorderTraversal(root);\n        swap(anomalNode1, anomalNode2);\n    }\n\n    private void inorderTraversal(TreeNode root) {\n        if (root == null)\n            return;\n        \n\u2026       inorderTraversal(root.left);\n        \n        if (root.val < pre.val && anomalNode1 == null)\n            anomalNode1 = pre;\n        if (root.val < pre.val && anomalNode1 != null)\n            anomalNode2 = root;\n        pre = root;\n\u2026       inorderTraversal(root.right);\n    }\n\n    private void swap(TreeNode node1, TreeNode node2) {\n        int temp = node1.val;\n        node1.val = node2.val;\n        node2.val = temp;\n    }\n}\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u89e3\u6cd5"},"\u5176\u4ed6\u89e3\u6cd5"),(0,a.kt)("h3",{id:"\u89e3\u6cd5\u4e8c\u904d\u5386\u6574\u4e2a\u4e8c\u5206\u641c\u7d22\u6811\u627e\u5230\u4e24\u4e2a\u4e0d\u6709\u5e8f\u7684\u4f4d\u7f6e"},"\u89e3\u6cd5\u4e8c\uff1a\u904d\u5386\u6574\u4e2a\u4e8c\u5206\u641c\u7d22\u6811\uff0c\u627e\u5230\u4e24\u4e2a\u4e0d\u6709\u5e8f\u7684\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u6ce8\u610f\u9898\u76ee\u7ed9\u51fa\u7684\u6761\u4ef6\uff0c\u662f \u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u8fd9\u5c31\u662f\u610f\u5473\u7740\u8282\u70b9\u4e4b\u95f4\u662f\u6709\u987a\u5e8f\u5173\u7cfb\u7684\u3002\n\u5982\u679c\u6211\u4eec\u628a\u6574\u68f5\u6811\u90fd \u904d\u5386 \u4e00\u904d\uff0c\u5c06\u904d\u5386\u7684\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\uff0c\u6bd4\u5982\u653e\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\u3002\n\u90a3\u4e48\u8fd9\u4e2a\u6570\u7ec4\u5e94\u8be5\u662f\u6709\u5e8f\u7684\u3002"),(0,a.kt)("p",null,"\u65e2\u7136\u662f\u6709\u5e8f\u7684\u90a3\u5c31\u597d\u529e\u4e86\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4\u904d\u5386\u4e00\u904d\u3002\n\u5982\u679c\u6570\u7ec4\u662f\u5b8c\u5168\u6709\u5e8f\u7684\uff0c\u90a3\u4e48\u76f4\u63a5\u8fd4\u56de\u5c31\u53ef\u4ee5\u4e86\u3002\n\u5426\u5219\uff0c\u6211\u4eec\u627e\u5230\u987a\u5e8f\u4e0d\u4e00\u81f4\u7684\u4e24\u4e2a\u4e0b\u6807i\u548cj\uff0c\u5c06arr","[i]",".val\u548carr","[j]",".val\u7684\u503c\u4e92\u6362\u4e00\u4e0b\u5373\u53ef\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/ceaf09da74f78f235f329dbc588f63da7464590947edb8c0415a4bd9ff493299-1.jpg",alt:"demo2"})),(0,a.kt)("h3",{id:"\u89e3\u6cd5\u4e09\u83ab\u91cc\u65af\u904d\u5386\u4f18\u5316\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u89e3\u6cd5\u4e09\uff1a\u83ab\u91cc\u65af\u904d\u5386\u4f18\u5316\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/recover-binary-search-tree/solution/san-chong-jie-fa-xiang-xi-tu-jie-99-hui-fu-er-cha-/"},"https://leetcode-cn.com/problems/recover-binary-search-tree/solution/san-chong-jie-fa-xiang-xi-tu-jie-99-hui-fu-er-cha-/")),(0,a.kt)("h4",{id:"\u7b97\u6cd5\u601d\u60f3"},"\u7b97\u6cd5\u601d\u60f3"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5224\u65adcur\u8282\u70b9\u662f\u5426\u4e3a\u7a7a"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u4e3a\u7a7a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679ccur\u6ca1\u6709\u5de6\u5b69\u5b50\uff0ccur\u5411\u53f3\u66f4\u65b0\uff0c\u5373\uff08cur = cur.right\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679ccur\u6709\u5de6\u5b69\u5b50\uff0c\u5219\u4ece\u5de6\u5b50\u6811\u627e\u5230\u6700\u53f3\u4fa7\u8282\u70b9pre",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679cpre\u7684\u53f3\u5b69\u5b50\u4e3a\u7a7a\uff0c\u5219\u5c06\u53f3\u5b69\u5b50\u6307\u5411cur\u3002pre.right = cur"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679cpre\u7684\u53f3\u5b69\u5b50\u4e3acur\uff0c\u5219\u5c06\u5176\u6307\u5411\u4e3a\u7a7a\u3002pre.right = null\u3002\uff08\u8fd8\u539f\u6811\u7ed3\u6784\uff09"))))),(0,a.kt)("li",{parentName:"ol"},"cur\u4e3a\u7a7a\u65f6\uff0c\u505c\u6b62\u904d\u5386")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200216151818405.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Rhbm1vX3d1aGVu,size_16,color_FFFFFF,t_70#pic_center",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6839\u8282\u70b91\u8bbe\u7f6e\u4e3acur\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3acur\uff08\u8282\u70b91\uff09\u4e0d\u4e3a\u7a7a\uff0c\u4e14cur\uff08\u8282\u70b91\uff09\u7684\u5de6\u5b69\u5b50\u8282\u70b92\u4e0d\u4e3a\u7a7a\uff0c\u6240\u4ee5\u6211\u4eec\u627e\u5230\u4ee5\u8282\u70b92\u4e3a\u6839\u8282\u70b9\u7684\u5de6\u5b50\u6811\u4e2d\u6700\u53f3\u7aef\u7684\u8282\u70b95\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b95\u53f3\u5b69\u5b50\u4e3a\u7a7a\uff0c\u6b64\u65f6\u6211\u4eec\u8f93\u51facur\uff08\u8282\u70b91\uff09\u7684\u503c\uff0c\u7136\u540e\u5c06\u8282\u70b95\u53f3\u5b69\u5b50\u6307\u5411\u4e3acur\uff0c\u5373\u8282\u70b91\u3002\u66f4\u65b0cur\u8282\u70b9\u4e3acur\u5de6\u5b69\u5b50\uff0c\u5373\u8282\u70b92\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3acur\uff08\u8282\u70b92\uff09\u5de6\u5b69\u5b50\u4e0d\u4e3a\u7a7a\uff0c\u627e\u5230\u5176\u5de6\u5b50\u6811\u6700\u53f3\u7aef\u8282\u70b94"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b94\u53f3\u5b69\u5b50\u4e3a\u7a7a\uff0c\u5148\u8f93\u51facur\uff08\u8282\u70b92\uff09\u7684\u503c\uff0c\u518d\u5c06\u8282\u70b94\u53f3\u5b69\u5b50\u6307\u5411cur\uff08\u8282\u70b92\uff09,\u5e76\u66f4\u65b0cur\uff08\u8282\u70b92\uff09\u4e3a\u5176\u5de6\u5b69\u5b50\u8282\u70b94\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u65f6\u5019cur\uff08\u8282\u70b94\uff09\u7684\u5de6\u5b69\u5b50\u4e3a\u7a7a\uff0c\u6240\u4ee5\u8bbf\u95ee\u5176\u53f3\u5b69\u5b50\uff0c\u53d1\u73b0\u53f3\u5b69\u5b50\u6307\u5411\u4e86\u8282\u70b92\uff0c\u6240\u4ee5\u6211\u4eec\u5c06cur\u66f4\u65b0\u4e3a\u8282\u70b92\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53d1\u73b0cur\u53c8\u6307\u5411\u4e86\u8282\u70b92\uff0c\u6240\u4ee5\u5de6\u5b69\u5b50\u8282\u70b94\u4e0d\u4e3a\u7a7a\uff0c\u6211\u4eec\u518d\u6b21\u627e\u5230\u5de6\u5b50\u6811\u4e2d\u6700\u53f3\u7aef\u8282\u70b94\uff0c\u4f46\u662f\u8fd9\u4e2a\u65f6\u5019\u8282\u70b94\u7684\u53f3\u5b69\u5b50\u6307\u5411\u4e86cur\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u5176\u5220\u9664\uff0c\u5373\u8282\u70b94\u53f3\u5b69\u5b50\u6307\u5411\u4e3a\u7a7a\uff0c\u6062\u590d\u539f\u6765\u7684\u6811\u7ed3\u6784\u3002\u5e76\u4e14\u7531\u4e8e\u5df2\u7ecf\u8bbf\u95ee\u4e86\u5de6\u5b69\u5b50\u548c\u6839\u8282\u70b9\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u8bbf\u95ee\u5176\u53f3\u5b69\u5b50\u8282\u70b95\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"))}d.isMDXComponent=!0}}]);