// https://github.com/yojulab/learn_fastapis/blob/main/routes/events_api.py
let rate_list = document.querySelector("#retrieve_all_events");
rate_list.addEventListener('click', async (event) => {
    let url = `http://127.0.0.1:8000/events_api/` ;
    let options = {}; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        let result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        let contents = document.querySelector("#retrieve_all_events_contents");
        // let innercontent = ``;
        // for (content of contents){
        // }
        contents.innerHTML = result['header']['resultMsg'];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
// update_event_withjson
let shopping_insite = document.querySelector("#update_event_withjson");
shopping_insite.addEventListener('click', async (event) => {
    let _id = event.target.value; // textContent
    _id = `65b0cda2344a0249c34279ae`;   // postman에서 request 받은 값의 _id를 삽입
    let url = `http://127.0.0.1:8000/events_api/${_id}` ;
    let data = {
        "creator": "김지민",
        "title": "여름 속으로",
        "image": "autumn_leaves.jpg",
        "description": "가을이 깊어가는 숲속의 오색찬란한 단풍",
        "tags": ["가을", "숲"],
        "location": "내장산, 전라북도"
    }
    let options = {
        method : "PUT"
        // , mode: "no-cors" // no-cors, *cors, same-origin
        , headers : {
            "Content-Type" : "application/json"
        }      // 나중에 추가 작업이 필요할까봐 headers넣어줌
        , body : JSON.stringify(data)
    }; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        let result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        // let contents = document.querySelector("#update_event_withjson_contents");
        // contents.innerHTML = result;
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});