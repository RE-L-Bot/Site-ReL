import Footer from "@/components/br/footers";
import Header from "@/components/br/headers";
import { calculatePercent } from "@/scripts/outhers";

export default function Teste() {

    return (
        <main>

            <Header />

            <div className="SecondDivIndex">

                <div>

                    <h2>Me ajude a ficar acordada</h2>

                    <h4>
                        Sabia que para me manter online tem muitos custos?
                    </h4>

                    <p>
                        Contando com novas funcionalidades, host, database, dominio <br />
                        e todos os meses estamos investindo em novas funcionalidades <br />
                        e tecnologias para você usuario
                    </p>

                    <br />

                    <p>
                        Quer me ajudar a ficar online? <br />
                        Que maravilha, você pode comprar algum dos nosos planos premiums <br />
                        ou até mesmo os famosos edinhos (minha moeda corrente)
                    </p>

                    <br />

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

            <h1>Premium</h1>

            <hr />

            <h1 style={{ textAlign: "center" }}>Premium Basic</h1>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2>Basic mensal</h2>

                    <h4>R$ 15,99</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos</p>

                        <br />

                        <p>5 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>10 Categorias de registro</p>

                        <br />

                        <p>10 Cargos por cartegoria de registro</p>

                        <br />

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Basic Semestral</h2>

                    <h4>R$ {calculatePercent(15.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 15% (Total: {calculatePercent(100000, 15, 1, false)})</p>

                        <br />

                        <p>5 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>10 Categorias de registro</p>

                        <br />

                        <p>10 Cargos por cartegoria de registro</p>

                        <br />

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Basic Anual</h2>

                    <h4>R$ {calculatePercent(15.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 25% (Total: {calculatePercent(100000, 25, 1, false)})</p>

                        <br />

                        <p>5 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>10 Categorias de registro</p>

                        <br />

                        <p>10 Cargos por cartegoria de registro</p>

                        <br />

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h1 style={{ textAlign: "center" }}>Premium Medium</h1>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2>Medium mensal</h2>

                    <h4>R$ 30,99</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos</p>

                        <br />

                        <p>10 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>15 Categorias de registro</p>

                        <br />

                        <p>15 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>1 cargo personalizado no servidro de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Medium Semestral</h2>

                    <h4>R$ {calculatePercent(30.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 15% (Total: {calculatePercent(200000, 15, 1, false)})</p>

                        <br />

                        <p>10 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>15 Categorias de registro</p>

                        <br />

                        <p>15 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>1 cargo personalizado no servidro de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Medium Anual</h2>

                    <h4>R$ {calculatePercent(30.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 25% (Total: {calculatePercent(200000, 25, 1, false)})</p>

                        <br />

                        <p>10 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>15 Categorias de registro</p>

                        <br />

                        <p>15 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>1 cargo personalizado no servidro de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h1 style={{ textAlign: "center" }}>Premium Master</h1>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2>Master mensal</h2>

                    <h4>R$ 50,99</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos</p>

                        <br />

                        <p>20 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>25 Categorias de registro</p>

                        <br />

                        <p>23 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Usar Webhook para mensagem do ticket</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Master Semestral</h2>

                    <h4>R$ {calculatePercent(50.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 15% (Total: {calculatePercent(300000, 15, 1, false)})</p>

                        <br />

                        <p>20 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>25 Categorias de registro</p>

                        <br />

                        <p>23 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Usar Webhook para mensagem do ticket</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Master Anual</h2>

                    <h4>R$ {calculatePercent(50.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 25% (Total: {calculatePercent(300000, 25, 1, false)})</p>

                        <br />

                        <p>20 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>25 Categorias de registro</p>

                        <br />

                        <p>23 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Usar Webhook para mensagem do ticket</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <br />

            <h1 style={{ textAlign: "center" }}>Premiuns LifeTime</h1>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2>Basic LifeTime</h2>

                    <h4>R$ {calculatePercent(15.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>100.000 Edinhos + 35% (Total: {calculatePercent(100000, 35, 1, false)})</p>

                        <br />

                        <p>5 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>10 Categorias de registro</p>

                        <br />

                        <p>10 Cargos por cartegoria de registro</p>

                        <br />

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Medium LifeTime</h2>

                    <h4>R$ {calculatePercent(30.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>200.000 Edinhos + 35% (Total: {calculatePercent(200000, 35, 1, false)})</p>

                        <br />

                        <p>10 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>15 Categorias de registro</p>

                        <br />

                        <p>15 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>1 cargo personalizado no servidro de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2>Master LifeTime</h2>

                    <h4>R$ {calculatePercent(50.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3>
                            Beneficios
                        </h3>

                        <hr />

                        <p>300.000 Edinhos + 35% (Total: {calculatePercent(300000, 35, 1, false)})</p>

                        <br />

                        <p>20 categorias de ticket</p>

                        <br />

                        <p>Cargo especial no servidor</p>

                        <br />

                        <p>25 Categorias de registro</p>

                        <br />

                        <p>23 Cargos por cartegoria de registro</p>

                        <br />

                        <p>Abrir Ticket por thread</p>

                        <br />

                        <p>Usar Webhook para mensagem do ticket</p>

                        <br />

                        <p>Acesso antecipado a informações do bot</p>

                        <br />

                        <p>2 cargo personalizado no servidor de suporte</p>

                        <button>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i class="material-symbols-outlined">
                                    store
                                </i>

                                <h4>
                                    Comprar
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <Footer />

            <button>CREATE</button>

        </main>
    )
}
