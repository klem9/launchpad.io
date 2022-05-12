import { Button, Modal, Form} from "react-bootstrap";
import { useState, useEffect } from "react";

function PortfolioRemoval({handleRemove, handleChange, handleSubmit}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <> 
        <Button onClick={handleShow} size="sm" variant="secondary" className="portfolio_change"> Edit Position</Button>
        <Button onClick={handleRemove} size="sm" variant="secondary" className="portfolio_change"> Delete Position</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit your portfolio </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onChange={handleChange} onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>New amount of tokens</Form.Label>
                <Form.Control placeholder="In tokens (BTC, DAI, etc)" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default PortfolioRemoval