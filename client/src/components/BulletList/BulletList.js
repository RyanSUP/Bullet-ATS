import { Bullet } from '../index'
const BulletList = ({filteredBullets, setActive, ...rest}) => {
  return (
    <ul className='list-disc w-9/12'>
      {filteredBullets.map((bullet)=>
        <li 
          key={bullet._id} 
          onClick={()=>setActive(bullet._id)} 
          className="m-1"
        >
          <Bullet bullet={bullet} {...rest} />
        </li>
      )}
    </ul>
  );
}
 
export default BulletList;