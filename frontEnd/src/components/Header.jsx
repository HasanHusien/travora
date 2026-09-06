import { useUser } from "../features/auth/useUser";
import { useTours } from "../react_query/useTours";

function Header() {
  const { data: user, error } = useUser();
  const { isLoading: isLoading3 } = useTours();

  // console.log(user);

  if ( isLoading3) return null;

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
            <button className="nav__el nav__el--logout">Log out</button>

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
