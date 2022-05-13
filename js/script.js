/* Pegar radio
forma 1
let filters1 = document.getElementsByClassName("searchfilter")

let filters1value = "";

for(let filter of filters1){
    if(filter.checked){
        filters1value = filter.ariaValueMax
    }
}

forma 2
*/

const search = document.querySelector("#pesquisar")

search.onclick = function(e){
    e.preventDefault()

    let searchString = document.querySelector("#searchString").value
    let filterType = document.querySelector("imput[name='searchfilter']:checked").value;

    //alert(filterType + "-" + searchString);
    if(filterType === "all") alert("Busca geralpor" + searchString)
    else if (filterType === "cod") alert("Busca pelo codigo" + searchString)
    else if (filterType === "mat") alert("Busca por matrícula" + searchString)
    
}