


function kilometerToMeter(kilo) {
    if (kilo < 0) {
        meter = "Distance can't be less than zero"
    }

    else {
        var meter = kilo*1000;
    }

    return meter;
}

var distance = kilometerToMeter(100);
console.log(distance);



function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity) {
    const watchPrice = 50;
    const mobilePrice = 100;
    const laptopPrice = 500;

    if (watchQuantity <= 0 || mobileQuantity <= 0 || laptopQuantity <= 0) {
        total = "You must input three integar numbers";
    }

    else {
        var total = watchPrice*watchQuantity + mobilePrice*mobileQuantity + laptopPrice*laptopQuantity;
    }

    return total;
}

var budget = budgetCalculator(5, 6, 7);
console.log(budget);



function hotelCost(days) {
    if (days <=0) {
        cost = "Days can't be zero or negative";
    }

    else if (days <= 10) {
        cost = days*100;
    }

    else if (days <=20) {
        cost = 1000 + (days-10)*80;
    }

    else if (days > 20) {
        cost = 1800 + (days-20)*50;
    }

    return cost;
}

var hotel = hotelCost(21)
console.log(hotel)




function megaFriend(list) {

    var i = 0;
    var friend = '';
    if (list.length==0) {
        friend = 'no name found';
    }
    else {
        max = list[0].length;
        for (i=0;i<list.length;i++)
        {
            if (max < list[i].length) {
                max = list[i].length;
                friend = list[i];
            }
        }
        return friend;
    }

}

var nameList = ['Shaaz', 'Audree', 'Yeasin', 'Mugdho', 'Nishat', 'Thowa'];
var large = megaFriend(nameList);
console.log(large);
