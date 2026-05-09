import { AuthGuard } from "@/modules/auth/ui/components/auth-guard"
import { OrganizationGard } from "@/modules/auth/ui/components/organization-guard";



const Layout = ({ children } : { children: React.ReactNode }) => {
    return (

        <AuthGuard>
            <OrganizationGard>
                {children}
            </OrganizationGard>
        </AuthGuard>
    );
};

export default Layout;