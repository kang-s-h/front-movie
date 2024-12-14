import "./header.css";

function Header({ setSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  const reloadPage = () => {
    location.reload();
  };

  return (
    <header className="header">
      <img className="header__logo" src="/src/assets/logo.png" onClick={reloadPage} />
      <input className="header__search" placeholder="검색" onKeyDown={handleKeyDown} />
    </header>
  );
}

export default Header;
