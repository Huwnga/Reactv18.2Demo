// import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { getOne } from "../../dataProviders/productApi";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../../layouts/layout";
import { Button } from "react-bootstrap";
import { ProductDetailInfo } from "../../compoments/list/product";

function Detail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    productCode: "",
    productName: "Áo thun nam",
    image: "ao-thun-nam.jpg",
    shortDescription: "Áo thun nam đẹp",
    description: "Đây là một chiếc áo thun nam đẹp và thoải mái",
    productPrice: 250000,
    stock: 100,
    percentDiscount: 10,
    status: 1,
  });

  const fetchProduct = async (productId) => {
    try {
      const res = await getOne(productId);

      if (res.status < 400) {
        setProduct(res.data.data);
      } else {
        console.log(res.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  return (
    <>
      <Layout>
        <Container className="py-3">
          <div className="d-flex flex-row m-2" style={{ width: "100%" }}>
            <h4 className="fs-3 text-capitalize">
              <span>{product.productName}</span>
              <span>-</span>
              <span>{product.shortDescription}</span>
            </h4>
            <div className="d-flex ms-auto align-items-center justify-content-center">
              <Link to={"/products"}>
                <Button variant="light">
                  <i className="bi bi-arrow-left-short" /> <span>Back</span>
                </Button>
              </Link>
            </div>
          </div>
          <ProductDetailInfo product={product} />
        </Container>
      </Layout>
    </>
  );
}

export default Detail;
