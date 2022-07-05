import { gql } from '@apollo/client'
/*
export const GET_STATION  = gql`
  query {
    bikeRentalStation(id: "529"){
      name,
      bikesAvailable,
      spacesAvailable,
      realtime
    }
  }
`
*/

export const GET_STATION  = gql`
  query get_station($stop: String!){
    bikeRentalStation(id: $stop){
      name,
      bikesAvailable,
      spacesAvailable,
      realtime
    }
  }
`

export const GET_ALL_STATIONS = gql`
{
  bikeRentalStations {
    name
    stationId
  }
}
`