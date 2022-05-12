const BulletList = ({bullets}) => {
  return (
    <ul>
      {bullets.map((bullet) => 
        <li>{bullet.text}</li>
      )}
    </ul>
  );
}
 
export default BulletList;