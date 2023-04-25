// import './botao.css'

export const Botao = ({texto}) => {
    let estilo = { padding: '6px 12px', border: 'none', borderRadius: '4px'};

    if (texto.length > 0) {
        estilo = {
            ...estilo,
            backgroundColor: 'black',
            color: 'white',
            marginLeft: `${texto.lenght * 4}px`,
        };
    } else {
        estilo = {
            ...estilo,
            backgroundColor: 'lightgrey',
            color: 'darkgrey',
            };
    };

    return <button style={estilo}>{texto.length == 0 ? 'apagado' : texto}</button>;
};