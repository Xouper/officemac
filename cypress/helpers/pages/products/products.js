export class Products {

    get avatar() {
        return cy.get('sl-avatar').shadow().find('.avatar__initials')
    }
    get userName() {
        return cy.get('.description-user').first()
    }
    get userDescription() {
        return cy.get('.description-user').last()
    }
    get title() {
        return cy.get('.title-block').find('header')
    }
    get fields() {
        return cy.get('.fields-search')
    }
    get nameSl() {
        return this.fields.find('sl-input[name="search"]').shadow()
    }
    get productName() {
        return this.nameSl.find('label')
    }
    get productInput() {
        return this.nameSl.find('input')
    }
    set productInput(name) {
        this.productInput.type(name)
    }
    get productType() {
        return this.fields.find('.suggest')
    }
    get productRating() {
        return this.fields.find('.rating')
    }
    get ratingTitle() {
        return this.productRating.first()
    }
    get ratingInputFromTitle() {
        return this.productRating.find('sl-input[name="rating_wi_from"]').shadow().find('slot[name="label"]')
    }
    get ratingInputToTitle() {
        return this.productRating.find('sl-input[name="rating_wi_to"]').shadow().find('slot[name="label"]')
    }
    get recommendedByMe() {
        return cy.get('sl-checkbox[name="recommended_by_me"]')
    }
    get commentedByMe() {
        return cy.get('sl-checkbox[name="commented_by_me"]')
    }
    get wrapperButtons() {
        return cy.get('.buttons-search')
    }
    get clearButton() {
        return this.wrapperButtons.first()
    }
    get buttonClear() {
        return cy.contains('Сбросить').shadow().find('button')
    }
    get findButton() {
        return this.wrapperButtons.last()
    }
    get searchButton() {
        return cy.contains('Поиск').shadow().find('button')
    }
    inputyType(i) {
        return this.productType.eq(i).find('sl-input').shadow().find('input')
    }
    selectType(i) {
        return this.productType.eq(i).find('sl-select').shadow().find('#input')
    }
    grapeCheck(i) {
        return this.productType.eq(i).find('sl-select').shadow().find('sl-tag')
    }
    placeholderCheck(i) {
        return this.productType.eq(i).find('sl-input').shadow().find('input')
    }
    get table() {
        return cy.get('.card')
    }
    get pagination() {
        return cy.get('.pagination')
    }
    get tableStr() {
        return this.table.find('tbody').find('tr')
    }
}