import { getApi } from "@/dataProvider/baseApi";

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

function getOne(params) {
  return getApi(productApiPath.mainPath, params);
}

export {
  getAllCourse
}
