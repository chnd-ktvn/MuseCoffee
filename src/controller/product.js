const { getProduct, getProductCount, getProductById, searchByName } = require('../model/product.js')
const helper = require('../helper/response.js')
const qs = require('querystring')

module.exports = {
  getProduct: async (request, response) => {
    try {
      // const orderBy = request.params
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
      // if (result.length > 0) {
      return helper.response(response, 200, 'Success Get Product By Name', result)
      // } else {
      //   return helper.response(response, 404, `Product By name ${name} is Not Found`)
      // }
      // result.forEach(r => {
      //   return helper.response(response, 200, 'Success Search Product By Name', r)
      // })
    } catch (error) {
      console.log(`${error}error dicontoller search`)
    }
  }
}
