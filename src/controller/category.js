const redis = require('redis')
const client = redis.createClient()
const { getCategory } = require('../model/category.js')
const helper = require('../helper/response.js')

module.exports = {
  getCategory: async (request, response) => {
    try {
      const result = await getCategory()
      client.setex('getcategory', 3600, JSON.stringify(result))
      return helper.response(response, 200, 'Success Get Category', result)
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
