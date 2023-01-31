import Card from './Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((elem, index) => 
      <Card 
      name={elem.name} 
      species={elem.species} 
      gender={elem.gender}
      image={elem.image}
      onClose={() => alert('Emulamos que se cierra la carta')}
      key={index}
      />
      )}
   </div>;
}
