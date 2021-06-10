var contador = 0;
var logins = new Array;
var login;

class pessoas {
    constructor(nome, idade, nick, senha, cSenha) {
        this.nome = nome
        this.idade = idade
        this.nick = nick
        this.senha = senha
        this.cSenha = cSenha
    }
}

function _cadastro() {
    document.getElementById('cadastro').innerHTML =
        `<div>
            <fieldset>
                <div class="campo">
                    <label for="">nome</label>
                    <input type="text" id="nome" class="espacI">
                <div class="campo">
                    <label for="">idade</label>
                    <input type="text" id="idade" class="espacI">
                </div>

                <div class="campo">
                    <label for="">nickname</label>
                    <input type="text" id="nick" class="espacI">
                </div>

                <div class="campo">
                    <label for="">senha</label>
                    <input type="text" id="senha" class="espacI">
                </div>

                <div class="campo">
                    <label for="">confimar senha</label>
                    <input type="text" id="cSenha" class="espacI">
                </div>
                <div class="campo">
                    <button class="botao" type="button" onclick="confirm()">confirm</button>
                </div>
            </fieldset>     
        </div>`

    document.getElementById('botton').innerHTML =
        `<div>
            <button class="botao" type="button" onclick="entrar()">entrar</button>
        </div>`
}

function confirm() {

    var _name = document.getElementById('nome').value
    var age = document.getElementById('idade').value
    var nick = document.getElementById('nick').value
    var key = document.getElementById('senha').value
    var cKey = document.getElementById('cSenha').value


    if (_name === "" || age == "" || nick === "" || key == "" || cKey == "") {
        console.log("vazio");
    } else {
        if (logins.some(x => document.getElementById('nick').value == x._nick)) {
            document.getElementById('cadastro').innerHTML =
                `<div>
                    <fieldset>
                        <div class="campo">
                            <label for="">nome</label>
                            <input type="text" id="nome" class="espacI" value="${document.getElementById('nome').value}">
                        <div class="campo">
                            <label for="">idade</label>
                            <input type="text" id="idade" class="espacI" value="${document.getElementById('idade').value}">
                        </div>

                        <div class="campo">
                            <label for="">nickname</label>
                            <input type="text" id="nick" class="espacI" placeholder="esse nick ja esta em uso">
                        </div>

                        <div class="campo">
                            <label for="">senha</label>
                            <input type="text" id="senha" class="espacI" value="${document.getElementById('senha').value}">
                        </div>

                        <div class="campo">
                            <label for="">confimar senha</label>
                            <input type="text" id="cSenha" class="espacI" value="${document.getElementById('cSenha').value}">
                        </div>
                        <div class="campo">
                            <button class="botao" type="button" onclick="confirm()">confirm</button>
                        </div>
                    </fieldset>     
                </div>`
        } else {
            if (key === cKey) {
                var pessoa = new pessoas(_name, age, nick, key, cKey)

                logins.push({
                    nome: pessoa.nome,
                    idade: pessoa.idade,
                    _nick: pessoa.nick,
                    senha: pessoa.senha
                })

                document.getElementById('cadastro').innerHTML = ``

                document.getElementById('botton').innerHTML =
                    `<div>
                        <button class="botao" type="button" onclick="_cadastro()">criar conta</button>
                    </div>
                    <div>
                        <button class="botao" type="button" onclick="entrar()">entrar</button>
                    </div>`

                contador++
            } else {
                document.getElementById('cadastro').innerHTML =
                    `<div>
                        <fieldset>
                            <div class="campo">
                                <label for="">nome</label>
                                <input type="text" id="nome" class="espacI" value="${document.getElementById('nome').value}">
                            <div class="campo">
                                <label for="">idade</label>
                                <input type="text" id="idade" class="espacI" value="${document.getElementById('idade').value}">
                            </div>

                            <div class="campo">
                                <label for="">nickname</label>
                                <input type="text" id="nick" class="espacI" value="${document.getElementById('nick').value}">
                            </div>

                            <div class="campo">
                                <label for="">senha</label>
                                <input type="text" id="senha" class="espacI" value="${document.getElementById('senha').value}">
                                    </div>

                            <div class="campo">
                                <label for="">confimar senha</label>
                                <input type="text" id="cSenha" class="espacI" placeholder="as senhas não correspondem">
                            </div>
                                <div class="campo">
                                <button class="botao" type="button" onclick="confirm()">confirm</button>
                            </div>
                        </fieldset>     
                    </div>`
            }
        }

    }
    console.log(logins);
}
function entrar() {
    document.getElementById('cadastro').innerHTML =
        `<div>
            <fieldset>
                    <div class="campo">
                    <label for="">nickname:</label>
                    <input type="text" id="Lnick" class="espacI">
                <div class="campo">
                    <label for="">senha:</label>
                    <input type="text" id="Lsenha" class="espacI">
                </div>
                <div class="campo">
                    <button class="botao" type="button" onclick="confirmE()">confirm</button>
                </div>
            </fieldset>
        </div>`
    document.getElementById('botton').innerHTML =
        `<div>
            <button class="botao" type="button" onclick="_cadastro()">criar conta</button>
        </div>
        <div>
            <button class="botao" type="button" onclick="entrar()">entrar</button>
        </div>`

}
function confirmE() {

    if (logins.some(x => document.getElementById('Lnick').value == x._nick)) {

        login = logins.filter(e => document.getElementById('Lnick').value == e._nick)

        if (document.getElementById('Lsenha').value == login[0].senha) {
            console.log(login);

            document.getElementById('cadastro').innerHTML = ``
            document.getElementById('perfil').innerHTML = `
                <h3 class="alignT">Bem Vindo ${login[0]._nick}</h3>
                <div class="alignT">
                    <button class="botao" type="button" onclick="dados()">meus dados</button>
                </div>`

            document.getElementById('botton').innerHTML = `
                <div>
                    <button class="botao" type="button" onclick="sair()">sair</button>
                </div>`

        } else {
            document.getElementById('cadastro').innerHTML =
                `<div>
                    <fieldset>
                        <div class="campo">
                            <label for="">nickname:</label>
                            <input type="text" id="Lnick" class="espacI" value="${document.getElementById('Lnick').value}">
                        <div class="campo">
                            <label for="">senha:</label>
                            <input type="text" id="Lsenha" class="espacI" placeholder="senha incorreta">
                        </div>
                        <div class="campo">
                            <button class="botao" type="button" onclick="confirmE()">confirm</button>
                        </div>
                    </fieldset>
                </div>`

        }
    } else {
        document.getElementById('cadastro').innerHTML =
            `<div>
                <fieldset>
                    <div class="campo">
                        <label for="">nickname:</label>
                        <input type="text" id="Lnick" class="espacI" placeholder="nickname inexistente">
                    <div class="campo">
                        <label for="">senha:</label>
                        <input type="text" id="Lsenha" class="espacI">
                    </div>
                    <div class="campo">
                        <button class="botao" type="button" onclick="confirmE()">confirm</button>
                    </div>
                </fieldset>
            </div>`
    }

}
function sair() {
    document.getElementById('botton').innerHTML =
        `<div>
            <button class="botao" type="button" onclick="_cadastro()">criar conta</button>
        </div>
        <div>
            <button class="botao" type="button" onclick="entrar()">entrar</button>
        </div>`
    document.getElementById('cadastro').innerHTML = ``
    document.getElementById('perfil').innerHTML = ``

}
function dados() {
    document.getElementById('perfil').innerHTML = `
        <div class="alignT align">
            <fieldset>
                <p>Nome: ${login[0].nome}</p>
                <p>Idade: ${login[0].idade} anos</p>
                <p>NickName: ${login[0]._nick}</p>
                <p>Senha: ${login[0].senha}</p>
            </fieldset>
        </div>
                
        <div class="alignT">
            <button class="botao" type="button" onclick="voltar()">voltar</button>
        </div>`
}
function voltar() {
    document.getElementById('perfil').innerHTML = `
        <h3 class="alignT">Bem Vindo ${login[0]._nick}</h3>
        <div class="alignT">
            <button class="botao" type="button" onclick="dados()">meus dados</button>
        </div>`
}