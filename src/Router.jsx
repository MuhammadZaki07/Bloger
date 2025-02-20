import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./page/DefaultLayout";
import Beranda from "./page/Beranda";
import Pemilu from "./page/politik/Pemilu";
import HubInter from "./page/politik/HubInter";
import KebPemerintah from "./page/politik/KebPemerintah";
import Bisnis from "./page/Ekonomi/Bisnis";
import Keuangan from "./page/Ekonomi/Keuangan";
import PasarModal from "./page/Ekonomi/PasarModal";
import SepakBola from "./page/Olahraga/SepakBola";
import Basket from "./page/Olahraga/Basket";
import Tenis from "./page/Olahraga/Tenis";

export const route = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children: [ 
            {
                path:"/",
                element:<Beranda/>
            },
            {
                path:"/politik/pemilu",
                element:<Pemilu/>
            },
            {
                path:"/politik/HubInter",
                element:<HubInter/>
            },
            {
                path:"/politik/kab-pemerintah",
                element:<KebPemerintah/>
            },
            {
                path:"/ekonomi/bisnis",
                element:<Bisnis/>
            },
            {
                path:"/ekonomi/keuangan",
                element:<Keuangan/>
            },
            {
                path:"/ekonomi/pasar-modal",
                element:<PasarModal/>
            },
            {
                path:"/olahraga/sepak-bola",
                element:<SepakBola/>
            },
            {
                path:"/olahraga/basket",
                element:<Basket/>
            },
            {
                path:"/olahraga/tenis",
                element:<Tenis/>
            }
        ]
    }
]);