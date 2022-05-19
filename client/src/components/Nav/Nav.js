const Nav = ({ handleLogout }) => {
  
  return (
    <div className="bg-slate-600 h-10 flex justify-end">
      <button 
        onClick={handleLogout}
        className="hover:cursor-pointer h-full mr-10 text-slate-200"
      >
        LOGOUT
      </button>
    </div>
  );
}
 
export default Nav;