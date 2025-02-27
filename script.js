function isSameType(value1, value2) {
    
     if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

  
    return typeof value1 === typeof value2;
}

 do not change the code below.


alert(isSameType(value1, value2)); 
  

