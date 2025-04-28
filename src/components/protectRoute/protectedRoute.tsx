import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { isTokenValid, jwtDecoded } from "../../utils/jwtToken";

interface ProtectedRoute {
    children: ReactNode,
    requiredRoles: string[],
    redirectTo?: string,
}

export const ProtectedRoute = ({
    children,
    requiredRoles = [],
    redirectTo = "/login",
}: ProtectedRoute) => {
    const location = useLocation();
    try {
        const isAuthenticated = isTokenValid();
        const userRole = jwtDecoded();

        if (!isAuthenticated) {
            return <Navigate to={redirectTo} state={{ from: location }} replace />;
        }

        if (requiredRoles.length > 0 && !requiredRoles.includes(userRole.token.rule)) {
            return <Navigate to="/unauthorized" replace />;
        }
        return children;
    } catch (error) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

};