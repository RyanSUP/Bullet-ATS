import { BulletControls } from '../index'
const Bullet = ({bullet, ...rest}) => {
  return (
    <>
      <p>{bullet.text}</p>
      <BulletControls bullet={bullet} {...rest} />
    </>
  );
}
 
export default Bullet;
