import db from "../../database/index";

let ProductModel = db.product;

export async function CreateProdunct(body){
    try{
    let data = await ProductModel.create(body)
    return data
    }catch(error){
        return error
    }
}
export async function UpdateProduct(id, body){
    try{
     const { name,description,price} = body
     let data = await ProductModel.update({id:id},{name:name,description:description,price:price })
     return data;
    }catch(error){
        return error
    }
}

export async function GetAllProducts(){
     let data = await ProductModel.findAll()
     return data;
}

export async function GetProductById(Id){
     let data = await ProductModel.findById({id:Id})
     return data;
}

export async function DeleteProductById(Id){
   let data = await ProductModel.destroy({id:Id})
     return data;
}


