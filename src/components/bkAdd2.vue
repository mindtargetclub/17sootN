<template>

<div class=" w-full item-start  ">
 

  <div class=" grid grid-cols-3 gap-2  "> 

    <!-- <v-card solo> 
      <v-card-title>北北東</v-card-title>
      <v-divider></v-divider>
      <div class=" md:p-2 col-span-1">
        <strong> 
        <a class=" text-3xl "> {{ 24-od.bk_pos0_1.length-od.bk_pos0_2.length -od.bk_pos0_3.length -od.bk_pos0_4.length   }} / 24
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
      <v-card-title  >南場 </v-card-title>
      <v-divider></v-divider>

      <div class=" md:p-2 col-span-1">
        <strong> 
          <a class=" text-3xl "> {{ 24-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 24  
          </a></strong> 
      </div> 
    </v-card> -->


<!-- <div class=" grid grid-cols-3 gap-2  ">  -->
     

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
                  v-model="od.od_date"
                  label="請設定日期" 
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              
              <v-date-picker
                v-model="od.od_date"
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
      
      <div class= "col-span-1">
        <button @click="saveODR" class="btn btn-success"> 儲存記錄 </button>

      </div>   
<!-- </div> -->

      

   
  </div> 


<div v-if="!submitted">
  <v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs
      
  >
    
    <v-tab key='k2' href='#k2' > 
        北 {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }}  人 / 南 {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }}   
    </v-tab>

    <v-tab key='k1' href='#k1' v-if="!hide"  >    
        北北東  {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} 人   
    </v-tab>
  </v-tabs> 

  <v-tabs-items v-model="tab">
    <v-tab-item key='k1' value='k1'>  

    <div>  

    <div class ="flex justify-center "> 當時</div>
    <div class="flex justify-center w-full ">
      
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚1  </div >  

                <!-- {{ od.bk_pos0_1 }}   -->
          <v-chip-group v-model="od.bk_pos0_1"   multiple 
                active-class="bg-red-600 text-white text-xs "
                class=" " > 
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_1,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_1,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_1,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_1,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_1,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_1,5) == false' class=""> 1 </div> </v-chip>  
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚2  </div >   
          <v-chip-group v-model="od.bk_pos0_2"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_2,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_2,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_2,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_2,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_2,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_2,5) == false' class=""> 1 </div> </v-chip> 
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚3  </div >   
          <v-chip-group v-model="od.bk_pos0_3"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_3,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_3,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_3,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_3,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_3,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_3,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_3,5) == false' class=""> 1 </div> </v-chip>   
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚4  </div >   
          <v-chip-group v-model="od.bk_pos0_4"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_4,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_4,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_4,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_4,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_4,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_4,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_4,5) == false' class=""> 1 </div> </v-chip> 
          </v-chip-group>  
    </div>
<hr>
    <div class="bg-green-50">
      <div class ="flex justify-center "> 預留</div>
            <div class="flex justify-center w-full "> 
             
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('11')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚1  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_1" multiple 
            active-class="bg-green-600 text-white text-xs">  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

            <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('12')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚2  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_2"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

                  <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('13')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚3  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_3"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

                  <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('14')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚4  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_4"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      

    </div> 
    </div> 
    </v-tab-item>
    <v-tab-item key='k2' value='k2'> 

<div> 
  
 
  
  <div class ="flex justify-center "> 靶位現況  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-1  </div >   
        <v-chip-group v-model="od.bk_pos1_1"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_1,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_1,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_1,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_1,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_1,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_1,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-2  </div >   
        <v-chip-group v-model="od.bk_pos1_2"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_2,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_2,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_2,5) == false' class=""> 1 </div> </v-chip>  
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-3  </div >   
        <v-chip-group v-model="od.bk_pos1_3"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_3,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_3,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_3,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_3,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_3,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_3,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_3,5) == false' class=""> 1 </div> </v-chip>   
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-4  </div >   
        <v-chip-group v-model="od.bk_pos1_4"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_4,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_4,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_4,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_4,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_4,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_4,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_4,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-5  </div >   
        <v-chip-group v-model="od.bk_pos1_5"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_5,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_5,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_5,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_5,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_5,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_5,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_5,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-6  </div >   
        <v-chip-group v-model="od.bk_pos1_6"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_6,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_6,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_6,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_6,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_6,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_6,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_6,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>

  <hr>
  <!-- <div class ="flex justify-center mt-2 "> 現況  </div> -->
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-7  </div >   
        <v-chip-group v-model="od.bk_pos1_7"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_7,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_7,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_7,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_7,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_7,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_7,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_7,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-8  </div >   
        <v-chip-group v-model="od.bk_pos1_8"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_8,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_8,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_8,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_8,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_8,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_8,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_8,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>

  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-9  </div >   
        <v-chip-group v-model="od.bk_pos1_9"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_9,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_9,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_9,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_9,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_9,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_9,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_9,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-10  </div >   
        <v-chip-group v-model="od.bk_pos1_10"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_10,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_10,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_10,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_10,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_10,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_10,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_10,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
<hr>

<div class ="flex justify-center bg-green-900 text-gray-100 py-2 "> 下個時段  </div>
<div class="bg-green-50">
        <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('21')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-1  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_1" multiple 
        active-class="bg-green-600 text-white text-xs">  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

        <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('22')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-2  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_2"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('23')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-3  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_3"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('24')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-4  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_4"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('25')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-5  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_5"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('26')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-6  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_6"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 

  <hr>
  <!-- <div class ="flex justify-center bg-gray-900 text-gray-100 "> 南場 下時段  </div> -->
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('27')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-7  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_7"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>  
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('28')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-8  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_8"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>     
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('29')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-9  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_9"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>  
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('210')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-10  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_10"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>        
 
   
</div>  
</div> 

    </v-tab-item>
   
  </v-tabs-items> 
 
    </div>
<div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newODR">Add</button>
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
