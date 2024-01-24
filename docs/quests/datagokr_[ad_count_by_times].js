// from data.go.kr with ad_count_by_times
let ad_count_site = document.querySelector("#list_up");
list_up.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=kv5KjSGpridc7Ai%2BQIqvr%2B8jzmgkmfQeM5XqJO8xL1Gvknk7KLsDU4lwEaZpY0taxMMY5QKaZGq3QUopmUOYVg%3D%3D&pageNo=1&numOfRows=10`;
    let options = {};
    try {
        let response = await fetch(url, options);
        let result = await response.json();
        
        let ad_count_array = result['response']['body']['items'];
        let ad_count_list = "";
        for (let ad_count_object of ad_count_array) {
            ad_count_list = `${ad_count_list}<tr>
            <td>${ad_count_object["BRDC_YMD"]}</td>
            <td>${ad_count_object["BRDC_WKD"]}</td>
            <td>${ad_count_object["BRDC_TM_RNG"]}</td>
            <td>${ad_count_object["TPBIZ_NM_1"]}</td>
            <td>${ad_count_object["TPBIZ_NM_2"]}</td>
            <td>${ad_count_object["TPBIZ_NM_3"]}</td>
            <td>${ad_count_object["AD_CNT"]}</td></tr>`;
            }
        
        let ad_count_element = document.querySelector("#ad_count_array_id");
        ad_count_element.innerHTML = ad_count_list;
    } catch (error) {
        console.log(`Error Message: ${error.message}`);
    }
});
