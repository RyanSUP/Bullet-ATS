import { BulletControls, EditBulletForm } from '../index'
const Bullet = ({bullet, activeBullet, ...rest}) => {

  return (
    <div className="h-fit flex justify-between p-3">
      {bullet._id === activeBullet
      ?
        <>
        {/* //* Edit bullet form needs to change the bullet text. */}
          <EditBulletForm bullet={bullet} />
          <BulletControls bullet={bullet} {...rest} />
        </>
      : <p>{bullet.text}</p>
      }
    </div>
  );
}
 
export default Bullet;
