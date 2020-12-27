const { getCategory } = require('../model/category.js')
const helper = require('../helper/response.js')

module.exports = {
  getCategory: async (request, response) => {
    try {
      const result = await getCategory()
      console.log(result)
      return helper.response(response, 200, 'Success Get Category', result)
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
  // getProductByCategory: async (request, response) => {
  //   try {
  //     let { categoryId, orderBy, page, limit } = request.query
  //     page = parseInt(page)
  //     limit = parseInt(limit)
  //     const totalData = await getProductCount()
  //     const totalPage = Math.ceil(totalData / limit)
  //     const offset = page * limit - limit

  //     const prevLink = page > 1 ? qs.stringify({ ...request.query, ...{ page: page - 1 } }) : null
  //     const nextLink = page < totalPage ? qs.stringify({ ...request.query, ...{ page: page - 1 } }) : null
  //     console.log(request.query)
  //     console.log(qs.stringify(request.query))

  //     const pageInfo = {
  //       page,
  //       totalPage,
  //       limit,
  //       totalData,
  //       nextLink: nextLink && `http://localhost:3050/product/category?${nextLink}`,
  //       prevLink: prevLink && `https://localhost:3050/product/category?${prevLink}`
  //     }

  //     // const { id } = request.params
  //     const result = await getProductByCategory(categoryId, orderBy, limit, offset)
  //     // if (result.length > 0) {
  //     return helper.response(response, 200, 'Success Get Product By Id', result, pageInfo)
  //     // } else {
  //     //   return helper.response(response, 404, `Product By Id ${name} is Not Found`)
  //     // }
  //   } catch (error) {
  //     return helper.response(response, 400, 'Bad Request di controller', error)
  //   }
  // }
}
