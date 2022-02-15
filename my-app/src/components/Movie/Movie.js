import { useState } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';

function MovieList(props) {
  console.log('ms', props);
  const [show, setShow] = useState(false);
  const [now, setNow] = useState(props);
  return (
    <>
      <CardGroup style={{ display: 'flex', justifyContent: 'space-around', gap: 30, bordercolor: 'black' }}>
        {props.movies &&
          props.movies.map((movie) => {
            return (
              <div>
                <Card>
                  <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.release_date}</Card.Text>
                    <Button
                      variant='primary'
                      onClick={() => {
                        setShow(true);
                        setNow(movie);
                      }}
                    >
                      show more
                    </Button>
                    <Button variant='dark'>add to Favourite</Button>
                  </Card.Body>
                  {/* <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer> */}
                </Card>
              </div>
            );
          })}
      </CardGroup>
      <ModalMovie
        now={now}
        show={show}
        handleClose={() => {
          setShow(false);
        }}
      />
    </>
  );
}
export default MovieList;

// props.movies && props.movies
// (props.movies ?? [])
