import { flags } from "./utils/flags-24x24"

export const languages = [

   
{
    lid:'pt',
    country_code:'br',
    country_name:'Brazil',
    language_name:'Portuguese',
    language_code:'pt-BR',
    language_code3:'pt-BRA',
    language_lcid:'1046',
    flag:flags['br']
},

{
    lid:'fr',
    country_code:'fr',
    country_name:'France',
    language_name:'French',
    language_code:'fr-FR',
    language_code3:'fr-FRA',
    language_lcid:'1036',
    flag:flags['fr']
},

{
    lid:'de',
    country_code:'de',
    country_name:'Germany',
    language_name:'German',
    language_code:'de-DE',
    language_code3:'de-DEU',
    language_lcid:'1031',
    flag:flags['de']
},

{
    lid:'it',
    country_code:'it',
    country_name:'Italy',
    language_name:'Italian',
    language_code:'it-IT',
    language_code3:'it-ITA',
    language_lcid:'1040',
    flag:flags['it']
},

{
    lid:'es',
    country_code:'es',
    country_name:'Spain',
    language_name:'Spanish',
    language_code:'es-ES',
    language_code3:'es-ESP',
    language_lcid:'3082',
    flag:flags['es']
},

{
    lid:'en',
    country_code:'gb',
    country_name:'United Kingdom',
    language_name:'English',
    language_code:'en-GB',
    language_code3:'en-GBR',
    language_lcid:'2057',
    flag:flags['gb']
},

{
    lid:'en',
    country_code:'us',
    country_name:'United States',
    language_name:'English (United States)',
    language_code:'en-US',
    language_code3:'en-USA',
    language_lcid:'4096',
    flag:flags['us']
}

]

//use the lid property to identify a language

export const ui = {
    btn:{
            loyalty:{
                en:"loyalty cards",
                it:"carte fedeltá", 
                pt:"cartões de fidelidade",
            },
            lottery:{
                en:"lottery",
                it:"lotteria scontrini", 
                pt:"loteria",
            },
            newCart:{
                en:"new",
                it:"nuovo", 
                pt:"novo",
            },
            cancelCart:{
                en:"cancel",
                it:"cancella", 
                pt:"cancelar",
            },
            productPicker:{
                en:"products",
                it:"prodotti", 
                pt:"produtos",
            },
            lastCart:{
                en:"last cart",
                it:"ultimo carrello", 
                pt:"último carrinho",
            },
            suspendCashier:{
                en:"suspend cashier",
                it:"sospendi cassa", 
                pt:"suspende o caixa",
            },
            closeCashier:{
                en:"close cashier",
                it:"chiudi il cassa", 
                pt:"fechamento do caixa",
            },
        }
}

