<template>
  <div class=" flex justify-center  ">
    
    
    <div class="w-full ">   
        <v-tabs
            v-model="tab"
            background-color="deep-purple" 
            grow
            active-class="bg-gray-900 text-white"
            class="text-gray-500"
          > 
            <v-tab key='k1' href='#k1' v-if="!hide" class="bg-gray-200  "  >    
              R樓
            </v-tab>

            <v-tab key='k2' href='#k2' class="bg-gray-200  " > 
              1樓
            </v-tab> 

          </v-tabs>  

      <v-tabs-items v-model="tab"> 

        <v-tab-item key='k1' value='k1'> 
          <v-list-item-group 
            color="primary" >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index"
              v-if="tutorial.pos =='R樓'"
            > 
              <v-list-item-content 
                      class=" text-xs py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                       v-if="tutorial.sno == 1 | tutorial.sno == 2 "  
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-yellow-100 border-yellow-300 "
                      v-if="tutorial.sno == 3 | tutorial.sno == 4 " 
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs bg-green-100 py-2 pl-3 my-1 border-2 rounded-sm border-green-300 "
                      v-if="tutorial.sno == 5 | tutorial.sno == 6 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs py-2 pl-3 my-1 border-2 rounded-sm  bg-gray-100 border-gray-300 "
                      v-if="tutorial.sno == 7 | tutorial.sno == 8 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>
 
             <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-indigo-100 border-indigo-300 "
                      v-if="tutorial.sno == 9 | tutorial.sno == 10 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-pink-100 border-pink-300 "
                      v-if="tutorial.sno == 11  | tutorial.sno == 12"
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 13 | tutorial.sno == 14 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>   

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-green-100 border-green-300 "
                      v-if="tutorial.sno == 15 | tutorial.sno == 16 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                      v-if="tutorial.sno == 17 | tutorial.sno == 18 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 20 | tutorial.sno == 19 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>  

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 21 | tutorial.sno == 22 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 23 | tutorial.sno == 14 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5 pl-2"> {{ tutorial.pos }}_{{ tutorial.sno_idx }}  </div>
                    <div class="  w-auto   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                        , <v-chip 
                          :color="ChkTime2getColor(tutorial.left_time)"
                          dark small
                        >
                          {{ tutorial.left_time }}離 
                        </v-chip> 
                    </div>  
                    <div class=" w-auto  text-xs text-blue-500 ">  {{ tutorial.ply_statu }},{{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>
              
              
            </v-list-item>
          </v-list-item-group>
        </v-tab-item>

        <v-tab-item key='k2' value='k2' > 
                  
          <v-list-item-group 
            color="primary" 
            >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index" 
              v-if="tutorial.pos =='1樓'"
            > 
                  
              

              
              
            </v-list-item>
          </v-list-item-group>
        </v-tab-item> 

      </v-tabs-items>
    </div> 

        <!-- <div class="w-2/3 ml-10">
          <div v-if="currentTutorial">
            <tutorial-details
              :tutorial="currentTutorial"
              @refreshList="refreshList"
            />
          </div>
          <div v-else>
            <br />
            <p>Please 確認 on a Tutorial...</p>
          </div>
        </div> -->
    <hr> 
  </div>
</template>
 

<script>

import TutorialDetails from "./bkadd4_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      tab:"",
      // - - - - 
show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
sh(){

alert('gooo');
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
            statu: data.statu,
            ply_statu: data.ply_statu
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
    
    // - - - - - - - - - - - - - - 

    ChkTime2getColor(left_time) { 

      let now_H = parseInt(this.dayjs(this.cT).format("HH"))  
      let now_M = parseInt(this.dayjs(this.cT).format("mm"))  
      let colAry = ['#d3dce6','#E91E63','#2196F3','#FFFFFF']

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
    
  },
  mounted() {
    // console.log(_tutorials.title);  
     SeatDataService.getAll().on("value", this.onDataChange);  
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
