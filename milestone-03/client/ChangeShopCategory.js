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
        if (this.prevCategory === null) {
            document.getElementById('shop_category_house').style.display = 'block'
        }
        if (this.prevCategory != null) {
            document.getElementById(this.prevCategory).style.display = 'none'
            document.getElementById(category).style.display = 'block'
        }
        this.prevCategory = category
        if (category === 'shop_category_choose_avatar') {
            this.#renderAvatar(data)
        }
        if (category === 'shop_category_purchased_items') {
            this.#renderPurchasedCategories(data)
        }
        if (category === 'shop_category_house' || category === 'shop_category_garden' || category === 'shop_category_plants' || category === 'shop_category_avatar') {
            this.#renderBuyCategories(category, data)
        }
    }
    #renderBuyCategories(category, data) {
        let element = -1
        let jsonCategory = ''
        if (category === 'shop_category_house') {
            element = document.getElementById('shop_category_house')
            jsonCategory = 'house'
        }
        if (category === 'shop_category_garden') {
            element = document.getElementById('shop_category_garden')
            jsonCategory = 'garden'
        }
        if (category === 'shop_category_plants') {
            element = document.getElementById('shop_category_plants')
            jsonCategory = 'plants'
        }
        if (category === 'shop_category_avatar') {
            element = document.getElementById('shop_category_avatar')
            jsonCategory = 'avatar'
        }
        element.innerHTML = ''
        for (const object of data.shop_items) {
            if (object.category === jsonCategory) {
                const innerElement = document.createElement('div')
                const innerElementInnerHTML = `
                    <div class="shop_item">
                        <div class="shop_item_category">
                            <img src="${object.image_path}" height="50"/>
                        </div>
                        <div class="shop_item_category">${object.name}</div>
                        <div class="shop_item_category">${object.category}</div>
                        <div class="shop_item_category">${object.price}</div>
                    </div>
                `
                innerElement.innerHTML = innerElementInnerHTML
                element.appendChild(innerElement)
            }
        }
        console.log(element)
    }
    #renderPurchasedCategories(data) {
        return
    }
    #renderAvatar(data) {
        return
    }
}

export default ChangeShopCategory