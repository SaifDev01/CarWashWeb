exports.calculationByDistance= (latitude, longitude , b_lat , b_long) =>{
        const radius = 6371; // radius of earth in Km
        const lat1 = latitude;
        const lat2 = b_lat;
        const lon1 = longitude;
        const lon2 = b_long;
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.asin(Math.sqrt(a));
        const valueResult = radius * c;
        const km = valueResult / 1;
        const newFormat = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 4 }).format;
        const kmInDec = parseInt(newFormat(km));
        const meter = valueResult % 1000;
        const meterInDec = parseInt(newFormat(meter));
        console.log(`Radius Value: ${valueResult} KM ${kmInDec} Meter ${meterInDec}`);
        return Math.round(radius * c);
      }
      
      function toRadians(degrees) {
        return degrees * Math.PI / 180;
      }
      
      
      
      
      
      