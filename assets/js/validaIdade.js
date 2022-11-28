export default function ehMaiorDeIdade(campo) {
                            //receber o valor de data e fazer o js entender
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;

}