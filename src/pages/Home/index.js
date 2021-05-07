import React, {useState, useEffect} from 'react';
import {SearchArea, PageArea} from './styled';
import useApi from '../../helpers/OlxAPI';
import {Link} from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

import {PageContainer} from '../../components/MainComponents';

const Page = () =>{

    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getStates = async () =>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[]);

    useEffect(()=>{
        const getCategories = async () =>{
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    },[]);

    useEffect(()=>{
        const getRecentAds = async () =>{
            const json = await api.getAds({
                sort:'desc',
                limit:8
            }); 
            setAdList(json.ads);
        }
        getRecentAds();
    },[]);


    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que voce Procura?"/>
                                <select name="state">
                                    <option></option>
                                    {stateList.map((i,k)=>
                                        <option key={k} value={i.name}>{i.name}</option>   
                                    )}
                                </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                   
                    <div className="categoryList">
                            {categories.map((i,k)=>
                                <Link key={k} to={`/adc?cat=${i.slug}`} className="categoryItem">
                                    <img src={i.img} alt=""/>
                                    <span>{i.name}</span>
                                </Link>
                            )}
                    </div>

                </PageContainer>
            </SearchArea>
            
            <PageContainer> 
                <PageArea>
                    <h2>Anuncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>

                    <Link to="/ads" className="seeAllLink">Ver todos</Link>

                    <hr/>

                    Bem-vindo ao FIX, projeto iniciado como clone da Plataforma de Vendas Olx, o projeto tem algumas modificacoes originais da plataforma e do Dev que esta conduzindo 
                </PageArea>
            </PageContainer>
        </>
    );

}

export default Page;