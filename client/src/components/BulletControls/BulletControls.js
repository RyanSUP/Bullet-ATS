const BulletControls = ({
  bullet, 
  deleteBullet, 
  clipboardBullet, 
  updateBullet, 
  postBullet}) => {

  return (
    <div className="text-xl">
      <button className="mx-1" onClick={()=>deleteBullet(bullet)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="mx-1" onClick={()=>clipboardBullet(bullet.text)}>
        <i className="fa-solid fa-clipboard"></i>
      </button>
      <button className="mx-1" onClick={()=>updateBullet(bullet)}>
        <i className="fa-solid fa-floppy-disk"></i>
      </button>
      <button className="mx-1" onClick={()=>postBullet({text: bullet.text})}>
        <i className="fa-solid fa-copy"></i>
      </button>
    </div>
  );
}

export default BulletControls;