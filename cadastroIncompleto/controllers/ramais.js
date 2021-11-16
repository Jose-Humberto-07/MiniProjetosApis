const RamaisRepository = require('../database/models/ramaisModel')

function findAll(req, res) {
    const ramais = RamaisRepository.findAll();
    res.json(ramais);
}



module.exports = findAll;
