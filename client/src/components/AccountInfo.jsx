import React, { useEffect, useState } from "react";
import { getWithToken, updateWithToken } from "../api/fetch";
import { endPoint } from "../utli/url";

function AccountInfo() {
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const getUser = async () => {
    try {
      const user = await getWithToken(endPoint.profile);
      if (!user.status) {
        alert("Error loading profile");
        return;
      }

      setProfile(user.content);
      setName(user.content.name);
      setRole(user.content.role);
    } catch (error) {
      console.log(error.message);
    }
  };

  const update = async () => {
    if (!name || !role) {
      alert("Please fill all fields");
      return;
    }

    const data = { name, role };
    try {
      const updated = await updateWithToken(endPoint.updateProfile, data);
      if (!updated.status) {
        alert("Error updating profile");
        return;
      }

      alert("Profile updated successfully");
      setProfile(updated.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Account Information</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div>
          <img
            src={profile.profile_pic}
            alt="Profile"
            className="w-24 h-24 rounded-full border p-1 bg-gray-100"
          />
          <h3 className="mt-2 font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.role}</p>
          <p className="text-sm text-gray-600">{profile.email}</p>
        </div>

        <div className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button
            onClick={update}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
