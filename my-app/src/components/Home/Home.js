import React, { useEffect, useState } from 'react';
import NavBarss from '../Navbar/navbar';
import MovieList from '../Movie/Movie';
import { Container, Row } from 'react-bootstrap';

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      console.log('rs', response);
      const data = await response.json();
      console.log('dt', data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateReview = (data, id) => {
    let updatedmovies = movies.map((ele) => {
      if (ele.id === id) {
        ele.review = data.userReview;
        console.log(101010, data.userReview);
        return ele;
      } else return ele;
    });
    setMovies(updatedmovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBarss />
      <main>
        {
          <Container fluid className='main-container'>
            <Row className='flex-row'>
              <MovieList movies={movies} updateReview={updateReview} />
            </Row>
          </Container>
        }
      </main>
    </>
  );
}
export default Home;

/* /> updateCaption={updateCaptions} /> */
