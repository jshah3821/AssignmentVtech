import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GridExample() {
  return (
    <Card className="text-center" style={{ color: "white" }} bg="dark">
      <Card.Header>Assignment</Card.Header>
      <Card.Body>
        <Card.Title>vtechelite</Card.Title>
        <Card.Text>Copyright ⓒ 2022</Card.Text>
        <Button variant="primary">Links</Button>
      </Card.Body>
      <Card.Footer className="text-muted">1 days ago</Card.Footer>
    </Card>
  );
}

export default GridExample;
