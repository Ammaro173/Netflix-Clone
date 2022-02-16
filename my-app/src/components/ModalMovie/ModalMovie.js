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
  const reviewRef = useRef([]);
  function handleReview(e) {
    e.preventDefault();
    console.log('this is e', e);
    const userReview = reviewRef.current.value;
    const newData = { ...props.now, userReview };
    console.log('chk newData', newData);
    props.updateReview(newData, props.now.id);
    console.log('cap', props.now);
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
            <Form.Control ref={reviewRef} type='textarea' placeholder={props.now.review ? props.now.review : 'Add Your Review Here'} />
          </Form.Group>
          <Button className='addBtn' variant='primary' type='submit' onClick={handleReview}>
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
