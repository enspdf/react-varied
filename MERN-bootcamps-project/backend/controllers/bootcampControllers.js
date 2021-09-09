import Bootcamp from "../models/Bootcamp.js"
import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/errorResponse.js'

const getAllBootcamps = asyncHandler(async (req, res, next) => {
    let query
    let uiValues = {
        filtering: {},
        sorting: {},
    }
    const reqQuery = { ...req.query }
    const removeFields = ['sort']

    removeFields.forEach(param => delete reqQuery[param])

    const filterKeys = Object.keys(reqQuery)
    const filterValues = Object.values(reqQuery)

    filterKeys.forEach((val, index) => uiValues.filtering[val] = filterValues[index])

    let queryStr = JSON.stringify(reqQuery)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

    query = Bootcamp.find(JSON.parse(queryStr))

    if (req.query.sort) {
        const sortByArray = req.query.sort.split(',')
        sortByArray.forEach(sort => {
            let order = sort[0] === '-' ? 'descending' : 'ascending'
            uiValues.sorting[sort.replace('-', '')] = order
        })
        const sortByStr = sortByArray.join(' ')

        query = query.sort(sortByStr)
    } else {
        query = query.sort('-price')
    }

    const bootcamps = await query

    const maxPrice = await Bootcamp.find().sort({ price: -1 }).limit(1).select('-_id price')
    const minPrice = await Bootcamp.find().sort({ price: 1 }).limit(1).select('-_id price')

    uiValues.maxPrice = maxPrice[0].price
    uiValues.minPrice = minPrice[0].price

    res.status(200).json({
        success: true,
        data: bootcamps,
        uiValues
    })
})

const createNewBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(200).json({
        success: true,
        data: bootcamp
    })
})

const updateBootcampById = asyncHandler(async (req, res, next) => {
    let bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp with id ${rea.params.id} was not found`), 404)
    }

    bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    res.status(200).json({
        success: true,
        data: bootcamp
    })
})

const deleteBootcampById = asyncHandler(async (req, res, next) => {
    let bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp with id ${rea.params.id} was not found`), 404)
    }

    await bootcamp.remove()

    res.status(200).json({
        success: true,
        data: {}
    })
})

export {
    getAllBootcamps,
    createNewBootcamp,
    updateBootcampById,
    deleteBootcampById
}