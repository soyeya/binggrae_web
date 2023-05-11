
//header

const binggrae_header = document.querySelector("header");
const binggrae_nav = document.querySelector("nav");
const binggrae_navList = document.querySelectorAll(".binggrae_category ul");

window.addEventListener("scroll" , function(){


  var binggrae_scrollY = window.scrollY;


if(binggrae_scrollY > 10){

  binggrae_header.classList.add("active");


  }else{

    binggrae_header.classList.remove("active");

  }


})


//nav

function binggrae_menu(){


binggrae_navList[0].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[0].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[1].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[1].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[2].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[2].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[3].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[3].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[4].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[4].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[5].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[5].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

}


binggrae_menu();


binggrae_nav.addEventListener("mouseover" , function(ev){

  this.classList.add("active");

  
})

binggrae_nav.addEventListener("mouseout" , function(ev){

  this.classList.remove("active");

  
})

//mobilbe_menu

const mobile_menu = document.querySelector(".mobile_menu");

var mobile_click = false;

mobile_menu.addEventListener("click" , function(){

  mobile_click =! mobile_click;

  if(mobile_click == true){
 
  binggrae_nav.classList.add("active");

  }else{

  binggrae_nav.classList.remove("active");

  }

})

//search


const binggrae_Btn = document.querySelector(".binggrae_Btn");
const binggrae_ListCover = document.querySelector(".binggrae_textCover");


function binggrae_List(){


    const binggrae_search = document.querySelector("#binggrae_search").value;
    console.log(binggrae_search);

    if( binggrae_search.trim() == ""){

        alert("검색어를 입력해주세요.");

    }else{

    var binggrae_newText = document.createElement("div");
    binggrae_newText.classList.add("binggrae_text");

    var binggrae_newList = document.createElement("p");
    binggrae_newList.classList.add("binggrae_txt");
    binggrae_newList.textContent = binggrae_search;

    var binggrae_newDel = document.createElement("span");
    binggrae_newDel.classList.add("remove");
    binggrae_newDel.textContent = "×";

    binggrae_newText.append(binggrae_newList);
    binggrae_newText.append(binggrae_newDel);

    //최종적으로 넣기

    binggrae_ListCover.append(binggrae_newText);

    //input_text

    document.querySelector("#binggrae_search").value = "";
    document.querySelector("#binggrae_search").focus();


    //삭제

    binggrae_newDel.addEventListener("click" , function(){

        binggrae_ListCover.removeChild(binggrae_newText);

    });

 };

}


binggrae_Btn.addEventListener("click" , function(){


    binggrae_List();


})

const binggrae_Enter = document.querySelector("#binggrae_search");

binggrae_Enter.addEventListener("keydown" , function(bing_key){

    if(bing_key.keyCode == 13){

        binggrae_List();
    }

})


// best

var binggrae_bestList = [

  "./img/list1.jpeg" ,
  "./img/list2.jpeg" ,
  "./img/list3.jpeg" ,
  "./img/list4.jpeg" ,
  "./img/list5.jpeg" ,
  "./img/list6.jpeg" ,
  "./img/list7.jpeg" ,
  "./img/list8.jpeg" ,
  "./img/list9.jpeg" ,
  "./img/list10.jpeg" ,
  "./img/list11.jpeg" ,
  "./img/list12.jpeg" 

]

console.log(binggrae_bestList.length);


var binggrae_bestTitle = [


  "빙그레 떡붕어싸만코 20개입",
  "빙그레 바나나맛우유 미니 24팩",
  "빙그레 더단백 드링크 커피맛 프로틴음료 250ml 18팩",
  "비바시티 아누카사과 추출분말 비오틴 맥주효모 60g(2g x 30포)",
  "빙그레 더단백 드링크 초코맛 프로틴음료 250ml 18팩",
  "빙그레 식물성바유 바나나맛 아몬드두유 190ml 24팩 비건",
  "빙그레 아카페라 심플리 디카페인 아메리카노 400ml 20개입",
  "빙그레 요플레 프로틴 맥스 드링크 요거트 24개입",
  "빙그레 더단백 드링크 카라멜맛 프로틴음료 250ml 18팩",
  "빙그레 아카페라 심플리 아메리카노 400ml 20개입",
  "빙그레 요플레 프로틴 드링크 요거트 딸기바나나 24개입",
  "빙그레 슈퍼콘 아이스크림 초코 24개입",


]


var binggrae_bestPrice = [

  "20,900원",
  "17,900원",
  "27,900원",
  "58,400원",
  "29,400원",
  "23,800원",
  "20,900원",
  "41,900원",
  "27,900원",
  "20,900원",
  "38,900원",
  "20,900원",

]

var binggrae_sale = [

  "8%",
  "21%",
  "39%",
  "1%",
  "35%",
  "11%",
  "8%",
  "26%",
  "39%",
  "8%",
  "13%",
  "30%",

]

var binggrae_level = [

  "1위",
  "2위",
  "3위",
  "4위",
  "5위",
  "6위",
  "7위",
  "8위",
  "9위",
  "10위",
  "11위",
  "12위",


]

const binggrae_ListWrap = document.querySelector(".binggreae_bestWrap");

var binggrae_bestsection = "";

for(var i = 0; i < binggrae_bestList.length; i++){

  if(i > binggrae_bestList.length){


  }else{

  binggrae_bestsection += `

      <div class="binggrae_List">
          <ul>
          <span class="best_sales">${binggrae_level[i]}</span>
          <li><a href=""><img src="${binggrae_bestList[i]}" alt="${binggrae_bestList[i]}"></a></li>
          <li>
            <a href="" class="list_title"><em>${binggrae_sale[i]}</em>${binggrae_bestTitle[i]}</a>
            <a href="" class="list_price">${binggrae_bestPrice[i]}</a>
          </li>
          </ul>
      </div>
          `;

  };
 }

 binggrae_ListWrap.innerHTML =  binggrae_bestsection;
