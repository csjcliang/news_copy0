(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00e6":function(t,e,n){"use strict";n.r(e);var i=n("0fb4"),a=n("e0b3");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("80f9");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5792dcd0",null,!1,i["a"],o);e["default"]=c.exports},"041b":function(t,e,n){"use strict";n.r(e);var i=n("f7a4"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"0bbc":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"5rpx","background-color":"#F5F5F4"}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"0e05":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex flex-column align-center justify-center pt-5"},[n("v-uni-image",{staticStyle:{width:"300rpx",height:"300rpx"},attrs:{src:"/static/common/nothing.png"}}),n("v-uni-text",{staticClass:"font-md"},[t._v("什么都没有")])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"0fb4":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDetail(t.item.item_id,t.item.news_id,t.item.title,t.item.tabIndex)}}},[n("v-uni-view",{staticClass:"p-2 animated fast fadeIn"},[n("v-uni-view",{staticClass:"my-1",class:t.fontSizeTitle,staticStyle:{"line-height":"1.4"}},[t._v(t._s(null==t.item.title?t.item.news_name:t.item.title))]),null!=t.item.has_video?[0==t.item.has_video&&0==t.item.image_list.length?void 0:0==t.item.has_video&&1==t.item.image_list.length?t._l(t.item.image_list,(function(t){return n("v-uni-image",{staticClass:"rounded w-100 my-1",staticStyle:{height:"360rpx"},attrs:{src:t.url}})})):0==t.item.has_video&&3==t.item.image_list.length?[n("v-uni-view",{staticClass:"flex align-center my-1"},t._l(t.item.image_list,(function(t){return n("v-uni-image",{staticClass:"rounded",staticStyle:{width:"260rpx",height:"160rpx","margin-left":"5rpx","margin-right":"5rpx"},attrs:{src:t.url}})})),1)]:[n("v-uni-image",{staticClass:"rounded w-100  my-1",staticStyle:{height:"360rpx"},attrs:{src:t.item.large_image_url}})]]:t._e(),n("v-uni-view",{staticClass:"flex align-center justify-start"},[null!=t.item.media_name?[n("v-uni-view",{staticClass:"mr-2",class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(t.item.media_name))])]:[n("v-uni-view",{staticClass:"mr-2",class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(t.item.source))])],null==t.item.tabIndex?n("v-uni-view",{staticClass:"mr-2",class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(t.item.comment_count)+"评论")]):t._e(),null!=t.item.datetime?[n("v-uni-text",{class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(t.item.datetime))])]:[n("v-uni-text",{class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(t.timestampToTime_(t.item.publish_time)))])]],2)],2)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"16e7":function(t,e,n){"use strict";n.r(e);var i=n("254e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"17ec":function(t,e,n){"use strict";n.r(e);var i=n("bc01"),a=n("c64e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"986907be",null,!1,i["a"],o);e["default"]=c.exports},"1f46":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-row border-bottom",staticStyle:{height:"100rpx"},style:t.skinMode?"background-color: #F5F7F9;":"background-color: rgba(0,0,0,0.3)",attrs:{"scroll-x":!0,"scroll-into-view":t.scrollInto,"scroll-with-animation":""}},[t._l(t.tabBars,(function(e,i){return n("v-uni-view",{key:i,staticClass:"scroll-row-item px-3 py-2 font-md",class:t.tabIndex===i?"font-lg font-weight-bold "+t.textmain:"",attrs:{id:"tab"+i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(i)}}},[t._v(t._s(e.name))])})),n("v-uni-view",{staticClass:"scroll-row-item px-3 py-2 font-md"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showEdit.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shezhi"}),t._v("编辑")],1)],1)],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[n("dragSort",{attrs:{list:t.tabBars,props:t.props},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onDragSortChange.apply(void 0,arguments)}}})],1),n("v-uni-swiper",{style:"height:"+t.scrollH+"px;"+t.skin,attrs:{duration:150,current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeTab.apply(void 0,arguments)}}},t._l(t.tabBars,(function(e,i){return n("v-uni-swiper-item",{key:i},[n("v-uni-scroll-view",{style:"height:"+t.scrollH+"px;",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore(i)},scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.refresh(i)}}},[t.news_list[i].list.length>0?[t._l(t.news_list[i].list,(function(e,i){return[n("common-list",{key:i+"_0",attrs:{item:e,index:i,fontSize:t.fontSize}}),n("divider")]})),n("load-more",{attrs:{loadmore:t.news_list[t.tabIndex].loadmore}})]:[n("no-thing")]],2)],1)})),1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"254e":function(t,e){},"47ee":function(t,e){},"54f8":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(i["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,o=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(s)throw r}}}}},"5c5a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isLogined:!1}},computed:{fontSizeTitle:function(){return"big"==this.fontSize?"font-lg":"normal"==this.fontSize?"font-md":"font"},fontSizeDetail:function(){return"big"==this.fontSize?"font-md":"normal"==this.fontSize?"font":"font-sm"}},props:{item:Object,fontSize:String},methods:{timestampToTime_:function(t){var e=new Date(1e3*t),n=e.getFullYear()+"-",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",a=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",r=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",o=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();e.getSeconds(),e.getSeconds();return n+i+a+r+o},openDetail:function(t,e,n,i){null!=t&&"undefined"!=t&&(e=t);try{var a=uni.getStorageSync("isLogined");""!==a&&(this.isLogined=a)}catch(o){}if(0!=this.isLogined){var r=uni.getStorageSync("user_id");if(console.log(i),null==i)try{i=uni.getStorageSync("tabIndex"),console.log(i)}catch(o){i=null}else console.log(e,r),uni.request({url:"https://af1o32.toutiao15.com/read_recommendation",method:"POST",data:{news_id:e,user_id:r}});try{r&&uni.request({url:"https://af1o32.toutiao15.com/add_browsing",method:"POST",data:{news_id:e,user_id:r,title:n,tabIndex:i}})}catch(o){}uni.navigateTo({url:"../../pages/info/info?news_id="+e})}else uni.navigateTo({url:"../../pages/info/info?news_id="+e})}}};e.default=i},"5f60":function(t,e,n){var i=n("9a5a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("625d0238",i,!0,{sourceMap:!1,shadowMode:!1})},"664d":function(t,e,n){"use strict";n.r(e);var i=n("d4be"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},6761:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["loadmore"]};e.default=i},"76bc":function(t,e,n){"use strict";n.r(e);var i=n("0bbc"),a=n("16e7");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2d73a794",null,!1,i["a"],o);e["default"]=c.exports},"80f9":function(t,e,n){"use strict";var i=n("5f60"),a=n.n(i);a.a},"8ec2":function(t,e,n){"use strict";n.r(e);var i=n("1f46"),a=n("664d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"73d5fad8",null,!1,i["a"],o);e["default"]=c.exports},"9a5a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".support-active[data-v-5792dcd0]{color:#ed4040}",""]),t.exports=e},a091:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-movable-area",{staticClass:"drag-sort",style:{height:t.currentListLength+"px"},attrs:{id:"drag"}},[t._l(t.currentList,(function(e,i){return n("v-uni-movable-view",{key:i,staticClass:"drag-sort-item",class:{active:t.active===i,"vh-1px-t":e.index>0},staticStyle:{height:"55px"},attrs:{x:0,y:e.y,direction:"vertical",disabled:!0,damping:"40",animation:t.active!==i}},[n("v-uni-view",{staticClass:"item"},[t._v(t._s(e[t.props.label]))]),n("v-uni-view",{staticClass:"touch-tight"},[n("v-uni-view",{staticClass:"ico_drag"})],1)],1)})),n("v-uni-movable-view",{staticClass:"touch",attrs:{x:2e3,catchtouchstart:!0,catchtouchmove:!0,catchtouchend:!0},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)}}})],2)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},b09e:function(t,e,n){"use strict";n.r(e);var i=n("0e05"),a=n("e5a0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4b2550ce",null,!1,i["a"],o);e["default"]=c.exports},b6802:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},bc01:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center justify-center py-3"},[n("v-uni-text",{staticClass:"font text-light-muted"},[t._v(t._s(t.loadmore))])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},c13d:function(t,e,n){var i=n("eea7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2fcb20b0",i,!0,{sourceMap:!1,shadowMode:!1})},c145:function(t,e,n){"use strict";n.r(e);var i=n("a091"),a=n("041b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ffc4");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1f9e1fc4",null,!1,i["a"],o);e["default"]=c.exports},c64e:function(t,e,n){"use strict";n.r(e);var i=n("6761"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d0af:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){a=!0,r=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(a)throw r}}return n}}var r=n("dde1");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return i(t)||a(t,e)||Object(r["a"])(t,e)||o()}n.d(e,"default",(function(){return s}))},d0ff:function(t,e,n){"use strict";n.r(e);var i=n("b6802");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(o["a"])(t)||s()}n.d(e,"default",(function(){return c}))},d4be:function(t,e,n){"use strict";var i=n("ee27");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d0ff")),r=i(n("d0af")),o=i(n("00e6")),s=i(n("76bc")),c=i(n("b09e")),u=i(n("17ec")),l=i(n("c145")),d={components:{commonList:o.default,divider:s.default,noThing:c.default,loadMore:u.default,dragSort:l.default},computed:{skin:function(){return this.skinMode?"background-color: #ffffff;":"background-color: rgba(0,0,0,0.2);"},textmain:function(){return"text-main"+this.text_main_index}},data:function(){return{isShow:!1,props:{label:"label"},userID:"",skinMode:!0,fontSize:"normal",theme_color:["#ED4040","#ffcc00","#74b886","#395ac6","#ffbdbd","#424242"],text_main_index:0,scrollH:600,scrollInto:"",tabIndex:0,tabBars:[{label:"热点",name:"热点",type:"news_hot"},{label:"社会",name:"社会",type:"news_society"},{label:"娱乐",name:"娱乐",type:"news_entertainment"},{label:"科技",name:"科技",type:"news_tech"},{label:"军事",name:"军事",type:"news_military"},{label:"体育",name:"体育",type:"news_sports"},{label:"汽车",name:"汽车",type:"news_car"},{label:"财经",name:"财经",type:"news_finance"},{label:"国际",name:"国际",type:"news_world"},{label:"时尚",name:"时尚",type:"news_fashion"},{label:"旅游",name:"旅游",type:"news_travel"},{label:"探索",name:"探索",type:"news_discovery"},{label:"育儿",name:"育儿",type:"news_baby"},{label:"养生",name:"养生",type:"news_regimen"},{label:"故事",name:"故事",type:"news_story"},{label:"美文",name:"美文",type:"news_essay"},{label:"游戏",name:"游戏",type:"news_game"},{label:"历史",name:"历史",type:"news_history"},{label:"美食",name:"美食",type:"news_food"}],news_list:[]}},onLoad:function(){var t=this;try{var e=uni.getStorageSync("skin_mode");""!==e&&(this.skinMode=e)}catch(r){}try{var n=uni.getStorageSync("user_id");""!==n&&(this.userID=n)}catch(r){}""!==this.userID&&(uni.request({url:"https://af1o32.toutiao15.com/create_preflist",data:{user_id:this.userID},method:"POST",success:function(){}}),uni.request({url:"https://af1o32.toutiao15.com/create_recommendation",data:{user_id:this.userID},method:"POST"})),this.skinMode?uni.setTabBarStyle({color:"#333333",backgroundColor:"#F5F3F4",borderStyle:"back"}):uni.setTabBarStyle({color:"#333333",backgroundColor:"rgba(0,0,0,0.3)",borderStyle:"back"});uni.getSystemInfo({success:function(e){t.scrollH=e.windowHeight-uni.upx2px(100)}});for(var i=[],a=0;a<this.tabBars.length;a++)i.push({loadmore:"上拉加载更多",list:[],firstLoad:!1});this.news_list=i,console.log(this.news_list[0].list);try{uni.setStorageSync("tabIndex",this.tabBars[this.tabIndex].name)}catch(r){}this.getData(),console.log(this.news_list[0].list)},onShow:function(){console.log("index show");try{var t=uni.getStorageSync("skin_mode");""!==t&&(this.skinMode=t)}catch(r){}try{var e=uni.getStorageSync("font-size");""!==e&&(this.fontSize=0==e?"big":1==e?"normal":"small")}catch(r){}try{var n=uni.getStorageSync("theme_color");""==n&&(n=0),this.text_main_index=n,uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:this.theme_color[n]}),uni.setTabBarItem({index:0,selectedIconPath:"static/tabBar/homeed"+n+".png"}),uni.setTabBarItem({index:1,selectedIconPath:"static/tabBar/rcmded"+n+".png"}),uni.setTabBarItem({index:2,selectedIconPath:"static/tabBar/mineed"+n+".png"}),uni.setTabBarStyle({selectedColor:this.theme_color[n]})}catch(r){}for(var i=0,a=this.tabIndex;i<this.news_list[a].list.length;i+=1)this.modifyCommentCount(a,i)},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search"})},methods:{showEdit:function(){this.isShow=!this.isShow},onDragSortChange:function(t){var e=[];t.frontData||e.push(t.data);for(var n=0;n<this.tabBars.length;n++)this.tabBars[n].label!==t.data.label&&(this.tabBars[n].label!==t.frontData.label?e.push(this.tabBars[n]):(e.push(t.frontData),e.push(t.data)));this.tabBars=e},onChangeTab:function(t){this.changeTab(t.detail.current)},refresh:function(t){var e=this;uni.showLoading({title:"加载中...",mask:!1}),uni.request({url:"/toutiao/list/?ac=wap&format=json_raw&tag="+this.tabBars[t].type+"&as=A175ADC1C1BAE7E&cp=5D118A3E877E8E1&_signature=f60bLAAAIr6R60RntmQLRn-tGz",header:{Cookie:"__utma=252651093.67706439.1584015024.1584015024.1584015024.1; __utmz=252651093.1584015024.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6803298091418437133; UM_distinctid=170cebb9dd6cd-094ddc63b2ac67-b781636-144000-170cebb9dd7431; _ga=GA1.2.315616392.1584016367; csrftoken=fa925c7e673269eff8dad21b09d1fbaf"},success:function(n){e.news_list[t].list=n.data.data;for(var i=0;i<n.data.data.length;i+=1)uni.request({url:"https://af1o32.toutiao15.com/import_news?news_id="+n.data.data[i].item_id+"&news_name="+n.data.data[i].title+"&tabIndex="+e.tabBars[t].name+"&publish_time="+n.data.data[i].publish_time+"&source="+n.data.data[i].source}).then((function(t){var e=(0,r.default)(t,2);e[0],e[1]}));for(i=0;i<e.news_list[t].list.length;i+=1)e.modifyCommentCount(t,i);uni.hideLoading()}})},loadmore:function(t){var e=this,n=this.news_list[t];"上拉加载更多"===n.loadmore&&(n.loadmore="加载中",uni.request({url:"/toutiao/list/?ac=wap&format=json_raw&tag="+this.tabBars[t].type+"&as=A175ADC1C1BAE7E&cp=5D118A3E877E8E1&_signature=f60bLAAAIr6R60RntmQLRn-tGz",header:{Cookie:"__utma=252651093.67706439.1584015024.1584015024.1584015024.1; __utmz=252651093.1584015024.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6803298091418437133; UM_distinctid=170cebb9dd6cd-094ddc63b2ac67-b781636-144000-170cebb9dd7431; _ga=GA1.2.315616392.1584016367; csrftoken=fa925c7e673269eff8dad21b09d1fbaf"},success:function(i){for(var o=0;o<i.data.data.length;o+=1)uni.request({url:"https://af1o32.toutiao15.com/import_news?news_id="+i.data.data[o].item_id+"&news_name="+i.data.data[o].title+"&tabIndex="+e.tabBars[t].name+"&publish_time="+i.data.data[o].publish_time+"&source="+i.data.data[o].source}).then((function(t){var e=(0,r.default)(t,2);e[0],e[1]}));e.news_list[t].list=[].concat((0,a.default)(e.news_list[t].list),(0,a.default)(i.data.data)),o=0;for(var s=e.tabIndex;o<e.news_list[s].list.length;o+=1)e.modifyCommentCount(s,o);n.loadmore="上拉加载更多"}}))},changeTab:function(t){if(this.tabIndex!==t){try{uni.setStorageSync("tabIndex",this.tabBars[t].name)}catch(e){}this.tabIndex=t,this.scrollInto="tab"+t,this.getData()}},modifyCommentCount:function(t,e){var n=this;uni.request({url:"https://af1o32.toutiao15.com/get_news_info?news_id="+this.news_list[t].list[e].item_id,success:function(i){n.news_list[t].list[e].comment_count=i.data.comment_count}})},getData:function(){var t=this,e=this.tabIndex;0==this.news_list[e].firstLoad&&(uni.showLoading({title:"加载中...",mask:!1}),uni.request({url:"/toutiao/list/?ac=wap&format=json_raw&tag="+this.tabBars[e].type+"&as=A175ADC1C1BAE7E&cp=5D118A3E877E8E1&_signature=f60bLAAAIr6R60RntmQLRn-tGz",header:{Cookie:"__utma=252651093.67706439.1584015024.1584015024.1584015024.1; __utmz=252651093.1584015024.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6803298091418437133; UM_distinctid=170cebb9dd6cd-094ddc63b2ac67-b781636-144000-170cebb9dd7431; _ga=GA1.2.315616392.1584016367; csrftoken=fa925c7e673269eff8dad21b09d1fbaf"},success:function(n){t.news_list[e].list=n.data.data,uni.hideLoading();for(var i=0;i<t.news_list[e].list.length;i+=1)uni.request({url:"https://af1o32.toutiao15.com/import_news?news_id="+n.data.data[i].item_id+"&news_name="+n.data.data[i].title+"&tabIndex="+t.tabBars[e].name+"&publish_time="+n.data.data[i].publish_time+"&source="+n.data.data[i].source}).then((function(t){}));for(i=0;i<t.news_list[e].list.length;i+=1)t.modifyCommentCount(e,i)}}),this.news_list[e].firstLoad=!0)}}};e.default=d},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var i=n("b6802");function a(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},e0b3:function(t,e,n){"use strict";n.r(e);var i=n("5c5a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e5a0:function(t,e,n){"use strict";n.r(e);var i=n("47ee"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},eea7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.vh-1px[data-v-1f9e1fc4],\n.vh-1px-t[data-v-1f9e1fc4],\n.vh-1px-b[data-v-1f9e1fc4],\n.vh-1px-tb[data-v-1f9e1fc4],\n.vh-1px-l[data-v-1f9e1fc4],\n.vh-1px-r[data-v-1f9e1fc4]{position:relative}.vh-1px[data-v-1f9e1fc4]:before{content:" ";position:absolute;left:0;top:0;width:200%;border:%?1?% solid #eee;color:#eee;height:200%;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(.5);transform:scale(.5)}.vh-1px-t[data-v-1f9e1fc4]:before{content:" ";position:absolute;left:0;top:0;right:0;height:%?1?%;border-top:%?1?% solid #eee;color:#eee;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.vh-1px-b[data-v-1f9e1fc4]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:%?1?%;border-bottom:%?1?% solid #eee;color:#eee;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.vh-1px-tb[data-v-1f9e1fc4]:before{content:" ";position:absolute;left:0;top:0;right:0;height:%?1?%;border-top:%?1?% solid #eee;color:#eee;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.vh-1px-tb[data-v-1f9e1fc4]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:%?1?%;border-bottom:%?1?% solid #eee;color:#eee;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.vh-1px-l[data-v-1f9e1fc4]:before{content:" ";position:absolute;left:0;top:0;width:%?1?%;bottom:0;border-left:%?1?% solid #eee;color:#eee;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.vh-1px-r[data-v-1f9e1fc4]:after{content:" ";position:absolute;right:0;top:0;width:%?1?%;bottom:0;border-right:%?1?% solid #eee;color:#eee;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.drag-sort[data-v-1f9e1fc4]{width:100%}.drag-sort-item[data-v-1f9e1fc4]{position:absolute!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:0;margin:0;background:#fff;padding:0 15px;box-sizing:border-box}.drag-sort-item .item[data-v-1f9e1fc4]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.drag-sort-item .touch-tight[data-v-1f9e1fc4]{width:24px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.touch[data-v-1f9e1fc4]{height:100%;width:50px}.ico_drag[data-v-1f9e1fc4]{display:inline-block;width:24px;height:12px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAAAXNSR0IArs4c6QAAAEtJREFUWAnt1cEJACAMA0B1/506moIr5FEK51+Jl0d2Vd01+JzB2X90H5jeoPwECBDIBLYlzgDj25Y4JvQAAQIERgtY4u76LHF3Aw8rGQnK3sYAXQAAAABJRU5ErkJggg==) 0 0 no-repeat;background-size:100% auto}.active[data-v-1f9e1fc4]{box-shadow:0 0 %?40?% #ddd;z-index:99}',""]),t.exports=e},f7a4:function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("54f8")),r=i(n("f3f3")),o={name:"drag-sort",mixins:[],components:{},data:function(){return{height:55,currentList:[],active:-1,itemIndex:0,topY:0,deviationY:0}},computed:{currentListLength:function(){return this.currentList.length*this.height}},props:{list:{type:Array,default:function(){return[]}},props:{type:Object,default:function(){return{label:"label",value:"value"}}}},watch:{list:function(t){this.onUpdateCurrentList()}},created:function(){this.onUpdateCurrentList()},mounted:function(){},updated:function(){},filters:{},methods:{onUpdateCurrentList:function(){var t=[];for(var e in this.list)t.push((0,r.default)({},this.list[e],{index:Number(e),y:e*this.height,animation:!0}));this.currentList=t},touchstart:function(t){var e=this,n=wx.createSelectorQuery().in(this);n.select("#drag").boundingClientRect(),n.exec((function(n){e.topY=n[0].top;var i=t.mp.touches[0].clientY-n[0].top;for(var a in e.deviationY=i%e.height,e.currentList)if(e.currentList[a].index*e.height<i&&(e.currentList[a].index+1)*e.height>i){e.active=Number(a),e.itemIndex=e.currentList[a].index;break}}))},touchmove:function(t){if(!(this.active<0)){var e=t.mp.touches[0].clientY-this.topY-this.deviationY;for(var n in this.currentList[this.active].y=e,this.currentList)if(this.currentList[n].index!==this.currentList[this.active].index)if(this.currentList[n].index>this.currentList[this.active].index){if(e>this.currentList[n].index*this.height-this.height/2){this.currentList[this.active].index=this.currentList[n].index,this.currentList[n].index=this.currentList[n].index-1,this.currentList[n].y=this.currentList[n].index*this.height;break}}else if(e<this.currentList[n].index*this.height+this.height/2){this.currentList[this.active].index=this.currentList[n].index,this.currentList[n].index=this.currentList[n].index+1,this.currentList[n].y=this.currentList[n].index*this.height;break}}},touchend:function(t){var e=this;this.itemIndex!==this.currentList[this.active].index&&this.active>-1&&this.$emit("change",{data:function(){var t=(0,r.default)({},e.currentList[e.active]);return delete t.index,delete t.y,delete t.animation,t}(),frontData:function(){var t,n=(0,a.default)(e.currentList);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(e.currentList[e.active].index-1===i.index){var o=(0,r.default)({},i);return delete o.index,delete o.y,delete o.animation,o}}}catch(s){n.e(s)}finally{n.f()}}()}),this.currentList[this.active].animation=!0,this.currentList[this.active].y=this.currentList[this.active].index*this.height,this.active=-1}}};e.default=o},ffc4:function(t,e,n){"use strict";var i=n("c13d"),a=n.n(i);a.a}}]);