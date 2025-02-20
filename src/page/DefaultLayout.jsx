import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChildrenNav from "../components/ChildrenNav";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  const menuItems = [
    { label: "Beranda", path: "/" },
    {
      label: "Politik",
      submenu: [
        { label: "Pemilu", path: "/politik/pemilu" },
        { label: "Kebijakan Pemerintah", path: "/politik/kab-pemerintah" },
        { label: "Hubungan Internasional", path: "/politik/hubinter" },
      ],
    },
    {
      label: "Ekonomi",
      submenu: [
        { label: "Keuangan", path: "/ekonomi/keuangan" },
        { label: "Bisnis", path: "/ekonomi/bisnis" },
        { label: "Pasar Modal", path: "/ekonomi/pasar-modal" },
      ],
    },
    {
      label: "Olahraga",
      submenu: [
        { label: "Sepak Bola", path: "/olahraga/sepak-bola" },
        { label: "Basket", path: "/olahraga/basket" },
        { label: "Tenis", path: "/olahraga/tenis" },
      ],
    },
    { label: "Teknologi", submenu: ["Gadget", "Internet", "AI", "Sains"] },
    { label: "Hiburan", submenu: ["Film", "Musik", "Selebriti"] },
    { label: "Lainnya", submenu: ["Gaya Hidup"] },
  ];

  return (
    <>
      <Navbar />
      <ChildrenNav items={menuItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
