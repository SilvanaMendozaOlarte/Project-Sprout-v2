class ChangePage {
    ChangePage = null
    constructor() {
        if (this.ChangePage === null) {
            this.prevPage = "sign_in"
            ChangePage.ChangePage = this
        }
        return ChangePage.ChangePage
    }

    changePage(page) {
        document.getElementById(this.prevPage).style.display = 'none'
        document.getElementById(page).style.display = 'block'
        this.prevPage = page
    }
}

export default ChangePage