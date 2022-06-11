<template>
  <div v-if="currentTutorial" class="">
    <h4> 詞彙說明 </h4>
    <form>
       
      <div class="form-group">
        <v-chip-group v-model="currentTutorial.bk_pos0_1"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class="w-5/6 " >   
              <v-chip class="text-xs " > 6</v-chip>
                <v-chip class="text-xs " > 5 </v-chip>
                  <v-chip class="text-xs " > 4 </v-chip>
                    <v-chip class="text-xs " > 3 </v-chip>
                      <v-chip class="text-xs " > 2 </v-chip>
                        <v-chip class="text-xs " > 1 </v-chip>

               <!-- <v-chip class="text-xs " > <div v-if='ck(currentTutorial.ntadd_pos0_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(currentTutorial.ntadd_pos0_1,0) == false' class=""> 6 </div> </v-chip> -->
              <!--<v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos2_1,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos2_1,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos2_1,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos2_1,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos2_1,5) == false' class=""> 1 </div> </v-chip>   -->
        </v-chip-group> 

        <v-chip-group v-model="currentTutorial.ntadd_pos0_1"   multiple 
              active-class="bg-green-600 text-white text-xs  "
              class="w-5/6 " >   
              <v-chip class="text-xs " > 1 </v-chip>
                <v-chip class="text-xs " > 2 </v-chip>
                  <v-chip class="text-xs " > 3 </v-chip>
                    <v-chip class="text-xs " > 4 </v-chip>
                      <v-chip class="text-xs " > 5 </v-chip>
                        <v-chip class="text-xs " > 6 </v-chip>

              <!-- <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos2_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos2_1,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos2_1,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos2_1,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos2_1,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos2_1,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos2_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos2_1,5) == false' class=""> 1 </div> </v-chip>   -->
        </v-chip-group>  
      </div>


      <div class="form-group">
        <label for="description">日期</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.date_s"
        />
      </div>


      <!-- <div class="form-group">
        <label for="description">日期</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.date_mor"
        />
      </div> -->




      <!-- <div class="form-group">
        <label><strong>狀態:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div> -->

<!-- <v-date-picker
              v-model="tutorial.date_mor"
              multiple
            ></v-date-picker>

      <v-combobox
                v-model="tutorial.date_mor"
                multiple
                chips
                small-chips
                label="Multiple picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-combobox> -->



    </form>
 
    <!-- <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button> -->
<!-- 
    <button class="border-2 border-solid px-2 mr-2" @click="deleteTutorial">
      刪除
    </button> -->

    <button type="submit" class="border-2 border-solid px-2" @click="updateTutorial">
      更新
    </button>

    <p>{{ message }}</p>
    
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
     

    updateTutorial() {
      const data = {
        // title: this.currentTutorial.title,
        // description: this.currentTutorial.description,

         bk_pos0_1   : this.currentTutorial.bk_pos0_1,
         ntadd_pos0_1: this.currentTutorial.ntadd_pos0_1,
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

    ck(aryy,cdtion){  
       var ans = aryy.some(function(item, index, array)
                {
                  return item == cdtion // 當全部 age 大於 10 才能回傳 true
                });
                // console.log("ans = " + ans);  // true: 只要有部分符合，則為 true 
           return  ans 
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
