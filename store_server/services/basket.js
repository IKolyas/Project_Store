function _search(arr, id) {
    return arr.find(item => item.id == id);
}

module.exports = {
    add(basket, item) {
        basket.contents.push(item);
        return basket;
    },
    change(basket, id, quantity) {
        let find = _search(basket.contents, id);
        if (quantity === 1 || quantity === -1) {
            find.quantity += quantity;
        } else {
            find.quantity = quantity;
        }
        return basket;
    },
    delete(basket, id) {
        let find = _search(basket.contents, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        return basket;
    }
}
