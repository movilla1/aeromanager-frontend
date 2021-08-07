export class FlightLog {
  constructor(flightLogObj) {
    if (flightLogObj && Object.keys(flightLogObj).length > 0) {
      this.airplaneID = flightLogObj.airplaneID;
      this.flightStart = flightLogObj.flightStart;
      this.flightEnd = flightLogObj.flightEnd;
      this.flightType = flightLogObj.flightType;
      this.odoEnd = flightLogObj.odoEnd;
      this.odoStart = flightLogObj.odoStart;
      this.originAirport = flightLogObj.originAirport;
      this.destinationAirport = flightLogObj.destinationAirport;
      this.instructor = flightLogObj.instructor;
    } else {
      this.airplaneID = "";
      this.flightStart = Date.now();
      this.flightEnd = Date.now();
      this.flightType = "";
      this.odoEnd = "";
      this.odoStart = "";
      this.originAirport = "";
      this.destinationAirport = "";
      this.instructor = "";
    }
  };
}