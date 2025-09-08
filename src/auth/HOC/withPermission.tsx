import React from "react";
import useProfile from "../hooks/useProfile"; // adjust import as per your project
import LoginPage from "../../pages/LogIn";

function withPermission<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: string[]
) {
  return function WithPermissionWrapper(props: P) {
    const { profile, loading } = useProfile();
    if (loading) {
      return null;
    }
    // if profile is still loading, you could return a loader
    if (!profile) return <LoginPage onLogin={() => {}} />;

    const userRoles = profile?.roles ?? [];

    const hasPermission = allowedRoles.some((role) =>
      userRoles?.includes(role)
    );
    if (!hasPermission) {
      return <div>🚫 You do not have permission to view this page</div>;
    }

    return <Component {...props} />;
  };
}

export default withPermission;
