import DashboardLayout from "@/components/Layout/DashboardLayout";
import WalletSection from "@/components/wallet/WalletSection";

const UserWalletPage = () => {
    return <WalletSection />;
};

UserWalletPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default UserWalletPage;
