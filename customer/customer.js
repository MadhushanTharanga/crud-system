function validateForm(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (name == ""){
        alert("Name is required");
    }
    else if (address == ""){
        alert("Address is required");
    }
    else if (email == ""){
        alert("Email is required");
    }
    else if (!email.includes('@')){
        alert("Invalid email address");
    }
    else if (age == ""){
        alert("age is required");
    }else if (age<1){
        alert("Age must not be zero or less than zero");
    }

    const customer = new Customer(Math.floor(Math.random()*10),name,address,email,age);
    addCustomer(customer);
    loadTable();
    const clear=()=>{
        name.value = '';
        address.value = '';
        name.value = '';
        name.value = '';
    }

}



class Customer{
    #id;
    #name;
    #address;
    #email;
    #age;

    constructor(id,name,address,email,age){
        this.#id=id;
        this.#name=name;
        this.#address=address;
        this.#email=email;
        this.#age=age;
    }
    getCustomerId(){
        return this.#id;
    }
    getCustomerName(){
        return this.#name;
    }
    getCustomerAddress(){
        return this.#address;
    }
    getCustomerEmail(){
        return this.#email;
    }
    getCustomerAge(){
        return this.#age;
    }

}
let customerDatabase = [];

function addCustomer(customer){
    customerDatabase.push(customer);
}
function getAllCustomer(){
    return customerDatabase;
}

function loadTable(){
    let tablebody = document.getElementById('table-body');
    tablebody.innerHTML = '';

    for (const temp of customerDatabase){
        let tr = document.createElement('tr');

        tr.innerHTML = `
            <td>
                <div class="t-outer">
                    ${temp.getCustomerId()}
                </div>
            </td>
            <td>
                <div class="t-outer">
                    ${temp.getCustomerName()}
                </div>
            </td>
            <td>
                <div class="t-outer">
                    ${temp.getCustomerAddress()}
                </div>
            </td>
            <td>
                <div class="t-outer">
                    ${temp.getCustomerEmail()}
                </div>
            </td>
            <td>
                <div class="t-outer">
                    ${temp.getCustomerAge()}
                </div>
            </td>
            <td>
                <div class="t-outer">
                    <input type="button" onclick="readyToUpdate('${temp.getCustomerId()}')" value="Modify" class="btn btn-success">
                </div>
            </td>
            <td>
                <div class="t-outer">
                    <input type="button" onclick="deleteCustomer('${temp.getCustomerId()}')"" class="btn btn-danger" value="Remove">
                </div>
            </td>
            
        `;
        tablebody.appendChild(tr);
    }
}