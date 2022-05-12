const BulletList = ({bullets}) => {
  return (
    <ul>
      {bullets.map((bullet) => 
        <li key={bullet._id}>{bullet.text}</li>
      )}
    </ul>
  );
}
 
export default BulletList;