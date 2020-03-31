;( function () {
    "use script"

    const database = {
        orders: [
            {
                id: 1,
                fullname: "Дмитрий Денисов",
                good: "Бумага для принтера",
                price: 500,
                status: "new",
                date: Date.now()
            },
            {
                id: 2,
                fullname: "Алексей Данчин",
                good: "Краска для принтера",
                price: 1500,
                status: "process",
                date: Date.now()
            },
            {
                id: 3,
                fullname: "Илья Муромец",
                good: "Принтер",
                price: 11500,
                status: "back",
                date: Date.now()
            }
        ]
    }

    const api = {}

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

    window.Database = api

   function getCopy (x) {
       return JSON.parse(JSON.stringify(x))
   }
})();