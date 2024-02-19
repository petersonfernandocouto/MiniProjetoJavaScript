class Produto {
    
    constructor() {
        this.id = 1;
        this.arrayProduto = [];
    }

    
    ADC() {
        let produto = this.lerDados();
        if (this.Validar(produto) == true) {
            this.Salvar(produto);
        }

        this.Listar();
        this.Cancelar();
    }

    lerDados() {

        
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("NamePro").value;
        produto.ValorProduto = document.getElementById("valorPro").value;
        return produto;
    }

    Validar(produto) {

        let msg = "";
        if (produto.nomeProduto == "" || produto.ValorProduto == "") {
            msg = "Preencha todos os campos";
        }
        if (msg != "") {
            alert(msg);
            return false;
        }
        return true;
    }

    Salvar(produto) {

        this.arrayProduto.push(produto);
        this.id++;
    }

    Listar() {


        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";

        for (let i = 0; i < this.arrayProduto.length; i++) {

            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id;
            td_nome.innerText = this.arrayProduto[i].nomeProduto;
            td_preco.innerText = this.arrayProduto[i].ValorProduto;

            
            let deleteIcon = document.createElement("i");
            deleteIcon.className = "material-symbols-outlined";
            deleteIcon.textContent = "delete";
            deleteIcon.addEventListener("click", () => this.Deletar(this.arrayProduto[i].id));

        
            td_del.appendChild(deleteIcon);
        }
    }

    Cancelar() {
        document.getElementById("NamePro").value = "";
        document.getElementById("valorPro").value = "";
    }

    Deletar(id) {
        let tbody = document.getElementById("tbody");
        let table = document.getElementById("tableProdutos");
    
        for (let i = this.arrayProduto.length - 1; i >= 0; i--) {
            if (this.arrayProduto[i].id == id) {
                this.arrayProduto.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
        alert("Item deletado com sucesso");
    }
}

var produto = new Produto();