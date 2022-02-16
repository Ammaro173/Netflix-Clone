import { useState } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';

function MovieList(props) {
  console.log('ms', props);
  console.log('mss', props.movies);
  const [show, setShow] = useState(false);
  const [now, setNow] = useState([]);
  // const [movie, setMovie] = useState();

  const addToFav = async (ele) => {
    console.log('chk', ele);
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/addmovie`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          overview: ele.overview,
          poster_path: ele.poster_path,
          release_date: ele.release_date,
          title: ele.title,
        }),
      });
      const data = await res.json();
      console.log('baraa', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // async function addToFav(ele) {

  return (
    <>
      <CardGroup style={{ display: 'flex', justifyContent: 'space-around', gap: 30, bordercolor: 'black' }}>
        {(props.movies ?? []).map((movie) => {
          return (
            <div key={movie.id}>
              <Card>
                <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.release_date}
                    <br />
                    review:
                    {movie.review}
                  </Card.Text>
                  <Button
                    variant='primary'
                    onClick={() => {
                      setShow(true);
                      setNow(movie);
                    }}
                  >
                    show more
                  </Button>
                  <Button
                    variant='dark'
                    onClick={() => {
                      // setMovie(movie);
                      // console.log('baraaaa', movie);
                      addToFav(movie);
                    }}
                  >
                    add to Favourite
                  </Button>
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
        updateReview={props.updateReview}
      />
    </>
  );
}
export default MovieList;

// props.movies && props.movies
// (props.movies ?? [])
