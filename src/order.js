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


function update () {
    // const hashObject = Router.getHashObject()

    // if (hashObject.orderId && hashObject.orderId !== state.orderId){
    //     setState({
    //         orderId: hashObject.orderId
    //     }) 
    //     Database.addLastReviewed(hashObject.orderId)
    // }

    
    // state.order = Database.getOrderById(hashObject.orderId)

    // document.querySelector('[data-fullname]').textContent = state.order.fullname
    // document.querySelector('[data-order-fullname]').value = state.order.fullname
    // document.querySelector('[data-order-good]').value = state.order.goods
    // document.querySelector('[data-order-price]').value = state.order.price


    // const date = new Date (state.order.date)
    // const year = date.getFullYear()
    // const month = (date.getMonth() + 1).toString().padStart(2, '0')
    // const day = date.getDate().toString().padStart(2, '0')
    // document.querySelector('[data-order-date]').value = `${year}-${month}-${day}`

    

    // updateLastReviewedList()
}


function setState (obj) {
    Object.assign(state, obj)
    update()
}