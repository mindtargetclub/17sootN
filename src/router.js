import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [ 
    {
      path: "/DragDrop",
      name: "tsing",
      component: () => import("./components/DragDrop")
    }, 
    {
      path: "/DragDropmList",
      name: "tsing",
      component: () => import("./components/DragDropmList")
    }, 
    //   
    {
      path: "/bkAdd4",
      name: "bkadd2",
      component: () => import("./components/bkAdd4")
    },
    {
      path: "/",
      name: "bkList",
      component: () => import("./components/bdadd5_List")
    },
    {
      path: "/bk5",
      name: "bkList",
      component: () => import("./components/bdadd5_List")
    },
    {
      path: "/bk4",
      name: "bkList",
      component: () => import("./components/bdadd4_List")
    },
    {
      path: "/bk4_Display",
      name: "bkList",
      component: () => import("./components/bdadd4_Display")
    }, 
          
  ]
});
