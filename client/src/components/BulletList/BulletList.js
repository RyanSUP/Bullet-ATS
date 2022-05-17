const BulletList = ({children}) => {
  return (
    <ul>
      {children?.map
        ? children.map((child, index) => <li key={index}>{child}</li>)
        : <li>{children}</li>
      }
    </ul>
  );
}
 
export default BulletList;