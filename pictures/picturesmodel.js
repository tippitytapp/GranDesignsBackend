const db = require('../data/dbConfig.js')

const findById = id => {
    return db('pictures')
            .where({id})
            .first()
}

const getAll = () => {
    return db('pictures')
}

const add = pics => {
    return db('pictures')
            .insert(pics, "id")
            .then(id => {
                return db('pictures')
            })
}

const update = (id, pics) => {
    return db('pictures')
            .where({id})
            .first()
            .update(pics, "id")
            .then(count => {
                return findById(id)
            })
}

module.exports={
    findById,
    getAll,
    add,
    update
}