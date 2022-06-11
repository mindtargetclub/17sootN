<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4> 詞彙說明 </h4>
    <form>
      <div class="form-group">
        <label for="title">泰雅文</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"
        />
      </div>

      <div class="form-group">
        <label for="description">細節描述</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.description"
        />
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




      <div class="form-group">
        <label><strong>狀態:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>

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

    <button
      class="border-2 border-solid px-2 mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      未發佈
    </button>
    <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button>

    <button class="border-2 border-solid px-2 mr-2" @click="deleteTutorial">
      刪除
    </button>

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
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",

      currentTutorial: {
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
      },
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
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
