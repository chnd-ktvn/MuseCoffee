const { getProduct, getProductCount, getProductById, searchByName, postProduct, patchProduct, deleteProduct } = require('../model/product.js')
const helper = require('../helper/response.js')
const qs = require('querystring')

module.exports = {
  getProduct: async (request, response) => {
    try {
      let { orderBy, page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getProductCount()
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit

      const prevLink = page > 1 ? qs.stringify({ ...request.query, ...{ page: page - 1 } }) : null
      const nextLink = page < totalPage ? qs.stringify({ ...request.query, ...{ page: page - 1 } }) : null
      console.log(request.query)
      console.log(qs.stringify(request.query))

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink: nextLink && `http://localhost:1010/product?${nextLink}`,
        prevLink: prevLink && `https://localhost:1010/product?${prevLink}`
      }
      if (orderBy) {
        const result = await getProduct(orderBy, limit, offset)
        console.log(result)
        return helper.response(response, 200, 'Success Get All Products', result, pageInfo)
      }
    } catch (error) {
      console.log(`${error} in the controller`)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getProductById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getProductById(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Product By Id', result)
      } else {
        return helper.response(response, 404, `Product By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  searchByName: async (request, response) => {
    try {
      const { name } = request.params
      const result = await searchByName(name)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Search By Name', result)
      } else {
        return helper.response(response, 404, `Product By ${name} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postProduct: async (request, response) => {
    try {
      const {
        category_id,
        product_name,
        product_price,
        product_status
      } = request.body
      const setData = {
        category_id,
        product_name,
        product_price,
        product_created_at: new Date(),
        product_status
      }
      const result = await postProduct(setData)
      return helper.response(response, 200, 'Success Post Product', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  patchProduct: async (request, response) => {
    try {
      const { id } = request.params
      const {
        category_id,
        product_name,
        product_price,
        product_status
      } = request.body
      const setData = {
        category_id,
        product_name,
        product_price,
        product_status
      }
      const checkId = await getProductById(id)
      if (checkId.length > 0) {
        const result = await patchProduct(setData, id)
        return helper.response(response, 200, 'Success patch product by id', result)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params
      const result = await deleteProduct(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Product By Id', result)
      } else {
        return helper.response(response, 404, `Product By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
