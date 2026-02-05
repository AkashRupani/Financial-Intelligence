import { NavLink } from "react-router-dom";

const navItems = [
{ label: "Dashboard", path: "/" },
{ label: "Transactions", path: "/transactions" },
{ label: "Analytics", path: "/analytics" },
{ label: "Goals", path: "/goals" },
{ label: "Subscriptions", path: "/subscriptions" },
{ label: "Alerts", path: "/alerts" }
];

const Sidebar = () => {
return (
    <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 text-xl font-bold">
            💰 FinSight
        </div>

        <nav className="px-4">
            {navItems.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                `block px-4 py-2 rounded-md mb-1 text-sm font-medium
                ${isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"}`
                }
            >
                {item.label}
            </NavLink>
            ))}
        </nav>
    </aside>
);
};

export default Sidebar;
