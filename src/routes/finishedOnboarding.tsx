import { Navigate, useLocation } from "react-router-dom";

export const FinishOnboarding = ({ children }: { children: JSX.Element }) => {
    const onboard = localStorage.getItem('onboard');
    const location = useLocation()
    if (!onboard) {
        return <Navigate to='/onboarding' state={{ from: location }} replace />
    } else {
        return children
    }
}