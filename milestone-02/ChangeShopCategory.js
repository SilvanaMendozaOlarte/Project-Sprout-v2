class ChangeShopCategory {
    ChangeShopCategory = null
    constructor() {
        if (this.ChangeShopCategory === null) {
            this.prevCategory = null
            ChangeShopCategory.ChangeShopCategory = this
        }
        return ChangeShopCategory.ChangeShopCategory
    }
    changeShopCategory(category, data) {
        document.getElementById(this.prevCategory).style.display = 'none'
        document.getElementById(category).style.display = 'block'
        this.prevCategory = category
        if (category === 'shop_category_choose_avatar') {
            this.#renderAvatar(data)
        }
        if (category === 'shop_category_purchased_items') {
            this.#renderPurchasedCategories(data)
        }
        if (category === 'shop_category_house' || category === 'shop_category_garden' || category === 'shop_category_plants' || category === 'shop_category_avatar') {
            this.#renderBuyCategories(data, category)
        }
    }
    #renderBuyCategories(data) {
        
    }
    #renderPurchasedCategories(data) {

    }
    #renderAvatar(data) {

    }
}

export default ChangeShopCategory