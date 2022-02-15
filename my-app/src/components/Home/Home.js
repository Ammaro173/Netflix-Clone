import React, { useEffect, useState } from 'react';
import NavBarss from '../Navbar/navbar';
import MovieList from '../Movie/Movie';
import { Container, Row } from 'react-bootstrap';

function Home() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('https://movies0000.herokuapp.com/trending');
      console.log('rs', response);
      const data = await response.json();
      console.log('dt', data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
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
              <MovieList movies={movies} />
            </Row>
          </Container>
        }
      </main>
    </>
  );
}
export default Home;

/* /> updateCaption={updateCaptions} /> */
