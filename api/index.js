const router = require('express').Router()
const { reply, shuffleArry } = require('./utils')
const {
   getFilters,
   getProduct,
   getProductsData,
   getProductData,
   getCardsData,
   getURLMatcher
} = require('./data')

const home = require('./db/home')
const links = require('./db/links')
const brands = require('./db/brands')
const filters = require('./db/filters')
const articles = require('./db/articles')
const catalogs = require('./db/catalogs')
const categories = require('./db/categories')
const product = require('./db/PRODUCT')
const sertificates = require('./db/sertificates')
const articlesItems = require('./db/articlesItems')

const menudata = { links, categories }
const filtersdata = getFilters(filters, product)
const productItems = getProduct(product)
const productsdata = getProductsData(productItems)
const { productdata, reviewsdata } = getProductData(productItems)
const { cartdata, promodata, newitemsdata } = getCardsData(productdata)
const matcher = getURLMatcher(productdata)



router.get('/api/menu', (req, res, next) => { reply(res, menudata) })
router.get('/api/sertificates', (req, res, next) => { reply(res, sertificates) })
router.get('/api/brands', (req, res, next) => { reply(res, brands)})
router.get('/api/promo-items', (req, res, next) => { reply(res, promodata) })
router.get('/api/new-items', (req, res, next) => { reply(res, newitemsdata) })

router.get('/api/home', (req, res, next) => {
   const productsArray = Object.values(cartdata)
   const shuffledProducts = shuffleArry(productsArray)
   const popularProducts = shuffledProducts.slice(0, 8)
   const homedata = {...home, popularProducts }
   reply(res, homedata)
})

router.get('/api/catalogs', (req, res, next) => {
   const { size, current } = req.query
   const catalogsSlice = catalogs.slice(current, size)//////////////////////////////////////////////////
   reply(res, { catalogs: catalogsSlice, total: catalogs.length })
})

router.get('/api/articles', (req, res, next) => {
   const { page } = req.query
   const start = 5 * Number(page) - 5
   const end = 5 * Number(page)
   const articlesSlice = articles.slice(start, end)
   reply(res, { entities: articlesSlice, total: articles.length })
})

router.get('/api/articles/:article', (req, res, next) => {
   const article = req.params.article
   if (!articlesItems[article]) return reply(res, 'не найдено', 404);
   reply(res, articlesItems[article])
})

router.get('/api/products/:url', (req, res, next) => {
   const url = req.params.url
   if (!productsdata[url]) return reply(res, 'не найдено', 404);
   reply(res, { products: productsdata[url], filters: filtersdata[url] })
})

router.get('/api/product/:url/:productUrl', (req, res, next) => {
   const { url, productUrl } = req.params
   if (!productdata[url][productUrl]) return reply(res, 'не найдено', 404);
   reply(res, productdata[url][productUrl])
})

router.get('/api/reviews/:url/:productUrl', (req, res, next) => {
   const { url, productUrl } = req.params
   const { size } = req.query
   const current = Number(size)
   if (!reviewsdata[url][productUrl]) return reply(res, 'не найдено', 404);
   const entities = reviewsdata[url][productUrl].slice(current, current + 5)
   reply(res, entities)
})

router.get('/api/cart-items', (req, res, next) => {
   const { items } = req.query
   const itemsArr = items.split('_')
   const data = itemsArr.reduce((acc, id) => {
      acc[id] = cartdata[id]
      return acc
   }, {})
   reply(res, data)
})

router.get('/api/similar-products', (req, res, next) => {
   const productsArray = Object.values(cartdata)
   const shuffledProducts = shuffleArry(productsArray)
   const products = shuffledProducts.slice(0, 15)
   reply(res, products)
})

router.get('/api/compare', (req, res, next) => {
   const { items } = req.query
   const idArr = items.split('_')
   const data = idArr.reduce((acc, id) => {
      const { url, productUrl } = matcher[id]
      acc[productUrl] = productdata[url][productUrl]
      return acc
   }, {})
   reply(res, data)
})

router.post('/api/order', function (req, res, next) {
  try {
    const orderData = req.body
      console.log(orderData);
      setTimeout(() => {
         return reply(res, 'ok');
      }, 500)
  } catch {
    return reply(res, 'wrong data', 400);
  }
})

router.post('/api/form', function (req, res, next) {
  try {
    const formData = req.body
      console.log(formData);
      setTimeout(() => {
         return reply(res, 'ok');
      }, 1000)
  } catch {
    return reply(res, 'wrong data', 400);
  }
})

module.exports = router