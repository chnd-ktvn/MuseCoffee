const redis = require('redis')
const client = redis.createClient()
const {
  getProduct,
  getProductCount,
  getProductById,
  getProductByIdAdm,
  getProductByCategory,
  getProductByCategoryAdm,
  getProductCountByCategory,
  getProductCountBySearchName,
  getAllProducts,
  getAllProductCount,
  searchByName,
  getPhotoProduct,
  getProductId,
  postProduct,
  patchProduct,
  deleteProduct
} = require('../model/product.js')
const helper = require('../helper/response.js')
const qs = require('querystring')
const fs = require('fs')
require('dotenv').config()

module.exports = {
  getProduct: async (request, response) => {
    try {
      let { orderBy, page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getProductCount()
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink: nextLink && `http://localhost:${process.env.PORT}/product?${nextLink}`,
        prevLink: prevLink && `https://localhost:${process.env.PORT}/product?${prevLink}`
      }
      const result = await getProduct(orderBy, limit, offset)
      const newData = {
        result, pageInfo
      }
      client.setex(`getproduct:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData)) // set data redis
      return helper.response(
        response,
        200,
        'Success Get All Products',
        result,
        pageInfo
      )
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getAllProducts: async (request, response) => {
    try {
      let { orderBy, page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getAllProductCount()
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink: nextLink && `http://localhost:${process.env.PORT}/product/all/?${nextLink}`,
        prevLink: prevLink && `https://localhost:${process.env.PORT}/product/all/?${prevLink}`
      }
      const result = await getAllProducts(orderBy, limit, offset)
      const newData = {
        result, pageInfo
      }
      client.setex(`getproducts:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData)) // set data redis
      return helper.response(
        response,
        200,
        'Success Get All Products',
        result,
        pageInfo
      )
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getProductById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getProductById(id)
      if (result.length > 0) {
        client.setex(`getproductbyid:${id}`, 3600, JSON.stringify(result)) // set data redis

        return helper.response(
          response,
          200,
          `Success Get Product By Id ${id}`,
          result
        )
      } else {
        return helper.response(
          response,
          404,
          `Product By Id ${id} is Not Found`
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getProductByIdAdm: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getProductByIdAdm(id)
      if (result.length > 0) {
        client.setex(`getproductbyidadm:${id}`, 3600, JSON.stringify(result)) // set data redis
        return helper.response(
          response,
          200,
          `Success Get Product By Id ${id}`,
          result
        )
      } else {
        return helper.response(
          response,
          404,
          `Product By Id ${id} is Not Found`
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getProductByCategory: async (request, response) => {
    try {
      let { categoryId, orderBy, page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getProductCountByCategory(categoryId)
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink:
          nextLink && `http://localhost:${process.env.PORT}/product/category?${nextLink}`,
        prevLink:
          prevLink && `https://localhost:${process.env.PORT}/product/category?${prevLink}`
      }
      const result = await getProductByCategory(
        categoryId,
        orderBy,
        limit,
        offset
      )
      const newData = {
        result, pageInfo
      }
      if (result.length) {
        client.setex(`getproductbycategory:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData)) // set data redis
        return helper.response(
          response,
          200,
            `Success Get Product By Category Id ${categoryId}`,
            result,
            pageInfo
        )
      } else {
        return helper.response(response, 404, `Category Id ${categoryId} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request')
    }
  },
  getProductByCategoryAdm: async (request, response) => {
    try {
      let { categoryId, orderBy, page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getProductCountByCategory(categoryId)
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink:
          nextLink && `http://localhost:${process.env.PORT}/product/category/adm/?${nextLink}`,
        prevLink:
          prevLink && `https://localhost:${process.env.PORT}/product/category/adm/?${prevLink}`
      }
      const result = await getProductByCategoryAdm(
        categoryId,
        orderBy,
        limit,
        offset
      )
      const newData = {
        result, pageInfo
      }
      if (result.length) {
        client.setex(`getproductbycategoryadm:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData)) // set data redis
        return helper.response(
          response,
          200,
            `Success Get Productsss By Category Id ${categoryId}`,
            result,
            pageInfo
        )
      } else {
        return helper.response(response, 404, `Category Id ${categoryId} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request')
    }
  },
  searchByName: async (request, response) => {
    try {
      let { name, orderBy, page, limit } = request.query // categoryId
      // categoryId = parseInt(categoryId)
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getProductCountBySearchName(name) // categoryId,
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink:
          nextLink && `http://localhost:${process.env.PORT}/product/searchByName?${nextLink}`,
        prevLink:
          prevLink && `https://localhost:${process.env.PORT}/product/searchByName?${prevLink}`
      }
      const result = await searchByName(name, orderBy, limit, offset)
      const newData = {
        result, pageInfo
      }
      if (result.length) {
        client.setex(`getproductbysearch:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData)) // set data redis
        return helper.response(
          response,
          200,
            `Success Get Product By Searching ${name}`,
            result,
            pageInfo
        )
      } else {
        return helper.response(response, 404, 'Data Not Found')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postProduct: async (request, response) => {
    try {
      const {
        category_id, product_name, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods
      } = request.body
      // product_size = product_size.split(',')
      // delivery_methods = delivery_methods.split(',')
      // product_size.forEach(el => {
      //   product_size.push(el)
      // })
      // is_food
      const setData = {
        category_id: parseInt(category_id),
        product_name,
        photo: request.file === undefined ? '' : request.file.filename,
        product_price: parseInt(product_price),
        product_size,
        product_detail,
        start_delivery_hour,
        end_delivery_hour,
        stock_product: parseInt(stock_product),
        delivery_methods,
        product_created_at: new Date().toLocaleString(),
        product_status: 1

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
        category_id, product_name, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food
      } = request.body
      const checkId = await getProductId(id)
      if (checkId.length > 0) {
        const setData = {
          category_id,
          product_name,
          photo: request.file === undefined ? '' : request.file.filename,
          product_price,
          product_size,
          product_detail,
          start_delivery_hour,
          end_delivery_hour,
          stock_product,
          delivery_methods,
          is_food,
          product_updated_at: new Date().toLocaleString(),
          product_status: 1
        }
        const photo = await getPhotoProduct(id)
        fs.unlink(`./uploads/product_photo/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
        const result = await patchProduct(setData, id)
        return helper.response(
          response,
          200,
          `Success update product by id ${id}`,
          result
        )
      } else {
        return helper.response(response, 404, 'ID not found')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params
      const checkId = await getProductById(id)
      const setData = {
        photo: '',
        product_status: 0,
        product_deleted_at: new Date().toLocaleString()
      }
      if (checkId.length > 0) {
        const photo = await getPhotoProduct(id)
        fs.unlink(`./uploads/product_photo/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
        await deleteProduct(setData, id)
        return helper.response(response, 200, `Success Delete Product By Id ${id}`)
      } else {
        return helper.response(response, 404, `Product By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
