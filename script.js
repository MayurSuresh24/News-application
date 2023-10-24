const API_KEY="1f7218d02d5c499583ed47f529611fe3";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener('load',() => fetchNews("India"));
async function fetchNews(query){
 const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
 const data=await res.json();
 console.log(data);
 bindData(data.articles);
}

function bindData(articles){
const cardscontainer=document.getElementById("cards_container");
const newscardtemplate=document.getElementById("cards_temp");
cardscontainer.innerHTML="";
articles.forEach((article) => {
    if(!article.urlToImage)
     return ;
    const clonecard=newscardtemplate.content.cloneNode("true");
    fillDataInCard(clonecard,article);
    cardscontainer.appendChild(clonecard);

});
}
function fillDataInCard(clonecard,article){
    const newsImg=clonecard.querySelector('#news_image');
    const newsHeading=clonecard.querySelector('#news_heading');
    const newsInfo=clonecard.querySelector('#news_info');
    const newsSource=clonecard.querySelector('#news_source');
    newsImg.src=article.urlToImage;
    newsHeading.innerHTML = article.title;
    newsInfo.innerHTML = article.description;
    newsSource.innerHTML = article.source.name;
    clonecard.firstElementChild.addEventListener("click", () => {
        window.open(article.url,"_blank");
    })

}

function onnavclick(id){
    fetchNews(id);
}


function tosearch(){
    const searchbutton=document.getElementById('search_button');
const searchtext=document.getElementById('search_text');
searchbutton.addEventListener('click',() => {
    const query=searchtext.value;
    if(!query) 
    return;
    fetchNews(query);
    });
    
}
function togglemenu(){
    const mainnav=document.getElementById("main_nav");
    const navlist=document.getElementById("nav_list");
     navlist.style.maxHeight="0px";
     mainnav.style.maxHeight="20px";
    if(navlist.style.maxHeight =="0px"){
        navlist.style.maxHeight="100px";
        mainnav.style.maxHeight="100px";


    }
    else{
        navlist.style.maxHeight="0px";
        mainnav.style.maxHeight="20px";

    }
}


