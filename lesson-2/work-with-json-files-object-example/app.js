const productsOperations = require("./products");
// const {getAll} = require("./products");

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

const id = "767580d5-f509-4f45-98f9-28e74ec4af66";
const removeId = "0de6ef2d-0ec8-4969-baa6-8b8c08349476";
(async()=>{
    try {
        // const products = await productsOperations.getAll();
        // console.log(products[0]);

        // const oneProduct = await productsOperations.getById(id);
        // console.log(oneProduct);

        // const newData = {
        //     name: "iPhone X",
        //     price: 5,
        //     location: "Apple store"
        // };
        // const newProduct = await productsOperations.add(newData);
        // console.log(newProduct);

        // const updateData = {...oneProduct, price: 4};
        // const updateProduct = await productsOperations.updateById(id, updateData);
        // console.log(updateProduct);

        const removeProduct = await productsOperations.removeById(removeId);
        console.log(removeProduct);
    }
    catch(error){
        console.log(error.message);
    }
})()