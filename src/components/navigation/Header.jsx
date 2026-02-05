const Header = () => {
    return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
        
        {/* Left: Page context */}
        <div className="text-lg font-semibold text-gray-800">
        Welcome back 👋
        </div>
        {/* Right: User actions */}
        <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-800">
            🔔
        </button>

        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
            A
            </div>
            <span className="text-sm text-gray-700">Akash</span>
        </div>
        </div>
    </header>
    );
};

export default Header;
