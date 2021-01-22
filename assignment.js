// https://github.com/shahriar08/problem-solving


// kilometerToMeter

function kilometerToMeter(kilometer) {
    if(kilometer == 0){
        return 0;
    } 
    else if(kilometer < 0){
        return "Please input valid number,distance should be positive number";
    } 
    else{
        return kilometer * 1000; //1km=1000m;
    }
}



// budgetCalculator 


function budgetCalculator(watch, phone, laptop) {
    if (watch == 0 && phone == 0 && laptop == 0) { 
        return "Please input a valid number";
    }
    else{
        if (watch < 0 || phone < 0 || laptop < 0) {
            return "Number can't be a negative value";
        } 
        else {
            return ((watch * 50) + (phone * 100) + (laptop * 500));
        }
    }
}


//hotelCost 


function hotelCost(numberOfDay) {
    if (numberOfDay < 0) {
        return ("Please input a valid number");
    } 
    else if (numberOfDay == 0) {
        return ("Please stay minimum one day");
    } 
    else {
        var totalCost = 0;
        if (numberOfDay <= 10) {
            totalCost = numberOfDay * 100;
        } 
        else if (numberOfDay > 10 && numberOfDay <= 20) {
            totalCost = ((10*100)+(numberOfDay-10)*80); //first ten days + Second ten days.
        } 
        else {
            totalCost = ((10*100)+(10*80)+((numberOfDay-20)*50));  //after 20 days cost per day will be... 
        }
        return totalCost;
    }
}



//megaFriend


function megaFriend(friends) {
    var maxLengthName = friends[0];
    for (var i = 1; i < friends.length; i++){
        if (friends.length <= 0){
            return 'Length can not be empty';
        }
        if (friends[i].length > maxLengthName.length) {
            maxLengthName = friends[i];
        }
    }
    return maxLengthName;
}



