// .............Dom selection..........

// price Table
const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const delivaryPrice = document.getElementById('delivary-price');
const totalPrice = document.getElementById('total-price');
// Promo
const promoInput = document.getElementById('promo-input');
// Final Total
const finalTotal = document.getElementById(('final-total'));

function totalAmount() {
    const memoryCost = parseInt(memoryPrice.innerText);
    const bestCost = parseFloat(bestPrice.innerText);
    const storageCost = parseFloat(storagePrice.innerText);
    const delivaryCost = parseFloat(delivaryPrice.innerText);
    const total = bestCost + memoryCost + storageCost + delivaryCost;
    totalPrice.innerText = total;
    finalTotal.innerText = total;
}

// memory cost function
function memoryTotal(memory) {
    // Memory
    if (memory == true) {
        return memoryPrice.innerText = 0;

    }
    if (memory == false) {
        return memoryPrice.innerText = 180;

    }

    totalAmount()
    storageTotal()
    delivaryTotal()
}
// storage cost funcction
function storageTotal(storage) {
    // Memory
    if (storage == '256gb') {
        return storagePrice.innerText = 0;
    }
    if (storage == '512gb') {
        return storagePrice.innerText = 100;
    }
    if (storage == '1TB') {
        return storagePrice.innerText = 180;
    }
    totalAmount()
    delivaryTotal()
}
// delivary cost function
function delivaryTotal(delivary) {
    if (delivary == 'free') {
        return delivaryPrice.innerText = 0;
    }
    if (delivary == 'charge') {
        return delivaryPrice.innerText = 20;
    }
    totalAmount()
}
// Promo code function
function promoAdd() {
    const promoValue = promoInput.value;
    const total = parseFloat(totalPrice.innerText)
    if (promoValue == 'stevekaku') {
        discountPrice = total * .2;
        discountAmount = total - discountPrice;
        return finalTotal.innerText = discountAmount;
    }
}

// Add eventListener function
function buttonEvent(buttonId, functionName, price) {
    document.getElementById(buttonId).addEventListener('click', function (a) {
        price.innerText = functionName;
        totalAmount()
    })
}
// memory button
buttonEvent('memory-two', memoryTotal(false), memoryPrice);
buttonEvent('memory-one', memoryTotal(true), memoryPrice);
// storage button
buttonEvent('storage-three', storageTotal('1TB'), storagePrice);
buttonEvent('storage-two', storageTotal('512gb'), storagePrice);
buttonEvent('storage-one', storageTotal('256gb'), storagePrice);
// delivary button
buttonEvent('delivary-one', delivaryTotal('free'), delivaryPrice)
buttonEvent('delivary-two', delivaryTotal('charge'), delivaryPrice)
// Promo Button
const promoButton = document.getElementById('promo-button').addEventListener('click', function () {
    promoAdd();
})
