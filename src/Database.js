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
    api.updateOrderById = function updateOrderById (orderId, updated) {
        const order = database.orders.find(x => x.id === orderId) //ищем заказ по ID

        //обновляем данные
        order.fullname = updated.fullname 
        order.goods = updated.goods 
        order.price = updated.price 
        order.status = updated.status 
        order.date = updated.date 

        //сохраняем новые данные в БД
        save()
    }

    api.createOrder = function createOrder(order) {
        order = getCopy(order)
        order.status = 'new'
        order.date = Date.now()
        order.id = Math.max(0, ...database.orders.map(x => x.id)) + 1
        database.orders.push(order)
        save()
        api.emit('update')
        return order.id
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
            if (typeof state.mindate === 'string') {
                state.mindate = (new Date(state.mindate)).getTime()
            }

            orders = orders.filter(x => x.date >= state.mindate)
        }
        if (state.maxdate) {
            if (typeof state.maxdate === 'string') {
                state.maxdate = (new Date(state.maxdate)).getTime()
            }

            orders = orders.filter(x => x.date <= state.maxdate)
        }

        return {
            //расчет общего количества элементов
            orders: orders.slice((state.currentPage - 1) * database.maxOrders, state.currentPage * database.maxOrders),
            currentPage: state.currentPage,
            //расчет количества элементов на одной странице 
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