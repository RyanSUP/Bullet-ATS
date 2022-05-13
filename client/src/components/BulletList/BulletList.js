const BulletList = ({filteredBullets}) => {
  return (
    <ul>
      {filteredBullets.map((bullet) => 
        <li key={bullet._id}>{bullet.text}</li>
      )}
    </ul>
  );
}
 
export default BulletList;