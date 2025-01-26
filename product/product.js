const validateForm = ()=>{
    let productName = document.getElementById('p-name').value;
    let desc = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let qty = document.getElementById('price').value;

    if (productName = ''){
        alert("Product name is required")
    }else if (desc=''){
        alert("Description is required")
    }else if (price = ''){
        alert("Price is required")
    }else if (qty = ''){
        alert("qty is required")
    }
}