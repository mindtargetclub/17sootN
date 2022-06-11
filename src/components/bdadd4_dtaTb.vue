<template>
  <div class=" flex justify-center  ">   
    <!-- <v-row>
      
    </v-row>
    <v-row></v-row> --> 
    <div class="w-9/15 ">   
        <v-card> 
          <div class="flex justify-end ...">
              <div></div>
                <v-text-field
                  v-model="search_Left"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  autofocus
                ></v-text-field> 
              <div> 
                <!-- <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#2196F3' 
                  dark
                >
                  未設定 
                </v-btn>

                <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#E91E63' 
                  dark
                >
                  未設定 
                </v-btn>

                <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#F57F17' 
                  dark
                >
                  未設定 
                </v-btn> -->
              </div>    
            <div>
              <span class="my-3 text-s font-light flex justify-end" >  
                <!-- {{  this.dayjs(cT).format("MM/DD HH:mm:ss") }} -->
                人數紀錄:xxx
              </span>
            </div> 
          </div> 

        <v-data-table
            dense
          :headers="hds_Left"
          :items="tutorials"
          :search="search_Left"
          :items-per-page="30"
          item-key="sno" 
        > 
          <!-- :sort-by="['calories', 'fat']"
          :sort-desc="[false, true]"   -->
            <template v-slot:item.sno_idx ="{ item }">
            <v-chip
              :color="getColor(item.sno_idx)"
              dark
            > 

              {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} 
              <!-- {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} -->
            </v-chip>
          </template>

          <template v-slot:item.left_time ="{ item }">
            <v-chip
              :color="ChkTime2getColor(item.left_time)"
              dark
            >
              {{ item.left_time }} 
              <!-- {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} -->
            </v-chip>
          </template>
        </v-data-table>
        </v-card>
    </div>
    <span class="w-1/15 text-gray-100 ">  ...  </span>

    <div class="w-6/15 ">   
        <v-card> 
          <div class="flex justify-end ...">
              <!-- <div></div> -->
                <!-- <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  autofocus
                ></v-text-field>  -->
              <div> 
                <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#2196F3' 
                  dark
                >
                  可使用 
                </v-btn>

                <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#E91E63' 
                  dark
                >
                  已超時 
                </v-btn>

                <v-btn
                  x-small
                  class="ma-2 my-3 mx-1"
                  color= '#F57F17' 
                  dark
                >
                  需提醒 
                </v-btn>
              </div>    
            <div>
              <span class="my-3 text-s font-black flex justify-end" >  {{  this.dayjs(cT).format("MM/DD HH:mm:ss") }}</span>
            </div> 
          </div> 

        <v-data-table
            dense
          :headers="headers"
          :items="tutorials"
          :search="search"
          :items-per-page="30"
          item-key="sno" 
        > 
          <!-- :sort-by="['calories', 'fat']"
          :sort-desc="[false, true]"   -->
            <template v-slot:item.sno_idx ="{ item }">
            <v-chip
              :color="getColor(item.sno_idx)"
              dark x-small
            > 

              {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} 
              <!-- {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} -->
            </v-chip>
          </template>

          <template v-slot:item.left_time ="{ item }">
            <v-chip
              :color="ChkTime2getColor(item.left_time)"
              dark x-small
            >
              {{ item.left_time }} 
              <!-- {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} -->
            </v-chip>
          </template>
        </v-data-table>
        </v-card>
    </div>
  </div>
</template>
 

<script>

import TutorialDetails from "./bkadd4_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";
 


import dayjs from 'dayjs';

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      tab:"",
      currentTime: Date.now(),
      cT:"",
      search: '',
      search_Left: '',
      headers: [ 
        { text: '狀態', value: 'statu' },
        { text: '牌號', value: 'tmp_idx' }, 
        { text: '靶位', value: 'sno_idx' },
        { text: '離場時間', value: 'left_time' },
      ],

      hds_Left: [ 
        { text: '名稱', value: 'name' },
        { text: '消費進度', value: 'ply_statu' }, 
        { text: '消費單號', value: 'pmt_sno' },
        { text: '收入', value: 'memo' },
        { text: '現金', value: 'memo' },
        { text: '網銀轉帳', value: 'memo' },
        { text: '信用卡', value: 'memo' },
        { text: 'LinePay', value: 'memo' },
        { text: '動茲券', value: 'memo' },
      ],
      // - - - - 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: {  

    CT2Color(left_time) {



    },
 


    ChkTime2getColor(left_time) { 

      let now_H = parseInt(this.dayjs(this.cT).format("HH"))  
      let now_M = parseInt(this.dayjs(this.cT).format("mm"))  
      let colAry = ['#d3dce6','#E91E63','#2196F3']

      var strAry = left_time.split(':')

      let booking_H = parseInt(strAry[0] )
      let booking_M = parseInt(strAry[1] ) 

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
      },


    getColor (sno_idx) { 
      let r = parseInt(sno_idx) 
        // if ( r == 3) return '#FFA000'
        // else if (r == 2) return '#F44336'
        // else return '#4CAF50'
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
            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu
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
    updateCurrentTime(){
      this.cT = Date.now();
    }

    
  },
   
  mounted() {
    // console.log(_tutorials.title);  
     SeatDataService.getAll().on("value", this.onDataChange);   
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
  /* max-width: 750px; */
  margin: auto;
}
</style>
