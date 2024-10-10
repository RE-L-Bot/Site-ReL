import FOOTER from "@/components/br/footers";
import HEADER from "@/components/br/headers";
import { configData } from "@/scripts/login"

export default function Terms() {
    return (
        <div>

            <HEADER />

            <div className="DivExplainTerms">

                <h2 style={{ margin: 0 }}>Termos De uso & Privacidade</h2>

                <h4 style={{ margin: 0 }}>Meus termos de uso são extremamente necessarios ser seguidos</h4>

                <h4 style={{ margin: 0 }}>Caso seja identificado a quebra de algum desses termos</h4>

                <h4 style={{ margin: 0 }}>Você sera banido do uso do bot e medidas seram tomadas</h4>

                <div className="DivSuport">

                    <h2 >Em caso de duvidas: </h2>

                    <button className="ml-5 items-center flex rounded-lg p-3 bg-blue-300" onClick={redirectServidor}>

                        <div>
                            <img src="/svgs/discordiconSVG.svg" alt="discord icon" />
                        </div>

                        <div>
                            Meu servidor
                        </div>

                    </button>

                </div>

            </div>

            <div className="ResumeTerms">

                Em resumo: Você assume total responsabilidade por qualquer imagem/vídeo/áudio/mídia enviada
                <br />
                para mim, tentar abusar de bugs/usar bots/trapaças são proibídos e você poderá perder o acesso a
                <br />
                todas as minhas funcionalidades (e de outros serviços), nós iremos coletar informações como seu
                <br />
                ID, username, email, IP, avatar, servidores, mensagens, mídia e outras coisas (mas nós não iremos
                <br />
                distrubir tais informações para terceiros)

            </div>

            <div>

                <div>

                    <h3 style={{ margin: 0 }}>Termos de Serviço & Privacidade</h3>

                </div>

                <div >

                    <p>
                        Estes termos de serviço que incluem a politica de privacidade em {configData.url}/terms são um acordo legal entre ("Re=L Bot" ou "nós") e você
                    </p>

                    <p>
                        e entram em vigência a partir do momento que você começa a usufruir do serviço da RE=L ou quaisquer outros serviços feitos por Marciel404.
                    </p>

                    <p style={{ color: "red" }}>
                        Ao você usar os serviços deste site ou da Re=L (o "Bot") você afirmar ter 13 (Treze) anos ou mais e concorda com todos os termos neste artigo.
                    </p>

                    <p style={{ color: "red" }}>
                        Em caso de ser menor de Idade (18 anos) presume-se que seu responsavel tenha lido os termos e permitido você usufruir
                    </p>

                    <p style={{ color: "red" }}>
                        destes servições e estão cientes das condições
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>Abuso de bugs</h3>

                    <p >
                        Usufruir ou abusar de bugs para tomar vantagens para si mesmo ou para outrem são extremamente proibidos,
                        sendo descoberto algum bug ou falha em algum sistema ou da Re=L (o Bot) ou deste site é necessario
                        estar reportando para os desenvolvedores da equipe, caso seja descoberta a quebra deste termo sua conta e dados
                        estão sujeitos a serem banidos e excluidos da database da Re=L sem forma de desbanimento ou recuperação dos dados perdidos
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>Flood de comandos</h3>

                    <p >
                        O Flood de comandos para estar tentando derrubar o bot é extremamente
                        proibido, caso seja identificada a quebra deste termo sua conta e dados
                        estão sujeitos a serem banidos e excluidos da database da Re=L sem forma
                        de desbanimento ou recuperação dos dados perdidos
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Nsfw
                    </h3>

                    <h3 style={{ margin: 0 }}>
                        (Not Safe For Work)
                    </h3>

                    <p >
                        Tendo em vista que a Re=L é para ser um bot de comunidades sfw (Safe For Work) e não
                        querendo ser atribuído a este tipo de conteúdos fica proibido o uso dos serviços da Re=L
                        para fins de NSFW seja eles anúncios ou até mesmo servidores focados neste tema, caso
                        seja identificado que a Re=L foi utilizada para estes fins sua conta será banida de usar os
                        serviços da Re=L e servidores que você estiver na administração serão bloqueados de estar
                        utilizando os serviços da mesma
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Uso de contas secundarias
                    </h3>

                    <p >
                        A Re=L possue seu sistema de economia (porem esta desabilitado no momento) tendo isto em
                        em mente, fica proibido o uso de contas secundarias para conseguir mais "Edinhos", caso
                        seja identificado a utilização de mais de uma conta para farm de "Edinhos" sua conta e dados
                        estão sujeitos a serem banidos e excluidos da database da Re=L sem forma
                        de desbanimento ou recuperação dos dados perdidos
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Comercio de Edinhos
                    </h3>

                    <p >
                        A compra/venda de Edinhos com terceiros e a troca de produtos de valor monetário, como Discord Nitro, é proibida e você será banido de usar a Re=L caso comercialize algo assim.
                        Muitos vendedores desse ramo usam cartões clonados, não colabore com o crime de lavagem de dinheiro desses irresponsáveis!
                        Se você deseja comprar Edinhos de uma forma segura que ainda por cima ajuda a Re=L ficar online, visite a nossa loja de Edinhos clicando aqui
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Tarifas
                    </h3>

                    <p >
                        Não cobraremos nenhuma taxa para usar a funcionalidade básica do Serviço.
                        No entanto, você poderá ter que pagar uma taxa para usar determinados recursos
                        do Serviço ou para obter Moeda Virtual ou Bens Virtuais
                        (conforme definido ediscutido mais abaixo).
                        O preço para utilizar esses recursos ou obter tal Moeda Virtual ou Bens Virtuais
                        será exibido no Aplicativo ou no Bot.
                        Também poderemos exigir que você pague quaisquer valores devidos por meio de um
                        serviço de pagamento de terceiros.
                        Os pagamentos de tais taxas serão regidos pelos termos da sua loja de aplicativos
                        ou de terceiros aplicáveis às compras no aplicativo.
                        Você concorda em cumprir todos esses termos e outros requisitos da sua loja de
                        aplicativos ou de terceiros.
                        Você é responsável por determinar e pagar os impostos, taxas e encargos de serviço
                        governamentais apropriados resultantes de uma transação ocorrida por meio do Serviço.
                        Não somos responsáveis por coletar, relatar, pagar ou remeter a você quaisquer
                        impostos, taxas ou encargos de serviço, exceto conforme exigido por lei.
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Controle de Dados
                    </h3>

                    <p >
                        Todos os dados só podem ser acessados pelo Marcelo
                        (Marciel404 — <a className="text-blue-700 underline" href="https://github.com/Marciel404">https://github.com/Marciel404</a>),
                        que concordou em não compartilhar/vender/distribuir
                        nenhum dos dados armazenados com terceiros.
                    </p>

                </div>

            </div>

            <div >

                <div>

                    <h3 style={{ margin: 0 }}>
                        Uso do bot
                    </h3>

                    <p >
                        2.1 Bot & Servidores. Marciel404 reserva-se o direito de remover Re=L de qualquer
                        servidor a qualquer momento. Podemos remover Re=L de um servidor por qualquer
                        motivo, como: (a) A servidor está abusando do bot, causando problemas com ele.
                        (b) Guild está caluniando a reputação de Re=L, Marciel404 ou de qualquer um dos
                        contribuidores do projeto. (c) Não queremos que nossos serviços sejam associados
                        ao servidor.
                    </p>

                    <p >
                        2.2 Banimentos Oficiais de Servidores. Se você for banido de qualquer servidor
                        relacionada ao Marciel404 e/ou Re=L por qualquer motivo,
                        poderemos aplicar um banimento e ser colocado na lista negra de qualquer um de
                        nossos outros servidores e serviços.
                    </p>

                    <p >
                        2.3 Spam e abuso de bots. Se você enviar spam para comandos ou abusar de qualquer
                        um de nossos serviços de alguma forma, você será colocado na lista negra e banido
                        de qualquer um de nossos serviços. Também adicionaremos você às listas de banimento
                        do Discord e avisaremos outros desenvolvedores de bot sobre você e, se for uma
                        violação grave (como: invasão, assédio e outras violações), você poderá ser banido
                        de todos os servidores em que Re=L estiver.
                    </p>

                </div>

            </div>

            <div >

                <div className=" mb-3">

                    <h3 style={{ margin: 0 }}>
                        Tipo de Dados Coletados
                    </h3>

                    <p >
                        1.1a Dados do Usuário. Os Dados do Usuário incluem, entre outros, IDs de Usuário,
                        IPs de Usuário, e-mails de Usuário, fotos de perfil, nomes de usuário e tags de
                        usuário (“discriminador”). A Re=L usa Dados do Cliente como um meio de
                        personalizar a experiência do Licenciado e ajudá-lo de todas as maneiras possíveis.
                        O uso pode incluir, mas não está limitado a, informações de depuração para comandos
                        como informações de "sugestão" ou "suporte" para identificar um usuário, uso em
                        incorporações de mensagens, registro sobre o usuário e uso de comandos.
                    </p>

                    <p >
                        1.1b Dados do servidor. Os Dados do servidor incluem, entre outros, IDs do servidor,
                        ícones do servidor, nomes do servidor, contagem de Membros, Funções, Canais e Funções
                        possuídas por um Membro. Os Dados do servidor são um meio de personalizar ainda mais
                        a experiência do Licenciado e ajudá-lo de qualquer maneira que os Dados do Usuário
                        não sejam úteis. O uso pode incluir, mas não está limitado a, informações de
                        depuração para comandos como informações de "sugestão" ou "suporte" para identificar
                        uma servidor, uso em incorporações de mensagens e registro sobre o uso de comandos.
                        Além disso, os desenvolvedores podem usar os Dados do servidor da maneira que
                        precisarem, desde que não os usem para fins maliciosos. Os desenvolvedores
                        reservam-se o direito de gerar um convite para uma servidor a fim de fornecer suporte
                        ou determinar se a servidor está abusando de algum de nossos bots.
                    </p>

                    <p  style={{ marginBottom: "40px" }}>
                        1.2 Uso e Armazenamento de Dados do Usuário e Dados do servidor.
                        O Marciel404 reserva-se o direito de usar e armazenar Dados do Cliente e Dados do
                        servidor de qualquer forma necessária para a funcionalidade dos nossos bots.
                        O Marciel404 não usará Dados do Cliente ou Dados do servidor para quaisquer fins
                        maliciosos, mas apenas os usará quando forem necessários para comandos ou recursos
                        específicos de nossos bots. Os Dados do Cliente e do servidor serão armazenados
                        apenas em situações específicas em que sejam necessários para a persistência de uma
                        funcionalidade. Isso inclui, entre outros, moeda do usuário, registro de eventos,
                        lista negra e acesso a vantagens específicas.
                    </p>

                </div>

            </div>

            <FOOTER />

        </div>
    )

}

function redirectServidor() {
    window.open(
        "https://discord.gg/mmwUHd4Yzf",
        "_blank"
    )
}