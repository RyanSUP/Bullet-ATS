const BulletControls = ({
  bullet, 
  deleteBullet, 
  clipboardBullet, 
  updateBullet, 
  postBullet}) => {
  
  return (
    <div>
      <button className="mx-1" onClick={()=>deleteBullet(bullet)}>Delete</button>
      <button className="mx-1" onClick={()=>clipboardBullet(bullet.text)}>Clipboard</button>
      {/* // TODO update needs a form. This will be handled when the text is rendered in an input field. */}
      <button className="mx-1" onClick={()=>updateBullet(bullet)}>Update</button>
      <button className="mx-1" onClick={()=>postBullet({text: bullet.text})}>Duplicate</button>
    </div>
  );
}

export default BulletControls;