;( function () {
    "use script"

    const database = {
        lastReviewed: {
            maxLength: 4,
            orderIds: []
        },
        maxOrders: 10,
        orders: []
    }

    load()

    const api = new EventEmitter

    api.generate = function generate (orders) {
        database.orders = getCopy(orders)

        save()
        api.emit('update')
    }

    api.getOrders = function getOrders (state) {
        state = getCopy(state)
        let orders = getCopy(database.orders)

        if (state.fullname) {
            const fullnameLowerCase = state.fullname.toLowerCase()
            orders = orders.filter(x => x.fullname.toLowerCase().includes(fullnameLowerCase))
        }
        if (state.good) {
            const goodLowerCase = state.good.toLowerCase()
            orders = orders.filter(x => x.goods.toLowerCase().includes(goodLowerCase))
        }
        if (state.status) {
            orders = orders.filter(x => x.status.includes(state.status))
        }
        if (state.minprice) {
            orders = orders.filter(x => x.price >= state.minprice)
        }
        if (state.maxprice) {
            orders = orders.filter(x => x.price <= state.maxprice)
        }
        if (state.mindate) {
            orders = orders.filter(x => x.date >= state.mindate)
        }
        if (state.maxdate) {
            orders = orders.filter(x => x.date <= state.maxdate)
        }

        return {
            orders: orders.slice(0, database.maxOrders),
            currentPage: 1,
            commonPages: Math.ceil(orders.length / database.maxOrders)
        }
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

    //функция добавления последних заказов в список
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

        save()
        api.emit('update')
    }

    window.Database = api

   function getCopy (x) {
       return JSON.parse(JSON.stringify(x))
   }

   function save () {
       localStorage.setItem('__CRM_DATABASE__', JSON.stringify(database))
   }

   function load (){
       //проверяем, есть ли в localStorage строка содержащая '__CRM_DATABASE__'
       if (localStorage.getItem('__CRM_DATABASE__')) {
           //если есть, то мы запрашиваем БД и распарсиваем и получаем объект БД и сливаем БД
           Object.assign(database, JSON.parse(localStorage.getItem('__CRM_DATABASE__')))
       }
   }
})();