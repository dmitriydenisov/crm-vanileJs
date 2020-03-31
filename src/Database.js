;( function () {
    "use script"

    const database = {
        lastReviewed: {
            maxLength: 4,
            orderIds: [1, 2, 3, 4]
        },
        orders: [
            { id: 1, fullname: "Дмитрий Денисов", good: "Бумага для принтера", price: 500, status: "new", date: Date.now() },
            { id: 2, fullname: "Алексей Данчин", good: "Краска для принтера", price: 1500, status: "process", date: Date.now() },
            { id: 3, fullname: "Илья Муромец", good: "Принтер", price: 11500, status: "back", date: Date.now() }
        ]
    }

    const api = new EventEmitter

    api.generate = function generate (orders) {
        database.orders = getCopy(orders)
    }

    api.getOrderById = function getOrderById (id) {
        const order = database.orders.find(x => x.id === id)
       
        if (order) {
            return getCopy(order)
        }

        return null
    }

    //функция возврата последних заказов
    api.getLastReviewed = function getLastReviewed () {
        return database.lastReviewed.orderIds.map(x => api.getOrderById(x))
    }

    api.addLastReviewed = function addLastReviewed (orderId) {
        //если есть такая запись
        if(database.lastReviewed.orderIds.includes(orderId)) { 
            //мы ее ищем 
            const splice = database.lastReviewed.orderIds.indexOf(orderId)     
            //удаляем
            database.lastReviewed.orderIds.splice(splice, 1)
            // перезаписываем в верхней строчке
            database.lastReviewed.orderIds.unshift(orderId)
        }else{
            database.lastReviewed.orderIds = [orderId, ...database.lastReviewed.orderIds].slice(0, database.lastReviewed.maxLength)
        }     

        api.emit('update')
    }

    window.Database = api

   function getCopy (x) {
       return JSON.parse(JSON.stringify(x))
   }
})();