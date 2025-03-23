import { Outlet } from "react-router"

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div>
            Dashboard Layout
            <Outlet />
        </div>
    )
}

export default Dashboard
