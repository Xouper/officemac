import { Products } from '../../helpers/pages/products/products'
import { AccessAge } from '../../helpers/pages/products/accessAge'
import { beforeEachPositive } from '../../helpers/before-each'

const page = new Products()
const modal = new AccessAge()

let mass = ['Тип продукта', 'Содержание сахара', 'Страна', 'Регион', 'Производитель', 'Цвет', 'Виноград']
let name = ["Вино", 'Сухое', 'Россия', ' ', 'Леоне де Кастрис', 'Белое', 'Санджовезе']
let hatTable = ['Фото', 'Наименование', 'Производитель', 'Цвет', 'Сахар', 'Моя оценка', 'Оценка WI']
let fixt = require('../../fixtures/mocks/products/productsTable.json')


describe('Working of products page', () => {
    beforeEach(() => {
        beforeEachPositive('/product')
    })
    // it ('Check user-access', ()=>{
    //     modal.ageWarning.should('be.visible').and('contain.text', 'Для доступа на сайт необходимо подтвердить возраст')
    //     modal.ageWarningDescription.should('be.visible').and('contain.text', ' Сайт содержит информацию, не рекомендованную для лиц, не достигших совершеннолетнего возраста. Сведения, размещенные на сайте, носят исключительно информационный характер и предназначены только для личного использования. ')
    //     modal.number18.should('be.visible').and('contain.text', '18+')
    //     modal.slButtonEntrance.should('be.visible').and('contain.text', ' Мне исполнилось 18 лет ')
    //     modal.buttonEntrance.should('exist').and('be.visible')
    //     modal.slButtonExist.should('be.visible').and('contain.text', ' Мне меньше 18 лет ')
    //     modal.buttonExist.should('exist').and('be.visible')
    //     modal.buttonEntrance.click()
    // })
    it("Check expert", ()=>{
        page.avatar.should('be.visible').and('contain.text', 'УА')
        page.userName.should('be.visible').and('contain.text', 'Алексей Устинов')
        page.userDescription.should('be.visible').and('contain.text', 'Эксперт')
    })
    it('Check elements of page', () => {
        page.title.should('be.be.visible').and("contain.text", 'Продукция')
        page.productName.should('be.visible').and('contain.text', 'Название')
        page.productInput.should('be.visible').and('have.attr', 'placeholder', 'Название')

        for (let i = 0; i < mass.length; i++) {
            if (mass[i] != 'Виноград') {
                page.placeholderCheck(i).should('have.attr', 'placeholder', mass[i])
                page.productType.eq(i).find('sl-input').shadow().find('slot').should('contain.text', mass[i])
            }
            else {
                page.productType.eq(i).find('sl-select').shadow().find('slot').should('contain.text', mass[i])
            }
        }

        page.ratingTitle.should('be.visible').and('contain.text', 'Рейтинг WI')
        page.ratingInputFromTitle.should('exist').and('contain.text', 'От')
        page.ratingInputToTitle.should('exist').and('contain.text', 'До')
        page.recommendedByMe.should('be.visible').and('contain.text', 'Рекомендованные мной')
        page.commentedByMe.should('be.visible').and('contain.text', ' Прокомментированные мной ')
        page.clearButton.should('be.visible').and('contain.text', 'Сбросить')
        page.findButton.should('be.visible').and('contain.text', 'Поиск')

    })
    it('Check table', () => {
        hatTable.forEach((el) => {
            page.table.contains('th', el).should('exist').and('be.visible');
        })

        cy.contains('td', 'Винный напиток Уве Шифер Финка Констанция "Альтос де ла Финка1" 2002 1.00').parent().find('td').as("cells");
        [[1, fixt.rows[0].full_name],
        [2, fixt.rows[0].manufacturer],
        [3, fixt.rows[0].color],
        [4, fixt.rows[0].sugar],
        ].forEach((p) => {
            cy.get('@cells').eq(p[0]).should('contain', p[1]);
        })
        page.pagination.should('exist').and('be.visible')
    })
    it('Correct usage of field', () => {
        page.productInput = 'Вино'
        page.productInput.should('be.visible').and('contain.value', 'Вино')
        for (let i = 0; i < name.length; i++) {
            if (mass[i] != 'Виноград') {
                page.inputyType(i).type(name[i])
            }
            else {
                page.selectType(i).click({ force: true })
                page.productType.eq(i).find('sl-menu-item').eq(2).click()
                page.grapeCheck(i).should('contain.text', 'Санджовезе')
            }
        }
        page.findButton.click({ force: true })
        page.productType.eq(4).find('sl-input').shadow().find('#input').click({ force: true })
        page.productType.eq(4).find('sl-menu-item').shadow().find('div').click({ force: true })
        page.searchButton.click({ force: true })
        page.tableStr.should('have.length', 4)
        page.buttonClear.click({force:true})
        page.tableStr.should('not.have.length', 4)
    })

}) 