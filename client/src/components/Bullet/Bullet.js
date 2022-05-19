import { BulletControls } from '../index'
const Bullet = ({bullet, activeBullet, ...rest}) => {

  return (
    <div className="h-fit flex justify-between p-3">
      <p>{bullet.text}</p>
      {bullet._id === activeBullet &&
        <BulletControls bullet={bullet} {...rest} />
      }
    </div>
  );
}
 
export default Bullet;
