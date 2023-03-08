//React imports
import { useEffect, useState } from "react";

//Helpers
import { formatDatte } from "helpers/Aux_Helpers";
import { countsRepeat } from "helpers/Aux_Helpers_Data";

//helper ui
import { Spinner } from "helpers/UIDesign";

//store
import { AccessContext } from "store/context"
import { getAllTagsAction } from "../api/https";


export const Dashboard = () => {
    const { List, setList } = AccessContext();
    const [ ArticleActive, setArticleActive ] = useState();
    const [ Loading, setLoading ] = useState(false);
    const [ RowsPerPage, setRowsPerPage ] = useState(10);
    const [ Rows, setRows ] = useState([]);

    //method to count and ordered data
    const handleActiveData = ( data ) => {
        const tags = data.reduce((acc, res) => {
            return [
                ...acc,
                ...res.taxonomy.tags.reduce((acc, tag) => [ ...acc, {
                    ...tag,
                    src: `tema/${tag['slug']}`,
                    count: 1
                }], [])
            ]
        },[])
        const { res } = countsRepeat( tags )
        return res;
    }

    //Method to set tags
    const handleData = ( data ) => {
        const active = handleActiveData( data )
        setList(
            e => e = data
        )
        setArticleActive( active )
        setLoading( false )
    }

    //Method to search all articles and filter for subtype 7
    const handleGetTags = async() => {
        setLoading( true )
        let data = await getAllTagsAction();
        data = data.length ? data.filter( inf => inf.subtype === '7' ) : data
        if( data.length ) handleData( data )
    }

    //Method to expand the articles
    const RenderInfiniteScroll = () => {
        setRows( List.slice(0, RowsPerPage) )
    }

    //Method to render the pagination
    const handlePage = () => {
        setRowsPerPage( RowsPerPage <= List.length  ? RowsPerPage + 10 : RowsPerPage )
        RenderInfiniteScroll()
    }

    useEffect(() => {
        handleGetTags()
        RenderInfiniteScroll()
    }, [List.length, RowsPerPage]);
    
    return <>
        <div className="sidebar__main">
            {
                Loading
                ?
                    <Spinner />
                :
                List.length
                ?
                    <>
                        <div className="row">
                            <div className="com-titleWithfollow hlp-marginBottom-15">
                                <h1 className="com-title-section-xl hlp-marginBottom-40"> Acumulado Grilla </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
                                {
                                    ArticleActive.map( tag => <a key={ tag.text } href={ tag.src }> { tag.text } </a> )
                                }
                            </div>
                        </div>
                        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                            {
                                Rows.map( row => <>
                                    <article key={ row._id } className="mod-caja-nota lugares w-100-mobile">
                                        <section id="" className="cont-figure">
                                            <a href="/" className="figure">
                                                <picture id="" className="content-pic picture">
                                                    <img src={ row.promo_items.basic.url } alt="" className="content-img" />
                                                </picture>
                                            </a>
                                        </section>
                                        <div className="mod-caja-nota__descrip">
                                            <h2 className="com-title-acu">
                                                <a href="/">
                                                    <b>{ row.headlines.basic }.</b>
                                                    { row.promo_items.basic.subtitle }
                                                </a>
                                            </h2>
                                            <h4 className="com-date"> {formatDatte( row.display_date )} </h4>
                                        </div>
                                    </article>
                                </>    
                                )
                            }

                        </section>
                        <section className="row">
                            <div className="col-12 hlp-text-center hlp-margintop-40">
                                {
                                    RowsPerPage !== 30
                                    &&
                                    <button 
                                    onClick={ handlePage } 
                                    className="--btn --secondary"
                                    data-testid="testAcumulated"
                                    >
                                        MÁS NOTAS DE ACUMULADO GRILLA
                                    </button>
                                }
                            </div>
                        </section>
                    </>
                :
                    <div className="row">
                        <div className="com-titleWithfollow hlp-marginBottom-15">
                            <h1 className="com-title-section-xl hlp-marginBottom-40"> No hay datos </h1>
                        </div>
                    </div>
            }

        </div>
    </>
}