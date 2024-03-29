import "./sidebar.css"
import { Home, Timeline, TrendingUp, 
    LocalShipping, Build, Person, Storefront, 
    AttachMoney, Assessment, Email, DynamicFeed,
    ChatBubble, Work, Report} from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link" >
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <LocalShipping className="sidebarIcon"/>
                            Logstics
                        </li>
                        <li className="sidebarListItem">
                            <Build className="sidebarIcon"/>
                            Tools
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <Person />
                                Users
                            </li>
                        </Link>
                        
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront />
                            Products
                        </li>
                        </Link>

                        <Link to="/transactions" className="link">
                        <li className="sidebarListItem">
                            <AttachMoney />
                            Transactions
                        </li>
                        </Link>

                        <Link to="/reports" className="link">
                        <li className="sidebarListItem">
                            <Assessment />
                            Reports
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Email />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubble />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Work />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
