import { useState, useEffect } from "react";

// 4 - Hooks personalizados:
export const useFetch = (url) => {
    const [dados, setDados] = useState(null);

    // 5 - Refatorando o POST:
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [chamaFetch, setChamaFetch] = useState(false);

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
            const res = await fetch(url);
            const json = await res.json();

            setDados(json);
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

    return { dados, configHttp };
};