const e=JSON.parse('{"key":"v-5020e9a8","path":"/Java/jvm/part1/2.%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%AD%90%E7%B3%BB%E7%BB%9F.html","title":"类加载子系统","lang":"zh-CN","frontmatter":{"order":2,"title":"类加载子系统","category":["JVM"],"tag":["JVM上篇"],"description":"[toc] 内存结构概述 image 类加载器子系统的作用 image 类加载器子系统负责从文件系统或者网络中加载Class文件，class文件在文件开头有特定的文件标识。; ClassLoader只负责class文件的加载，至于它是否可以运行，则由ExecutionEngine决定。; 加载的类信息存放于一块称为方法区的内存空间。除了类的信息外，方法...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/jvm/part1/2.%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%AD%90%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:title","content":"类加载子系统"}],["meta",{"property":"og:description","content":"[toc] 内存结构概述 image 类加载器子系统的作用 image 类加载器子系统负责从文件系统或者网络中加载Class文件，class文件在文件开头有特定的文件标识。; ClassLoader只负责class文件的加载，至于它是否可以运行，则由ExecutionEngine决定。; 加载的类信息存放于一块称为方法区的内存空间。除了类的信息外，方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T15:12:04.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"类加载子系统"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:tag","content":"JVM上篇"}],["meta",{"property":"article:modified_time","content":"2023-04-04T15:12:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载子系统\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-04-04T15:12:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\",\\"url\\":\\"https://github.com/zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"内存结构概述","slug":"内存结构概述","link":"#内存结构概述","children":[]},{"level":2,"title":"类加载器子系统的作用","slug":"类加载器子系统的作用","link":"#类加载器子系统的作用","children":[]},{"level":2,"title":"类加载过程 -- 3个阶段","slug":"类加载过程-3个阶段","link":"#类加载过程-3个阶段","children":[{"level":3,"title":"加载过程1：loading","slug":"加载过程1-loading","link":"#加载过程1-loading","children":[]},{"level":3,"title":"加载过程2：Linking","slug":"加载过程2-linking","link":"#加载过程2-linking","children":[]},{"level":3,"title":"类的加载过程：initialization","slug":"类的加载过程-initialization","link":"#类的加载过程-initialization","children":[]}]},{"level":2,"title":"类加载器的分类","slug":"类加载器的分类","link":"#类加载器的分类","children":[]},{"level":2,"title":"双亲委派机制","slug":"双亲委派机制","link":"#双亲委派机制","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"沙箱安全机制","slug":"沙箱安全机制","link":"#沙箱安全机制","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"如何判断两个class对象是否相同？","slug":"如何判断两个class对象是否相同","link":"#如何判断两个class对象是否相同","children":[]},{"level":3,"title":"对类加载器的引用","slug":"对类加载器的引用","link":"#对类加载器的引用","children":[]}]}],"git":{"createdTime":1680621124000,"updatedTime":1680621124000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":1}]},"readingTime":{"minutes":14.59,"words":4378},"filePathRelative":"Java/jvm/part1/2.类加载子系统.md","localizedDate":"2023年4月4日","autoDesc":true}');export{e as data};
