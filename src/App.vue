
   
<template> 
   <v-card
    class="mx-auto overflow-hidden"
    height="mx-auto"
    width="mx-auto"
  > 
  <!-- #311B92 紫色 -->
    <v-app-bar 
      color="#33691E"
      dense 
      dark
    > 
      <!-- <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"> 
      </v-app-bar-nav-icon> -->
      <v-spacer></v-spacer> 
 

            <v-btn  icon
                    class="mx-9" 
                    to="/bk5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> 
              服務台
            </v-btn>

            <v-btn  icon 
                    class="mx-6" 
                    to="/bk4_Display"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              發射線
            </v-btn>

            
              
       
      
    </v-app-bar>

    
 
    <v-content class="bg-gray-100" > 
         <router-view/> 
      </v-content>
  </v-card>

<!-- 
  <v-app id="inspire"> 
 
   <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

 
     <v-navigation-drawer
      v-model="drawer"
      app 
      color="red darken-3"
      mini-variant
      permanent
      expand-on-hover


    >
      <ul class="pt-10 ">
        <li class="my-5"> 
             <a href="/bk4_Display" class="w-full block  py-1 text-center hover:bg-red-900  hover:text-blue-800">
     
       <router-link to="/bk4_Display" class="text-white text-xs "> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           使用現況
        </router-link>
      </a>
       
        </li>
       <li class="my-2"> 
            <a href="/"   class="w-full block py-1  text-center hover:bg-red-900   hover:text-blue-800">
        <router-link to="/" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           增修靶位
        </router-link>
      </a> 
        </li>
        <li class="my-2"> 
             <a href="/bk4" class="w-full block py-1 text-center hover:bg-red-900  hover:text-blue-800">
            <router-link to="/bk4" class="text-white text-xs ">  
             <svg class="w-5 h-5   mx-auto"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            變更靶位 
            </router-link>
          </a>
        </li>
    </ul>
    </v-navigation-drawer>
  
 
  </v-app>  -->

</template>
 
 <script>
  export default {
    data () {
      return {
        cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
      }
    },
  }
</script>