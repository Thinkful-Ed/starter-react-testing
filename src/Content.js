// Content.js
function Content({ loggedIn, text }) {
  return loggedIn && <p>{text}</p>;
}
// TODO: define loggedIn
export default Content;
