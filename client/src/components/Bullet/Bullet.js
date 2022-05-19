import { BulletControls } from '../index'
const Bullet = ({bullet, ...rest}) => {

  return (
    <div className="h-fit flex justify-between p-3">
      <p>{bullet.text}</p>
      <BulletControls bullet={bullet} {...rest} />
    </div>
  );
}
 
export default Bullet;
