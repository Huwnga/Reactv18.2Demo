// import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Layout } from "../layouts/layout";
import { useEffect, useState } from "react";
import { getAll } from "../dataProviders/productApi";
import { ProductList } from "../compoments/list/product";

function HomePage() {
  const [products, setProducts] = useState([
    {
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
    },
  ]);

  const fetchProducts = async () => {
    try {
      const res = await getAll();

      if (res.status < 400) {
        setProducts(res.data.data);
      } else {
        console.log(res.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Layout>
        <Container fluid>
          <ProductList products={products} style={{ width: "100%" }} />
        </Container>
      </Layout>
    </>
  );
}

export default HomePage;
