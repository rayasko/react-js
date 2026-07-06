import { Navbar, Container, Card, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>My React App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My App</h1>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is the first React Bootstrap card.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is the second React Bootstrap card.
                </Card.Text>
                <Button variant="success">Learn More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is the third React Bootstrap card.
                </Card.Text>
                <Button variant="warning">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;