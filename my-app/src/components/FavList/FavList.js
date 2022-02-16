import { CardGroup, Card } from 'react-bootstrap';
import NavBarss from '../Navbar/navbar';

function FavList(props) {
  console.log(props);
  console.log(props.favouriteList);
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
