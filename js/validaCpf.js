 //removedor de . e -

export default function removePt (campo) {
    const cpf = campo.value.replace(/\.|-/g,"");
    console.log(cpf);
}