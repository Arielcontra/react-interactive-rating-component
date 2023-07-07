import { Outlet, Link} from "react-router-dom";

const Template = () => (
    <>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ScoreCheck.jsx">ScoreCheck</Link>
        <Link to="404">404</Link>
      </nav>
    </header>
    <section>
     <Outlet />
     </section>
    </>
)

export default Template