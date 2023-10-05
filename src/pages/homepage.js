// import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Layout } from "../layouts/layout";
import { useState } from "react";
import { ProductTable } from "../compoments/list/product";

function HomePage({
  theme = "dark",
  logoSrc = "/img/logo.svg",
  brandName = "Manage Product",
}) {
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
    {
      id: 2,
      productCode: "",
      productName: "Quần jean nữ",
      image: "quan-jean-nu.jpg",
      shortDescription: "Quần jean nữ cao cấp",
      description:
        "Đây là một chiếc quần jean nữ cao cấp với chất liệu và kiểu dáng đẹp",
      productPrice: 500000,
      stock: 50,
      percentDiscount: 20,
      status: 1,
    },
    {
      id: 3,
      productCode: "",
      productName: "Giày thể thao",
      image: "giay-the-thao.jpg",
      shortDescription: "Giày thể thao nam",
      description:
        "Đây là một đôi giày thể thao nam với thiết kế đẹp và chất liệu tốt",
      productPrice: 800000,
      stock: 0,
      percentDiscount: 0,
      status: 0,
    },
  ]);

  return (
    <>
      <Layout>
        <Container fluid>
          <ProductTable products={products} style={{ width: "100%" }} />
        </Container>
      </Layout>
    </>
  );
}

export default HomePage;
