"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1983],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},o="\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",l={unversionedId:"Java/leetcode/src/BinaryTree/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",id:"Java/leetcode/src/BinaryTree/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",title:"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",description:"https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/",source:"@site/docs/Java/leetcode/src/BinaryTree/111-\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6.md",sourceDirName:"Java/leetcode/src/BinaryTree",slug:"/Java/leetcode/src/BinaryTree/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/BinaryTree/111-\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6.md",tags:[],version:"current",sidebarPosition:111,frontMatter:{},sidebar:"sidebars",previous:{title:"\u5e73\u8861\u4e8c\u53c9\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u5e73\u8861\u4e8c\u53c9\u6811"},next:{title:"\u8def\u5f84\u603b\u548c",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u8def\u5f84\u603b\u548c"}},c={},s=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u540e\u5e8f\u904d\u5386",id:"\u7b2c\u4e00\u60f3\u6cd5\u540e\u5e8f\u904d\u5386",level:2},{value:"\u7b2c\u4e8c\u60f3\u6cd5\uff1aBFS\uff08\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff09",id:"\u7b2c\u4e8c\u60f3\u6cd5bfs\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"},"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/"},"https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u627e\u51fa\u5176\u6700\u5c0f\u6df1\u5ea6\u3002"),(0,a.kt)("p",null,"\u6700\u5c0f\u6df1\u5ea6\u662f\u4ece\u6839\u8282\u70b9\u5230\u6700\u8fd1\u53f6\u5b50\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84\u4e0a\u7684\u8282\u70b9\u6570\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u53f6\u5b50\u8282\u70b9\u662f\u6307\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u60f3\u6cd5\u540e\u5e8f\u904d\u5386"},"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u540e\u5e8f\u904d\u5386"),(0,a.kt)("p",null,"\u601d\u8def\u5f88\u7b80\u5355\uff0c\u6027\u80fd\u53ca\u5176\u5dee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int minDepth(TreeNode root) {\n\n        if (root == null) return 0;\n\n        int ld = minDepth(root.left);\n\n        int rd = minDepth(root.right);\n\n        if (ld != 0 && rd != 0)\n            return Math.min(ld, rd) + 1;;\n\n        return ld == 0 ? rd + 1 : ld + 1;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"accepted"},"Accepted"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"52/52 cases passed (7 ms)"),(0,a.kt)("li",{parentName:"ul"},"Your runtime beats 47.74 % of java submissions"),(0,a.kt)("li",{parentName:"ul"},"Your memory usage beats 5.07 % of java submissions (61.7 MB)"))),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u60f3\u6cd5bfs\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"},"\u7b2c\u4e8c\u60f3\u6cd5\uff1aBFS\uff08\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff09"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b21\u60f3\u540e\u5e8f\u904d\u5386\u5f97\u5230\u7cdf\u7cd5\u7684\u7ed3\u679c\u4e00\u5f00\u59cb\u60f3\u7740\u53ef\u80fd\u4f1a\u7528\u54c8\u5e0c\u8868 or \u6570\u7ec4\u8fdb\u884c\u526a\u679d\uff0c\u4f46\u662f\u60f3\u6cd5\u4e0d\u5bf9\uff1b\u7136\u540e\u5c31\u60f3\u5230\u4f7f\u7528\u5c42\u6b21\u904d\u5386\uff08BFS\u7684\u601d\u60f3\uff09\u53bb\u627e\u7a7a\u503c\uff0c\u5982\u679c\u51fa\u73b0\u7a7a\u503c\u5c31\u8bf4\u660e\u51fa\u73b0\u4e86\u6700\u77ed\u8def\u5f84\uff01"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"BFS\u4f18\u5316\u6a21\u677f\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"while(queue.size() > 0)")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"for ( int i = container; i > 0 ; i-- )"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u5c31\u662f\u627e\u5230\u7a7a\u503c\u53ca\u65f6\u6b62\u635f\u8df3\u51fa\u5faa\u73af\uff08\u4e5f\u5c31\u662f\u53d1\u73b0\u8282\u70b9\u7684\u5de6\u53f3\u8282\u70b9\u90fd\u6ca1\u6709\u503c\u7684\u65f6\u5019\u8df3\u51fa\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7ef4\u62a4\u6df1\u5ea6\u7684\u5927\u5c0f\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"depth"),"\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n\n    public int minDepth(TreeNode root) {\n\n        if (root == null) return 0;\n\n        if ( root.left == null && root.right == null ) return 1;\n\n        LinkedList<TreeNode> queue = new LinkedList<>();\n\n        int depth = 0;\n\n        queue.addLast(root);\n        // depth++;\n        \n        int container = 1;\n\n        boolean specify = true;\n\n        while (queue.size() > 0 && specify) {\n\n            int nextContiner = 0;\n\n            for ( int i = container; i > 0 ; i-- ) {\n                TreeNode ele = queue.removeFirst();\n                if (ele.left != null) {\n                    queue.addLast(ele.left);\n                    nextContiner++;\n                }\n\n                if (ele.right != null) {\n                    queue.addLast(ele.right);\n                    nextContiner++;\n                }\n\n\n                if (ele.left == null && ele.right == null) {\n                    specify = false;\n                    break;\n                }\n            }\n            depth++;\n\n            container = nextContiner;\n        }\n\n        return depth;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"accepted-1"},"Accepted"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"52/52 cases passed (0 ms)"),(0,a.kt)("li",{parentName:"ul"},"Your runtime beats 100 % of java submissions"),(0,a.kt)("li",{parentName:"ul"},"Your memory usage beats 73.04 % of java submissions (60.2 MB)"))))}p.isMDXComponent=!0}}]);