const BulletControls = ({
  bullet, 
  deleteBullet, 
  clipboardBullet, 
  updateBullet, 
  postBullet}) => {
  
  return (
    <>
      <button onClick={()=>deleteBullet(bullet)}>Delete</button>
      <button onClick={()=>clipboardBullet(bullet.text)}>Clipboard</button>
      {/* // TODO update needs a form. This will be handled when the text is rendered in an input field. */}
      <button onClick={()=>updateBullet(bullet)}>Update</button>
      <button onClick={()=>postBullet({text: bullet.text})}>Duplicate</button>
    </>
  );
}

export default BulletControls;