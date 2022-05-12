import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import { useState } from 'react';

function PortfolioForm({handleSubmit, handleChange}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <>
        <Button variant="secondary" onClick={handleShow}>
            Add to portfolio 
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add to your portfolio </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onChange={handleChange} onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Amount of tokens</Form.Label>
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

export default PortfolioForm;