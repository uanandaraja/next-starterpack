import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Protected route for the dashboard",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
