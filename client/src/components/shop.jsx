export default function Shop () {

    return (
<div className="shopBody">

        <header className="headerShop">
            <div className="userConnectionlinks">
                    <img className="ltFlagImg" src="https://dovanos.lt/image/cache/data/Velevos/Lietuvos%20veliava-700x700.png" alt="" />                
                    <img className="gbFlagImg" src="https://iconarchive.com/download/i109141/wikipedia/flags/GB-United-Kingdom-Flag.ico" alt="" />
                    <img className="userConnectionImg" src="http://cdn.onlinewebfonts.com/svg/img_184513.png" alt="" />
                    <a id="loginLink" href="http://localhost:3000/login" className="cboxElement"><span id="userIcon" className="icon-user"></span>Login</a>
                    <img className="userConnectionImg" src="https://cdn-icons-png.flaticon.com/512/181/181546.png" alt="" />
                    <a id="registerLink" href="http://localhost:3000/registration" rel="nofollow"><span className="icon-register"></span>Registration</a>
            </div>
            <div className="headerData">
                <img className="HeaderShopImg" src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png" alt="bookHome" class="headerImg"/>
                <div>
                    <input type="search" name="searchparam" value="" placeholder="By name, author:"></input>
                    <button class="buttonMain"><span class="icon-search"></span>Ieškoti</button>
                    <span class="icon-search"></span>
                </div>
                <h1 className="headerTitle">SELECT A BOOK !</h1>
            </div>
        </header>

        <form className="formShop">       
            <div className="booksData">
                        <div className="bookInfo">
                            <img className="productImg" src="https://www.briedis.lt/out/pictures/1/erelisirangis_briedis.jpg?v3" alt=""/>
                            <h2 className="productName">Erelis ir Angis</h2>
                            <h3 className="productAuthor">Autorius: Loren D. Estleman</h3>
                            <h4 className="productPrice">Kaina: 15.60 Eur</h4>
                        </div>
                        <div className="bookInfo">
                            <img className="productImg" src="https://www.briedis.lt/out/pictures/1/mergaitmnesienoje_briedis.jpg?v3" alt=""/>
                            <h2 className="productName">Mergaitė Menesienoje</h2>
                            <h3 className="productAuthor">Autorius: Eglė Gabrilavičiūtė</h3>
                            <h4 className="productPrice">Kaina: 13.20 Eur</h4>
                        </div>
                        <div className="bookInfo">
                            <img className="productImg" src="https://www.briedis.lt/out/pictures/1/skambinktetoms_briedis.jpg?v3" alt=""/>
                            <h2 className="productName">Skambink temomis</h2>
                            <h3 className="productAuthor">Autorius: Ieva Driukienė</h3>
                            <h4 className="productPrice">Kaina: 14.20 Eur</h4>
                        </div>
                        <div className="bookInfo">
                            <img className="productImg" src="https://www.briedis.lt/out/pictures/1/maisto_atlasas_virselis.png?v3" alt=""/>
                            <h2 className="productName">Maisto atlasas</h2>
                            <h3 className="productAuthor">Autorius: Ema Bernotaitė</h3>
                            <h4 className="productPrice">Kaina: 4.85 Eur</h4>
                        </div>
                        <div className="bookInfo">
                            <img className="productImg" src="https://www.briedis.lt/out/pictures/1/pelkikaralien_briedis.jpg?v3" alt=""/>
                            <h2 className="productName">Pelkių karalienė</h2>
                            <h3 className="productAuthor">Autorius: Kristina Tamulevičiūtė</h3>
                            <h4 className="productPrice">Kaina: 19.40 Eur</h4>
                        </div>
            </div>
        </form>        

        <footer className="footerShop">
            <div className="shopfooter">   
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/lt/thumb/9/99/Swedbank_logo.svg/2560px-Swedbank_logo.svg.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://play-lh.googleusercontent.com/HRBpRmxFPaQRTzOubVUn20ELRQfp5PlenEwcHqWUXVb_diiiuoTpSDIetiKiOGcTBQ=w600-h300-pc0xffffff-pd" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="http://superhouse.lt/userfiles/Luminor-logo%20(1).png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="data:image/png;base64,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" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Paysera_logo.png/1200px-Paysera_logo.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://lku.lt/wp-content/uploads/2020/12/LKU_logotipas.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://www.parking.lt/uploads/images/Parking/perlo.jpg" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://www.aukstelkesgn.lt/wp-content/uploads/2020/04/SB-kairinis-LOGO..png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Maxima_logo.svg/2560px-Maxima_logo.svg.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Medicinos_Bankas_Logo.svg/2560px-Medicinos_Bankas_Logo.svg.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt=""/>
                </div>
                <div className="footerImg">
                    <img className="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt=""/>
                </div>
            </div>
                    <div className="footerPharagrap">
                    <p className="fotterParagrap"> © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10</p>
                    </div>
        </footer>
</div>
)
}