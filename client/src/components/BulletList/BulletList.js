import {NewBulletForm, Bullet} from '../index'
const BulletList = ({filteredBullets, postBullet}) => {
  return (
    <ul>
      <li>
        <NewBulletForm postBullet={postBullet} />
      </li>
      {filteredBullets.map((bullet)=> 
        <li key={bullet._id}>
          <Bullet bullet={bullet} />
        </li>
      )}
    </ul>
  );
}
 
export default BulletList;