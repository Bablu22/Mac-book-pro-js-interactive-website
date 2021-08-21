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
        memoryPrice.innerText = 0;
    }
    if (memory == false) {
        memoryPrice.innerText = 180;
    }

    totalAmount()
    storageTotal()
    delivaryTotal()
}
// storage cost funcction
function storageTotal(storage) {
    // Memory
    if (storage == '256gb') {
        storagePrice.innerText = 0;
    }
    if (storage == '512gb') {
        storagePrice.innerText = 100;
    }
    if (storage == '1TB') {
        storagePrice.innerText = 180;
    }


    totalAmount()
    delivaryTotal()
}
// delivary cost function
function delivaryTotal(delivary) {
    if (delivary == 'free') {
        delivaryPrice.innerText = 0;
    }
    if (delivary == 'charge') {
        delivaryPrice.innerText = 20;
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
        finalTotal.innerText = discountAmount;
    }

}

// Memory
const firstMemory = document.getElementById('memory-one').addEventListener('click', function () {
    memoryTotal(true)
})
const secondMemory = document.getElementById('memory-two').addEventListener('click', function () {
    memoryTotal(false)
})
// storage
const firstStorage = document.getElementById('storage-one').addEventListener('click', function () {
    storageTotal('256gb')
})
const secondStorage = document.getElementById('storage-two').addEventListener('click', function () {
    storageTotal('512gb')
})
const thirdStorage = document.getElementById('storage-three').addEventListener('click', function () {
    storageTotal('1TB')
})

// Delivary
const firstDelivary = document.getElementById('delivary-one').addEventListener('click', function () {
    delivaryTotal('free');
})
const secondDelivary = document.getElementById('delivary-two').addEventListener('click', function () {
    delivaryTotal('charge');
})
// Promo Button
const promoButton = document.getElementById('promo-button').addEventListener('click', function () {
    promoAdd();
})
