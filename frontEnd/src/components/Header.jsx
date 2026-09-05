import { useUser } from "../contexts/userContext";

function Header() {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All tours
        </a>
      </nav>

      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>

      <nav className="nav nav--user">
        {user ? (
          <>
            <a className="nav__el nav__el--logout">Log out</a>

            <a className="nav__el" href="/me">
              <img
                className="nav__user-img"
                src={`/img/users/${user?.photo}`}
                alt={`Photo of ${user?.name}`}
              />
              <span>{user?.name.split(" ")[0]}</span>
            </a>
          </>
        ) : (
          <>
            <a className="nav__el" href="/login">
              Log in
            </a>

            <a className="nav__el nav__el--cta" href="#">
              Sign up
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
