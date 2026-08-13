import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="text-sm text-slate-500">
          Please sign in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white shadow-lg">
            {user == null ? "U" : user.email.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>

          <p className="mt-1 text-sm text-slate-500">{user.email}</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Signed in
          </div>

          <button
            type="button"
            onClick={() => setUser(null)}
            className="mt-8 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
