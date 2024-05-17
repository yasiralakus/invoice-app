import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function Home() {

    const {isDelete, setIsDelete, text, setText, widthValue, setWidthValue, openBar, setOpenBar} = useContext(DataContext);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return (
        <div className="all-invoices">

            <header>

                <div className="brand-box">

                    <h3>Faturalar</h3>
                    <p>Toplam 7 fatura var</p>

                </div>

                <div className="filter-and-new-invoices">
                    <select name="" id="">
                        <option value="">Durumuna göre filtrele</option>
                        <option value="">Ödendi</option>
                        <option value="">Bekliyor</option>
                    </select>
                    <button onClick={() => (setOpenBar(true))}>
                        <img src="./img/plus.png" alt="" />
                        <p>{widthValue < 770 ? 'Yeni' : 'Yeni Fatura'}</p>
                    </button>
                </div>

            </header>

            <main>
                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>RT3080</span></h1>

                    <p>19 Ağustos 2024</p>

                    <p>Jensen Huang</p>

                    <h3>1,800.90 ₺</h3>

                    <div>
                        <div className="green-bg green-color">
                            <p>Ödendi</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>XM9141</span></h1>

                    <p>20 Temmuz 2024</p>

                    <p>Alex Grim</p>

                    <h3>556.00 ₺</h3>

                    <div>
                        <div className="orange-bg orange-color">
                            <p>Bekliyor</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>RG0314</span></h1>

                    <p>11 Ocak 2024</p>

                    <p>John Morrison</p>

                    <h3>14,002.33 ₺</h3>

                    <div>
                        <div className="green-bg green-color">
                            <p>Ödendi</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>RT2080</span></h1>

                    <p>13 Ocak 2024</p>

                    <p>Alysa Werner</p>

                    <h3>102.04 ₺</h3>

                    <div>
                        <div className="orange-bg orange-color">
                            <p>Bekliyor</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>AA1449</span></h1>

                    <p>16 Şubat 2024</p>

                    <p>Mellisa Clarke</p>

                    <h3>4,032.33 ₺</h3>

                    <div>
                        <div className="orange-bg orange-color">
                            <p>Bekliyor</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>CCC040</span></h1>

                    <p>12 Haziran 2024</p>

                    <p>Melissa Vargas</p>

                    <h3>1,220.90 ₺</h3>

                    <div>
                        <div className="orange-bg orange-color">
                            <p>Bekliyor</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>

                <Link to={'/invoice'} className="invoice-item">

                    <h1>#<span>RVZ145</span></h1>

                    <p>14 Mayıs 2024</p>

                    <p>Kate Middleton</p>

                    <h3>980.40 ₺</h3>

                    <div>
                        <div className="green-bg green-color">
                            <p>Ödendi</p>
                        </div>
                        <button><img src="./img/right-button.png" alt="" /></button>
                    </div>

                </Link>
                
            </main>

        </div>
    )
}