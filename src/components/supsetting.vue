<template>

<div class=" w-full item-start  ">
  
    <v-btn 
      href="https://cors-anywhere.herokuapp.com/corsdemo"
      block
      class="mt-32 m-auto"
      >
      外掛 工具
    </v-btn>

  <!-- <div class=" grid grid-cols-3 gap-2 mt-20 ">  

        
                <v-btn 
                  href="https://cors-anywhere.herokuapp.com/corsdemo"
                  block>
                  Block Button
                </v-btn>
      </div>   -->
      
       
<!-- </div> -->

      

   
  </div> 

 
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";
import odDataService from "../services/odDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
       
      menu: false,
      modal: false,
      menu2: false,
      tab:"",
      od: {
        od_date:"",
        bk_pos0_1:[],
        bk_pos0_2:[],
        bk_pos0_3:[],
        bk_pos0_4:[],
        ntadd_pos0_1:[],
        ntadd_pos0_2:[],
        ntadd_pos0_3:[],
        ntadd_pos0_4:[],


        bk_pos1_1:[],
        bk_pos1_2:[],
        bk_pos1_3:[],
        bk_pos1_4:[],
        bk_pos1_5:[],
        bk_pos1_6:[],

        bk_pos1_7:[],
        bk_pos1_8:[],
        bk_pos1_9:[],
        bk_pos1_10:[], 

        ntadd_pos1_1:[],
        ntadd_pos1_2:[],
        ntadd_pos1_3:[],
        ntadd_pos1_4:[],
        ntadd_pos1_5:[],
        ntadd_pos1_6:[],

        ntadd_pos1_7:[],
        ntadd_pos1_8:[],
        ntadd_pos1_9:[],
        ntadd_pos1_10:[],

        

        bk_pos2_1:[],
        bk_pos2_2:[],
        bk_pos2_3:[],
        bk_pos2_4:[],

        ntadd_pos2_1:[],
        ntadd_pos2_2:[],
        ntadd_pos2_3:[],
        ntadd_pos2_4:[],
      },
      
      bk_pos0_1:[],
      bk_pos0_2:[],
      bk_pos0_3:[],
      bk_pos0_4:[],

      ntadd_pos0_1:[],
      ntadd_pos0_2:[],
      ntadd_pos0_3:[],
      ntadd_pos0_4:[],

      bk_pos1_1:[],
      bk_pos1_2:[],
      bk_pos1_3:[],
      bk_pos1_4:[],
      bk_pos1_5:[],
      bk_pos1_6:[], 

      ntadd_pos1_1:[],
      ntadd_pos1_2:[],
      ntadd_pos1_3:[],
      ntadd_pos1_4:[],
      ntadd_pos1_5:[],
      ntadd_pos1_6:[],

      bk_pos2_1:[],
      bk_pos2_2:[],
      bk_pos2_3:[],
      bk_pos2_4:[],

      ntadd_pos2_1:[],
      ntadd_pos2_2:[],
      ntadd_pos2_3:[],
      ntadd_pos2_4:[],
      

      amenities: [],
      neighborhoods: [],
      season_states:['s1', 's2', 's3', 's4',],
      ttemp:[],
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
              this.od.bk_pos0_1 = this.od.ntadd_pos0_1; this.od.ntadd_pos0_1 =[];
              break;
            case '12':
              this.od.bk_pos0_2 = this.od.ntadd_pos0_2; this.od.ntadd_pos0_2 =[];
              break;
            case '13':
              this.od.bk_pos0_3 = this.od.ntadd_pos0_3; this.od.ntadd_pos0_3 =[];
              break;
            case '14':
              this.od.bk_pos0_4 = this.od.ntadd_pos0_4; this.od.ntadd_pos0_4 =[];
              break;

            case '21':
              this.od.bk_pos1_1 = this.od.ntadd_pos1_1; this.od.ntadd_pos1_1 =[];
              break;
            case '22':
              this.od.bk_pos1_2 = this.od.ntadd_pos1_2; this.od.ntadd_pos1_2 =[];
              break;
            case '23':
              this.od.bk_pos1_3 = this.od.ntadd_pos1_3; this.od.ntadd_pos1_3 =[];
              break;
            case '24':
              this.od.bk_pos1_4 = this.od.ntadd_pos1_4; this.od.ntadd_pos1_4 =[];
              break;
            case '25':
              this.od.bk_pos1_3 = this.od.ntadd_pos1_5; this.od.ntadd_pos1_5 =[];
              break;
            case '26':
              this.od.bk_pos1_4 = this.od.ntadd_pos1_6; this.od.ntadd_pos1_6 =[];
              break;

            case '27':
              this.od.bk_pos1_7 = this.od.ntadd_pos1_7; this.od.ntadd_pos1_7 =[];
              break;
            case '28':
              this.od.bk_pos1_8 = this.od.ntadd_pos1_8; this.od.ntadd_pos1_8 =[];
              break;

            case '29':
              this.od.bk_pos1_9 = this.od.ntadd_pos1_9; this.od.ntadd_pos1_9 =[];
              break;
            case '210':
              this.od.bk_pos1_10 = this.od.ntadd_pos1_10; this.od.ntadd_pos1_10 =[];
              break;    

            case '31':
              this.od.bk_pos2_1 = this.od.ntadd_pos2_1; this.od.ntadd_pos2_1 =[];
              break;
            case '32':
              this.od.bk_pos2_2 = this.od.ntadd_pos2_2; this.od.ntadd_pos2_2 =[];
              break;
            case '33':
              this.od.bk_pos2_3 = this.od.ntadd_pos2_3; this.od.ntadd_pos2_3 =[];
              break;
            case '34':
              this.od.bk_pos2_4 = this.od.ntadd_pos2_4; this.od.ntadd_pos2_4 =[];
              break;

            default:
              break;
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

    saveTutorial() {
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

    saveODR() {
      var data = {
        // title: this.tutorial.title,
        // description: this.tutorial.description,
        // published: false,
        od_date  : this.od.od_date,
        bk_pos0_1: this.od.bk_pos0_1,
        bk_pos0_2: this.od.bk_pos0_2,
        bk_pos0_3: this.od.bk_pos0_3,
        bk_pos0_4: this.od.bk_pos0_4,
        bk_pos0_1: this.od.bk_pos0_1,
        bk_pos0_2: this.od.bk_pos0_2,
        bk_pos0_3: this.od.bk_pos0_3,
        bk_pos0_4: this.od.bk_pos0_4,
        bk_pos1_1: this.od.bk_pos1_1,
        bk_pos1_2: this.od.bk_pos1_2,
        bk_pos1_3: this.od.bk_pos1_3,
        bk_pos1_4: this.od.bk_pos1_4,
        bk_pos1_5: this.od.bk_pos1_5,
        bk_pos1_6: this.od.bk_pos1_6,
        bk_pos1_1: this.od.bk_pos1_1,
        bk_pos1_2: this.od.bk_pos1_2,
        bk_pos1_3: this.od.bk_pos1_3,
        bk_pos1_4: this.od.bk_pos1_4,
        bk_pos1_5: this.od.bk_pos1_5,
        bk_pos1_6: this.od.bk_pos1_6,
        bk_pos2_1: this.od.bk_pos2_1,
        bk_pos2_2: this.od.bk_pos2_2,
        bk_pos2_3: this.od.bk_pos2_3,
        bk_pos2_4: this.od.bk_pos2_4,
        bk_pos2_1: this.od.bk_pos2_1,
        bk_pos2_2: this.od.bk_pos2_2,
        bk_pos2_3: this.od.bk_pos2_3,
        bk_pos2_4: this.od.bk_pos2_4,
      };

      odDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
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
    
    newODR() {
      this.submitted = false;
      this.tutorial = {
        // title: "",
        // description: "",
        // published: false,
          od_date:[] ,
          bk_pos0_1:[] ,
          bk_pos0_2:[] ,
          bk_pos0_3:[] ,
          bk_pos0_4:[] ,
          bk_pos0_1:[] ,
          bk_pos0_2:[] ,
          bk_pos0_3:[] ,
          bk_pos0_4:[] ,
          bk_pos1_1:[] ,
          bk_pos1_2:[] ,
          bk_pos1_3:[] ,
          bk_pos1_4:[] ,
          bk_pos1_5:[] ,
          bk_pos1_6:[] ,
          bk_pos1_1:[] ,
          bk_pos1_2:[] ,
          bk_pos1_3:[] ,
          bk_pos1_4:[] ,
          bk_pos1_5:[] ,
          bk_pos1_6:[] ,
          bk_pos2_1:[] ,
          bk_pos2_2:[] ,
          bk_pos2_3:[] ,
          bk_pos2_4:[] ,
          bk_pos2_1:[] ,
          bk_pos2_2:[] ,
          bk_pos2_3:[] ,
          bk_pos2_4:[] ,
      };
    },
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
