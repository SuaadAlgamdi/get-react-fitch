import { Card, Row, Col } from "react-bootstrap"

function ParsonStat(props) {
  return (
    <>
      {props.parson.map(parson => (
        <Row xs={1} md={2} className="g-4">
          {props.parson.map(parson => (
            <Col>
              <Card>
                <Card.Img variant="top" src={parson.avatar} />
                <Card.Body>
                  <Card.Title>{parson.first_name}</Card.Title>
                  <Card.Text>{parson.last_name}</Card.Text>
                  <Card.Text>{parson.id}</Card.Text>
                  <Card.Text>{parson.emailnp}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </>
  )
}

export default ParsonStat
