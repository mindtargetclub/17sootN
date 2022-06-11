<template>
  <div class="container">
    <div class="min-h-screen bg-blue-500 p-20 text-blue-800">
      <p class="text-9xl mt-64">Fixed Bottom Nav!</p>
    </div>

    <!-- fixed nav -->
    <nav class="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900 uppercase font-mono">

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300">
        <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        Home
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Features
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        Profile
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        Settings
      </a>

    </nav>
</div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {


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
   
  },
  mounted() {

    // const uuid = xxxxxx;
    // const token = xxxxxx;

    // const instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
    // });

    // //新增一個變數叫HexSchool api，它是一個axios實體物件。
    // //我們在裏面設定config物件，讓我們之後可以重用
    // const apiHexSchool = axios.create({
    //     baseURL: `https://course-ec-api.hexschool.io/api/${uuid}`,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": `Bearer ${token}`,
    //     }
    // })

    // //新增商品到後台。在.post()裏第一個参數，只需放入URL後面的部分
    // const addProduct_backend = data => apiHexSchool.post('/admin/ec/product',data);

    // addProduct_backend(data)
    //     .then( (response) => console.log(response))
    //     .catch( (error) => console.log(error));



    // axios.get('https://randomuser.me/api/?gender=female&nat=us')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })




    // axios.get('https://api.rezio.io/v1/config')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })


// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();



// axios({
//   method: 'get',
//   baseURL: 'https://api.rezio.io/',
//   url: '/v1/config',
//   headers: {
//            'Content-Type': 'application/json',
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
//         }
  
// })
//   .then((result) => { console.log(result.data) })
//   .catch((err) => { console.error(err) })


// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


// let responseee = fetch('https://randomuser.me/api/',{
//     headers: {
//         Authentication: 'secret'
//     }
// });

// console.log("responseee = " + responseee)

// const url = 'https://api.rezio.io//v1/config'

// let headers = {
//     "Content-Type": "application/json",
//     "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }

// fetch(url, {
//     method: "GET",
//     headers: headers,
// })
//     .then( (response) => response.json())
//     .then( (json) => console.log(json));

// console.log("- -- - -- here")


// var xhr = new XMLHttpRequest();
// //需要告知要傳遞的資料格式
// xhr.open("GET","/https://api.rezio.io//v1/config");
// xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8"); 

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };


// xhr.send();

// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');
// request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.rezio.io/v1/order/list');
 
	
// request.setRequestHeader('Content-Type', 'application/json');
// request.setRequestHeader('X-Lang', 'en');
// request.setRequestHeader('X-Auth-StoreUuid', '001e81f1-3111-485e-8c22-6644cb2df11c');
// request.setRequestHeader('X-Auth-Key', '0b4ae1cc6859fc3a47b06d27677eb07c');

// request.onreadystatechange = function () {
//    console.log('==> Status:' + this.readyState);
   
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//     // console.log('Bodyd:', response);
//     this.temp = this.responseText ;
//   }
// };
// request.send();

// fetch('https://api.rezio.io//v1/config',
//  {
// method: 'get',
// headers: {
//           "Content-Type": "application/json",
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }})
// .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


// console.log("- -- - -- here")

// body: new URLSearchParams([
// ["username", "Lan"],["password", "123456"]
// ]).toString()
// })
// .then(res => {
// console.log(res);
// return res.text();
// })
// .then(data => {
// console.log(data);
// })
 
    let headers = {
        "Content-Type": "application/json", 
            "X-Lang":"en",
            "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
            "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
    };

    axios({
          method: 'get',
          //又要多寫一次整個URL
          url:'https://cors-anywhere.herokuapp.com/https://api.rezio.io/v1/order/list',
          // url: 'https://randomuser.me/api/?gender=female&nat=us',
          //又要多寫一次headers
          headers: headers,
          // params: { code: 123 } 

      })
     .then( (response) =>  
    {  
      // this.temp = response;
      // obj = JSON.parse(response);
      // this.temp = obj;
      this.temp = JSON.parse( JSON.stringify(response.data) );
      // this.tempList = JSON.parse( JSON.stringify(this.temp.list) );
      // this.list = JSON.parse( JSON.stringify(this.temp) );

      // console.log( " here is :" +  this.tempList );
       console.log(response);
    })
    .catch( (error) => console.log(error))

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
