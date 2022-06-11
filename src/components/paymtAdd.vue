<template>
    <div class=" w-full item-start  ">
        <div class=" grid grid-cols-3 gap-2  ">
            <div class="col-span-2">
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <template v-for="n in steps_name.length-1">
                  <v-stepper-step
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    editable 
                    color="#1B5E20"
                  >
                      <span  class="pl-3  text-base font-light ">{{ steps_name[n] }} </span>
                  </v-stepper-step>
    
                  <v-divider
                    v-if="n !== steps_name.length-1"
                    :key="n"
                  ></v-divider>
</template>
          </v-stepper-header>

          <v-stepper-items> 
            <v-stepper-content step="1"> 
              <div class="flex justify-between">
                <div class="w-full">
                  <v-text-field dense clearable  v-model="pmt.name" class="text-xs w-4/12 px-1"        placeholder="name"></v-text-field>   
                  <v-text-field dense clearable    v-model="pmt.income" class="text-xs w-2/12 px-2"      placeholder="InCome"    ></v-text-field> 

                  <v-text-field dense clearable   v-model="pmt.payCash" class="text-xs w-2/12 px-2"      placeholder="Cash"    ></v-text-field>   
                  <v-text-field dense clearable  v-model="pmt.payCTCard" class="text-xs w-2/12 px-2"    placeholder="CTCard"  ></v-text-field>   
                  <v-text-field dense clearable    v-model="pmt.payLinPay" class="text-xs w-2/12 px-2"    placeholder="LinPay"  ></v-text-field>   
                  <v-text-field dense clearable  v-model="pmt.payGovTik" class="text-xs w-2/12 px-2"    placeholder="GovTik"  ></v-text-field>   
                </div>
                <div>
                 <v-text-field dense clearable  v-model="pmt.shootPos_dtl" class="text-xs  px-1"      hint="牌號"     placeholder="shootPos_dtl"   v-on:change="updateTutorial" ></v-text-field>  
                    <v-chip-group column v-model="pmt.shootPos_dtl" multiple
                                  class=" "  >   
                        <v-chip active-class="bg-green-500   text-white text-x" value="北_01_01"     > 北_01_01 </v-chip>
                        <v-chip active-class="bg-red-500     text-white text-x" value="北_01_02"     > 北_01_02 </v-chip>  
                        <v-chip active-class="bg-blue-500    text-white text-x" value="北_01_03"     > 北_01_03 </v-chip>
                        <v-chip active-class="bg-pink-500    text-white text-x" value="北_02_01"     > 北_02_01 </v-chip> 
                        <v-chip active-class="bg-yellow-500  text-white text-x"  value="北_02_02"    > 北_02_02 </v-chip> 
                    </v-chip-group>
                </div> 
               </div>
              <v-btn @click="savePmt"> 儲存歐 </v-btn> 
{{  msgg }}
              <v-btn @click="savePmt2"> 儲存歐2 </v-btn> 
                  
            </v-stepper-content>  

            <v-stepper-content step="2">
              
                
                
                  
            </v-stepper-content>  

            <v-stepper-content step="3">
              <v-card
                color="#E8F5E9"
                class="mb-12"
                height="200px"
              >
                55
              
              </v-card>
                
                  
            </v-stepper-content>  
          </v-stepper-items> 
        </v-stepper> 
      </div>
      <div class="col-span-1">

      </div>

    </div>  
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import SeatDataService from "../services/SeatPrepareService";
import PmtDataService from "../services/PmtService";

export default {
    name: "add-tutorial",
    data() {
        return {

            e1: 1,
            steps: 2,
            steps_name: ['預先填寫', '報到繳費', '安排靶位', '追問續時', '入帳登記', '作廢'],

            // - - - - - - -  

            st_sno: "",

            pmt: {
                // 顧客姓名
                name: "",
                // 現金收入
                income: 0,

                // 消費歷程
                plySTATU: "",

                // 現金收入
                payCash: 0,
                payLinPay: 0,
                payCTCard: 0,
                payGovTik: 0,
                // 登入日期
                creatDate: '',
                // 登入時間
                // creatTime:new Date(),
                // 位置
                shootPos_dtl: [],

                // 第1次登入位置
                dtl_fst: [],
                // 第2次登入
                dtl_sec: [],

            },

            st: {
                pos: "北",
                sno: "4",
                sno_idx: "01",
                tmp_idx: "",

                left_time: "12:00",
                amt: "",
                paymt: "",
                memo: "",
                slted: [],
                statu: [],
                published: false
            },
            msgg: '999',

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

        savePmt() {
            var data = {
                name: this.pmt.name,
                income: parseInt(this.pmt.income),
                payCTCard: parseInt(this.pmt.payCTCard),
                payCash: parseInt(this.pmt.payCash),
                payLinPay: parseInt(this.pmt.payLinPay),
                payGovTik: parseInt(this.pmt.payGovTik),

                shootPos_dtl: this.pmt.shootPos_dtl,
            };

            PmtDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!");
                    this.msgg.push(data.key)
                })
                .catch(e => {
                    console.log(e);
                });
        },

        savePmt2() {

            let randomId = Math.floor(Math.random() * 1000) + 'A' + Date.now()

            var data = {
                name: this.pmt.name,
                income: parseInt(this.pmt.income),
                payCTCard: parseInt(this.pmt.payCTCard),
                payCash: parseInt(this.pmt.payCash),
                payLinPay: parseInt(this.pmt.payLinPay),
                payGovTik: parseInt(this.pmt.payGovTik),

                shootPos_dtl: this.pmt.shootPos_dtl,
            };

            PmtDataService.setuuID(randomId.toString(), data)
                .then(() => {
                    this.msgg = "Creccessfully!";
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
        newDataa(_sno, _sno_idx) {


            var dta = {
                // - - - - 
                pos: '南',
                sno: _sno.toString(),
                sno_idx: '0' + _sno_idx.toString(),
                tmp_idx: this.st.tmp_idx,
                left_time: this.st.left_time,
                memo: this.st.memo,

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
                    var data = this.newDataa(ii, i);

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
                    var data = this.newDataa(ii, i);

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
    created: function() {
        fetch("https://www.ragic.com/xihu/forms/137?api&APIKey=cHB2WURReGNHLzNaU1JyZ2h0YlVwbW5DM1JmN2VzRDV5ZUtQNVlrcXJtZWVhYjZoUHl6UmVWbmkvRkI5Zi82cw==&listing")
            .then(r => r.json())
            .then(json => {
                this.json = json;
                let _json = [];
                var feed = { created_at: "2017-03-14T01:00:32Z", entry_id: 33358, field1: "4", field2: "4", field3: "0" };
                var dataa = [];
                var da = {
                    "created_at": feed.created_at,
                    "entry_id": feed.entry_id,
                    "field1": feed.field1,
                }

                dataa.push(da);

                for (var i = 0; i < this.json.length; i++) {
                    _json.push(this.json[i])
                }
                this.json_Mdf = this.json[2].中分類;
                this.jsL = "299999" + this.dataa;
            });

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
