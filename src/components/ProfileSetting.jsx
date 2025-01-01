import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProfileSetting = () => {
  const { user } = useAuth();
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className=" min-h-screen p-6 flex justify-center">
        <div className="bg-white border rounded-lg max-w-4xl w-full">
          {/* Header */}
          <div
            className="relative h-40 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg"></div>
            <div className="absolute left-6 bottom-6 flex items-center">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
                src={user?.photoURL}
                alt="Profile"
              />
              <div className="ml-4">
                <h2 className="text-white text-xl font-bold">
                  {user?.displayName}
                </h2>
                <p className="text-gray-200">@ Syftet Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-4 p-6 bg-white rounded-md">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={user?.displayName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={user?.email}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={user?.photoURL}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
