import { Person } from 'schema-dts'
import { OfferCatalogAnoukDesury } from './OfferCatalogAnoukDesury'
import { PlaceWorkArea } from './PlaceWorkArea'

export const PersonAnoukDesury : Person = {
      '@type': 'Person',
      name: 'Name of the Accountable Person',
      address: 'Roubaix Nord Haut-De-France',
      
  
      //todo
      alumniOf: '',
 
       award: 'grande commande photographique de la bnf',

 
  birthDate: '1995-11-14',
 
  //todo
 birthPlace: 	'',

 //  deathDate 	Date of death. 

 email :'anoukdesury@gmail.com',
 familyName: 'Desury',

 
 gender: 'http://schema.org/Female',
 givenName: 'Anouk',
 globalLocationNumber: '59100',
 hasOfferCatalog: OfferCatalogAnoukDesury,
 honorificPrefix: 'Mademoiselle',

 //Photographic activities
 isicV4: '7420',
 jobTitle: 'Photographe',
 knowsLanguage: [
  {
    "@type": "Language",
    "name": "French"
  },
  {
    "@type": "Language",
    "name": "English"
  }
],

//todo
memberOf: 'Agence Light Motiv',

//Photographic activities in America
naics: '54192',
nationality: 'France',

taxID : '830 459 798 00039',
telephone: '0665236565',

workLocation: PlaceWorkArea
    }
