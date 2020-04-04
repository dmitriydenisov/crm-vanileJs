const state = {
    orderId: null,
    order: null
}

Database.addEventListener('update', update)
Router.addEventListener("update", update)

init()
update ()

function init () {
    const hashObject = Router.getHashObject()

    if (hashObject.orderId){

        setState({
            orderId: hashObject.orderId
        }) 
    }    
    document.querySelector('[data-save]').addEventListener('click',  () => {
        const date = new Date(document.querySelector('[data-order-date]').value)

        const updated = {
           fullname: document.querySelector('[data-order-fullname]').value,
           goods: document.querySelector('[data-order-good]').value,
           price: Number(document.querySelector('[data-order-price]').value),
           date: date.getTime(),
           status: document.querySelector('[data-order-status]').value
        }

        Database.updateOrderById(state.orderId, updated)
        alert('Данные успешно обновлены')
    })

}

function update (){
    const hashObject = Router.getHashObject()

    if (hashObject.orderId && hashObject.orderId !== state.orderId){
        setState({
            orderId: hashObject.orderId
        }) 
        Database.addLastReviewed(hashObject.orderId)
    }

    
    state.order = Database.getOrderById(hashObject.orderId)

    document.querySelector('[data-fullname]').textContent = state.order.fullname
    document.querySelector('[data-order-id]').value = state.order.id
    document.querySelector('[data-order-fullname]').value = state.order.fullname
    document.querySelector('[data-order-good]').value = state.order.goods
    document.querySelector('[data-order-status]').value = state.order.status
    document.querySelector('[data-order-price]').value = state.order.price


    const date = new Date (state.order.date)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    document.querySelector('[data-order-date]').value = `${year}-${month}-${day}`

    

    updateLastReviewedList()
}

function setState (obj) {
    Object.assign(state, obj)
    update()
}