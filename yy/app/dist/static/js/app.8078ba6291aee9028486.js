webpackJsonp([1],{38:function(n,e,t){t(84);var r=t(23)(t(40),t(96),"data-v-bd26cd6c",null);n.exports=r.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(24),o=t.n(r),i=t(45),s=t.n(i),a=t(44),l=t.n(a),u=t(93),c=t.n(u),d=t(92),f=t.n(d),m=t(81),h=(t.n(m),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}return t}());e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi,小袁老师！\n* 看你一天这么忙，都没机会好好交流！\n* 作为技术控就弄个网页简单自我介绍一下。\n* 我是个软件工程师，俗称程序猿。。。\n* 比如做这种网页，就跟我平常的工作没什么关系～\n* 我主要是后台开发，前端页面的活我也不太了解。\n* 正好趁这个机会上手，现学现用，嘿嘿～\n* 嗯，开始前手机和电脑还是得区分一下。\n* 你现在用的是。。。"+(h?"电脑":"手机")+"\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(h?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(h?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  "+(h?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(h?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(h?"margin: .5em;":"")+"\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(h?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],currentMarkdown:"",fullMarkdown:"新年快乐！小袁老师\n----\n\n不知道你喜不喜欢这个称呼，先这么叫着哈。\n想不到我加班就是在写这个吧，从小语文就不好，憋半天也蹦不出几个字来。\n比如写这段话，对我来说就太南了，写得不好还望多包容包容呐~\n\n先简单介绍一下，我对物理和计算机感兴趣，志愿全部填的计算机类。\n然后就撞进了“信息与计算科学”这个比较有21世纪特色名字的数学专业。\n和大多理工男一样，性格有点偏内向，跟不熟的人可能话比较少。\n混熟了的话我还是很喜欢开玩笑的，没有那么无趣。\n\n爱好\n----\n\n如果说我真正的爱好是追求真理，会不会显得太搞笑了，但有时真觉得对未知的探索永远那么吸引人。\n工作了才感觉数学实在是太有用了，尤其是一些思想和方法，可惜大学时没有好好学。\n只怪当时太年轻啊，光喜欢去折腾一些有趣好耍的计算机技术，结果在码农的路上越走越远。\n扯远了，说起来我爱好也挺广泛，但某些可能是阶段性的（或者叫螺旋上升～），比如：\n\n- 编程：C++、Python、linux...\n- 美剧：TBBT、GoT（都在2019完结了。。。我不是很喜欢完结后的失落感，如果不是有人特别强烈推荐我自己不会开新坑）\n- 音乐：王菲、eason、jay、许巍...\n- 运动：划船机、游泳、乒乓...\n- 汽车：看车评、越野路书（喜欢丰田的稳定可靠，Dream Car就是能把大G从任何地方带回来的陆巡）\n- 其他：蛤丝、军迷\n\n打算\n----\n\n我是首次这种方式加了微信，说实话有点尴尬。\n不知道你的性格是怎样的，希望都不要太紧张，反正当多认识了个朋友嘛。\n写到现在感觉脑子里面一团乱麻，总之新年快乐啦\n\n\n> 【 Happy New Year! 2020 】  \n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(s.a.mark(function e(){var r,a,l,u,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(85),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(86),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,e){},82:function(n,e){},83:function(n,e){},84:function(n,e){},92:function(n,e,t){t(83);var r=t(23)(t(41),t(95),"data-v-3539023c",null);n.exports=r.exports},93:function(n,e,t){t(82);var r=t(23)(t(42),t(94),"data-v-23b5cc2c",null);n.exports=r.exports},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[43]);