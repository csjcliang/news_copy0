(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myCollect-myCollect"],{"0c4e":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{height:"5rpx","background-color":"#F5F5F4"}})},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"145eb":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".bgColor[data-v-24e04d36]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1}.news_info[data-v-24e04d36]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.star_digg[data-v-24e04d36]{margin-right:%?10?%}.star_img[data-v-24e04d36]{width:%?55?%;height:%?55?%}.digg[data-v-24e04d36]{margin-left:%?10?%}.digg_img[data-v-24e04d36]{position:relative;width:%?55?%;height:%?55?%}.comments_digg_count[data-v-24e04d36]{font-size:%?18?%;position:relative;bottom:%?40?%;left:%?-10?%;color:#707070}.change_color[data-v-24e04d36]{color:#f45858}",""]),t.exports=e},1995:function(t,e,i){var n=i("145eb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0178036d",n,!0,{sourceMap:!1,shadowMode:!1})},"44b0":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bgColor",style:t.skinMode?"":"background-color: rgba(0,0,0,0.2)"}),t._l(t.data_list,(function(e,n){return i("v-uni-view",{key:e.news_id},[0==e.delete_mark?i("v-uni-view",[i("v-uni-view",{staticClass:"p-2 animated fast fadeIn"},[i("v-uni-view",{staticClass:"my-1",class:t.fontSizeTitle,staticStyle:{"line-height":"1.4"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openDetail(e.news_id)}}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"news_info flex align-center"},[i("v-uni-view",{staticClass:"author_time flex justify-start",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openDetail(e.news_id)}}},[i("v-uni-view",{staticClass:"mr-2",class:t.fontSizeDetail,staticStyle:{color:"#999999","line-height":"1.3"}},[t._v(t._s(e.media_name))]),i("v-uni-text",{class:t.fontSizeDetail,staticStyle:{color:"#9D9589","line-height":"1.3"}},[t._v(t._s(e.publish_time))])],1),i("v-uni-view",{staticClass:"star_digg flex"},[i("v-uni-view",{staticClass:"star",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.collect_new(e)}}},[i("v-uni-image",{staticClass:"star_img",attrs:{src:1==e.is_star?"../../static/comment_bar/star_1.png":"../../static/comment_bar/star_0.png",mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"digg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.digg_new(e)}}},[i("v-uni-image",{staticClass:"digg_img",attrs:{src:1==e.is_digg?"../../static/comment_bar/like_1.png":"../../static/comment_bar/like_0.png",mode:"aspectFit"}}),i("v-uni-text",{class:["comments_digg_count",1==e.is_digg?"change_color":""]},[t._v(t._s(e.digg_count))])],1)],1)],1)],1)],1):t._e(),i("divider")],1)}))],2)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},4926:function(t,e,i){"use strict";i.r(e);var n=i("44b0"),a=i("7e7a");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("93ae");var o,u=i("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"24e04d36",null,!1,n["a"],o);e["default"]=c.exports},"7e7a":function(t,e,i){"use strict";i.r(e);var n=i("9fb2"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"93ae":function(t,e,i){"use strict";var n=i("1995"),a=i.n(n);a.a},"9fb2":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f017")),s={components:{divider:a.default},data:function(){return{userid:0,data_list:[],skinMode:!0,fontSize:"normal"}},computed:{fontSizeTitle:function(){return"big"==this.fontSize?"font-md":"normal"==this.fontSize?"font":"font-sm"},fontSizeDetail:function(){return"big"==this.fontSize?"font":"normal"==this.fontSize?"font-sm":"font-small"}},onLoad:function(){try{var t=uni.getStorageSync("skin_mode");""!==t&&(this.skinMode=t)}catch(i){}try{var e=uni.getStorageSync("font-size");""!==e&&(this.fontSize=0==e?"big":1==e?"normal":"small")}catch(i){}},onShow:function(){var t=this;this.data_list=[];var e=uni.getStorageSync("user_id");this.userid=e,uni.request({url:"https://af1o32.toutiao15.com/getCollectByUid",data:{user_id:this.userid},method:"POST",success:function(e){for(var i=0;i<e.data.result.length;i+=1)t.setDataList(e.data.result[i].news_id,e.data.result[i].updatedAt)}}),console.log(this.data_list)},onPullDownRefresh:function(){uni.redirectTo({url:"../myCollect/myCollect"}),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},methods:{timestampToTime_:function(t){var e=new Date(1e3*t),i=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",a=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",s=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",o=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",u=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return i+n+a+s+o+u},setDataList:function(t,e){var i=this,n={};uni.request({url:"https://af1o32.toutiao15.com/get_news_info",method:"GET",data:{news_id:t,user_id:this.userid},success:function(a){i.$set(n,"delete_mark",0),i.$set(n,"update_time",e),i.$set(n,"news_id",t),i.$set(n,"digg_count",a.data.digg_count),i.$set(n,"is_digg",a.data.is_digg),i.$set(n,"is_star",a.data.is_star)}}),uni.request({url:"https://m.toutiao.com/i"+t+"/info/?_signature=mvD7gBATx-10tqTLvd1hNJrw-5&i="+t,method:"GET",success:function(t){i.$set(n,"title",t.data.data.title),i.$set(n,"media_name",t.data.data.detail_source),i.$set(n,"publish_time",i.timestampToTime_(t.data.data.publish_time)),i.data_list.push(n)}})},openDetail:function(t){uni.navigateTo({url:"../../pages/info/info?news_id="+t})},collect_new:function(t){uni.request({url:"https://af1o32.toutiao15.com/collection",method:"POST",data:{news_id:t.news_id,user_id:this.userid},success:function(t){}}),t.delete_mark=1},digg_new:function(t){1==t.is_digg?(t.is_digg=0,t.digg_count=t.digg_count-1,uni.request({url:"https://af1o32.toutiao15.com/digg_cancel",method:"POST",data:{type:"news",id:t.news_id,user_id:this.userid}})):(t.is_digg=1,t.digg_count=t.digg_count+1,uni.request({url:"https://af1o32.toutiao15.com/digg",method:"POST",data:{type:"news",id:t.news_id,user_id:this.userid}}))}}};e.default=s},cf13:function(t,e,i){"use strict";i.r(e);var n=i("f599"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f017:function(t,e,i){"use strict";i.r(e);var n=i("0c4e"),a=i("cf13");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,u=i("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"2a47c7f6",null,!1,n["a"],o);e["default"]=c.exports},f599:function(t,e){}}]);