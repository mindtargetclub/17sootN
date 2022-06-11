<!-- <template>
    
  <div class="list mb-40 mx-30">
      <transition-group name="flip-list" tag="div">

 
              <v-btn
                outlined
                @dragover="(e) => onDragOver(item, i, e)" 
                @dragend="(e) => finishDrag(item, i, e)"
                @dragstart="(e) => startDrag(item, i, e)"
                v-for="(item, i) in items"
                class="item"
                :class="{over: (item === over.item && item !== dragFrom), [over.dir]: (item === over.item && item !== dragFrom) }"
                draggable="true"
                :key="item"
                >
                {{item}}
                </v-btn>

                <hr>
                 
 
      
      </transition-group>
  </div> 
</template>

<script> 
export default {
   
  data() {
    return {
      items: ['one', 'two', 'three', 'four'],
        over: {},
        startLoc: 0,
        dragging: false,
        dragFrom: {}, 
        fruits: ['apple', 'peach', 'pear'],
    home: [],
    };
  },
  methods: {
      send($ev) {
    	console.log($ev)
    	this.home.push(JSON.parse($ev))
    },
    startDrag(item, i, e) {
      this.startLoc = e.clientY;
      this.dragging = true;
      this.dragFrom = item;
      console.log(this.dragFrom);
    },
    finishDrag(item, pos) {
      this.items.splice(pos, 1)
      this.items.splice(this.over.pos, 0, item);
      this.over = {}
    },
    
    onDragOver(item, pos, e) {
      const dir = (this.startLoc < e.clientY) ? 'down': 'up';
      setTimeout(() => {
        this.over = { item, pos, dir };        
      }, 50)
      
    }
  }
};
</script>
<style scoped></style> -->
<template>
    <v-app>
        <v-content>
            <div class="grid grid-cols-7 gap-0.5">
                <div class="col-span-1 ">
                    <v-col>
                            <v-list three-line class="list1">
                                <drop-list :items="items1" @reorder="$event.apply(items1)" @insert="insert1" mode="cut">
                                    <template v-slot:item="{item, reorder}">
                                        <drag :key="item.title" :data="item" @cut="remove(items1, item)">
                                            <v-list-item style="background-color: white"
                                                        :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}">
                                                <v-list-item-avatar>
                                                    <v-img :src="item.avatar"/>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title v-html="item.title"/>
                                                    <v-list-item-subtitle v-html="item.subtitle"/>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-divider/>
                                        </drag>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-list-item-avatar style="transform:translate(-50%, -50%) scale(1.5)">
                                            <img :src="data.avatar">
                                        </v-list-item-avatar>
                                    </template>
                                    <template v-slot:reordering-drag-image/>
                                    <template v-slot:feedback="{data}">
                                        <v-skeleton-loader
                                                type="list-item-avatar-three-line"
                                                :key="data.title"
                                                style="border-left: 2px solid #1976D2; margin-left: -2px;"
                                        />
                                    </template>
                                </drop-list>
                            </v-list>
                    </v-col>
                </div> 
                <div class="col-span-6 ">
                    <v-container fluid> 
                        <v-row align-content="stretch">  
                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>

                            <v-col>
                                <drop-list class="list2 bg-green-300" :items="items2" @reorder="$event.apply(items2)" @insert="insert2"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items2, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            
                            <v-col>
                                <drop-list class="list2 bg-red-300" :items="items3" @reorder="$event.apply(items3)" @insert="insert3"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items3, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col>
                            <v-col>
                                <drop-list class="list2 bg-yellow-300" :items="items4" @reorder="$event.apply(items4)" @insert="insert4"
                                        mode="cut">
                                    <template v-slot:item="{item,reorder}">
                                        <drag :key="item.title" class="chip" :data="item" @cut="remove(items4, item)">
                                            <v-chip :color="reorder ? 'primary' : null">{{item.title}}</v-chip>
                                        </drag>
                                    </template>
                                    <template v-slot:feedback="{data}">
                                        <div class="chip" :key="data.title">
                                            <v-chip color="primary">{{data.title}}</v-chip>
                                        </div>
                                    </template>
                                    <template v-slot:inserting-drag-image="{data}">
                                        <v-chip :key="data.title" style="transform: translate(-50%, -50%)">{{data.title}}
                                        </v-chip>
                                    </template>
                                    <template v-slot:reordering-drag-image="{item}">
                                    </template>
                                </drop-list>
                            </v-col> 
                            <hr>
                            
                        </v-row>
                    </v-container>
                </div>
            </div>

            


            
        </v-content>
    </v-app>
</template>

<script>
    import {Drag,Drop,DropList} from "vue-easy-dnd";

    export default {
        name: "App",
        components: {
            Drag,
            DropList,
            Drop
        },
        data: function () {
            return {
                items1: [
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                        title: "Brunch this weekend?",
                        subtitle:
                            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                        title: "Summer BBQ",
                        subtitle:
                            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                        title: "Oui oui",
                        subtitle:
                            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    }
                ],
                items2: [
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                        title: "Birthday gift",
                        subtitle:
                            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                        title: "Recipe to try",
                        subtitle:
                            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                    }
                ],

                items3: [],
                items4: [],
                items5: [],
                items6: [],
                items7: [],
                items8: [],
                items9: [],
                items10: [],
                items11: [],
                items12: [],
            };
        },
        methods: {
            insert1(event) { this.items1.splice(event.index, 0, event.data); },
            insert2(event) { this.items2.splice(event.index, 0, event.data); },
            insert3(event) { this.items3.splice(event.index, 0, event.data); },
            insert4(event) { this.items4.splice(event.index, 0, event.data); }, 
            insert5(event) { this.items5.splice(event.index, 0, event.data); },

            insert6(event) { this.items6.splice(event.index, 0, event.data); },
            insert7(event) { this.items7.splice(event.index, 0, event.data); },
            insert8(event) { this.items8.splice(event.index, 0, event.data); },  
            insert9(event) { this.items9.splice(event.index, 0, event.data); },
            insert10(event) { this.items10.splice(event.index, 0, event.data); },

            insert11(event) { this.items11.splice(event.index, 0, event.data); },
            insert12(event) { this.items12.splice(event.index, 0, event.data); },
             


            insert_Mdf(i,event) {
                i.splice(event.index, 0, event.data);
            },
            remove(array, value) {
                let index = array.indexOf(value);
                array.splice(index, 1);
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

    .list1 {
        height: 100%;
    }

    .list2 {
        display: flex;
        height: 100%;
    }

    .chip {
        margin: 10px;
    }

    .drop-allowed.drop-in * {
        cursor: inherit !important;
    }
</style>
