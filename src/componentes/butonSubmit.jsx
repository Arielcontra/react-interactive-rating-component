import { Outlet, Link } from 'react-router-dom'

const ButonSubmit = () => (
    <div className="submit">
        <Link to = './ScoreCheck.jsx' className="btn--submit" id="submit">SUBMIT</Link>
        <Outlet />
    </div>
)

export default ButonSubmit