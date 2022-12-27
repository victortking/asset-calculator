function displayAnalysis() {
    var income = Number(document.getElementById("income").value)
    var rent = Number(document.getElementById("rent").value)
    var grocery = Number(document.getElementById("grocery").value)
    var bill = Number(document.getElementById("bill").value)
    var item = Number(document.getElementById("item").value)

    var expenses = rent + grocery + bill;
    var balance = income - expenses;
    var border = "dotted 1px black"
    
    var purchase = "Hi dear, your balance after all your expenditure is greater than the purchasing power of the intending ITEM, you can go ahead and purchase 💰 💰 💰.";
    
    var save = "Hi dear, your balance after all your expenditure is less than the purchasing power of the intending ITEM, you are been advised to SAVE UP 🏦 🏦 🏦.";
    
    var color1 = "green"
    var color2 = "blue"
    var padding = "10px"
    var borderRadius = "10px"

    if (balance > item) {
        var purchasing = purchase;
        console.log(purchasing);
        
        document.getElementById("analysis").innerHTML = purchasing; 
        document.getElementById("analysis").style .color = color1;
        document.getElementById("analysis").style .border = border;
        document.getElementById("analysis").style .padding = padding
    }

    if (balance <= item) {
        var saving = save;
        console.log(saving);
        
        document.getElementById("analysis").innerHTML = save;
        document.getElementById("analysis").style .color = color2;
        document.getElementById("analysis").style .border = border
        document.getElementById("analysis").style .padding = padding
        
    }

}