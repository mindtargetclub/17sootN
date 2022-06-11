<template>
  <div class="">

    消費金額 的詳細資料

    <!-- <span class="result"></span>
      <hr>  
      check here ,
      Exp_1: 

      <!-- {{ temp.data.list }}  
      <br>
     
 
       <v-btn @click='csvExport(temp.data.list)' > 333</v-btn>

<hr>
 
<download-csv
	class   = "btn bg-red-400 rounded-full p-1 m-2 text-white hover:bg-red-600"
	:data   = "temp.data.list" 
  :labels  = " {
        productCode:'编号',
        amount:'姓名'
      }"
	name    = "filename.csv">

	Download CSV (10)

</download-csv>
 


指定為 本筆訂單的消費金額：
{{ temp.data.list[0].amount  }}

<hr>

指定為 本筆訂單的詳細資料：
{{ temp.data.list[0].orderNo  }}

<hr>
指定為 ： -->
<!--  
  <div v-for="(item, index) in  temp.data.list" :key="index" class="my-2 "> 
    <div class="
                bg-white rounded-lg  

                transform hover:translate-y-2 
                hover:shadow-xl transition duration-300"> 

        <div class="rounded-lg py-2 px-4 bg-purple-700 flex flex-col">
          
          <div>
            
            <span class="text-xs text-gray-400 leading-none mb-1"> 
              {{ item.sessionStartDate }}  【 odNO. {{ item.orderNo }} </span>

               <span class="text-xs broder-1 rounded-full bg-gray-900 text-gray-100 leading-none mb-1"> 
              {{ item.productCode }} </span>

 <hr>



            <h4 class="text-white text-2xl font-bold leading-none truncate">
              {{ item.sessionStartTime }} | {{ item.contactLastName  }}  {{ item.contactFirstName }} 
            </h4>
 
          </div>

          <div class="items-center"> 
<div class= "grid grid-cols-6" >

            
            <div class="text-lg text-white font-bold col-span-2 mx-0.5 ">
              <span class="text-xs text-white font-light">
                預約
              </span>
                 {{ Math.floor(item.amount /400) }} 位 
            </div>

            <div class=" col-span-3 mx-2  text-lg text-white px-2 broder-1 rounded-full bg-gray-900 text-gray-100 " > 
              須繳：{{ item.balance  }} 
            </div>

            

            <button href="javascript:;" 
            class="col-span-1
            rounded-full bg-purple-900 text-white 
            hover:bg-purple-500 hover:text-purple-900 hover:shadow-xl 
            focus:outline-none w-6 h-6 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>

</div>

          </div>
          </div>
          </div>

           
    
  </div> -->
   
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";
import Vue from 'vue'
import JsonCSV from 'vue-json-csv'




export default {
  name: "add-tutorial",
  data() {
    return {
    json_data: [
                {
                    'name': 'Tony Peña',
                    'city': 'New York',
                    'country': 'United States',
                    'birthdate': '1978-03-15',
                    'phone': {
                        'mobile': '1-541-754-3010',
                        'landline': '(541) 754-3010'
                    }
                },
                {
                    'name': 'Thessaloniki',
                    'city': 'Athens',
                    'country': 'Greece',
                    'birthdate': '1987-11-23',
                    'phone': {
                        'mobile': '+1 855 275 5071',
                        'landline': '(2741) 2621-244'
                    }
                }
            ],

      // temp:[],
      temp: {  
        code: "",
        codeMessage:"",
        data: {
          list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } 
        }, 
      }, 

      list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } , 
       
      submitted: false
      ,
      word: {  
        spell_tayal: "",
        spell_zh_tw: "",  
        season: "",
        topic:"",
        description: "", 
      },


    };
  }, 
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return this.arrays.sort(compare);
    }
  },
  methods: {
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
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    },
    
    csvExport(arrData) {
       console.log(this.users)
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
    },
   
  },
  mounted() { 

    const apiHexSchool = axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://api.rezio.io/',
        headers: {
            "Content-Type": "application/json", 
            "X-Lang":"en",
            "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
            "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
        }
    })

    const getProductList_backend = () => apiHexSchool.get( cc(1));
          getProductList_backend()
              .then( (response) => 
              {
                this.temp = JSON.parse( JSON.stringify(response.data) );  
                console.log(response.data);
              })
              .catch( (error) => console.log(error));


let addurl_1 = 'v1/order/list';

    let addurl_2 = '/v1/setting/bookingInfo'; 

    let addurl_3 ='/v1/setting/pricePolicy';

function cc(key,item){
   switch (key) {
    case 1:
       return 'v1/order/list'
       break;
    case 2:
       return '/v1/setting/bookingInfo'
       break;
    case 3:
       return '/v1/setting/pricePolicy'
       break;     
   
     default:
       break;
   }
   }
   
Vue.component('downloadCsv', JsonCSV)
// let url2
// /v1/order/{orderNo}/detail

//     axios({
//           method: 'get', 
//           url: url2 + addurl_1 + dtaparamm,  
//           headers: headers,   
//       })
//      .then( (response) =>  
//     {   
//       this.temp = JSON.parse( JSON.stringify(response.data) ); 
//        console.log(response);
//     })
//     .catch( (error) => console.log(error))


    	

    // .catch( (error) => console.log(error));

    // const uuid = xxxxxx;
    // const token = xxxxxx;

    //新增一個變數叫HexSchool api，它是一個axios實體物件。
    //我們在裏面設定config物件，讓我們之後可以重用
    // const apiRezio = axios.create({
    //     baseURL: 'https://api.rezio.io/',
    //     headers: {
    //         "Content-Type": "application/json", 
    //         "X-Lang":"en",
    //         "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
    //         "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
    //     }
    // })

    // //新增商品到後台。在.post()裏第一個参數，只需放入URL後面的部分
    // const getRezioDt = data => apiRezio.get('https://api.rezio.io/v1/config',data);

    // getRezioDt(data)
    //     .then( (response) => 
    //             {  
    //               // this.temp = response;
    //                 console.log(response);
    //             })
    //     .catch( (error) => console.log(error));

 // - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . -
 
      // const result = document.querySelector('.result');

      // axios.get('https://randomuser.me/api/')
      //   .then(function (response) {
      //     let data = response.data;
      //     result.textContent = data.results[0].email;
      //     // this.temp = data;
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function () {
      //     // always executed
      //     console.log('I always Execued');
      //   });
    


    // TutorialDataService.getAll().on("value", this.onDataChange);
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
