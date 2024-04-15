import { OfferCatalog } from "schema-dts";
import { PersonAnoukDesury } from "./PersonAnoukDesury";
import { PlaceWorkArea } from "./PlaceWorkArea";

export const OfferCatalogAnoukDesury: OfferCatalog = {
    "@type": "OfferCatalog",
    name: 'Photographe',
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        name: "Photographe Reportage Documentaire",
        "itemListElement": [
          {
            "@type": "Offer",
            // TODO geoShape where could work
            areaServed : PlaceWorkArea,
            category: 'reportage documentaire social',
            description: "Photographie sur le coté social",            
            isFamilyFriendly: true,
            name: "Reportage Photo",            
            seller: PersonAnoukDesury
          }
        ]
      }      
    ]
  };
  