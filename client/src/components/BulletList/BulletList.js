const BulletList = ({children}) => {
  return (
    <ul>
      {children.map((child) => <li>{child}</li>)}
    </ul>
  );
}
 
export default BulletList;