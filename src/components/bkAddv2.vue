<template>
  <div class="mx-2">
    <div v-if="!submitted"> 

      <div class="container">
        <span class ="text-xl" > 尚未安排 </span> 
        <div>
          <ul class="list-group">
            <li v-for="odrList in odrList" class="list-group-item">

              <div v-if="odrList.bkchked == false" >
              "{{ odrList.userName }} ".  - - - -> 狀態:  <strong>  {{ trsPOScod2Name(odrList.NowPos) }}</strong>
              <button class="bg-blue-400 p-2 m-1 rounded-full" @click="odrList.NowPos =1,odrList.FstPos =1 , odrList.bkchked = true">   北北東 </button>
              <button class="bg-red-400  p-2 m-1 rounded-full"  @click="odrList.NowPos =2 ,odrList.FstPos =2 , odrList.bkchked = true">   北場 </button>
              <button class="bg-green-400 p-2 m-1 rounded-full"  @click="odrList.NowPos =3 ,odrList.FstPos =3 , odrList.bkchked = true">  南場 </button>
              </div>
            </li>
          </ul>
        </div>
        <div>
           <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs 
           >
            <v-tab key='k1' href='#k1' v-if="!hide"  >    
                北北東 {{poschker_1.length}} 人   
            </v-tab>
            <v-tab key='k2' href='#k2' > 
                北 {{poschker_2.length}} // 南 {{poschker_3.length}}  
            </v-tab> 
          </v-tabs> 

  <v-tabs-items v-model="tab">
    <v-tab-item key='k1' value='k1'>   
 
    </v-tab-item>
    <v-tab-item key='k2' value='k2'>  
    </v-tab-item>
   
  </v-tabs-items> 

          <span class ="text-xl" > {{ trsPOScod2Name(1) }}  </span>
           <ul class="list-group">
            <li v-for="odrList in poschker_1" class="list-group-item">
               姓名 : "{{ odrList.userName }}". 
               現在位置: <strong>  {{ trsPOScod2Name(odrList.NowPos) }}</strong>
               首次安排: <strong>  {{ trsPOScod2Name(odrList.FstPos) }}</strong>
               加時位置: <strong>  {{ trsPOScod2Name(odrList.AddPos) }}</strong> 
               <v-switch
                v-model="odrList.AddTime"
                inset
                :label="`確認加時: ${odrList.AddTime.toString()}`" 
              ></v-switch>

              <div v-if="odrList.AddTime"   class=" m-3 bg-red-200 "> 
                <button class="bg-blue-400 p-2 m-1 rounded-full"   @click="odrList.NowPos =1">  北北東 </button>
                <button class="bg-red-400  p-2 m-1 rounded-full"   @click="odrList.NowPos =2">  北場 </button>
                <button class="bg-green-400 p-2 m-1 rounded-full"  @click="odrList.NowPos =3">  南場 </button>  
              </div>

            </li>
          </ul>
          <br> 
<hr> 
<span class ="text-xl" > {{ trsPOScod2Name(2) }} </span>  
           <ul class="list-group">
            <li v-for="odrList in poschker_2" class="list-group-item">
               姓名 : "{{ odrList.userName }}". 
               現在位置: <strong>  {{ trsPOScod2Name(odrList.NowPos) }}</strong>
               首次安排: <strong>  {{ trsPOScod2Name(odrList.FstPos) }}</strong>
               加時位置: <strong>  {{ trsPOScod2Name(odrList.AddPos) }}</strong> 
               <v-switch
                v-model="odrList.AddTime"
                inset
                :label="`確認加時: ${odrList.AddTime.toString()}`" 
              ></v-switch>

              <div v-if="odrList.AddTime"   class=" m-3 bg-red-200 "> 
                <button class="bg-blue-400 p-2 m-1 rounded-full"   @click="odrList.NowPos =1">  北北東 </button>
                <button class="bg-red-400  p-2 m-1 rounded-full"   @click="odrList.NowPos =2">  北場 </button>
                <button class="bg-green-400 p-2 m-1 rounded-full"  @click="odrList.NowPos =3">  南場 </button>  
              </div>

            </li>
          </ul>
          <br>
<hr> 
        <div class = "m-2 p-2 bg-gray-300 ">
<span class ="text-xl " > {{ trsPOScod2Name(3) }}  </span>


<hr>
          <ul class="list-group ">
            <li v-for="odrList in poschker_3" class="list-group-item">

              
 <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          姓名 : "{{ odrList.userName }}" 
          <br>
                <div class="">
                現在: <strong>  {{ trsPOScod2Name(odrList.NowPos) }}</strong>
                  <v-switch
                    v-model="odrList.AddTime"
                    inset
                    :label="`加時:`" 
                  ></v-switch>
                  <v-switch
                    v-model="odrList.AdjExpansion"
                    inset
                    :label="`加時:`" 
                  ></v-switch>
                </div>

          </v-expansion-panel-header>
        <v-expansion-panel-content>
         

               首次安排: <strong>  {{ trsPOScod2Name(odrList.FstPos) }}</strong>
               加時位置: <strong>  {{ trsPOScod2Name(odrList.AddPos) }}</strong> 
               <v-switch
                v-model="odrList.AddTime"
                inset
                :label="`確認加時: ${odrList.AddTime.toString()}`" 
              ></v-switch>
              <div v-if="odrList.AddTime"   class=" m-3 bg-red-200 "> 
                <button class="bg-blue-200 p-2 m-1 rounded-full text-xs"   @click="odrList.NowPos =1 , odrList.AddPos =1 " >  北北東 </button>
                <button class="bg-blue-200  p-2 m-1 rounded-full text-xs"   @click="odrList.NowPos =2 , odrList.AddPos =2 " >  北場 </button>
                <button class="bg-blue-200 p-2 m-1 rounded-full text-xs"  @click="odrList.NowPos =3 , odrList.AddPos =3 ">  南場 </button>  
              </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
       </v-expansion-panels>

       <!-- <br>
       <br>
       <hr>


               姓名 : "{{ odrList.userName }}". 
               現在位置: <strong>  {{ trsPOScod2Name(odrList.NowPos) }}</strong>
               首次安排: <strong>  {{ trsPOScod2Name(odrList.FstPos) }}</strong>
               加時位置: <strong>  {{ trsPOScod2Name(odrList.AddPos) }}</strong> 
               <v-switch
                v-model="odrList.AddTime"
                inset
                :label="`確認加時: ${odrList.AddTime.toString()}`" 
              ></v-switch>

              <div v-if="odrList.AddTime"   class=" m-3 bg-red-200 "> 
                <button class="bg-blue-400 p-2 m-1 rounded-full"   @click="odrList.NowPos =1">  北北東 </button>
                <button class="bg-red-400  p-2 m-1 rounded-full"   @click="odrList.NowPos =2">  北場 </button>
                <button class="bg-green-400 p-2 m-1 rounded-full"  @click="odrList.NowPos =3">  南場 </button>  
              </div>-->

            </li>
          </ul> 
          
          </div>
        </div>
      </div>


    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {
      season_states:['s1', 's2', 's3', 's4',],
      ttemp:[],
      tutorial: {
        title: "",
        description: "",
        idx: [],
        published: false
      },
      submitted: false
      ,
      odrList:[{
            userName: "我是第1位",
            userAmt:2, 
            bkDate:"",
            bkTime:"",
            payMent:[],
            payWay:"", 
            status:3,
            bkchked:false,
            AddTime:false,
            AdjExpansion:false,
            NowPos: 0,
            FstPos: 0,
            AddPos: 0,
          },{
            userName: "我是第2位",
            userAmt:2,
            status:3,
            bkDate:"",
            bkTime:"",
            payMent:[],
            payWay:"", 
            bkchked:false,
            AddTime:false,
            AdjExpansion:false,
            NowPos: 0,
            FstPos: 0,
            AddPos: 0,
          },{
            userName: "我是第3位",
            userAmt:2,
            status:3,
            bkDate:"",
            bkTime:"",
            payMent:[],
            payWay:"",
            bkchked:false, 
            AddTime:false,
            AdjExpansion:false,
            NowPos: 0,
            FstPos: 0,
            AddPos: 0,
          }, 
              ]
      ,
      stories: [{
                plot: "Great shot kid, that was one in a million.",
                upvotes: 28
              }, {
                plot: "General Grievous, you're shorter than I expected.",
                upvotes: 29
              }, {
                plot: "I sense great fear in you, Skywalker.",
                upvotes: 41
              }, ]
    };
  },
  methods: { 
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
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    },
    trsPOScod2Name(ary_gp,) {

      let r ="null"

      switch (ary_gp) {
            case 1 : 
              r = '北北東' 
              break
              
            case 2 : 
              r = '北棚' 
              break

            case 3 : 
              r = '南棚' 
              break 

            default:
              r = '尚未安排'
              break;
        }
        return r
      },

      
  },
  computed: {
    famous: function() {
      return this.stories.filter(function(item) {
        return item.upvotes > 30;
      })
    },
    poschker: function(num) {
      return this.odrList.filter(function(item) {
        return item.NowPos == num;
      })
    },
    poschker_1: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 1;
      })
    },
    poschker_2: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 2;
      })
    },
    poschker_3: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 3;
      })
    }
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
