function isSameType(value1, value2) {
     if (Number.isNaN(num1) && Number.isNaN(num2)) {
        return true;
    }
    
    
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return false;
    }

    
    return typeof value1 === typeof value2;
	}
}
// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Alert the result
alert(isSameType(value1, value2));


