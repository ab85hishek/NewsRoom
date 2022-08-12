console.log("NewsRoom");



let myNews = document.getElementById("myNews");
let myApi = "52d898902c18456ea25f132dc3c3b211";
let source = "bbc-news"
let xhr = new XMLHttpRequest();

xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${myApi}`, true);

xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let html = "";
    articles.forEach(function (element,index) {
        html += `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                <b>News ${index+1} -></b> ${element["title"]}
            </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
            data-bs-parent="#myNews">
            <div class="accordion-body">
               ${element["content"]} <a href=${element["url"]} target="_blank">Click here to read more...</a>
            </div>
        </div>
    </div>`
    });
    myNews.innerHTML= html;

}


xhr.send();