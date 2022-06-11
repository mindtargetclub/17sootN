<template>
  
<div id=""> 
    <v-content>
      <v-container fluid justify-center>
        <v-flex class=" pa-3 ma-2">
          <v-toolbar class="mb-2" color="primary" dark>
            <v-toolbar-title>Document Types</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="action('edit')" v-if="!editing">
              <v-icon>sort</v-icon>
            </v-btn>
            <v-btn icon @click="action('done')" v-if="editing">
              <v-icon>done</v-icon>
            </v-btn>
            <v-btn icon @click="action('undo')" v-if="editing">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-line>
            <draggable :options="options" v-model="items">
              <template v-for="(v, i) in items">
                <v-list-tile :key="v.ID" avatar>
                  <v-list-tile-avatar color="grey">
                    <span>{{ i+1 }}</span>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="v.Title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="v.Subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
<!--                   
                  <v-list-tile-action v-if="editing">
                    <v-btn @click="remove(i)" icon><v-icon>close</v-icon></v-btn>
                  </v-list-tile-action>
-->
                </v-list-tile>
              </template>
            </draggable>
          </v-list> 
        </v-flex>
      </v-container>
    </v-content> 
</div>

</template>

<script>
import TutorialDataService from "../services/SeatPrepareService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data () {
    return {
      before: null,
      editing: false,
      items: [
        {"ID":1,"Title":"Fact sheets, brochures, educational materials","Ordering":1,"Subtitle":""},
        {"ID":2,"Title":"HHS Clearance submission","Ordering":2,"Subtitle":"(for campaigns, campaign products, and/or videos)"},
        {"ID":3,"Title":"Abstracts","Ordering":3,"Subtitle":""},
        {"ID":4,"Title":"Non-media Blog/blog posts","Ordering":4,"Subtitle":"(internal or external)"},
        {"ID":5,"Title":"CDC Connects articles","Ordering":5,"Subtitle":""},
        {"ID":6,"Title":"CDC.gov features","Ordering":6,"Subtitle":""},
        {"ID":7,"Title":"Logo use/branding","Ordering":7,"Subtitle":""},
        {"ID":8,"Title":"External newsletters","Ordering":8,"Subtitle":""},
        {"ID":9,"Title":"Infographics","Ordering":9,"Subtitle":""},
        {"ID":10,"Title":"Other","Ordering":10,"Subtitle":""},
        {"ID":11,"Title":"Partnership plans/strategies","Ordering":11,"Subtitle":"(health communications focused)"},
        {"ID":12,"Title":"Podcast/vodcasts","Ordering":12,"Subtitle":""},
        {"ID":13,"Title":"PowerPoint Presentations","Ordering":13,"Subtitle":""},
        {"ID":14,"Title":"Scripts","Ordering":14,"Subtitle":"(for video, podcasts, or webcasts)"},
        {"ID":15,"Title":"Social media plans/proactive messages","Ordering":15,"Subtitle":""},
        {"ID":16,"Title":"Twitter events, plans, & tweets","Ordering":16,"Subtitle":""},
        {"ID":17,"Title":"Video & training materials","Ordering":17,"Subtitle":"(not requiring HHS clearance)"},
        {"ID":18,"Title":"Web banners, buttons, and badges","Ordering":18,"Subtitle":""},
        {"ID":19,"Title":"Web content on CDC.gov","Ordering":19,"Subtitle":"(top-level topic pages)"},
        {"ID":20,"Title":"Press materials ","Ordering":20,"Subtitle":"(i.e. media advisories, press releases, press conference speeches, media fact sheets, letters to the editor, op-eds, rollout plans)"},
        {"ID":21,"Title":"Communication strategies","Ordering":21,"Subtitle":"(for highly visible or controversial issues or as requested by OD)"},
        {"ID":22,"Title":"Key points","Ordering":22,"Subtitle":""},
        {"ID":23,"Title":"Cross-center global health communication content ","Ordering":23,"Subtitle":"(i.e. newsletter articles, blogs, success stories)"}]
    }
  },
  computed: {
    options () {
      return {
        disabled: !this.editing
      }
    }
  },
  methods: {
    action (e) {
      if (e === 'edit') this.before = Object.assign([],this.items)      
      if (e === 'undo') this.items = this.before
      this.editing = !this.editing
    },
    remove (i) {
      this.$delete(this.items, i)
    }
  }
};
</script>

<style>
.draggable-flex {
  display: inherit;
  flex-direction: inherit;
}
</style>
