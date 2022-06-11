
   
<template>
  <!-- <v-app id="inspire">
    <v-navigation-drawer 
      app 
      class="pt-4 text-red-50 "
      color="cyan darken-1"
      mini-variant="w-1/6"
    >
      

       <ul class=" ">
        <li class=""> 
             <a href="#" class="nav-link w-full block  py-5  text-center hover:bg-gray-900  hover:text-blue-800">
     
        <router-link to="/bk4_Display" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           靶位使用現況
        </router-link>
      </a>
        </li>
       <li class=""> 
            <a href="#" class="w-full block py-5   text-center hover:bg-gray-900   hover:text-blue-800">
        <router-link to="/" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           增修靶位
        </router-link>
      </a> 
        </li>
        <li class=""> 
             <a href="#" class="w-full block py-5 text-center hover:bg-gray-900  hover:text-blue-800">
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

    <v-main> 
      <div class=" "> 
        
        <v-content class= mb-20 bg-black > 
         <router-view/> 
      </v-content>

    </div>
    </v-main>
  </v-app> -->

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
             <a href="#" class="w-full block  py-1 text-center hover:bg-red-900  hover:text-blue-800">
     
       <router-link to="/bk4_Display" class="text-white text-xs "> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           使用現況
        </router-link>
      </a>
       
        </li>
       <li class="my-2"> 
            <a href="#"   class="w-full block py-1  text-center hover:bg-red-900   hover:text-blue-800">
        <router-link to="/bkAdd4" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           增修靶位
        </router-link>
      </a> 
        </li>
        <li class="my-2"> 
             <a href="#" class="w-full block py-1 text-center hover:bg-red-900  hover:text-blue-800">
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
  

    <v-main>
         <v-content  > 
         <router-view/> 
      </v-content>
    </v-main>
  </v-app> 
  
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