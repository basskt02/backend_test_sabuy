import Test from './../models/test.model'

const updateMinValue = async(req,res) => {
    try {
        for(let i = 0 ; i < 5 ; i++) {
           if(i >= 3) {
            console.log("reject")
        }else{
            const findAllValue = await Test.findAll()
            JSON.parse(JSON.stringify(findAllValue)).map(async({ITEMCODE}) => {
                 await Test.update({MIN : i} ,{where : {ITEMCODE : ITEMCODE }})
            })
           console.log("success")
        }
        }

        res.send({message : "edit success"})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


export {updateMinValue}