import { Bullet } from '../index'
const BulletList = ({filteredBullets, setActive, ...rest}) => {
  return (
    <ul>
      {filteredBullets.map((bullet)=>
        <li key={bullet._id} onClick={()=>setActive(bullet._id)} >
          <Bullet bullet={bullet} {...rest} />
        </li>
      )}
    </ul>
  );
}
 
export default BulletList;