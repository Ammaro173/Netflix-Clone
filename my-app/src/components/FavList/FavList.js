import { CardGroup, Card } from 'react-bootstrap';
import NavBarss from '../Navbar/navbar';
// import { useEffect, useState } from 'react';

function FavList(props) {
  console.log(props);
  console.log(props.favouriteList);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
  //     console.log('rs', response);
  //     const data = await response.json();
  //     console.log('dt', data);
  //     setMovies(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <NavBarss />
      <CardGroup style={{ display: 'flex' }}>
        {(props.favouriteList ?? []).map((ele) => {
          return (
            <Card key={ele.id}>
              <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>{ele.review}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}
export default FavList;
