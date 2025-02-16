import { useAuth } from "@/app/components/AuthContext";

export default function SideNav() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) return null;

    return (
        <nav className="w-64 bg-gray-900 text-white p-4 min-h-screen">
            <ul className="space-y-4">
                <li><a href="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</a></li>
                <li><a href="/settings" className="block p-2 hover:bg-gray-700">Settings</a></li>
                <li><a href="/history" className="block p-2 hover:bg-gray-700">Trade History</a></li>
            </ul>
        </nav>
    );
}
