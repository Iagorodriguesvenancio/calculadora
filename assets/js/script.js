let tela = document.querySelector(".tela")
tela.disabled = true

let bnt_num = (num) => {
    tela.value += num;
}

let btn_ac = () => {
    tela.value = " "
}

let bnt_del = () => {
    let tela = document.querySelector(".tela").value;
    document.querySelector(".tela").value = tela.substring(0, tela.length - 1);
}

let bnt_eql = () => {
    try {
        tela.value = eval(tela.value)
    } catch (error) {
        alert("não é possivel realizar a conta") 
    }
   
}

let bnt_raiz = () => {
    tela.value = Math.sqrt(tela.value)
}