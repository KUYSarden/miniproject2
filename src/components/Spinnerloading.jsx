import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
  return (
    <>
      {/* <Button variant="secondary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Fetching Data...</span>
      </Button>{' '} */}
      <Button variant="secondary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Fetching Data...
      </Button>
    </>
  );
}

export default ButtonExample;