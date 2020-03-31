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

    //     order.fullName = `${getRandomFrom(names)} ${getRandomFrom(surnames)}`
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
        { fullName: "Елена Мокроусов", status: "archived", price: 1200, goods: "Принтер", date: 1583598688821, id: 1 },
        { fullName: "Николай Мокроусов", status: "archived", price: 1200, goods: "Принтер", date: 1581741950334, id: 2 },
        { fullName: "Андрей Мокроусов", status: "new", price: 500, goods: "Бумага для принтера", date: 1584093191316, id: 3 },
        { fullName: "Дмитрий Иванов", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1584077975448, id: 4 },
        { fullName: "Николай Ильченко", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582078379963, id: 5 },
        { fullName: "Вероника Амельченко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584302414192, id: 6 },
        { fullName: "Вероника Денисов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1582732897174, id: 7 },
        { fullName: "Вероника Смирнов", status: "back", price: 700, goods: "краски для принтера", date: 1582115706047, id: 8 },
        { fullName: "Марфа Россаленко", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1585159303984, id: 9 },
        { fullName: "Дмитрий Дюкич", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582277232296, id: 10 },
        { fullName: "Вероника Ильченко", status: "process", price: 2700, goods: "Полимерная ванна", date: 1584021422127, id: 11 },
        { fullName: "Евгений Бруновский", status: "process", price: 500, goods: "Бумага для принтера", date: 1584093085467, id: 12 },
        { fullName: "Илон Тихонов", status: "archived", price: 700, goods: "краски для принтера", date: 1583874759415, id: 13 },
        { fullName: "Вероника Денисов", status: "process", price: 1200, goods: "Принтер", date: 1582243873757, id: 14 },
        { fullName: "Евгений Россаленко", status: "new", price: 2700, goods: "Полимерная ванна", date: 1583533448724, id: 15 },
        { fullName: "Вероника Маск", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582107515713, id: 16 },
        { fullName: "Дмитрий Дюкич", status: "archived", price: 500, goods: "Бумага для принтера", date: 1582515656915, id: 17 },
        { fullName: "Ольга Франкенштейн", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1585044267587, id: 18 },
        { fullName: "Василий Смирнов", status: "process", price: 700, goods: "краски для принтера", date: 1583801462314, id: 19 },
        { fullName: "Андрей Стрелюхин", status: "process", price: 1200, goods: "Принтер", date: 1584381509556, id: 20 },
        { fullName: "Николай Молахов", status: "process", price: 500, goods: "Бумага для принтера", date: 1582700950040, id: 21 },
        { fullName: "Масим Россаленко", status: "new", price: 500, goods: "Бумага для принтера", date: 1585059842261, id: 22 },
        { fullName: "Илон Дюкич", status: "new", price: 1200, goods: "Принтер", date: 1584837321368, id: 23 },
        { fullName: "Масим Иванов", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1583108591866, id: 24 },
        { fullName: "Петр Тихонов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1582693314547, id: 25 },
        { fullName: "Илон Денисов", status: "process", price: 1200, goods: "Принтер", date: 1584956162883, id: 26 },
        { fullName: "Марфа Амельченко", status: "new", price: 1200, goods: "Принтер", date: 1582457032213, id: 27 },
        { fullName: "Масим Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1582146179506, id: 28 },
        { fullName: "Дмитрий Бруновский", status: "archived", price: 700, goods: "краски для принтера", date: 1584694644258, id: 29 },
        { fullName: "Петр Франкенштейн", status: "back", price: 2700, goods: "Полимерная ванна", date: 1583419383900, id: 30 },
        { fullName: "Николай Тихонов", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582535465730, id: 31 },
        { fullName: "Ольга Франкенштейн", status: "process", price: 700, goods: "краски для принтера", date: 1583429412819, id: 32 },
        { fullName: "Елена Смирнов", status: "back", price: 1200, goods: "Картриджи для принтера", date: 1583446782980, id: 33 },
        { fullName: "Ольга Ильченко", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582068364161, id: 34 },
        { fullName: "Иван Бруновский", status: "back", price: 2700, goods: "Полимерная ванна", date: 1582573541443, id: 35 },
        { fullName: "Евгений Амельченко", status: "back", price: 700, goods: "краски для принтера", date: 1584801205878, id: 36 },
        { fullName: "Илон Денисов", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584225031236, id: 37 },
        { fullName: "Евгений Тихонов", status: "process", price: 700, goods: "краски для принтера", date: 1584172453440, id: 38 },
        { fullName: "Марфа Амельченко", status: "archived", price: 2700, goods: "Полимерная ванна", date: 1584337327414, id: 39 },
        { fullName: "Ольга Молахов", status: "archived", price: 700, goods: "краски для принтера", date: 1584076537711, id: 40 },
        { fullName: "Дмитрий Молахов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1583908188640, id: 41 },
        { fullName: "Марфа Ильченко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1581451848661, id: 42 },
        { fullName: "Ольга Бруновский", status: "new", price: 1200, goods: "Принтер", date: 1583971465525, id: 43 },
        { fullName: "Ольга Франкенштейн", status: "new", price: 1200, goods: "Принтер", date: 1583467803295, id: 44 },
        { fullName: "Петр Стрелюхин", status: "back", price: 700, goods: "краски для принтера", date: 1583242090206, id: 45 },
        { fullName: "Марфа Амельченко", status: "new", price: 700, goods: "краски для принтера", date: 1584241701099, id: 46 },
        { fullName: "Андрей Дюкич", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1584338436180, id: 47 },
        { fullName: "Иван Дюкич", status: "new", price: 2700, goods: "Полимерная ванна", date: 1584020335646, id: 48 },
        { fullName: "Масим Иванов", status: "archived", price: 1200, goods: "Принтер", date: 1584671444146, id: 49 },
        { fullName: "Петр Дюкич", status: "new", price: 1200, goods: "Принтер", date: 1582104188290, id: 50 },
        { fullName: "Дмитрий Дюкич", status: "archived", price: 500, goods: "Бумага для принтера", date: 1584987161754, id: 51 },
        { fullName: "Масим Денисов", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582878677143, id: 52 },
        { fullName: "Ольга Молахов", status: "process", price: 500, goods: "Бумага для принтера", date: 1582638161300, id: 53 },
        { fullName: "Иван Иванов", status: "back", price: 500, goods: "Бумага для принтера", date: 1582384869134, id: 54 },
        { fullName: "Иван Стрелюхин", status: "process", price: 500, goods: "Бумага для принтера", date: 1582645195350, id: 55 },
        { fullName: "Иван Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1581950243770, id: 56 },
        { fullName: "Ольга Амельченко", status: "new", price: 1200, goods: "Принтер", date: 1583199660187, id: 57 },
        { fullName: "Андрей Стрелюхин", status: "archived", price: 1200, goods: "Принтер", date: 1584351829401, id: 58 },
        { fullName: "Ольга Ильченко", status: "back", price: 700, goods: "краски для принтера", date: 1584020752308, id: 59 },
        { fullName: "Ольга Ильченко", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1582393931534, id: 60 },
        { fullName: "Елена Дюкич", status: "archived", price: 700, goods: "краски для принтера", date: 1582386703506, id: 61 },
        { fullName: "Василий Тихонов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1581865366094, id: 62 },
        { fullName: "Вячеслав Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1582553204079, id: 63 },
        { fullName: "Елена Денисов", status: "archived", price: 1200, goods: "Принтер", date: 1583451674973, id: 64 },
        { fullName: "Петр Стрелюхин", status: "new", price: 500, goods: "Бумага для принтера", date: 1581363474372, id: 65 },
        { fullName: "Вячеслав Стрелюхин", status: "back", price: 700, goods: "краски для принтера", date: 1583863625245, id: 66 },
        { fullName: "Андрей Маск", status: "archived", price: 500, goods: "Бумага для принтера", date: 1582188108934, id: 67 },
        { fullName: "Иван Дюкич", status: "process", price: 700, goods: "краски для принтера", date: 1582250350072, id: 68 },
        { fullName: "Евгений Амельченко", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582861289067, id: 69 },
        { fullName: "Василий Иванов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1583919125748, id: 70 },
        { fullName: "Ольга Россаленко", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1584480255522, id: 71 },
        { fullName: "Дмитрий Тихонов", status: "back", price: 2700, goods: "Полимерная ванна", date: 1583255986914, id: 72 },
        { fullName: "Елена Франкенштейн", status: "new", price: 700, goods: "краски для принтера", date: 1581472801258, id: 73 },
        { fullName: "Ольга Тихонов", status: "new", price: 500, goods: "Бумага для принтера", date: 1581474428279, id: 74 },
        { fullName: "Андрей Маск", status: "back", price: 2700, goods: "Полимерная ванна", date: 1584817811422, id: 75 },
        { fullName: "Евгений Маск", status: "archived", price: 700, goods: "краски для принтера", date: 1582185207359, id: 76 },
        { fullName: "Иван Стрелюхин", status: "new", price: 2700, goods: "Полимерная ванна", date: 1582917203175, id: 77 },
        { fullName: "Андрей Бруновский", status: "back", price: 500, goods: "Бумага для принтера", date: 1583287836517, id: 78 },
        { fullName: "Василий Мокроусов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1584740779317, id: 79 },
        { fullName: "Илон Денисов", status: "archived", price: 500, goods: "Бумага для принтера", date: 1581814340018, id: 80 },
        { fullName: "Иван Мокроусов", status: "archived", price: 2700, goods: "Полимерная ванна", date: 1584313362085, id: 81 },
        { fullName: "Дмитрий Франкенштейн", status: "back", price: 700, goods: "краски для принтера", date: 1582790152272, id: 82 },
        { fullName: "Марфа Денисов", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582593031686, id: 83 },
        { fullName: "Елена Тихонов", status: "back", price: 500, goods: "Бумага для принтера", date: 1582059234820, id: 84 },
        { fullName: "Петр Ильченко", status: "back", price: 500, goods: "Бумага для принтера", date: 1582701903483, id: 85 },
        { fullName: "Вячеслав Бруновский", status: "new", price: 500, goods: "Бумага для принтера", date: 1584009925134, id: 86 },
        { fullName: "Евгений Стрелюхин", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1583838351838, id: 87 },
        { fullName: "Евгений Маск", status: "process", price: 1200, goods: "Картриджи для принтера", date: 1581796277669, id: 88 },
        { fullName: "Масим Смирнов", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1585339071926, id: 89 },
        { fullName: "Петр Франкенштейн", status: "process", price: 1200, goods: "Принтер", date: 1584049400932, id: 90 },
        { fullName: "Иван Смирнов", status: "back", price: 1200, goods: "Принтер", date: 1582392471222, id: 91 },
        { fullName: "Андрей Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1585282109163, id: 92 },
        { fullName: "Петр Денисов", status: "new", price: 1200, goods: "Принтер", date: 1582048088324, id: 93 },
        { fullName: "Вероника Россаленко", status: "new", price: 1200, goods: "Картриджи для принтера", date: 1583564838734, id: 94 },
        { fullName: "Вероника Франкенштейн", status: "archived", price: 1200, goods: "Картриджи для принтера", date: 1583746674631, id: 95 },
        { fullName: "Вячеслав Молахов", status: "archived", price: 1200, goods: "Принтер", date: 1581462507080, id: 96 },
        { fullName: "Василий Россаленко", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582903983933, id: 97 },
        { fullName: "Елена Тихонов", status: "back", price: 1200, goods: "Принтер", date: 1581830579084, id: 98 },
        { fullName: "Вячеслав Маск", status: "back", price: 500, goods: "Бумага для принтера", date: 1582547850078, id: 99 },
        { fullName: "Илон Бруновский", status: "process", price: 2700, goods: "Полимерная ванна", date: 1582573339422, id: 100 }
    ]
    Database.generate(orders)
})();
