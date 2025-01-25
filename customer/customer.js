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
    clear();

}

let name = document.getElementById("name");
let address = document.getElementById("address");
let email = document.getElementById("email");
let age = document.getElementById("age");
const clear=()=>{
    name.value = '';
    address.value = '';
    email.value = '';
    age.value = '';
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
                    <input type="button" onclick="readyToUpdate('${temp.getCustomerId()}')" value="Update" class="btn btn-success">
                </div>
            </td>
            <td>
                <div class="t-outer">
                    <input type="button" onclick="deleteCustomer('${temp.getCustomerId()}')"" class="btn btn-danger" value="Delete">
                </div>
            </td>
            
        `;
        tablebody.appendChild(tr);
    }
}
let id = undefined;
const setData = (data) =>{
    id = data.getCustomerId();
    name = data.getCustomerName();
    address = data.getCustomerName();
    email = data.getCustomerName();
    age = data.getCustomerName();
    document.getElementById('saveButton').innerHTML = 'Update Customer';
}

const readyToUpdate = (customerId) =>{
    let selectedCustomer = customerDatabase.find((e)=>e.getCustomerId()==customerId);
    if(!selectedCustomer){
        alert('something went wrong...')
        return;
    }
    setData(selectedCustomer);
}
const deleteCustomer = (customerId)=>{
    if(confirm('Are you sure whether do you want to delete this customer?')){
        let selectedCustomer = customerDatabase.find((e)=>e.getCustomerId()==customerId);
        if(!selectedCustomer){
            alert('something went wrong...')
            return;
        }
        customerDatabase.splice(customerId,1);
        loadTable();
    }
}
function generateCustomerId() {
    // customer id Format [C-1]
    if (customerDatabase.length == 0) {
        return 'C-1';
    }
    let selectedData =
        customerDatabase[customerDatabase.length - 1];
    if (!selectedData) {
        return null;
    } else {
        let selectedLastId =
            selectedData.getCustomerId().toString().split('-')[1]; // [C,5]
        selectedLastId++;
        return 'C-' + selectedLastId;
    }

}
const createUpdateCustomer = () => {
    if (
        document.getElementById('btnSaveUpdate')
            .innerHTML.includes('Save Customer')
    ) {

        let customer = new Customer(
            generateCustomerId(),
            name.value,
            address.value,
            email.value,
            age.value
        );
        pushCustomer(customer);
    } else if (
        document.getElementById('btnSaveUpdate')
            .innerHTML.includes('Update Customer')
        && id
    ) {
        let selectedIndex =
            customerDatabase.findIndex((selectedData)=>selectedData
                .getCustomerId()==id);
        if(selectedIndex!=-1){
            customerDatabase[selectedIndex] = new Customer(
                id,
                name.value,
                address.value,
                email.value,
                age.value
            );
            clear();
            loadTable();
            document.getElementById('saveButton')
                .innerHTML='Save Customer';
        }
    }


}