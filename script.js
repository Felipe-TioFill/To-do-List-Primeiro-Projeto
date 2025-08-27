const localStorageKey = 'lista-de-produtos'

function validateNewProduct() {
    
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input_new_product').value;
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
   

}

function newProduct() {

    let input = document.getElementById('input_new_product');


    if (!input.value) {
        alert('Digite o nome do produto!!')
    }
    else if(validateNewProduct()){

        alert('Ja existente')
    }

    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }

    input.values = ''
}
window.newProduct = newProduct;

function showValues() {
            
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to_do_list')
    list.innerHTML =''
    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values [i].name}<button id='btn' onclick='removeItem("${values [i].name}")' >OK</button></li>`
    }
    
}

function removeItem(data) {
    
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index=values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues();
}

showValues();