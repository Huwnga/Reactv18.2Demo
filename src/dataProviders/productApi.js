import {getApi} from "./baseApi";

const path = "product";

const productApiPath = {
  mainPath: path + "/",
  createPath: path + "/create",
  updatePath: path + "/update",
  deletePath: path + "delete"
}

function getAll(params) {
  return getApi(productApiPath.mainPath, params);
}

function getOne(productId) {
  return getApi(`${productApiPath.mainPath}/productId=${productId}`);
}

export {
  getAll,
  getOne
}
