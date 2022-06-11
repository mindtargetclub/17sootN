<template>
    <div class=" w-full item-start  ">
    
    
        <div class=" grid grid-cols-3 gap-2  ">  
            <div class="col-span-1">  
                <button @click="saveS" class="btn btn-success">儲存單筆設定</button> 
            </div>
            <div class="col-span-1"> 
                <button @click="saveMMdf" class="btn btn-success">批次_北場11+南12-25</button> 
            </div> 
        </div>
    
    
        <div v-if="!submitted">
            <v-tabs v-model="tab" background-color="primary" fixed-tabs>
    
                <v-tab key='k3' href='#k3' v-if="!hide">
                    422版,測試中
                </v-tab>
    
                <!-- <v-tab key='k2' href='#k2'>
    
                </v-tab> -->
    
                <!-- <v-tab key='k1' href='#k1' v-if="!hide">
                    13:00
                </v-tab>
    
                <v-tab key='k4' href='#k4' v-if="!hide">
                    14:00
                </v-tab>
    
                <v-tab key='k5' href='#k5' v-if="!hide">
                    15:00
                </v-tab> -->
    
    
    
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
    
                                <v-expand-transition class="">
                                    <div v-show="show">
                                        <div class="flex ml-10 justify-center py-4 ">
                                            <v-row>
                                                <p>靶位母編號</p>
                                                <v-chip-group v-model="st.sno" active-class="bg-yellow-600 text-white text-xs  " class="md:w-1/3 " >
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=1> 01 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=2> 02 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=3> 03 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=4> 04 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=5> 05 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value=6> 06 </v-chip>
                                                    
                                                    
                                                </v-chip-group>

                                                <p>靶位子編號</p>
                                                <v-chip-group v-model="st.sno_idx" active-class="bg-yellow-600 text-white text-xs  " class="md:w-1/3 " >
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="01"> 01 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="02"> 02 </v-chip>
                                                    <v-chip active-class="bg-green-500   text-white text-x" value="03"> 03 </v-chip>
                                                    
                                                </v-chip-group>
                                            </v-row>
                                            <!-- <v-divider></v-divider> -->
                                        </div>
                                        <!-- <v-divider></v-divider> -->
                                    </div>
                                </v-expand-transition>
                            </v-row>
                        </div>   
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
                pos: "北",
                sno: "4",
                sno_idx: "01",
                tmp_idx: "",
                ply_statu:"首次",

                left_time: "12:00",
                amt: "",
                paymt: "",
                memo: "", 
                
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

      

        saveS() {
            var data = {
                pos: this.st.pos,
                sno: this.st.sno,
                sno_idx: "01",
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time, 
                memo: this.st.memo, 
                ply_statu:this.st.ply_statu, 

            };

            SeatDataService.create(data)
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                        })
                })
                .catch(e => {
                    console.log(e);
                });

                
                
        },
        saveMMdf(){

            for (let i = 1; i <= 25; i++) {
                this.saveMdf(i,"01"); 
                this.saveMdf(i,"02");
                this.saveMdf(i,"03");
                     
                }

                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '1-25 pos has been saved',
                        showConfirmButton: false,
                        timer: 1500
                        })


            
        },



        saveMdf(ii,idx){

            let xx ='R樓';
            if(ii >=7 ){  xx ='2樓'} 

            var data = {
                pos: xx,
                sno: ii,
                sno_idx: idx,
                tmp_idx: this.st.tmp_idx,

                left_time: this.st.left_time, 
                memo: this.st.memo, 
                ply_statu:this.st.ply_statu, 

            };

            SeatDataService.create(data)
                .then(() => {
                    console.log("Created new item successfully!"); 
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
                ply_statu: this.ply_statu, 
            };

            return dta
        },

        autoInstallByforLoop1() { 
            for (let ii = 1; ii <= 3; ii++) { 
                for (let i = 1; i <= 3; i++) {
                    var data = this.newDataa(ii, i,'北'); 
                    SeatDataService.create(data)
                        .then(() => {
                            console.log("Created new item successfully!"); 
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }  
            } 
            this.submitted = true; 
        },

        autoInstallByforLoop2() {

            for (let ii = 12; ii <= 25; ii++) {

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

         autoInstallByforLoop3() {

            for (let ii = 19; ii <= 21; ii++) { 
                for (let i = 1; i <= 3; i++) {
                    var data = this.newDataa(ii, i,'南'); 
                    SeatDataService.create(data)
                        .then(() => {
                            console.log("Created new item successfully!"); 
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

