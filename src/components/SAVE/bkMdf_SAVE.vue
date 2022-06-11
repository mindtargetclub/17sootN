<template>
  <div v-if="currentTutorial" class="mx-2">
    <!-- <h4> 詞彙說明 </h4> -->
    <form>
      <div class="">

        <!-- <label for="title">泰雅文</label> -->
        <!-- <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"
        /> -->
{{ currentTutorial }}

<hr>
<br>
      <div class="flex items-start w-auto row"> 
        <div class=" grid grid-cols-3 gap-2  ">

          <div class= "col-span-2">

        <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="currentTutorial.od_date"
                  label="請設定日期" 
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              
              <v-date-picker
                v-model="currentTutorial.od_date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker> 
      </v-menu>
          </div>  
      
          <div class= "col-span-1 h-32">
            <div class= "flex flex-auto">
            <!-- <button @click="saveODR" class="btn btn-success"> 儲存記錄 </button> -->
            <button class="border-2 border-solid flex-1 mx-1" @click="deleteTutorial">
              刪除
            </button>

            <button  class="bg-red-500 hover:bg-red-700 flex-1 mx-1" @click="updateTutorial">
              更新
            </button> 
<hr>
            <p>{{ message }}</p>
          </div> 
          </div> 

        </div>
      </div>
        

<v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs
      
  >
    <v-tab key='k1' href='#k1' v-if="!hide"  >    
        北北東 
        <!-- <br>【 {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24 】  -->  
    </v-tab>
    <v-tab key='k2' href='#k2' > 
        北場  
        <!-- <br> 【 {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }} / 36 】  -->
    </v-tab>
    <v-tab key='k3' href='#k3'  > 
        南場  
        <!-- <br> 【 {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 22   -->
    </v-tab> 
  </v-tabs> 

  <v-tabs-items v-model="tab">
    <v-tab-item key='k1' value='k1'>   

    <div class ="flex justify-center "> 當時</div>
      <!-- <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto"> -->
        <div class="grid grid-cols-7 bg-red-50">
          <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚1  </div > 

          <v-chip-group v-model="currentTutorial.bk_pos0_1"   multiple 
          class="col-span-6"
              active-class="bg-red-600 text-white text-xs  " >  
              <v-chip class="text-xs" > 6 </v-chip>
              <v-chip class="text-xs" > 5 </v-chip>
              <v-chip class="text-xs" > 4 </v-chip>
              <v-chip class="text-xs" > 3 </v-chip>
              <v-chip class="text-xs" > 2 </v-chip>
              <v-chip class="text-xs" > 1 </v-chip> 
          </v-chip-group>  
        

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚2  </div > 

        <v-chip-group v-model="currentTutorial.bk_pos0_2"   multiple 
        class="col-span-6"
            active-class="bg-red-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group>  

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                 棚3  </div > 

        <v-chip-group v-model="currentTutorial.bk_pos0_3"   multiple 
        class="col-span-6"
            active-class="bg-red-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group>  
 
        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚4  </div > 

        <v-chip-group v-model="currentTutorial.bk_pos0_4"   multiple 
            class="col-span-6"
            active-class="bg-red-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group>  

        </div>

        <hr>
 
      <!-- </div>
      </div> -->

    
       
        <div class="grid grid-cols-8 bg-green-50 " > 

<div class ="flex justify-center col-span-8"> 預排</div>
 
        <div class="col-span-1 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('11')" > 
                換</div> 

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚1  </div > 

        <div class="col-span-6 " >   
          <v-chip-group v-model="currentTutorial.ntadd_pos0_1" multiple 
                active-class="bg-green-600 text-white text-xs">  
                <v-chip   class="text-xs" > 6 </v-chip>
                <v-chip   class="text-xs" > 5 </v-chip>
                <v-chip   class="text-xs" > 4 </v-chip>
                <v-chip   class="text-xs" > 3 </v-chip>
                <v-chip   class="text-xs" > 2 </v-chip>
                <v-chip   class="text-xs" > 1 </v-chip> 
          </v-chip-group>  
        </div> 

        <div class="col-span-1 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('12')" > 
                換</div> 

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚2  </div > 

        <div class="col-span-6 " >   
          <v-chip-group v-model="currentTutorial.ntadd_pos0_2" multiple 
                active-class="bg-green-600 text-white text-xs">  
                <v-chip   class="text-xs" > 6 </v-chip>
                <v-chip   class="text-xs" > 5 </v-chip>
                <v-chip   class="text-xs" > 4 </v-chip>
                <v-chip   class="text-xs" > 3 </v-chip>
                <v-chip   class="text-xs" > 2 </v-chip>
                <v-chip   class="text-xs" > 1 </v-chip> 
          </v-chip-group>  
        </div> 

        <div class="col-span-1 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('13')" > 
                換</div> 

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚3  </div > 

        <div class="col-span-6 " >   
          <v-chip-group v-model="currentTutorial.ntadd_pos0_3" multiple 
                active-class="bg-green-600 text-white text-xs">  
                <v-chip   class="text-xs" > 6 </v-chip>
                <v-chip   class="text-xs" > 5 </v-chip>
                <v-chip   class="text-xs" > 4 </v-chip>
                <v-chip   class="text-xs" > 3 </v-chip>
                <v-chip   class="text-xs" > 2 </v-chip>
                <v-chip   class="text-xs" > 1 </v-chip> 
          </v-chip-group>  
        </div> 

        <div class="col-span-1 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
            text-xs text-center py-1.5 px-2 my-2 mr-1 "
            v-on:click="ckary('14')" > 
                 換</div> 

        <div class="col-span-1 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚4  </div > 

        <div class="col-span-6 " >   
          <v-chip-group v-model="currentTutorial.ntadd_pos0_4" multiple 
                active-class="bg-green-600 text-white text-xs">  
                <v-chip   class="text-xs" > 6 </v-chip>
                <v-chip   class="text-xs" > 5 </v-chip>
                <v-chip   class="text-xs" > 4 </v-chip>
                <v-chip   class="text-xs" > 3 </v-chip>
                <v-chip   class="text-xs" > 2 </v-chip>
                <v-chip   class="text-xs" > 1 </v-chip> 
          </v-chip-group>  
        </div> 
        

        </div>
      
    </v-tab-item>
    <v-tab-item key='k2' value='k2'> 
 

    </v-tab-item>
    <v-tab-item key='k3' value='k3'>  
 
    </v-tab-item>
  </v-tabs-items> 
        

        <!-- <v-chip-group v-model="currentTutorial.bk_pos0_1"   multiple 
            active-class="bg-green-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group>  
        <v-chip-group v-model="currentTutorial.bk_pos0_2"   multiple 
            active-class="bg-green-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group> 
        <v-chip-group v-model="currentTutorial.bk_pos0_3"   multiple 
            active-class="bg-green-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group> 
        <v-chip-group v-model="currentTutorial.bk_pos0_4"   multiple 
            active-class="bg-green-600 text-white text-xs  " >  
            <v-chip class="text-xs" > 6 </v-chip>
            <v-chip class="text-xs" > 5 </v-chip>
            <v-chip class="text-xs" > 4 </v-chip>
            <v-chip class="text-xs" > 3 </v-chip>
            <v-chip class="text-xs" > 2 </v-chip>
            <v-chip class="text-xs" > 1 </v-chip> 
        </v-chip-group>  -->
          
      </div> 
    </form>

    <!-- <button
      class="border-2 border-solid px-2 mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      未發佈
    </button> -->
    <!-- <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button> -->

    
  </div>

  <div v-else>
    <br />
    <p>Please 確認 on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/odDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      tab:"",
      menu: false,
      modal: false,
      menu2: false,
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    // updatePublished(status) {
    //   TutorialDataService.update(this.currentTutorial.key, {
    //     published: status,
    //   })
    //     .then(() => {
    //       this.currentTutorial.published = status;
    //       this.message = "The status was updated successfully!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },



     ck(aryy,cdtion){  
       var ans = aryy.some(function(item, index, array)
                {
                  return item == cdtion // 當全部 age 大於 10 才能回傳 true
                });
                // console.log("ans = " + ans);  // true: 只要有部分符合，則為 true 
           return  ans 
     }, 

    ckary(ary_gp) {
           
          console.log("hh j 111 j kk")
           
          switch (ary_gp) {
            case '11':
              this.currentTutorial.bk_pos0_1 = this.currentTutorial.ntadd_pos0_1; this.currentTutorial.ntadd_pos0_1 =[];
              break;
            case '12':
              this.currentTutorial.bk_pos0_2 = this.currentTutorial.ntadd_pos0_2; this.currentTutorial.ntadd_pos0_2 =[];
              break;
            case '13':
              this.currentTutorial.bk_pos0_3 = this.currentTutorial.ntadd_pos0_3; this.currentTutorial.ntadd_pos0_3 =[];
              break;
            case '14':
              this.currentTutorial.bk_pos0_4 = this.currentTutorial.ntadd_pos0_4; this.currentTutorial.ntadd_pos0_4 =[];
              break;

            // case '21':
            //   this.od.bk_pos1_1 = this.od.ntadd_pos1_1; this.od.ntadd_pos1_1 =[];
            //   break;
            // case '22':
            //   this.od.bk_pos1_2 = this.od.ntadd_pos1_2; this.od.ntadd_pos1_2 =[];
            //   break;
            // case '23':
            //   this.od.bk_pos1_3 = this.od.ntadd_pos1_3; this.od.ntadd_pos1_3 =[];
            //   break;
            // case '24':
            //   this.od.bk_pos1_4 = this.od.ntadd_pos1_4; this.od.ntadd_pos1_4 =[];
            //   break;
            // case '25':
            //   this.od.bk_pos1_3 = this.od.ntadd_pos1_5; this.od.ntadd_pos1_5 =[];
            //   break;
            // case '26':
            //   this.od.bk_pos1_4 = this.od.ntadd_pos1_6; this.od.ntadd_pos1_6 =[];
            //   break;

            // case '31':
            //   this.od.bk_pos2_1 = this.od.ntadd_pos2_1; this.od.ntadd_pos2_1 =[];
            //   break;
            // case '32':
            //   this.od.bk_pos2_2 = this.od.ntadd_pos2_2; this.od.ntadd_pos2_2 =[];
            //   break;
            // case '33':
            //   this.od.bk_pos2_3 = this.od.ntadd_pos2_3; this.od.ntadd_pos2_3 =[];
            //   break;
            // case '34':
            //   this.od.bk_pos2_4 = this.od.ntadd_pos2_4; this.od.ntadd_pos2_4 =[];
            //   break;

            // default:
            //   break;
          }
//        var temp_ary1 = this.ary1;
       
// bk_pos0_1
          // temp_ary1 = temp_ary2;
          // this.ary1 = temp_ary2;

      var temp_ary2 = ary2;
          ary1 = temp_ary2; 
          ary2 = [];
          
      this.od.ntadd_pos0_1 = [];
      console.log("hh j 2 j kk")
      return  ary1,ary2;

       
    },

    updateTutorial() {
      const data = {
        // title: this.currentTutorial.title,
        // description: this.currentTutorial.description,

        od_date: this.currentTutorial.od_date,
        bk_pos0_1: this.currentTutorial.bk_pos0_1,
        bk_pos0_2: this.currentTutorial.bk_pos0_2,
        bk_pos0_3: this.currentTutorial.bk_pos0_3,
        bk_pos0_4: this.currentTutorial.bk_pos0_4,
        ntadd_pos0_1: this.currentTutorial.ntadd_pos0_1,
        ntadd_pos0_2: this.currentTutorial.ntadd_pos0_2,
        ntadd_pos0_3: this.currentTutorial.ntadd_pos0_3,
        ntadd_pos0_4: this.currentTutorial.ntadd_pos0_4,
        // bk_pos1_1: this.currentTutorial.bk_pos1_1,
        // bk_pos1_2: this.currentTutorial.bk_pos1_2,
        // bk_pos1_3: this.currentTutorial.bk_pos1_3,
        // bk_pos1_4: this.currentTutorial.bk_pos1_4,
        // bk_pos1_5: this.currentTutorial.bk_pos1_5,
        // bk_pos1_6: this.currentTutorial.bk_pos1_6,
        // ntadd_pos1_1: this.currentTutorial.ntadd_pos1_1,
        // ntadd_pos1_2: this.currentTutorial.ntadd_pos1_2,
        // ntadd_pos1_3: this.currentTutorial.ntadd_pos1_3,
        // ntadd_pos1_4: this.currentTutorial.ntadd_pos1_4,
        // ntadd_pos1_5: this.currentTutorial.ntadd_pos1_5,
        // ntadd_pos1_6: this.currentTutorial.ntadd_pos1_6,
        // bk_pos2_1: this.currentTutorial.bk_pos2_1,
        // bk_pos2_2: this.currentTutorial.bk_pos2_2,
        // bk_pos2_3: this.currentTutorial.bk_pos2_3,
        // bk_pos2_4: this.currentTutorial.bk_pos2_4,
        // ntadd_pos2_1: this.currentTutorial.ntadd_pos2_1,
        // ntadd_pos2_2: this.currentTutorial.ntadd_pos2_2,
        // ntadd_pos2_3: this.currentTutorial.ntadd_pos2_3,
        // ntadd_pos2_4: this.currentTutorial.ntadd_pos2_4,


        
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
