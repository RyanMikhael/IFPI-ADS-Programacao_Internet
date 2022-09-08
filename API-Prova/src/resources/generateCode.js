async function generateCode(){

    const min = Math.ceil(9999)
    const max = Math.floor(100000)
    const code = Math.floor(Math.random() * (max - min) + min )

    return code

}

module.exports = generateCode