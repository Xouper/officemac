import { Products } from '../../helpers/pages/products/products'
import { AccessAge } from '../../helpers/pages/products/accessAge'
import { beforeEachPositive } from '../../helpers/before-each'

const page = new Products()

describe('Authorization Test', ()=>{
    beforeEach(() => {
        beforeEachPositive('/product')
    })
    it('', ()=>{
        
    })

})