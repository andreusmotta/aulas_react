import { useState, useEffect } from "react";

// 4 - Hooks personalizados:
export const useFetch = (url) => {
    const [dados, setDados] = useState(null);

    // 5 - Refatorando o POST:
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [chamaFetch, setChamaFetch] = useState(false);

    // 7  - Tratando erros:
    const [erro, setErro] = useState(null);

    // 6 - "Carregando" (loading):
    const [carregando, setCarregando] = useState(false);

    const configHttp = (dados, method) => {
        if (method === "POST") {
            setConfig({
                method, 
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(dados),
            });

            setMethod(method);
        };
    };

    useEffect(() => {
        const fetchDados = async () => {

            setCarregando(true); //  Colocando true no "carregando" antes de iniciar o carregamento de dados, e no final voltado ele pro false, quando ele termina:

            try {
                const res = await fetch(url);
                const json = await res.json();
    
                setDados(json);
            } catch (erro) {
                console.log(erro.message);
                setErro("Houve um erro ao carregar os dados.");
            }

            setCarregando(false);
        };

        fetchDados();        
    }, [url, chamaFetch]);

    // 5 - Refatorando POST
    useEffect(() => {

        const requisicaoHttp = async () => {
            if(method === "POST") {
                let opcoesFetch = [url, config];
                const res = await fetch(...opcoesFetch);
                const json = await res.json();
                setChamaFetch(json);
            }
        };

        requisicaoHttp();

    }, [config, method, url]);

    return { dados, configHttp, carregando, erro };
};