const DashboardLayout = ({ title, children }) => {
    return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="w-full px-4 md:px-8 xl:px-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">{title}</h1>
        {children}
        </div>
    </div>
    );
};

export default DashboardLayout;
