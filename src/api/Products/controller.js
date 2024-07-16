import {
  CreateProdunct,
  UpdateProduct,
  GetAllProducts,
  GetProductById,
  DeleteProductById,
} from "./service";

export async function createProdunct(req, res) {
  try {
    let data = await CreateProdunct(req.body);
    res.status(201).send({ message: `Product Added SucessFully : ${data}` });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function updateProduct(req, res) {
  try {
    let data = await UpdateProduct(req.params.id, req.body);
    res.status(201).send({ message: `Product Updated SucessFully : ${data}` });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function getAllProducts(req, res) {
  try {
    let data = await GetAllProducts();
    if (data.length > 0) {
      res
        .status(200)
        .send({ message: `Product Fetched SucessFully`, data: data });
    } else {
      res.status(404).send({ message: `Product Data Not Found`, data: [] });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function getProductById(req, res) {
  try {
    let data = await GetProductById(req.params.id);
    if (data) {
      res
        .status(200)
        .send({ message: `Product Fetched SucessFully`, data: data });
    } else {
      res.status(404).send({ message: `Product Data Not Found`, data: {} });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function deleteProductById(req, res) {
  try {
    await DeleteProductById(req.params.id);
    res.status(201).send({ message: `Product Deleted SucessFully` });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}
