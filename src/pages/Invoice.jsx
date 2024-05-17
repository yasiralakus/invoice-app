import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function Invoice() {

    const {isDelete, setIsDelete, text, setText} = useContext(DataContext);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="invoice-page">

            <Link to={'/'}> <img src="./img/right-button.png" alt="" /> Geri Dön</Link>

            <header>

                <div>
                    <p>Durum</p>

                    <div className="orange-bg orange-color">
                        <p>Bekliyor</p>
                    </div>
                </div>

                <div style={{gap: '8px'}}>
                    <button onClick={() => (setIsDelete(true), setText('Silmeyi'))} style={{backgroundColor: '#EC5757'}}>Sil</button>
                    <button onClick={() => (setIsDelete(true), setText('Ödemeyi'))} style={{backgroundColor: '#7C5DFA'}}>Ödendi</button>
                </div>

            </header>

            <main>

                <h1>#<span>XM9141</span></h1>
                <p>Grafik Tasarım</p>

                <div className="invoice-details">

                    <div>
                        <p>Fatura Tarihi</p>
                        <h6>20 Temmuz 2024</h6>
                    </div>

                    <div>
                        <p>Faturayı Gönderen</p>
                        <h6>Alex Grim</h6>
                    </div>

                    <div>
                        <p>E-posta</p>
                        <h6>alexgrim@gmail.com</h6>
                    </div>

                    <div>
                        <p>Ödeme Tarihi</p>
                        <h6>29 Ekim 2024</h6>
                    </div>

                </div>

                <div className="invoice-results">

                    <div>
                        <h6>Ürün Adı</h6>
                        <h6>Sayısı</h6>
                        <h6>Fiyatı</h6>
                        <h6>Toplam</h6>
                    </div>

                    <div>
                        <h3>Banner Tasarımı</h3>
                        <h4>1</h4>
                        <h4>380.40 ₺</h4>
                        <h3>380.40 ₺</h3>
                    </div>

                    <div>
                        <h3>Email Tasarımı</h3>
                        <h4>2</h4>
                        <h4>200.00 ₺</h4>
                        <h3>400.00 ₺</h3>
                    </div>

                </div>

                <div className="invoice-total">

                    <p>Toplam</p>

                    <h1>780.40 ₺</h1>

                </div>

            </main>

        </div>
    )
}