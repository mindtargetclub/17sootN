<template>
    <div class=" flex justify-center  ">
    
        <div class="w-1/4 ml-10">
            <v-banner sticky>
                <!-- grid grid-cols-5 gap-1  -->
                
                <div class="flex-c justify-center w-full "> 

                     
                        
                    <div class="mx-1">
                         <v-checkbox v-model="copyRight_T" :label="`點擊後. 啟動複製工具`"></v-checkbox> 
 
                        
                        <v-text-field  clearable solo dense v-model="bch_left_time" class="text-xs " label="離場時間" placeholder="離時間">
                        </v-text-field>
                    </div>
    
                    <!-- <div class="mx-1">
                        <v-checkbox v-model="copyRight_N" :label="`copy 號碼牌`"></v-checkbox>
    
                        <v-text-field v-show="copyRight_N" dense v-model="bch_tmp_idx" class="text-xs  " label="號碼牌" placeholder="號碼牌">
                        </v-text-field>
                    </div>  -->
                    <hr>
                    <div class="mx-1"> 
                        <v-checkbox v-model="use_BKingGp"   :label="`點擊後. 顯示客人群組 ` " ></v-checkbox>
                        <v-checkbox v-model="copyRight_M" :label="`點擊後. 啟動複製工具 ` " ></v-checkbox> 
                         <v-text-field  clearable solo dense  v-model="bch_memo" class="text-xs  " label="客人備註"  >
                        </v-text-field>    
                    </div>

                    
                    <div class="mx-1">
                        <v-checkbox text v-model="dialog" label="開啟.靶位清理工具"></v-checkbox>
                        <v-row > 
                            <v-btn class="my-1" v-show="dialog" solo @click="reSet_pos_0">全場(01 ~ 20)</v-btn> 
                            <v-btn class="my-1" v-show="dialog" solo @click="reSet_pos_1">北場(01 ~ 11)</v-btn> 
                            <v-btn class="my-1" v-show="dialog" solo @click="reSet_pos_2">南場(12 ~ 18)</v-btn>
                        </v-row> 
                    </div> 
                    <br>

                    <div class="mx-1">
                         
                         目前上線人數：  (預計顯示 功能)
 
                         <br>
                         
                         北場(首次/ 續時):
                         
                         <br>
                         南場(首次/ 續時):
                    </div> 
                    
                </div>
            </v-banner>
        </div>
    
        <div class="w-3/4">
            <!-- <v-virtual-scroll > -->
            <v-card
                v-scroll.self="onScroll"
                class="overflow-y-auto"
                max-height="720"
            >
            
            <v-tabs v-model="tab" active-class="bg-gray-900 text-white" fixed-tabs>
                <v-tab key='k1' href='#k1' v-if="!hide">
                    Ｒ樓
                </v-tab>
    
                <v-tab key='k2' href='#k2'>
                    1樓
                </v-tab>
    
                <!-- <v-tab key='k3' href='#k3' v-if="!hide">
                    北北東 _場
                </v-tab> -->
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item key='k1' value='k1'>  
                    <div> 
                        <div v-for="(tutorial, n) in tutorials" :key="n" v-if="tutorial.pos =='R樓'" @click="setActiveTutorial(tutorial, n)">
                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 " v-if="tutorial.sno =='1'| tutorial.sno =='2' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-yellow-100 border-yellow-300 " v-if="tutorial.sno =='3'| tutorial.sno =='4' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-green-100 border-green-300 " v-if="tutorial.sno =='5'| tutorial.sno =='6' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-gray-100 border-gray-300 " v-if="tutorial.sno =='7'| tutorial.sno =='8' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 " v-if="tutorial.sno =='9'| tutorial.sno =='10' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 " v-if="tutorial.sno =='11'  " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>  
    
                        </div>
                    </div>
                </v-tab-item>
    
                <v-tab-item key='k2' value='k2'> 
                   <div> 
                        <div v-for="(tutorial, n) in tutorials" :key="n" v-if="tutorial.pos =='1樓'" @click="setActiveTutorial(tutorial, n)">
                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 " v-if="tutorial.sno =='12'| tutorial.sno =='13' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-green-100 border-green-300 " v-if="tutorial.sno =='14'| tutorial.sno =='15' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 " v-if="tutorial.sno =='16'| tutorial.sno =='17' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div>

                            <div class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-gray-100 border-gray-300 " v-if="tutorial.sno =='18'| tutorial.sno =='19' " >
                                <div class="grid grid-cols-5 gap-1">

                                    <div class="col-span-2 flex Justify-end"> 
                                        <v-btn class=" mx-6"  v-show="dialog"  @click="upld_Claer(tutorial)">
                                            清理把位
                                            </v-btn>
                                        
                                        <v-chip class="my-2 mr-3"   :color="ChkTime2getColor(tutorial.left_time)" >  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}  </v-chip>
                                        <v-text-field  v-show="use_BKingGp" class=" mr-3" label="客人備註" v-model=" tutorial.memo " @change="upldplayGp(tutorial)" dense></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex"> 
                                        
                                        <v-text-field solo class=" mx-6" label="牌號"     v-model=" tutorial.tmp_idx "   @change="upldtmp_idx(tutorial)" dense></v-text-field>
                                        <v-text-field  class=" mx-3" label="離場時間" v-model=" tutorial.left_time " @change="upldleft_time(tutorial)" dense></v-text-field>
                                        
                                       <v-btn-toggle
                                            v-model="tutorial.ply_statu"
                                            @change="upldStatu(tutorial)"
                                            tile
                                            color="#5E35B1"
                                            group
                                        >
                                            <v-btn  value="首次">
                                            首次
                                            </v-btn>

                                            <v-btn value="免講習">
                                            免講習
                                            </v-btn>

                                            <v-btn value="續0.5">
                                            續0.5
                                            </v-btn>

                                            <v-btn value="續1.0">
                                            續1.0
                                            </v-btn>
                                        </v-btn-toggle> 
                                    </div> 
                                </div>
                            </div> 
    
                        </div>
                    </div>
                </v-tab-item>
    
    
            </v-tabs-items>
            </v-card>
        </div>
    
    
    
    </div>
</template>
 

<script>
import TutorialDetails from "./bkadd5_Mdf";
import TutorialDataService from "../services/SeatPrepareService";

import SeatDataService from "../services/SeatPrepareService";
import dayjs from 'dayjs';


import PmtDataService from "../services/PmtService";
import Vue from 'vue' 
import JsonCSV from 'vue-json-csv'
Vue.component('downloadCsv', JsonCSV)

export default {
    name: "tutorials-list",
    components: { TutorialDetails },


    data() {
        return {
            // - - - - - 
            currentTime: Date.now(),
            cT:"",
            plySTATU:"",

            // - - - - - 
            switch1: true,
            switch2: false,


            ex11: ['red'],
            ex: false,


            dialog: false,
            tab: "",
            ckbx: "",
            copyRight_N: false,
            copyRight_T: false,
            copyRight_M: false,

            // - - - - - - - - - - - - - - - 
            dev_TooL_show: false,
            Dev_Tool_0: false,
            Dev_Tool_1: false,
            Dev_Tool_2: false,
            Dev_Tool_3: false,

            bch_left_time: "",
            bch_tmp_idx: "",
            bch_memo: "",

            show: false,
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,

            // - - - -  - - - -  - - - -  - - - -
            use_BKingGp:false,

            // ply_statu_List:['首次','免講習','保留席','續.未繳費','續0.5','續1.0'],
            // - - - -  - - - -  - - - -  - - - -  
            PmtLists: [], 

            p:['key','name','phone','ply_amt','plyd'],
           
            labels: { 
                key:'流水編號', 
                phone:'手機', 

                build_date:'日期',  
                ply_amt : '收入金額（＋）',
                mb_id:'會員編號',
                mb_name:'客戶',
                pd_ID:'商品編號',
                pd_name:'產品名稱',

                payCash:'現金',
                payLinPay: 'Linepay', 
                payCTCard: '刷卡機', 
                payNetBank: '網路(線上)', 
                payGovTik: '動滋卷',  

                memo:'備註', 
                bls_CNT:'差額', 
                bls_CNT_reson:'差額原因', 

                aCNT_sC:'小分類', 
                pcs_price:'單價', 
                aCNT_name:'會計科目名稱', 
                aCNT_c_ID:'會計科目代號', 
                aCNT_c_name:'科目名稱',  

                bld_name:'建立者',  
            },
            // fields: [ 'name','ply_amt','key','phone','plyd'],
            fields: [ 'name','phone','ply_amt','key','build_date','payCash','payNetBank','payCTCard','payGovTik','payLinPay','memo','bls_CNT','bls_CNT_reson','aCNT_sC','pcs_price','aCNT_name','aCNT_c_ID','aCNT_c_name'],
            // 修改_簡化版本  
            // 日期','原因','收入金額（＋）','會員編號','客戶','商品編號','產品名稱','銷售數量','小計','現金','網路(線上)','刷卡機','匯款','動滋卷','Linepay','備註','差額','差額原因','付款方式','小分類','單價','會計科目名稱','會計科目代號','科目名稱','建立者','修改時間', 
            // 原版本
            // 日期','原因','日期班別','收入金額（＋）','會員編號','客戶','商品編號','產品名稱','銷售數量','小計','現金','網路(線上)','刷卡機','匯款','動滋卷','Linepay','運動卷','熊好卷','迪卡儂卷','台灣pay','發票號碼','備註','差額','差額原因','付款方式','小分類','單價','收入登錄','會計科目名稱','會計科目代號','科目名稱','學員報名課程代號','建立者','修改時間','5倍卷'
            // - - - -  - - - -  - - - -  - - - - 
            // - - - -  - - - -  - - - -  - - - - 
            fileName:'UUU',
        };
    },
    methods: {

        updateTutorial(e) {
            const data = {
                // sno_id: this.currentTutorial.sno_idx,
                // pos: this.currentTutorial.pos,
                // sno: this.currentTutorial.sno,
                // sno_idx: this.currentTutorial.sno_idx,

                tmp_idx: e.tmp_idx,
                left_time: e.left_time,
                memo: e.memo,

                // amt: this.currentTutorial.amt,
                // paymt: this.currentTutorial.paymt,
                ply_statu: e.ply_statu,

                // ply_type: this.currentTutorial.ply_type,
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        upldtmp_idx(e) {
            const data = {
                 tmp_idx: e.tmp_idx,
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        upldleft_time(e) {
            const data = { 
                left_time: e.left_time,  
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        upldplayGp(e) {
            const data = {
                 memo: e.memo,
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        upldStatu(e) {
            const data = {
                 ply_statu: e.ply_statu,
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        upld_Claer(e) {
            const data = {
                 memo: "",
                 left_time:"",
                 tmp_idx: "",
                 ply_statu:"",
            };

            TutorialDataService.update(e.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        pmt_onDataChange(items) {

            let _tansCATM = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tansCATM.push({

                    key: key,
 
                    name: data.name, 
                    phone: data.phone, 
/// 這邊需要再往下製作 ... 累了先睡，再安排吧

                });
            });

            this.pmtLists = _tansCATM;
        },



        onDataChange(items) {

            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key, 
                    pos: data.pos,
                    sno: data.sno,
                    sno_idx: data.sno_idx,
                    sno_id: data.sno_id,

                    tmp_idx: data.tmp_idx,
                    left_time: data.left_time,
                    memo: data.memo,

                    player_group: data.player_group,
                    amt: data.amt,
                    paymt: data.paymt,

                    // - - - - - - - - - - - - - -

                    ply_type : data.ply_type,
                    ply_statu: data.ply_statu,


                    pmt_sno: data.pmt_sno, 
                });
            });

            this.tutorials = _tutorials;
        },



        refreshList() {
            this.currentTutorial = null;
            this.currentIndex = -1;
        },

        setActiveTutorial(tutorial, index) {

            this.currentTutorial = tutorial;
            this.currentIndex = index;

            if (this.copyRight_N != false) {
                this.currentTutorial.tmp_idx = this.bch_tmp_idx;
                this.bch_updta();
                this.message = "複製更新 成功!";
            }

            if (this.copyRight_T != false) {
                this.currentTutorial.left_time = this.bch_left_time;
                this.bch_updta();
                this.message = "複製更新 成功!";
            }

            if (this.copyRight_M != false) {
                this.currentTutorial.memo = this.bch_memo;
                this.bch_updta();
                this.message = "複製更新 成功!";
            }
        },

        bch_updta() {
            const data = {
                tmp_idx: this.currentTutorial.tmp_idx,
                left_time: this.currentTutorial.left_time,
                memo: this.currentTutorial.memo,
            };

            SeatDataService.update(this.currentTutorial.key, data)
                .then(() => {
                    this.message = "更新成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        }



        // reSet_bch_N(){ if(this.copyRight_N == false) { this.bch_left_time = ""; }  },
        // reSet_bch_T(){ if(this.copyRight_T == false) { this.bch_tmp_idx = ""  ; }  },

        ,


        reSet_pos_0() {

            for (let index = 0; index <= 100; index++) {

                this.setActiveTutorial(this.tutorials[index], index);
                this.reSetOne(this.tutorials[index], index);
            }
            this.dialog.value = false;

        },
        
        reSet_pos_1() {

            // for (let index = 0; index <= 30; index++) {

            //     this.setActiveTutorial(this.tutorials[index], index);
            //     this.reSetOne(this.tutorials[index], index);


            // }
            // this.dialog.value = false;
            Swal.fire({
                    title: 'Are you sure?',
                    text: "準備清理資料!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '馬上, 進行清理 !',
                    cancelButtonText: '取消!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        for (let index = 0; index <= 30; index++) { 
                            this.setActiveTutorial(this.tutorials[index], index);
                            this.reSetOne(this.tutorials[index], index); 
                        }
                        
                        Swal.fire(
                        '清除完畢!',
                        '目前.',
                        'success'
                        )
                    }
                    })

        },

        reSet_pos_2() {

            Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        for (let index = 31; index <= 100; index++) {

                            this.setActiveTutorial(this.tutorials[index], index);
                            this.reSetOne(this.tutorials[index], index);

                        }
                        
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                    })

        },

        reSet_pos_3() {

            Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        for (let index = 31; index <= 100; index++) {

                            this.setActiveTutorial(this.tutorials[index], index);
                            this.reSetOne(this.tutorials[index], index);

                        }
                        
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                    })

            
            this.dialog.value = false;

        }, 
        reSetOne(tutorial, index) {

            this.currentTutorial = tutorial;
            this.currentIndex = index;

            this.currentTutorial.tmp_idx = "";
            this.currentTutorial.left_time = "";
            this.currentTutorial.memo = "";
            this.currentTutorial.ply_statu = "";
            this.currentTutorial.ply_type = "";
            // this.currentTutorial.pmt_List = "";

            const data = {
                tmp_idx: "",
                left_time: "",
                memo: "",

                ply_type: "",
                ply_statu: "", 
            };

            SeatDataService.update(this.currentTutorial.key, data)
                .then(() => {
                    this.message = "更新成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        removeAllTutorials() {
            SeatDataService.deleteAll()
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },


        ChkTime2getColor(left_time) { 

            let now_H = parseInt(this.dayjs(this.cT).format("HH"))  
            let now_M = parseInt(this.dayjs(this.cT).format("mm"))  
            let colAry = ['#d3dce6','#E91E63','#2196F3']

            var strAry = left_time.split(':')

            let booking_H = parseInt(strAry[0] )
            let booking_M = parseInt(strAry[1] ) 

            try{  
                if ( left_time == "") { return colAry[0]  }
                else if ( now_H > booking_H )  
                { 
                    if ( now_M >= booking_M ) { return colAry[1]  }
                    else if( now_M < booking_M && now_H >= booking_H ) { return colAry[1] } 
                }
                else if( now_H == booking_H  )
                { 
                    if ( now_M >= booking_M ) { return colAry[1]  }
                    else if( now_M < booking_M ) { return colAry[2]  } 
                }
                else if( now_H < booking_H  )
                { 
                    if ( now_M >= booking_M ) { return colAry[2]  }
                    else if( now_M < booking_M ) { return colAry[2] } 
                } 
                else{ return colAry[3] }
                }
            catch
            { return colAry[3]  } 
      },
      updateCurrentTime(){ this.cT = Date.now(); },
      
      getFile_name()
        {  
          let L ='靶位收益紀錄_'; 
          let k = this.dayjs(Date.now()).format("MM月DD日_HH點mm分");
          let J ='.csv';
          this.fileName = L+k+J ;
        },


    },
    mounted() {
        // console.log(_tutorials.title);  
        SeatDataService.getAll().on("value", this.onDataChange);
        PmtDataService.getAll().on("value", this.pmt_onDataChange);
        this.interval = setInterval(this.updateCurrentTime, 1000);
    },
    beforeDestroy() {
        SeatDataService.getAll().off("value", this.onDataChange);
    },


};
</script>

<style>
/* .submit-form {
  max-width: 300px;
  margin: auto;
} */
</style>


<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
