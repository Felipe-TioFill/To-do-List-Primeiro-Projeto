const localStorageKey = 'lista-de-produtos'

function newProduct() {

    let input = document.getElementById('input_new_product');

    if (!input.value) {
        alert('Digite o nome do produto!!')
    }
    //else if()
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
    }
}