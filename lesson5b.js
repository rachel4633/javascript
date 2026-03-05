// below is a function t find the ares of a circle
const circleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("the area of the triangle is" + area + "cm\u00B2")
    }

    circleArea(3.142, 7)
    circleArea(3.142, 28)

 // come up with my own function that utilises 3 parameters
const rectangleArea = (length, width, unit) =>{
    let area = length * width
    console.log("the area of the rectangle is" + area + unit + "\u00B2")
    }

rectangleArea(5, 10, "cm")
rectangleArea(15, 20, "m")


function calculateFinalPrice(price, taxRate, discount) {
    let taxAmount = price * taxRate;
    let discountedPrice = price - discount;
    let finalPrice = discountedPrice + taxAmount;
    return finalPrice;
}

calculateFinalPrice(100, 0.07, 10); 
