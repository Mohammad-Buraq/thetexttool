import { useState } from 'react';
import { BarChart2, LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { name: 'Overview', icon: <LayoutDashboard size={18} />, key: 'overview' },
    { name: 'Tools', icon: <FileText size={18} />, key: 'tools' },
    { name: 'Feedback', icon: <BarChart2 size={18} />, key: 'feedback' },
    { name: 'Settings', icon: <Settings size={18} />, key: 'settings' },
  ];

  const correctPassword = 'Buraq123'; // Change this to your secret

  if (!authenticated) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <div className="bg-gray-900 p-6 rounded shadow-md w-full max-w-sm text-center">
          <h2 className="text-xl mb-4 font-bold">🔒 Admin Access</h2>
          <input
            type="password"
            className="w-full p-2 rounded text-black mb-3"
            placeholder="Enter Admin Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputPassword === correctPassword) {
                setAuthenticated(true);
              }
            }}
          />
          <button
            onClick={() => inputPassword === correctPassword && setAuthenticated(true)}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          {inputPassword && inputPassword !== correctPassword && (
            <p className="text-red-500 mt-2 text-sm">Incorrect password</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-8">🛠 Admin Panel</h2>
        <ul className="space-y-4">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 p-2 rounded-md w-full text-left hover:bg-gray-100 transition ${
                  activeTab === tab.key ? 'bg-gray-200 font-semibold' : ''
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <button
            onClick={() => {
              setAuthenticated(false);
              setInputPassword('');
            }}
            className="text-red-500 flex items-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
          <p className="text-gray-500">Manage your site’s {activeTab}</p>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Total Visits</h3>
              <p className="text-3xl font-bold text-blue-600">12,345</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Most Used Tool</h3>
              <p className="text-xl">Word Counter</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Feedback Count</h3>
              <p className="text-3xl font-bold text-green-600">128</p>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Tool Management</h3>
            <p className="text-gray-500">(Feature coming soon)</p>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">User Feedback</h3>
            <p className="text-gray-500">(Feature coming soon)</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Site Settings</h3>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>Domain: <code>https://thetexttool.com</code></li>
              <li>SSL: <span className="text-green-600 font-semibold">Active</span></li>
              <li>robots.txt & sitemap.xml configured</li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
