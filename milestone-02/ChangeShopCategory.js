class ChangeShopCategory {
    ChangeShopCategory = null
    constructor() {
        if (this.ChangeShopCategory === null) {
            this.prevCategory = "sign_in"
            ChangeShopCategory.ChangeShopCategory = this
        }
        return ChangeShopCategory.ChangeShopCategory
    }
    ChangeShopCategory(category) {
        document.getElementById(this.prevCategory).style.display = 'none'
        document.getElementById(category).style.display = 'block'
        this.prevCategory = category
    }
}

export default ChangeShopCategory