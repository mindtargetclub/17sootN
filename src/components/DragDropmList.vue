<template>
  <div id="app">
    <transition-group name="list" tag="div">
      <drag v-for="n in numbers" :key="n" class="drag" :data="n" @cut="remove(n)">{{n}}</drag>
    </transition-group>
    <transition-group name="list" tag="div">
      <drag v-for="n in numbers" :key="n" class="drag" :data="n" @cut2="remove(n)">{{n}}</drag>
    </transition-group>
    <div class="group">
      <!-- <drop class="copy" @drop="onCopyDrop">
        <span v-for="(n, index) in copied" :key="index">Copied {{n}};&nbsp;</span>
      </drop> -->
      <drop class="cut" @drop="onCutDrop" mode="cut1">
        <span v-for="(n, index) in cut1" :key="index">群組1 {{n}};&nbsp;</span>
      </drop>
      <drop class="cut" @drop="onCutDrop2" mode="cut2">
        <span v-for="(n, index) in cut2" :key="index">群組2 {{n}};&nbsp;</span>
      </drop>
 
      <drop class="cut" @drop="onCutDrop" mode="cut3">
        <span v-for="(n, index) in cut3" :key="index">群組3 {{n}};&nbsp;</span>
      </drop>

      <drop class="cut" @drop="onCutDrop" mode="cut4">
        <span v-for="(n, index) in cut" :key="index">群組4 {{n}};&nbsp;</span>
      </drop>

      <drop class="cut" @drop="onCutDrop" mode="cut5">
        <span v-for="(n, index) in 群組5" :key="index"> {{n}};&nbsp;</span>
      </drop>

      <drop class="cut" @drop="onCutDrop" mode="cut">
        <span v-for="(n, index) in cut" :key="index">群組6 {{n}};&nbsp;</span>
      </drop>
    </div>
  </div>
</template>

<script>
import { Drag, Drop, DropMask } from "vue-easy-dnd";

export default {
  name: "App",
  components: {
    Drag,
    Drop,
    DropMask
  },
  data: function() {
    return {
      numbers: [1, 2, 3, 4, 5],
      copied: [],
      cut: [],
      cut1: [],
      cut2: [],
      cut3: [],
      cut4: [],
      cut5: [],
      cut6: [],
    };
  },
  methods: {
    onCopyDrop(e) {
      this.copied.push(e.data);
    },
    onCutDrop(e) {
      this.cut.push(e.data);
    },

    onCutDrop2(e) {
      this.cut2.push(e.data);
    },
    remove(n) {
      let index = this.numbers.indexOf(n);
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Roboto";
}

.drag {
  width: 60px;
  height: 60px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  font-size: 20px;
  transition: all 0.5s;
}

.group {
  display: flex;
}

.copy {
  margin: 20px 10px;
  border: 1px solid black;
  height: 100px;
  display: inline-block;
  position: relative;
  flex: 1;
}

.cut {
  margin: 20px 10px;
  border: 1px solid black;
  height: 100px;
  display: inline-block;
  position: relative;
  flex: 1;
}

.copy::before {
  content: "COPY";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  font-weight: bold;
}

.cut::before {
  content: "CUT";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  font-weight: bold;
}

.drop-allowed {
  background-color: rgba(0, 255, 0, 0.2);
}

.drop-forbidden {
  background-color: rgba(255, 0, 0, 0.2);
}

.drop-in {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>


