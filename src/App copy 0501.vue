<template>
  <v-app>
     
        

      
       <div class=" ">
    <div class="">
       <!-- Fixed Bottom Nav!  -->
        
        <v-content class= mb-20 bg-black > 
         <router-view/> 
      </v-content>

    </div>

    <!-- fixed nav -->
    <nav class="fixed bottom-0 h-16 inset-x-0 bg-blue-100 flex justify-between text-sm bg-blue-900  text-blue-900 uppercase font-mono">

      <a href="https://cors-anywhere.herokuapp.com/corsdemo" 
         class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800"> 
        <router-link to="/supsetting" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
           輔助設定
        </router-link>
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800">
        <!-- <svg class="w-5 h-5   mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        停用 2 -->
        <router-link to="/bk4_Display" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           靶位使用現況
        </router-link>
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800">
        <router-link to="/" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           增修靶位
        </router-link>
      </a> 

      <!-- <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800">
        <router-link to="/bkAddv2" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           棚區使用清單
        </router-link>
      </a>   -->
  
       <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800">
            <router-link to="/bk4" class="text-white text-xs ">  
             <svg class="w-5 h-5   mx-auto"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            變更靶位 
            </router-link>
          </a>

    </nav>
</div>


  </v-app>

  
</template>