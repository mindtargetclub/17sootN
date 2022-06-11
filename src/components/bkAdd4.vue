<template>
    <div class=" w-full item-start  ">
    
    
        <div class=" grid grid-cols-3 gap-2  "> 
    
            <div class="col-span-1">
                <!-- <button @click="saveODR" class="btn btn-success"> 儲存...記錄 </button> -->
                <!-- <button @click="saveT" class="btn btn-success">T</button> -->
                <button @click="saveS" class="btn btn-success">Save</button>
    
                <!-- <button @click="autoBud" class="btn btn-success">autoBud</button> -->
                <button @click="autoInstallByforLoop1" class="btn btn-success">批次_重整北場靶位</button>
                <button @click="autoInstallByforLoop2" class="btn btn-success">批次_重整南場靶位</button>
            </div>
            <!-- </div> -->
    
    
    
    
        </div>
    
    
        <div v-if="!submitted">
            <v-tabs v-model="tab" background-color="primary" fixed-tabs>
    
                <v-tab key='k3' href='#k3' v-if="!hide">
                    422版,測試中
                </v-tab>
    
                <v-tab key='k2' href='#k2'>
    
                </v-tab>
    
                <v-tab key='k1' href='#k1' v-if="!hide">
                    13:00
                </v-tab>
    
                <v-tab key='k4' href='#k4' v-if="!hide">
                    14:00
                </v-tab>
    
                <v-tab key='k5' href='#k5' v-if="!hide">
                    15:00
                </v-tab>
    
    
    
            </v-tabs>
    
            <v-tabs-items v-model="tab">
    
    
                <v-tab-item key='k3' value='k3'>
    
                    <div>
    
    
    
                        <div class="flex justify-center "> 靶位現況 </div>
    
                        <div class="flex justify-center w-full my-3">
                            <v-row>
                                <v-text-field solo v-model="st.pos" class="text-xs w-1/12 px-1" label="場區"></v-text-field>
                                <v-text-field solo v-model="st.sno" class="text-xs w-1/12 px-1" label="位置"></v-text-field>
                                <v-text-field solo v-model="st.sno_idx" class="text-xs w-1/12 px-1" label="序號"></v-text-field>
                                <v-text-field solo v-model="st.tmp_idx" class="text-xs w-1/12 px-1" label="牌號"></v-text-field>
    
                                <v-text-field solo v-model="st.left_time" class="text-xs w-1/6 px-2" label="離場時間" placeholder="離場時間"></v-text-field>
                                <v-text-field solo v-model="st.memo" class="text-xs w-1/3 px-1" label="備註"></v-text-field>
    
                                <v-btn icon @click="show = !show">
                                    <v-icon x-large class="w-1/4">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
    
    
    
                                <v-expand-transition class="">
                                    <div v-show="show">
                                        <div class="flex ml-10 justify-center py-4 ">
                                            <v-row>
                                                <p>活動狀態</p>
    
                                                <v-chip-group v-model="st.tmp_idx" class="md:w-1/3 ">
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="第一次"> 首 </v-chip>
                                                    <v-chip active-class="bg-red-500     text-white text-x" value="有玩過"> 有玩過 </v-chip>
                                                    <v-chip active-class="bg-blue-500    text-white text-x" value="續時"> 續 </v-chip>
                                                    <v-chip active-class="bg-yellow-500  text-white text-x" value="缺席"> 等報到 </v-chip>
                                                    <v-chip active-class="bg-red-500    text-white text-x" value="保留預約"> 已預約 </v-chip>
                                                </v-chip-group>
    
                                                <p>客人類型</p>
                                                <v-chip-group v-model="st.memo" active-class="bg-yellow-600 text-white text-xs  " class="md:w-1/3 " multiple>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="散客"> 體驗 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="學員"> 學員 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="會員"> 月卡 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="選手"> 選手 </v-chip>
                                                </v-chip-group>
    
                                                <p>預備工具建議</p>
                                                <v-chip-group v-model="st.memo" active-class="bg-yellow-600 text-white text-xs  " class="md:w-1/3 " multiple>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="女"> 成人女 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="男"> 成人男 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="右手兒童"> R兒童 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="左手兒童"> L兒童 </v-chip>
                                                </v-chip-group>
    
                                                <p>距離</p>
                                                <v-chip-group v-model="st.memo" active-class="bg-yellow-600 text-white text-xs  " class="md:w-1/3 " multiple>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="輕體驗"> 體驗距離 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="練反曲"> 反曲弓練習 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="長距離"> 特殊長距離 </v-chip>
                                                </v-chip-group>
                                            </v-row>
                                            <v-divider></v-divider>
                                        </div>
                                        <v-divider></v-divider>
                                    </div>
                                </v-expand-transition>
                            </v-row>
                        </div>
                        <hr>
                        <button @click="saveS" class="btn py-19 w-full btn-success">Save</button>
                        <!-- <div class ="flex justify-center bg-green-900 text-gray-100 py-2 "> 下個時段  </div>  
        
        -->
    
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </div>
        <div v-else>
            <h4>You submitted successfully!</h4>
            <v-btn class="btn btn-success" @click="newSt">Add</v-btn>
    
    
    
        </div>
    </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import SeatDataService from "../services/SeatPrepareService";


export default {
    name: "add-tutorial",
    data() {
        return {
            includeFiles: false,
            enabled: false,
            toggle_exclusive: [],
            show: true,

            st_sno: "",
            statu01_1: [],
            slted01_1: [],

            st: {
                pos: "R樓",
                sno: "4",
                sno_idx: "01",
                tmp_idx: "",

                left_time: "",
                amt: "",
                paymt: "",
                memo: "",
                slted: [],
                statu: [],
                published: false,
                ply_statu:""
            },

            menu: false,
            modal: false,
            menu2: false,
            tab: "",


            amenities: [],
            neighborhoods: [],
            season_states: ['s1', 's2', 's3', 's4', ],
            ttemp: [],

            tutorial: {
                title: "",
                description: "",
                idx: [],
                published: false
            },
            submitted: false

        };
    },
    methods: {

        saveT() {
            var data = {
                title: this.tutorial.title,
                description: this.tutorial.description,
                published: false
            };

            TutorialDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!");
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },


        saveS() {
            var data = {
                pos: this.st.pos,
                sno: this.st.sno,
                sno_idx: this.st.sno_idx,
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time,


                memo: this.st.memo,

                amt: this.st.amt,
                paymt: this.st.paymt,
                slted: this.st.slted,
                statu: this.st.statu


            };

            SeatDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!");
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        saveS_by_idx(_sno_idx) {
            var data = {
                pos: this.st.pos,
                sno: this.st._sno,
                sno_idx: _sno_idx,

            };

            SeatDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!");
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },


        newDataa(_sno, _sno_idx,pos) {


            var dta = {
                pos: pos,
                sno: _sno.toString(),
                sno_idx: '0' + _sno_idx.toString(),
                tmp_idx: this.st.tmp_idx,
                left_time: this.st.left_time,
                memo: this.st.memo,

                ply_statu: this.st. v,

                amt: this.st.amt,
                paymt: this.st.paymt,

                slted: this.st.slted,
                statu: this.st.statu
            };

            return dta
        },

        autoInstallByforLoop1() {

            for (let ii = 1; ii <= 11; ii++) {

                for (let i = 1; i <= 3; i++) {
                    var data = this.newDataa(ii, i,'北');

                    SeatDataService.create(data)
                        .then(() => {
                            console.log("Created new item successfully!");
                            // 
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }

            }

            this.submitted = true;


        },

        autoInstallByforLoop2() {

            for (let ii = 12; ii <= 18; ii++) {

                for (let i = 1; i <= 3; i++) {
                    var data = this.newDataa(ii, i,'南');

                    SeatDataService.create(data)
                        .then(() => {
                            console.log("Created new item successfully!");
                            // 
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }

            }

            this.submitted = true;


        },

        autoBud() {

            var data = {
                pos: this.st.pos,
                sno: this.st.sno,
                sno_idx: '01',
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time,


                memo: this.st.memo,

                slted: this.st.slted,
                statu: this.st.statu


            };

            SeatDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!");
                    // this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });

            var data2 = {
                pos: this.st.pos,
                sno: this.st.sno,
                sno_idx: '02',
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time,


                memo: this.st.memo,

                slted: this.st.slted,
                statu: this.st.statu


            };

            SeatDataService.create(data2)
                .then(() => {
                    console.log("Created new item successfully!");
                    // this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });

            var data3 = {
                pos: this.st.pos,
                sno: this.st.sno,
                sno_idx: '03',
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time,


                memo: this.st.memo,

                slted: this.st.slted,
                statu: this.st.statu


            };

            SeatDataService.create(data3)
                .then(() => {
                    console.log("Created new item successfully!");
                    // this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });


        },




        newTutorial() {
            this.submitted = false;
            this.tutorial = {
                title: "",
                description: "",
                published: false
            };
        },

        newSt() {
            this.submitted = false;
            this.st = {
                // pos:"",
                // sno: "",
                // sno_idx: "",
                // tmp_idx: "",
                // left_time:"",
                // memo:"",
                // slted: [],
                // statu:[],
                // published: false
            };
        },


    },
    mounted() {
        TutorialDataService.getAll().on("value", this.onDataChange);
        SeatDataService.getAll().on("value", this.onDataChange);



    },
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
