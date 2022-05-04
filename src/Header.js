function Header({ loggedIn, handleLoggedInClick }) {
  return (
    <>
      <h1>Header to the page.</h1>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </>
  );
}
// TODO: define loggedIn
export default Header;
