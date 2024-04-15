import { Person } from 'schema-dts'
import { OfferCatalogAnoukDesury } from './OfferCatalogAnoukDesury'
import { PlaceWorkArea } from './PlaceWorkArea'

export const PersonAnoukDesury : Person = {
      '@type': 'Person',
      name: 'Name of the Accountable Person',
      address: 'Roubaix Nord Haut-De-France',
      //affiliation 	Organization
  
      //alumniOf An organization that the person is an alumni of.
 
      // award 	An award won by or for this item. Supersedes awards. 
  // un seul possible ici, mettre le plus cool
 
  //birthDate 	 	Date of birth.
 
 // birthPlace 	The place where the person was born. 

 //  deathDate 	Date of death. 

 email :'anoukdesury@gmail.com',
 familyName: 'Desury',

 //funder 	A person or organization that supports (sponsors) something through some kind of financial contribution. 
 // est ce que tu veux mettre un sponsor en avant ?
 
 gender: 'http://schema.org/Female',
 givenName: 'Anouk',
 globalLocationNumber: '59100',

 //hasCertification 	Certification information about a product, organization, service, place, or person. 
 // par exemple un Docteur serrait reconnu par l'ordre des medecins

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

//memberOf An Organization (or ProgramMembership) to which this Person or Organization belongs.

//Photographic activities in America
naics: '54192',
nationality: 'France',

//publishingPrinciples : document qui va expliquer selon la loi comment on peut utiliser tes documents
//taxID : siret
//telephone: ''
// weight 	The weight of the product or person. (P T D R)
workLocation: PlaceWorkArea
    }
