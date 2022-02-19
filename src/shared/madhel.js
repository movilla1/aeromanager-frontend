import axios from "axios";

const MADHEL_API = 'https://datos.anac.gob.ar/madhel/api/v2/airports/';
// interface with madhel data

export const getMadhelAirport = (identifier, destinationID) => (
  axios.get(MADHEL_API + identifier + "/").then(
    response => {
      const parsedData = response.data;
      document.getElementById(destinationID).innerHTML = parsedData?.data?.human_readable_identifier;
    }
  )
)

//example response:
// {
//   "data": {
//     "atz": "",
//     "rwy_declared_distances": [

//     ],
//     "parking_lots": "",
//     "fato": [

//     ],
//     "service_schedule": "",
//     "fuel": "",
//     "sei_category": null,
//     "thr": [

//     ],
//     "human_readable_identifier": "ARRECIFES / LA CURA MALAL - (ACM) - RACE - PRIVADO NO CONTROLADO",
//     "twy": [

//     ],
//     "rwy": [
//       "04/22 795x30 M - Tierra."
//     ],
//     "tlof": [

//     ],
//     "helpers_system": {
//       "visual": "",
//       "radio": [

//       ]
//     },
//     "vor_verification_point": "",
//     "apn": [

//     ],
//     "fax": "",
//     "norms": {
//       "particular": {
//         "related_documents": [

//         ],
//         "content": ""
//       },
//       "general": {
//         "related_documents": [
//           {
//             "title": "ANEXO ALFA",
//             "description": "NORMAS GENERALES PARA OPERACIONES EN AERÓDROMOS NO UBICADOS DEBAJO DE ÁREAS DE CONTROL TERMINAL (ENR 1.1.5)",
//             "uri": "/madhel/api/v2/documentation/ALFA?format=json"
//           }
//         ],
//         "content": "Las OPS VFR deberán ajustarse a lo establecido en el ANEXO ALFA (Ver AIP VOL. I - ENR 1.1-3)."
//       }
//     },
//     "human_readable_localization": "340432S 0600830W - 4 KM al WSW de la ciudad de ARRECIFES (Pcia. de BUENOS AIRES) - ELEV 37 M 121 FT - ILE",
//     "ats": [

//     ],
//     "local": "ACM",
//     "telephone": [
//       "(02474) 15-563191"
//     ]
//   },
//   "notam": [

//   ],
//   "pdf_share": "/madhel/api/v2/airports/ACM/pdf?format=json",
//   "the_geom": {
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         -60.1417,
//         -34.07574
//       ]
//     },
//     "type": "Feature",
//     "properties": {
//       "gg_point_coordinates": [
//         -34.07574,
//         -60.1417
//       ],
//       "name": "ARRECIFES / LA CURA MALAL - (ACM) - RACE - PRIVADO NO CONTROLADO"
//     }
//   },
//   "type": "AD",
//   "metadata": {
//     "traffic": "NTL",
//     "usage": null,
//     "condition": "PRIVADO",
//     "status": "OK",
//     "is_granted": false,
//     "sna": false,
//     "localization": {
//       "fir": "SAEF",
//       "distance_reference": "4",
//       "elevation": 37,
//       "direction_reference": "OSO",
//       "state": "BUENOS AIRES",
//       "city_reference": "Arrecifes",
//       "region": "RACE",
//       "coordinates": {
//         "lat": -34.07574,
//         "lng": -60.1417
//       }
//     },
//     "reference_sketch": "",
//     "ansp": null,
//     "control": "NON-CONTROLLED",
//     "identifiers": {
//       "icao": null,
//       "iata": null,
//       "local": "ACM"
//     }
//   },
//   "updated_at": "2021-12-10T13:50:53Z",
//   "human_readable_identifier": "ARRECIFES / LA CURA MALAL - (ACM) - RACE - PRIVADO NO CONTROLADO"
// }

