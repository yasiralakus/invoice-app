import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const DataContext = createContext(null);

export default function App() {

    const [openBar, setOpenBar] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [text, setText] = useState(null);
    const [widthValue, setWidthValue] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidthValue(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="full-page">

            <div onClick={() => (openBar ? setOpenBar(false) : setOpenBar(true))} className="left-bar">
                <div className="left-bar-purple-box">
                    <img src="./img/left-bar-purple-box.png" alt="" />
                </div>

                <div className="left-bar-moon-and-user">

                    <div>
                        <button><img src="./img/moon.png" alt="" /></button>
                    </div>

                    <div>
                        <img src="./img/user.png" alt="" />
                    </div>

                </div>
            </div>

            <div  style={openBar ? (widthValue < 890 ? { left: '0' } : { left: '70px' }) : {}} className="open-bar">

                <form>
                    <h1>Yeni Fatura</h1>

                    <h3>Faturayı Gönderen</h3>

                    <div className="form-input">
                        <p>Adres</p>
                        <input type="text" />
                    </div>

                    <div className="form-3">
                        <div className="form-input">
                            <p>Şehir</p>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <p>Posta Kodu</p>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <p>Ülke</p>
                            <input type="text" />
                        </div>
                    </div>

                    <h3>Faturayı Alan</h3>

                    <div className="form-input">
                        <p>Müşteri Adı</p>
                        <input type="text" />
                    </div>

                    <div className="form-input">
                        <p>Müşteri E-posta</p>
                        <input type="text" />
                    </div>

                    <div className="form-input">
                        <p>Adres</p>
                        <input type="text" />
                    </div>

                    <div className="form-3">
                        <div className="form-input">
                            <p>Şehir</p>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <p>Posta Kodu</p>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <p>Ülke</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="form-2">
                        <div className="form-input">
                            <p>Fatura Tarihi</p>
                            <input type="date" />
                        </div>
                        <div className="form-input">
                            <p>Ödeme Şartları</p>
                            <input type="text" />
                        </div>
                    </div>

                    <button>Kaydet & Gönder</button>

                </form>

            </div>

            <div style={openBar ? {zIndex: '0'} : {} && isDelete ? {zIndex: '3'} : {}} className="opacity"></div>

            <div style={isDelete ? {zIndex: '4'} : {}} className="modal">

                <h1>{text} Onayla</h1>

                <p>XM9141 numaralı faturayı {text === 'Silmeyi' ? 'silmek' : 'ödemek'} istediğinizden emin misiniz? Bu işlem geri alınamaz.</p>

                <div>
                    <button style={{backgroundColor: '#F9FAFE', color: '#7E88C3'}} onClick={() => (setIsDelete(false))}>İptal</button>
                    <button style={text === 'Silmeyi' ? {backgroundColor: '#EC5757', color: '#fff'} : {backgroundColor: '#7C5DFA', color: '#fff'}} onClick={() => (setIsDelete(false))}>{text === 'Silmeyi' ? 'Sil' : 'Öde'}</button>
                </div>

            </div>

            <div className="right">

                <div className="container">

                    <DataContext.Provider value={{isDelete, setIsDelete, text, setText, widthValue, setWidthValue, openBar, setOpenBar}}>

                        <Outlet />

                    </DataContext.Provider>

                </div>

            </div>

        </div>
    )
}