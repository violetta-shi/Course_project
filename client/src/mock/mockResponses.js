export const getSelfResponse = {
    status: 401
};
// export const getSelfResponse = {
//     status: 200,
//     data: {
//         "id": 2,
//         "email": "example1@example.com",
//         "role": "USER"
//     }
// };
// export const getSelfResponse = {
//     status: 200,
//     data: {
//         "id": 1,
//         "email": "admin@admin.com",
//         "role": "ADMIN"
//     }
// };

export const loginResponse = {
    status: 200,
    data: {
        "id": 2,
        "email": "example1@example.com",
        "role": "USER",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjgxMjMwNTg4LCJleHAiOjE2ODEyMzc3ODh9.nEUrs02eII3PZCOscmDyTrIQRJgtu8iyO5lgj71D2tU"
    }
};
// export const loginResponse = {
//     status: 200,
//     data: {
//         "id": 1,
//         "email": "admin@admin.com",
//         "role": "ADMIN",
//         "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxMjMwNzUyLCJleHAiOjE2ODEyMzc5NTJ9.7VEUWwR4SONQ1hIFbl0j82bH18PrO7C1ymep7xcdrXk"
//     }
// };
// export const loginResponse = {
//     status: 401,
//     data: {
//         "message": "Email и/или пароль неверны"
//     }
// };

export const categoriesResponse = {
    status: 200,
    data: [
        {
            id: 1,
            name: "Новинки",
            imageUrl: "/img/category/category1.png",
            productCount: 9
        },
        {
            id: 2,
            name: "Хиты",
            imageUrl: "/img/category/category2.png",
            productCount: 15
        },
        {
            id: 3,
            name: "Выгодно сегодня",
            imageUrl: "/img/category/category3.png",
            productCount: 13
        },
        {
            id: 4,
            name: "Суши-сеты",
            imageUrl: "/img/category/category4.png",
            productCount: 41
        },
        {
            id: 5,
            name: "Суши и роллы",
            imageUrl: "/img/category/category5.png",
            productCount: 65
        },
        {
            id: 6,
            name: "Лапша WOK",
            imageUrl: "/img/category/category6.png",
            productCount: 16
        },
        {
            id: 7,
            name: "Сеты из горячего",
            imageUrl: "/img/category/category7.png",
            productCount: 13
        },
        {
            id: 8,
            name: "Супы",
            imageUrl: "/img/category/category8.png",
            productCount: 7
        },
        {
            id: 9,
            name: "Рамэны",
            imageUrl: "/img/category/category9.png",
            productCount: 9
        },
        {
            id: 10,
            name: "Рис",
            imageUrl: "/img/category/category10.png",
            productCount: 5
        },
        {
            id: 11,
            name: "Поке и Салаты",
            imageUrl: "/img/category/category11.png",
            productCount: 9
        },
        {
            id: 12,
            name: "Донбури",
            imageUrl: "/img/category/category12.png",
            productCount: 8
        },
        {
            id: 13,
            name: "Обеденное меню",
            imageUrl: "/img/category/category13.png",
            productCount: 6
        },
        {
            id: 14,
            name: "Вегетерианское меню",
            imageUrl: "/img/category/category14.png",
            productCount: 12
        },
        {
            id: 15,
            name: "Детское меню",
            imageUrl: "/img/category/category15.png",
            productCount: 2
        },
        {
            id: 16,
            name: "Десерты",
            imageUrl: "/img/category/category16.png",
            productCount: 2
        },
        {
            id: 17,
            name: "Напитки",
            imageUrl: "/img/category/category17.png",
            productCount: 13
        },
        {
            id: 18,
            name: "Гарниры и соусы",
            imageUrl: "/img/category/category18.png",
            productCount: 14
        }
    ]
}

export const productsResponse = {
    status: 200,
    data: [
        {
            id: 1,
            groupKey: "1",
            imageUrl: "/img/product/product1.png",
            name: "Чикаго",
            size: "4 шт.",
            price: 5.90,
            weight: 122,
        },
        {
            id: 2,
            groupKey: "1",
            imageUrl: "/img/product/product1.png",
            name: "Чикаго",
            size: "8 шт.",
            price: 9.90,
            weight: 265,
        },
        {
            id: 3,
            groupKey: "2",
            imageUrl: "/img/product/product2.png",
            name: "Луизиана 8 шт.",
            price: 16.90,
            weight: 210,
        },
        {
            id: 4,
            groupKey: "3",
            imageUrl: "/img/product/product3.png",
            name: "Милуоки",
            size: "4 шт.",
            price: 7.90,
            weight: 102,
        },
        {
            id: 5,
            groupKey: "3",
            imageUrl: "/img/product/product3.png",
            name: "Милуоки",
            size: "8 шт.",
            price: 13.90,
            weight: 225,
        },
        {
            id: 6,
            groupKey: "4",
            imageUrl: "/img/product/product4.png",
            name: "Киото",
            size: "4 шт.",
            price: 6.90,
            weight: 103,
        },
        {
            id: 7,
            groupKey: "4",
            imageUrl: "/img/product/product4.png",
            name: "Киото",
            size: "8 шт.",
            price: 12.90,
            weight: 231,
        }
    ]
}
