const {v4} = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const products = require("./products.json");

const productsOperations = {
    filePath: path.join(__dirname, "products.json"),
    products,

    getAll(){
        return this.products;
    },
    getById(id){
        const oneProduct = this.products.find(item => item.id === id);
        if(!oneProduct){
            return null;
        }
        return oneProduct;
    },
    add(newData){
        const newProduct = {...newData, id: v4()};
        this.products.push(newProduct);
        await this.updateProducts();
        return newProduct;
    },
    updateById(id, updateData){
        const idx = this.products.findIndex(item => item.id === id);
        if(idx === -1){
            return null;
        }
        this.products[idx] = {...updateData, id};
        await updateProducts();
        return this.products[idx];
    },
    removeById(id){
        const idx = this.products.findIndex(item => item.id === id);
        if(idx === -1){
            return null;
        }
        const removeProduct = this.products[idx];
        this.products.splice(idx, 1);
        await updateProducts();
        return removeProduct;
    },
    async updateProducts(){
        await fs.writeFile(this.filePath, JSON.stringify(this.products));
    }
}



module.exports = productsOperations;