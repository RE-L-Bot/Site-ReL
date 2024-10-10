import Footer from "@/components/br/footers";
import Header from "@/components/br/headers";
import { configData } from "@/scripts/login";
import { generateRandomString } from "@/scripts/enc";
import RequestApi from "@/scripts/ManagerRequest";
import { calculatePercent } from "@/scripts/outhers";

export default function Store() {

    return (
        <div>

            <Header />

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Me ajude a ficar acordada</h2>

                    <h4 style={{ margin: 0 }}>
                        Sabia que para me manter online tem muitos custos?
                    </h4>

                    <p>
                        Contando com novas funcionalidades, host, database, dominio <br />
                        e todos os meses estamos investindo em novas funcionalidades <br />
                        e tecnologias para você usuario
                    </p>

                    <p>
                        Quer me ajudar a ficar online? <br />
                        Que maravilha, você pode comprar algum dos nosos planos premiums <br />
                        ou até mesmo os famosos edinhos (minha moeda corrente)
                    </p>

                    <p>
                        Não se preocupe se não puder comprar algumas destas coisas, <br />
                        você ainda podera usar algumas funcionalidades minhas porem mais limitadas <br />
                    </p>

                    <p className="descriptionOptions">
                        Mas se você quiser fazer alguma doação já me ajudar bastante <br />
                        sem contar que você ganhara um cargo lindo no meu servidor
                    </p>

                </div>

                <img src="/svgs/RELCHIBI.svg" alt="relchibisvg" className="images" />

            </div>

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Politicas de reembolso</h2>

                    <p>
                        Como todos os produtos comprados aqui são produtos digitais nos não oferecemos reembolso
                    </p>

                    <h4 style={{ margin: 0 }}>Comprei com um cartão sem permissão</h4>

                    <p>
                        Como comprar com cartão de terceiros sem a devida permissão do mesmo se encaixa em fraude <br />
                        e isto é um crime, alem de não conseguir o reembolso nos tomamos a liberdade de <br />
                        bloquear seu acesso ao uso do bot
                    </p>

                </div>

            </div>

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Tirando algumas duvidas</h2>

                    <ul>
                        <li>
                            Não tenho dinheiro oq eu faço?
                        </li>
                        <ul>
                            <li>
                                Nos não oferecemos descontos maiores do que os estão disponiveis no site, <br />
                                caso você esteja com pouco capital, nos recomendamos juntar o dinheiro para si <br />
                                e gastar com suas necessidades pois nos não reembolsaremos o seu dinheiro por irresponsabilidade do usuario
                            </li>
                        </ul>
                        <li>
                            Isto não é injusto com outros usuarios?
                        </li>
                        <ul>
                            <li>
                                Os servisos do bot são gratis para todos mas nos contamos com funcionalidades premium <br />
                                para benificiar quem deseja ajudar a manter o bot e tambem são vantagens onde outros usuarios <br />
                                seram prejudicados
                            </li>
                        </ul>
                    </ul>

                </div>

            </div>

            <h3 style={{ margin: 0 }}>Premium</h3>

            <hr />

            <h3 style={{ textAlign: "center" }}>Premium Basic</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Basic mensal</h2>

                    <h4 style={{ margin: 0 }}>R$ 15,99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos</p>

                        <p>5 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>10 Categorias de registro</p>

                        <p>10 Cargos por cartegoria de registro</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                return new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 15.99,
                                        type: "basic_1M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Basic Semestral</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(15.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 15% (Total: {calculatePercent(100000, 15, 1, false)})</p>

                        <p>5 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>10 Categorias de registro</p>

                        <p>10 Cargos por cartegoria de registro</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                return new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 86.35,
                                        type: "basic_6M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Basic Anual</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(15.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 25% (Total: {calculatePercent(100000, 25, 1, false)})</p>

                        <p>5 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>10 Categorias de registro</p>

                        <p>10 Cargos por cartegoria de registro</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                return new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 153.50,
                                        type: "basic_12M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h3 style={{ textAlign: "center" }}>Premium Medium</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium mensal</h2>

                    <h4 style={{ margin: 0 }}>R$ 30,99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos</p>

                        <p>10 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>15 Categorias de registro</p>

                        <p>15 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>1 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                return new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 30.99,
                                        type: "medium_1M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium Semestral</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(30.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 15% (Total: {calculatePercent(200000, 15, 1, false)})</p>

                        <p>10 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>15 Categorias de registro</p>

                        <p>15 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>1 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 167.35,
                                        type: "medium_6M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium Anual</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(30.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 25% (Total: {calculatePercent(200000, 25, 1, false)})</p>

                        <p>10 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>15 Categorias de registro</p>

                        <p>15 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>1 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 297.5,
                                        type: "medium_12M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h3 style={{ textAlign: "center" }}>Premium Master</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master mensal</h2>

                    <h4 style={{ margin: 0 }}>R$ 50,99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos</p>

                        <p>20 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>25 Categorias de registro</p>

                        <p>23 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Usar Webhook para mensagem do ticket</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 50.99,
                                        type: "master_1M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master Semestral</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(50.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 15% (Total: {calculatePercent(300000, 15, 1, false)})</p>

                        <p>20 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>25 Categorias de registro</p>

                        <p>23 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Usar Webhook para mensagem do ticket</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 275.35,
                                        type: "master_6M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master Anual</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(50.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 25% (Total: {calculatePercent(300000, 25, 1, false)})</p>

                        <p>20 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>25 Categorias de registro</p>

                        <p>23 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Usar Webhook para mensagem do ticket</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 489.5,
                                        type: "master_12M",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h3 style={{ textAlign: "center" }}>Premiuns LifeTime</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Basic LifeTime</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(15.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 35% (Total: {calculatePercent(100000, 35, 1, false)})</p>

                        <p>5 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>10 Categorias de registro</p>

                        <p>10 Cargos por cartegoria de registro</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 671.58,
                                        type: "basic_LT",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium LifeTime</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(30.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 35% (Total: {calculatePercent(200000, 35, 1, false)})</p>

                        <p>10 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>15 Categorias de registro</p>

                        <p>15 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>1 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 1301.58,
                                        type: "medium_LT",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master LifeTime</h2>

                    <h4 style={{ margin: 0 }}>R$ {calculatePercent(50.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 35% (Total: {calculatePercent(300000, 35, 1, false)})</p>

                        <p>20 categorias de ticket</p>

                        <p>Cargo especial no servidor</p>

                        <p>25 Categorias de registro</p>

                        <p>23 Cargos por cartegoria de registro</p>

                        <p>Abrir Ticket por thread</p>

                        <p>Usar Webhook para mensagem do ticket</p>

                        <p>Acesso antecipado a informações do bot</p>

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button onClick={() => {

                            const doclogin = document.getElementsByClassName("login");

                            const langP = window.location.pathname.split("/")[1]

                            if (doclogin[0].textContent.toLowerCase() != "login")
                                new RequestApi()
                                    .setApiEndPoint("thisAPI")
                                    .setEndPoint("cPayment")
                                    .setBody({
                                        value: 2141.58,
                                        type: "master_LT",
                                        idUser: JSON.parse(sessionStorage.getItem("USERINFO")).id
                                    })
                                    .request()
                                    .then(res => window.open(res.response, "_blank"));

                            const randomString = generateRandomString();

                            sessionStorage.setItem('oauth-state', randomString);

                            window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )

}
