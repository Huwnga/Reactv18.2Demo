// import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { ProductList } from "../../compoments/list/product";
import { getAll } from "../../dataProviders/productApi";
import { Layout } from "../../layouts/layout";

function List() {
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

export default List;
