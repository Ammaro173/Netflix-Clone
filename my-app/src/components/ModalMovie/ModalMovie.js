import { Form, Modal, Button } from 'react-bootstrap';
// import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

function ModalMovie(props) {
  console.log('check me', props);
  //   function onhideHandle() {
  //     props.handleClose();
  //   }
  //   useEffect(() => {
  //     props.handleClose();
  //   }, []);
  const commentRef = useRef();
  function handleCaption(e) {
    e.preventDefault();
    const userCaption = commentRef.current.value;
    const newData = { ...props.now, userCaption };
    props.updateCaption(newData, props.now.id);
    console.log(1111111111, props.now);
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleClose();
        }}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.now.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.now.overview}</Modal.Body>
        <Modal.Footer>
          <Form.Group>
            <Form.Label>Review:</Form.Label>
            <Form.Control ref={commentRef} type='textarea' placeholder={props.now.caption ? props.now.caption : 'Add Your Review Here'} />
          </Form.Group>
          <Button className='addBtn' variant='primary' type='submit' onClick={handleCaption}>
            Add a Review
          </Button>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}
export default ModalMovie;
// {`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
//
//
//
//

/* <div>{props && <div></div>}</div> */
// {props.now.title}
// {props.now.overview}
