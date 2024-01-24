// // fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Messagae : ${error.message}`)
//     }
// }


// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (params) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=kv5KjSGpridc7Ai%2BQIqvr%2B8jzmgkmfQeM5XqJO8xL1Gvknk7KLsDU4lwEaZpY0taxMMY5QKaZGq3QUopmUOYVg%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`; 
    let options = {} ;    // python의 dict와 유사
    try {
        let response = await fetch(url, options);    // postman에서 send 버튼

        let result = await response.json();   // 응답 : json파일로 변경

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents")
        contents.innerHTML = result['header']['resulMsgS'];
    } catch (error) {
        console.log(`Error Messagae : ${error.message}`)
    }
});

// from naver api datalab_shoppinginsite
let shopping_insite = document.querySelector("#datalab_shoppinginsite");
shopping_insite.addEventListener('click', async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`; 
    let data = {
        "startDate": "2017-08-01",
        "endDate": "2017-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let options = {
        method : "POST"
        , headers : {
            "X-Naver-Client-Id":"lByKtaErmVuFdMnftwEk"
            , "X-Naver-Client-Secret":"CVwwZ_zGiG"
            , "Content-Type":"application/json"
        }
        , body : JSON.stringify(data)
        };
    try {
        let response = await fetch(url, options);    // postman에서 send 버튼

        let result = await response.json();   // 응답 : json파일로 변경

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#datalab_shoppinginsite")
        contents.innerHTML = result['endDate'];
    } catch (error) {
        console.log(`Error Messagae : ${error.message}`)
    }
});