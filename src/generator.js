;(function () {
        //переменная с именамми
    // const names = 'Дмитрий Иван Василий Масим Петр Николай Вячеслав Елена Ольга Вероника Марфа Илон Евгений Андрей'.split(' ')
        //переменная с фамилиями
    // const surnames = 'Денисов Иванов Смирнов Стрелюхин Франкенштейн Мокроусов Тихонов Ильченко Дюкич Россаленко Амельченко Маск Бруновский Молахов'.split(' ')
        //переменная с наименованием товаров
    // const goods = ["Принтер", "Бумага для принтера", "краски для принтера", "Картриджи для принтера", "Полимерная ванна"]
        //переменная с ценами товаров
    // const prices = [1200, 500, 700, 1200, 2700]
        //переменная со статусами заказов
    // const status = 'new process back archived'.split(' ')
        //переменная с стартовой датов
    // const startDate = Date.now() - 50 * 24 * 60 * 60 * 1000
        //переменная с конечной датой
    // const finishDate = Date.now() - 3 * 24 * 60 * 60 * 1000

            //переменная с генирацией 100 заказов 
    // const orders = Array(100).fill(null).map(getRandomOrder)
            //присвоение id заказам
    // orders.forEach((x, i) =>x.id = i + 1)
    
        //вывод массива заказов в читабельном виде
    // console.log(JSON.stringify(orders, null, 2))

        //функция создания рандоиного заказа
    // function getRandomOrder () {
    //     const order = {}
    //     const n = getRandom(0, goods.length - 1)

    //     order.fullname = `${getRandomFrom(names)} ${getRandomFrom(surnames)}`
    //     order.status = getRandomFrom(status)
    //     order.price = prices[n]
    //     order.goods = goods[n]
    //     order.date = getRandom(startDate, finishDate)

    //     return order
    // }
        //функция определения максимальных и минимальных значений
    // function getRandom (min, max) {
    //     return min + Math.floor(Math.random() * (max - min + 1))
    // }
        //
    // function getRandomFrom (array) {
    //     return array[getRandom(0, array.length - 1)]
    // }

    const orders = [
        { fullname: "Елена Мокроусов", status: "archived", price: 1200, goods: "Принтер", date: 1583598688821, id: 1 },
        { fullname: "Николай Мокроусов", status: "archived", price: 1200, goods: "Принтер", date: 1581741950334, id: 2 },
        { fullname: "Андрей Мокроусов", status: "new", price: 500, goods: "Бумага для принтера", date: 1584093191316, id: 3 },
        { fullname: "Дмитрий Иванов", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1584077975448, id: 4 },
        { fullname: "Николай Ильченко", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582078379963, id: 5 },
        { fullname: "Вероника Амельченко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584302414192, id: 6 },
        { fullname: "Вероника Денисов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1582732897174, id: 7 },
        { fullname: "Вероника Смирнов", status: "back", price: 700, goods: "краски для принтера", date: 1582115706047, id: 8 },
        { fullname: "Марфа Россаленко", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1585159303984, id: 9 },
        { fullname: "Дмитрий Дюкич", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582277232296, id: 10 },
        { fullname: "Вероника Ильченко", status: "process", price: 2700, goods: "Полимерная ванна", date: 1584021422127, id: 11 },
        { fullname: "Евгений Бруновский", status: "process", price: 500, goods: "Бумага для принтера", date: 1584093085467, id: 12 },
        { fullname: "Илон Тихонов", status: "archived", price: 700, goods: "краски для принтера", date: 1583874759415, id: 13 },
        { fullname: "Вероника Денисов", status: "process", price: 1200, goods: "Принтер", date: 1582243873757, id: 14 },
        { fullname: "Евгений Россаленко", status: "new", price: 2700, goods: "Полимерная ванна", date: 1583533448724, id: 15 },
        { fullname: "Вероника Маск", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582107515713, id: 16 },
        { fullname: "Дмитрий Дюкич", status: "archived", price: 500, goods: "Бумага для принтера", date: 1582515656915, id: 17 },
        { fullname: "Ольга Франкенштейн", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1585044267587, id: 18 },
        { fullname: "Василий Смирнов", status: "process", price: 700, goods: "краски для принтера", date: 1583801462314, id: 19 },
        { fullname: "Андрей Стрелюхин", status: "process", price: 1200, goods: "Принтер", date: 1584381509556, id: 20 },
        { fullname: "Николай Молахов", status: "process", price: 500, goods: "Бумага для принтера", date: 1582700950040, id: 21 },
        { fullname: "Масим Россаленко", status: "new", price: 500, goods: "Бумага для принтера", date: 1585059842261, id: 22 },
        { fullname: "Илон Дюкич", status: "new", price: 1200, goods: "Принтер", date: 1584837321368, id: 23 },
        { fullname: "Масим Иванов", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1583108591866, id: 24 },
        { fullname: "Петр Тихонов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1582693314547, id: 25 },
        { fullname: "Илон Денисов", status: "process", price: 1200, goods: "Принтер", date: 1584956162883, id: 26 },
        { fullname: "Марфа Амельченко", status: "new", price: 1200, goods: "Принтер", date: 1582457032213, id: 27 },
        { fullname: "Масим Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1582146179506, id: 28 },
        { fullname: "Дмитрий Бруновский", status: "archived", price: 700, goods: "краски для принтера", date: 1584694644258, id: 29 },
        { fullname: "Петр Франкенштейн", status: "back", price: 2700, goods: "Полимерная ванна", date: 1583419383900, id: 30 },
        { fullname: "Николай Тихонов", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582535465730, id: 31 },
        { fullname: "Ольга Франкенштейн", status: "process", price: 700, goods: "краски для принтера", date: 1583429412819, id: 32 },
        { fullname: "Елена Смирнов", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1583446782980, id: 33 },
        { fullname: "Ольга Ильченко", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582068364161, id: 34 },
        { fullname: "Иван Бруновский", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582573541443, id: 35 },
        { fullname: "Евгений Амельченко", status: "back", price: 700, goods: "краски для принтера", date: 1584801205878, id: 36 },
        { fullname: "Илон Денисов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584225031236, id: 37 },
        { fullname: "Евгений Тихонов", status: "process", price: 700, goods: "краски для принтера", date: 1584172453440, id: 38 },
        { fullname: "Марфа Амельченко", status: "archived", price: 2700, goods: "Полимерная ванна", date: 1584337327414, id: 39 },
        { fullname: "Ольга Молахов", status: "archived", price: 700, goods: "краски для принтера", date: 1584076537711, id: 40 },
        { fullname: "Дмитрий Молахов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1583908188640, id: 41 },
        { fullname: "Марфа Ильченко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1581451848661, id: 42 },
        { fullname: "Ольга Бруновский", status: "new", price: 1200, goods: "Принтер", date: 1583971465525, id: 43 },
        { fullname: "Ольга Франкенштейн", status: "new", price: 1200, goods: "Принтер", date: 1583467803295, id: 44 },
        { fullname: "Петр Стрелюхин", status: "back", price: 700, goods: "краски для принтера", date: 1583242090206, id: 45 },
        { fullname: "Марфа Амельченко", status: "new", price: 700, goods: "краски для принтера", date: 1584241701099, id: 46 },
        { fullname: "Андрей Дюкич", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1584338436180, id: 47 },
        { fullname: "Иван Дюкич", status: "new", price: 2700, goods: "Полимерная ванна", date: 1584020335646, id: 48 },
        { fullname: "Масим Иванов", status: "archived", price: 1200, goods: "Принтер", date: 1584671444146, id: 49 },
        { fullname: "Петр Дюкич", status: "new", price: 1200, goods: "Принтер", date: 1582104188290, id: 50 },
        { fullname: "Дмитрий Дюкич", status: "archived", price: 500, goods: "Бумага для принтера", date: 1584987161754, id: 51 },
        { fullname: "Масим Денисов", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582878677143, id: 52 },
        { fullname: "Ольга Молахов", status: "process", price: 500, goods: "Бумага для принтера", date: 1582638161300, id: 53 },
        { fullname: "Иван Иванов", status: "back", price: 500, goods: "Бумага для принтера", date: 1582384869134, id: 54 },
        { fullname: "Иван Стрелюхин", status: "process", price: 500, goods: "Бумага для принтера", date: 1582645195350, id: 55 },
        { fullname: "Иван Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1581950243770, id: 56 },
        { fullname: "Ольга Амельченко", status: "new", price: 1200, goods: "Принтер", date: 1583199660187, id: 57 },
        { fullname: "Андрей Стрелюхин", status: "archived", price: 1200, goods: "Принтер", date: 1584351829401, id: 58 },
        { fullname: "Ольга Ильченко", status: "back", price: 700, goods: "краски для принтера", date: 1584020752308, id: 59 },
        { fullname: "Ольга Ильченко", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582393931534, id: 60 },
        { fullname: "Елена Дюкич", status: "archived", price: 700, goods: "краски для принтера", date: 1582386703506, id: 61 },
        { fullname: "Василий Тихонов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1581865366094, id: 62 },
        { fullname: "Вячеслав Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1582553204079, id: 63 },
        { fullname: "Елена Денисов", status: "archived", price: 1200, goods: "Принтер", date: 1583451674973, id: 64 },
        { fullname: "Петр Стрелюхин", status: "new", price: 500, goods: "Бумага для принтера", date: 1581363474372, id: 65 },
        { fullname: "Вячеслав Стрелюхин", status: "back", price: 700, goods: "краски для принтера", date: 1583863625245, id: 66 },
        { fullname: "Андрей Маск", status: "archived", price: 500, goods: "Бумага для принтера", date: 1582188108934, id: 67 },
        { fullname: "Иван Дюкич", status: "process", price: 700, goods: "краски для принтера", date: 1582250350072, id: 68 },
        { fullname: "Евгений Амельченко", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582861289067, id: 69 },
        { fullname: "Василий Иванов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1583919125748, id: 70 },
        { fullname: "Ольга Россаленко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584480255522, id: 71 },
        { fullname: "Дмитрий Тихонов", status: "back", price: 2700, goods: "Полимерная ванна", date: 1583255986914, id: 72 },
        { fullname: "Елена Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1581472801258, id: 73 },
        { fullname: "Ольга Тихонов", status: "new", price: 500, goods: "Бумага для принтера", date: 1581474428279, id: 74 },
        { fullname: "Андрей Маск", status: "back", price: 2700, goods: "Полимерная ванна", date: 1584817811422, id: 75 },
        { fullname: "Евгений Маск", status: "archived", price: 700, goods: "краски для принтера", date: 1582185207359, id: 76 },
        { fullname: "Иван Стрелюхин", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582917203175, id: 77 },
        { fullname: "Андрей Бруновский", status: "back", price: 500, goods: "Бумага для принтера", date: 1583287836517, id: 78 },
        { fullname: "Василий Мокроусов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1584740779317, id: 79 },
        { fullname: "Илон Денисов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1581814340018, id: 80 },
        { fullname: "Иван Мокроусов", status: "archived", price: 2700, goods: "Полимерная ванна", date: 1584313362085, id: 81 },
        { fullname: "Дмитрий Франкенштейн", status: "back", price: 700, goods: "краски для принтера", date: 1582790152272, id: 82 },
        { fullname: "Марфа Денисов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582593031686, id: 83 },
        { fullname: "Елена Тихонов", status: "back", price: 500, goods: "Бумага для принтера", date: 1582059234820, id: 84 },
        { fullname: "Петр Ильченко", status: "back", price: 500, goods: "Бумага для принтера", date: 1582701903483, id: 85 },
        { fullname: "Вячеслав Бруновский", status: "new", price: 500, goods: "Бумага для принтера", date: 1584009925134, id: 86 },
        { fullname: "Евгений Стрелюхин", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1583838351838, id: 87 },
        { fullname: "Евгений Маск", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1581796277669, id: 88 },
        { fullname: "Масим Смирнов", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1585339071926, id: 89 },
        { fullname: "Петр Франкенштейн", status: "process", price: 1200, goods: "Принтер", date: 1584049400932, id: 90 },
        { fullname: "Иван Смирнов", status: "back", price: 1200, goods: "Принтер", date: 1582392471222, id: 91 },
        { fullname: "Андрей Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1585282109163, id: 92 },
        { fullname: "Петр Денисов", status: "new", price: 1200, goods: "Принтер", date: 1582048088324, id: 93 },
        { fullname: "Вероника Россаленко", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1583564838734, id: 94 },
        { fullname: "Вероника Франкенштейн", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1583746674631, id: 95 },
        { fullname: "Вячеслав Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1581462507080, id: 96 },
        { fullname: "Василий Россаленко", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582903983933, id: 97 },
        { fullname: "Елена Тихонов", status: "back", price: 1200, goods: "Принтер", date: 1581830579084, id: 98 },
        { fullname: "Вячеслав Маск", status: "back", price: 500, goods: "Бумага для принтера", date: 1582547850078, id: 99 },
        { fullname: "Илон Бруновский", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582573339422, id: 100 }
    ]
    Database.generate(orders)
})();
