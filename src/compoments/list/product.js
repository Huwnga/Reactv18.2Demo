import { Card, Col, Row } from "react-bootstrap";
import { formatedNullString } from "../../utils/formatter";

export function ProductRow({ data }) {
  return (
    <Col
      className="col my-2"
      style={{ minWidth: "200px" }}
    >
      <Card>
        <Card.Img variant="top" src={`/img/product/${data.image}`} />
        <Card.Body>
          <Card.Title className="mb-3">
            <div className="d-flex text-center">
              <span>{data.productName}</span>
              <span>-</span>
              <span>{formatedNullString(data.shortDescription)}</span>
            </div>
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
            <span> {data.status ? (<span className="text-success">Còn hàng</span>) : (<span className="text-danger">Hết hàng</span>)}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export function ProductTable({ products }) {
  const rows = [];

  products.forEach((product) => {
    rows.push(<ProductRow data={product} key={product.id} />);
  });

  return (
    <Row className="justify-content-around" style={{ width: "100%" }}>
      {rows}
    </Row>
  );
}