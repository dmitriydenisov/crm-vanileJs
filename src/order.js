const state = {
    fullname: null,
    good: null,
    price: null
}


init()
update()


function init () {
    document.querySelector('[data-save]').addEventListener('click',  () => {

        const order = {
           fullname: document.querySelector('[data-order-fullname]').value,
           goods: document.querySelector('[data-order-good]').value,
           price: Number(document.querySelector('[data-order-price]').value)
        }
        const orderId = Database.createOrder(order)
        location.href = `editor.html#{"orderId":${orderId}}`
    })
}


function update () {}