class UberPriceCalculator {

    constructor(distanceInKilometers, baseFare, costPerKilometer, surgeMultiplier) {
      this.distanceInKilometers = distanceInKilometers;
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.surgeMultiplier = surgeMultiplier;
    }
  
   
    calculatePrice() {
      const totalFare = this.baseFare + this.distanceInKilometers * this.costPerKilometer;
      const surgePrice = totalFare * this.surgeMultiplier;
      return surgePrice;
    }
  }
  
  
  const distanceTraveled = 10; 
  const baseFare = 50; 
  const costPerKilometer = 5; 
  const surgeMultiplier = 1.5; 
  const uberPriceCalculator = new UberPriceCalculator(distanceTraveled, baseFare, costPerKilometer, surgeMultiplier);
  const totalFare = uberPriceCalculator.calculatePrice();
  
  console.log("Total Uber Fare:", totalFare);
  