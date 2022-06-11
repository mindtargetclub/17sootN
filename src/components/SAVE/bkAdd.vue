<template>

<div class="flex items-start w-auto row">
 

  <div class=" grid grid-cols-3 gap-2  ">  
    <v-card solo>

      <v-card-title>北北東</v-card-title>
      <v-divider></v-divider>
      <div class=" md:p-2 col-span-1">
        <strong> 
    <a class=" text-3xl "> {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24
      </a></strong> 
      </div>
    </v-card>  
    <v-card solo>
    <v-card-title>北場 </v-card-title>
      <v-divider></v-divider>
      <div class=" md:p-2 col-span-1">
        <strong> 
          <a class=" text-3xl "> {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }} / 36 
          </a></strong> 
      </div>
      </v-card> 
    <v-card solo>
    <v-card-title>南場 </v-card-title>
      <v-divider></v-divider>

      <div class=" md:p-2 col-span-1">
        <strong> 
          <a class=" text-3xl "> {{ 24-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 24  
          </a></strong> 
      </div> 
      </v-card>
  </div>
   

  <v-tabs
    v-model="tab"
    background-color="primary" 
    dark 
  >
    <v-tab key='k1' href='#k1' v-if="!hide"  >    
        北北東 
        <!-- <br>【 {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24 】  -->  
    </v-tab>
    <v-tab key='k2' href='#k2' v-if="!hide"> 
        北場  
        <!-- <br> 【 {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }} / 36 】  -->
    </v-tab>
    <v-tab key='k3' href='#k3' v-if="!hide"> 
        南場  
        <!-- <br> 【 {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 22   -->
    </v-tab> 
  </v-tabs> 

      <v-tabs-items v-model="tab">
        <v-tab-item key='k1' value='k1'>  

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >北北東 棚 1</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_1.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_1.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" > 換 </div>      
      </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-2 my-2 mr-1 w-1/6">
                  當時  </div >   
            <v-chip-group v-model="bk_pos0_1"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-2 my-2 mr-1 w-1/6">
                  預排  </div >   
            <v-chip-group v-model="ntadd_pos0_1"   multiple 
                  active-class="light-green darken-3 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >北北東 棚 2</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_2.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_2.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" > 換 </div>      
      </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-2 my-2 mr-1 w-1/6">
                  當時  </div >   
            <v-chip-group v-model="bk_pos0_2"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-2 my-2 mr-1 w-1/6">
                  預排  </div >   
            <v-chip-group v-model="ntadd_pos0_2"   multiple 
                  active-class="light-green darken-3 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >北北東 棚 3</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_3.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_3.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" > 換 </div>      
      </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-2 my-2 mr-1 w-1/6">
                  當時  </div >   
            <v-chip-group v-model="bk_pos0_3"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-2 my-2 mr-1 w-1/6">
                  預排  </div >   
            <v-chip-group v-model="ntadd_pos0_3"   multiple 
                  active-class="light-green darken-3 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >北北東 棚 4</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_4.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_4.length  }} / 6 </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" > 換 </div>      
      </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-2 my-2 mr-1 w-1/6">
                  當時  </div >   
            <v-chip-group v-model="bk_pos0_4"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-2 my-2 mr-1 w-1/6">
                  預排  </div >   
            <v-chip-group v-model="ntadd_pos0_4"   multiple 
                  active-class="light-green darken-3 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    </div>
<!-- 

     <v-card-text>
      <span class="text-ms"> 北北東 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos0_2.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos0_2" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北北東 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos0_3.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos0_3" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 北北東 棚 4  </span> <v-chip   >  剩餘 : {{ 6-bk_pos0_4.length  }} / 6 </v-chip>
            <v-chip-group v-model="bk_pos0_4" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text> -->

        </v-tab-item>
        <v-tab-item key='k2' value='k2'> 
   
        <v-card-text>
          <span class="text-ms"> 北場 棚 1  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_1.length  }} / 6 </v-chip>
                <v-chip-group v-model="bk_pos1_1" column multiple active-class="bg-red-600 text-white" >
            <v-chip   class="text-ms" > 靶 1 </v-chip>
            <v-chip   class="text-ms" > 靶 2 </v-chip>
            <v-chip  class="text-ms" > 靶 3 </v-chip>
            <v-chip   class="text-ms" > 靶 4 </v-chip>
            <v-chip   class="text-ms" > 靶 5 </v-chip>
            <v-chip  class="text-ms" > 靶 6 </v-chip> 
          </v-chip-group>
        </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北場 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_2.length  }} / 6 </v-chip>
            <v-chip-group v-model="bk_pos1_2" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北場 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_3.length  }} / 6 </v-chip>
            <v-chip-group v-model="bk_pos1_3" column multiple active-class="bg-red-600 text-white" >
              <v-chip   class="text-ms" > 靶 1 </v-chip>
              <v-chip   class="text-ms" > 靶 2 </v-chip>
              <v-chip  class="text-ms" > 靶 3 </v-chip>
              <v-chip   class="text-ms" > 靶 4 </v-chip>
              <v-chip   class="text-ms" > 靶 5 </v-chip>
              <v-chip  class="text-ms" > 靶 6 </v-chip> 
            </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 北場 棚 4  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_4.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_4" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

        </v-tab-item>
        <v-tab-item key='k3' value='k3'> 
  

  <v-card-text>
      <span class="text-ms"> 南場 棚 1  </span>  <v-chip   >  剩餘 : {{ 6-bk_pos2_1.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos2_1" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip> 
        <v-chip  class="text-ms" > 靶 5 </v-chip>
        <v-chip   class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 南場 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos2_2.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos2_2" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 南場 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos2_3.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos2_3" column multiple active-class="bg-red-600 text-white" >
        <v-chip   class="text-ms" > 靶 1 </v-chip>
        <v-chip   class="text-ms" > 靶 2 </v-chip>
        <v-chip  class="text-ms" > 靶 3 </v-chip>
        <v-chip   class="text-ms" > 靶 4 </v-chip>
        <v-chip   class="text-ms" > 靶 5 </v-chip>
        <v-chip  class="text-ms" > 靶 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

        </v-tab-item>
      </v-tabs-items>

 
    
 
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {
      tab:"",
      
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

      bk_pos2_1:[],
      bk_pos2_2:[],
      bk_pos2_3:[],
      bk_pos2_4:[],
      

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
