var salon = {
    name: "Alex's Salon",
    phone: "(480) 748-8373",
    address: {
        street: "Main",
        number: "123",
    },
    workingHours: {
        open: "9:00",
        closed: "17:00",
    },
    pets: []
};

console.log(salon.address.number);

var petCnt = 0;

function Pet(name, age, serviceType, ownerName, contactPhone) {
    this.id = "pt" + petCnt;
    petCnt +=1;
    this.hunger = 20;
    this.happiness = 10;
    this.name = name;
    this.age = age;
    this.type = serviceType;
    this.ownerName = ownerName;
    this.ownerPhone = contactPhone;
    this.feed = function () {
        this.hunger -= 10;
        this.happniess +=10;
    }
    this.status = function () {
        console.log(this.name, "Hunger level: " + this.hunger, "Happiness Level: " + this.happiness);
    }
}

function registerPet() {
    var txtName = document.getElementById("txtName");
    var txtAge = document.getElementById("txtAge");
    var txtOwner = document.getElementById("txtOwner");
    var txtPhone = document.getElementById("txtPhone");
    var selService = document.getElementById("selService");

    var thePet = new Pet(
        txtName.value,
        txtAge.value,
        selService.value,
        txtOwner.value,
        txtPhone.value,)
    
    console.log(thePet);

    eraseBtn();

    salon.pets.push(thePet);

    displayPetTable(thePet);

    alert("We have " + salon.pets.length + " pets as customers right now");
}

function eraseBtn() {
    txtName.value = "";
    txtAge.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
    selService.value = "";
}

function displayPetTable(aPet) {
    var tBody = document.getElementById("listBody");

    var row = "<tr id='" + aPet.id + "'><td>" + aPet.name + "</td><td>" + aPet.age + "</td><td>" + aPet.ownerName + "</td><td>" + aPet.ownerPhone + "</td><td>" + aPet.type + "</td>" + "<td> <button onclick=\"showInfo('" + aPet.id +"');\" class='btn-sm btn-info'>ShowInfo</button>" + "<button onclick='removePet(\"" + aPet.id + "\");' class='btn btn-small btn-danger'>Delete</button> </td>" + "</tr>";

    tBody.innerHTML +=row;
}

function removePet(petId) {
    console.log('wants to remove this pet ',petId);
    var indexToRemove = 0;
    for (var i=0; i<salon.pets.length; i++) {
        var indexPet = salon.pets[i];
        if (indexPet.id == petId) {
            indexToRemove = i;
        }
    }
salon.pets.splice(indexToRemove,1);
var tr = document.getElementById(petId);
tr.remove();
}
function showInfo(petId) {
    var indexOfthePet = 0;
    for(var i=0; i<salon.pets.length; i++) {
        var indexPet = salon.pets[i];
        if(indexPet.id == petId) {
            indexOfthePet = i;
        }
    }
    var thePet = salon.pets[indexOfthePet];
    console.log("Info: ", thePet);
}

function init() {
    var btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', registerPet);

    var btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', function() {
        btnClear.style.marginLeft = '40px';
    });

    var nameField = document.getElementById("txtName");
    nameField.addEventListener('change', function () {
        console.log('text on the name field has changed')
    });  
}

window.onload = init;


