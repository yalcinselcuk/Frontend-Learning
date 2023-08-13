export default function ListandKey() {
    const people = [{
        id: 0, // Used in JSX as a key
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1, // Used in JSX as a key
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2, // Used in JSX as a key
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }];
    const listItems = people.map(person =>
      <li key={person.id}>
        <p>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
