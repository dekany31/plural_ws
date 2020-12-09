function _load(){
  //rootE néven tároljuk egy változóban a HTML root ID-vel rendelkező div elemét.
  let rootE = document.getElementById("root");
  //aTextArray nevű változónkban meghatároztunk egy több elemből álló tömböt(array).
  let aTextArray = ["alma", "cseresznye", "eper", "dinnye", "szeder", "mandarin", "ribizli", "narancs", "paradicsom", "citrom", "banana", "datolya", "szilva", "barack", "pomelo", "kiwi","grapefruit", "kaki"];

  //console.log(aTextArray.length);
  //Egy for ciklussal végig megyünk a tömbünk elemein.
  for (let index = 0; index < aTextArray.length; index++) {

    //console.log(aTextArray[index]);
    //A for ciklus segítségével a tömb minden elemének létrehozunk egy div-et fruit class névvel.
    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }
  //console.log(document.getElementsByClassName("fruit"));
  //fruitDivs nevű változónkban eltároljuk az összes fruit class névvel rendelkező divet.
  let fruitDivs = rootE.querySelectorAll(".fruit");
  console.log(fruitDivs.length);
  //for ciklussal végig iteráljuk a fruitDivs hosszát.
  for (let index = 0; index < fruitDivs.length; index++) {
    //console.log(fruitDivs[index]);
    //fruitDivs[index].classList.add("anotherClass");

    //console.log(index === 1);
    //console.log(index % 2 === 0);
    //Amennyiben a ciklus i-edik eleme maradék nélkül osztható 2-el, rárakunk egy class nevet(trueClass).
    if(index % 2 === 0){
      fruitDivs[index].classList.add("trueClass");
    //Amennyiben az elemünk maradék nélkül osztható 5-el(és nem tartozik az előző feltételünkbe),rárakunk egy class nevet (anotherClass).
    } else if(index % 5 === 0) {
      fruitDivs[index].classList.add("anotherClass");
    //Amennyiben a fentiek közül egyik feltétel sem érvényesül az elemünk a falseClass class nevet kapja.
    } else {
      fruitDivs[index].classList.add("falseClass");
    }
    
  }


}

window.addEventListener("load", _load);