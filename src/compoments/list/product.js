import { Card, Col, Image, Row } from "react-bootstrap";
import { formatedNullString } from "../../utils/formatter";
import { Link } from "react-router-dom";
import { LinkText } from "../link";

export function ProductInfo({ data }) {
  return (
    <Col className="col my-2" style={{ maxWidth: "18rem", minWidth: "200px" }}>
      <Card>
        <Link to={`/products/${data.id}`}>
          <Card.Img variant="top" src={`/img/product/${data.image}`} />
        </Link>
        <Card.Body>
          <Card.Title className="mb-3">
            <LinkText href={`/products/${data.id}`}>
              <div className="d-flex text-center">
                <span>{data.productName}</span>
              </div>
            </LinkText>
          </Card.Title>
          <Card.Text>
            <span className="fw-semibold">Product Code:</span>
            <span> {formatedNullString(data.productCode)}</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-semibold">Price:</span>
            <span> {data.productPrice} VND</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-semibold">Discount:</span>
            <span> {data.percentDiscount}%</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-semibold">Description:</span>
            <span> {formatedNullString(data.description)}</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-semibold">Stock:</span>
            <span> {data.stock}</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-semibold">Status:</span>
            <span>
              {" "}
              {data.status ? (
                <span className="text-success">Còn hàng</span>
              ) : (
                <span className="text-danger">Hết hàng</span>
              )}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export function ProductDetailInfo({ product }) {
  return (
    <Row>
      <Col md={5} className="d-flex align-items-center justify-content-center">
        <Image src={`/img/product/${product.image}`} fluid className="w-100" />
      </Col>
      <Col >
        <dt>Product Name:</dt>
        <dd> {formatedNullString(product.productName)}</dd>

        <dt>Product Code:</dt>
        <dd> {formatedNullString(product.productCode)}</dd>

        <dt>Price:</dt>
        <dd> {product.productPrice} VND</dd>

        <dt>Discount:</dt>
        <dd> {product.percentDiscount}%</dd>

        <dt>Short Description:</dt>
        <dd> {formatedNullString(product.shortDescription)}</dd>

        <dt>Description:</dt>
        <dd> {formatedNullString(product.description)}</dd>

        <dt>Stock:</dt>
        <dd> {product.stock}</dd>

        <dt>Status:</dt>
        <dd>
          {" "}
          {product.status ? (
            <span className="text-success">Còn hàng</span>
          ) : (
            <span className="text-danger">Hết hàng</span>
          )}
        </dd>
      </Col>
    </Row>
  );
}

export function ProductList({ products }) {
  const rows = [];

  products.forEach((product) => {
    rows.push(<ProductInfo data={product} key={product.id} />);
  });

  return (
    <Row className="justify-content-around" style={{ width: "100%" }}>
      {rows}
    </Row>
  );
}
