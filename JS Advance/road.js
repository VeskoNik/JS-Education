function solve(speed,area){
    let speedLimit = 0
    let status = ''
switch (area) {
    case 'motorway': 
        speedLimit = 130
        
        if(speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else{
            if(speed - speedLimit <= 20){
                status = 'speeding'
            }else if(speed - speedLimit <= 40){
                status = 'excessive speeding'
            }else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        
        break;
    case 'interstate':
        speedLimit = 90
        
        if(speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else{
            if(speed - speedLimit <= 20){
                status = 'speeding'
            }else if(speed - speedLimit <= 40){
                status = 'excessive speeding'
            }else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        

        break;
    case 'city':
        speedLimit = 50
        
        if(speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else{
            if(speed - speedLimit <= 20){
                status = 'speeding'
            }else if(speed - speedLimit <= 40){
                status = 'excessive speeding'
            }else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        

        break;
    case 'residential':
        speedLimit = 20
        
        if(speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else{
            if(speed - speedLimit <= 20){
                status = 'speeding'
            }else if(speed - speedLimit <= 40){
                status = 'excessive speeding'
            }else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        

        break;
}
}
solve(40, 'city')