(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3566c032"],{"0f5f":function(t,s,e){"use strict";var i=e("cf9c"),a=e.n(i);a.a},cf9c:function(t,s,e){},e3de:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:" w-full item-start  "},[e("div",{staticClass:" grid grid-cols-3 gap-2  "},[e("div",{staticClass:"col-span-1"},[e("button",{staticClass:"btn btn-success",on:{click:t.saveS}},[t._v("儲存單筆設定")])]),e("div",{staticClass:"col-span-1"},[e("button",{staticClass:"btn btn-success",on:{click:t.saveMMdf}},[t._v("批次_北場11+南12-25")])])]),t.submitted?e("div",[e("h4",[t._v("You submitted successfully!")]),e("v-btn",{staticClass:"btn btn-success",on:{click:t.newSt}},[t._v("Add")])],1):e("div",[e("v-tabs",{attrs:{"background-color":"primary","fixed-tabs":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[t.hide?t._e():e("v-tab",{key:"k3",attrs:{href:"#k3"}},[t._v(" 422版,測試中 ")])],1),e("v-tabs-items",{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[e("v-tab-item",{key:"k3",attrs:{value:"k3"}},[e("div",[e("div",{staticClass:"flex justify-center "},[t._v(" 靶位現況 ")]),e("div",{staticClass:"flex justify-center w-full my-3"},[e("v-row",[e("v-text-field",{staticClass:"text-xs w-1/12 px-1",attrs:{solo:"",label:"場區"},model:{value:t.st.pos,callback:function(s){t.$set(t.st,"pos",s)},expression:"st.pos"}}),e("v-text-field",{staticClass:"text-xs w-1/12 px-1",attrs:{solo:"",label:"位置"},model:{value:t.st.sno,callback:function(s){t.$set(t.st,"sno",s)},expression:"st.sno"}}),e("v-text-field",{staticClass:"text-xs w-1/12 px-1",attrs:{solo:"",label:"序號"},model:{value:t.st.sno_idx,callback:function(s){t.$set(t.st,"sno_idx",s)},expression:"st.sno_idx"}}),e("v-expand-transition",{},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("div",{staticClass:"flex ml-10 justify-center py-4 "},[e("v-row",[e("p",[t._v("靶位母編號")]),e("v-chip-group",{staticClass:"md:w-1/3 ",attrs:{"active-class":"bg-yellow-600 text-white text-xs  "},model:{value:t.st.sno,callback:function(s){t.$set(t.st,"sno",s)},expression:"st.sno"}},[e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"1"}},[t._v(" 01 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"2"}},[t._v(" 02 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"3"}},[t._v(" 03 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"4"}},[t._v(" 04 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"5"}},[t._v(" 05 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"6"}},[t._v(" 06 ")])],1),e("p",[t._v("靶位子編號")]),e("v-chip-group",{staticClass:"md:w-1/3 ",attrs:{"active-class":"bg-yellow-600 text-white text-xs  "},model:{value:t.st.sno_idx,callback:function(s){t.$set(t.st,"sno_idx",s)},expression:"st.sno_idx"}},[e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"01"}},[t._v(" 01 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"02"}},[t._v(" 02 ")]),e("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"03"}},[t._v(" 03 ")])],1)],1)],1)])])],1)],1)])])],1)],1)])},a=[],o=(e("d3b7"),e("25f0"),e("69e5")),n={name:"add-tutorial",data:function(){return{includeFiles:!1,enabled:!1,toggle_exclusive:[],show:!0,st_sno:"",statu01_1:[],slted01_1:[],st:{pos:"北",sno:"4",sno_idx:"01",tmp_idx:"",ply_statu:"首次",left_time:"12:00",amt:"",paymt:"",memo:""},menu:!1,modal:!1,menu2:!1,tab:"",amenities:[],neighborhoods:[],season_states:["s1","s2","s3","s4"],ttemp:[],tutorial:{title:"",description:"",idx:[],published:!1},submitted:!1}},methods:{saveS:function(){var t={pos:this.st.pos,sno:this.st.sno,sno_idx:"01",tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,ply_statu:this.st.ply_statu};o["a"].create(t).then((function(){Swal.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})})).catch((function(t){console.log(t)}))},saveMMdf:function(){for(var t=1;t<=25;t++)this.saveMdf(t,"01"),this.saveMdf(t,"02"),this.saveMdf(t,"03");Swal.fire({position:"top-end",icon:"success",title:"1-25 pos has been saved",showConfirmButton:!1,timer:1500})},saveMdf:function(t,s){var e="R樓";t>=7&&(e="2樓");var i={pos:e,sno:t,sno_idx:s,tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,ply_statu:this.st.ply_statu};o["a"].create(i).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}))},saveS_by_idx:function(t){var s=this,e={pos:this.st.pos,sno:this.st._sno,sno_idx:t};o["a"].create(e).then((function(){console.log("Created new item successfully!"),s.submitted=!0})).catch((function(t){console.log(t)}))},newDataa:function(t,s,e){var i={pos:e,sno:t.toString(),sno_idx:"0"+s.toString(),tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,ply_statu:this.ply_statu};return i},autoInstallByforLoop1:function(){for(var t=1;t<=3;t++)for(var s=1;s<=3;s++){var e=this.newDataa(t,s,"北");o["a"].create(e).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}))}this.submitted=!0},autoInstallByforLoop2:function(){for(var t=12;t<=25;t++)for(var s=1;s<=3;s++){var e=this.newDataa(t,s,"南");o["a"].create(e).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}))}this.submitted=!0},autoInstallByforLoop3:function(){for(var t=19;t<=21;t++)for(var s=1;s<=3;s++){var e=this.newDataa(t,s,"南");o["a"].create(e).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}))}this.submitted=!0},autoBud:function(){var t={pos:this.st.pos,sno:this.st.sno,sno_idx:"01",tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,slted:this.st.slted,statu:this.st.statu};o["a"].create(t).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}));var s={pos:this.st.pos,sno:this.st.sno,sno_idx:"02",tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,slted:this.st.slted,statu:this.st.statu};o["a"].create(s).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}));var e={pos:this.st.pos,sno:this.st.sno,sno_idx:"03",tmp_idx:this.st.tmp_idx,left_time:this.st.left_time,memo:this.st.memo,slted:this.st.slted,statu:this.st.statu};o["a"].create(e).then((function(){console.log("Created new item successfully!")})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={title:"",description:"",published:!1}},newSt:function(){this.submitted=!1,this.st={}}},mounted:function(){o["a"].getAll().on("value",this.onDataChange)}},c=n,l=(e("0f5f"),e("2877")),u=e("6544"),r=e.n(u),d=e("8336"),h=e("cc20"),v=e("ef9a"),f=e("0789"),m=e("0fd9"),p=e("71a3"),x=e("c671"),_=e("fe57"),b=e("aac8"),w=e("8654"),g=Object(l["a"])(c,i,a,!1,null,null,null);s["default"]=g.exports;r()(g,{VBtn:d["a"],VChip:h["a"],VChipGroup:v["a"],VExpandTransition:f["a"],VRow:m["a"],VTab:p["a"],VTabItem:x["a"],VTabs:_["a"],VTabsItems:b["a"],VTextField:w["a"]})}}]);