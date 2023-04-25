import { useEffect, useState } from "react";
import { Botao } from "./components/Botao/Botao";
import { Container } from "./components/Container/Container";

export const App = () => {

    const click = () => console.log(nome);

    const [nome, setNome] = useState('');

    const trocarTexto = (event) => {
        setNome(event.target.value);
    }

    useEffect(() => {
        console.log('useEffect executado');
    }, [nome]);

    return (         
    <>

    <Container>

    <input type='text' value={nome} onChange={(event) => setNome(event.target.value)} />
    
    <Botao texto={nome} />

    </Container>

    </>
);
};

// crie um novo componente com o nome Formulario e adicione ao arquivo App
// precisa ter um input para nome, um input para email e um botão de submit
// precisa ter um estado para o nome e outro para o email
// quando clicar no botão precisa escrever no console o valor do nome e do email