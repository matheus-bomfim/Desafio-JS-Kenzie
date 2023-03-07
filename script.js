const male = "male"
const female = "female"

function height(gender,x){
    if(gender === male && x >= 1.70){
        return true;
    }
    else if(gender === female && x >= 1.60){
        return true;
    }
    else{return false;};
}
function repBar(gender,x,y){
    if(gender === male && x >= 6 || gender === male && y <= 15){
        return true;
    }
    else if(gender === female && x >= 5 || gender === male && y <= 12){
        return true;
    }
    else{return false;};
}
function abs(x){
    if(x >= 41){
        return true;
    }
    else{return false}
}
function race(gender,x,y){
    if(gender === male && x >= 3000 && y <= 720
        || gender === male && x >= 5000 && y <= 1200){
            return true
        }
    else if(gender === female && x >= 4000 && y <= 900
            || gender === female &&  x >= 6000 && y <= 1320){
                return true
            }
    else{return false}
}
function swim(x,y,z){
    if(x >= 100 && y <= 60 || z <= 30){
        return true
    }
    else{
        return false
    }
}
function areCandidateResultsValid(gender, 
heights, 
repsBar, 
repsTime,
abss,
races,
timeRace,
swims,
timeSwim,
timeDive) {
    const alturaValidate = height(gender,heights);
    const barValidate = repBar(gender,repsBar,repsTime);
    const absValidate = abs(abss)
    const raceValidate = race(gender,races,timeRace)
    const swimValidate = swim(swims,timeSwim,timeDive)
    
    if(alturaValidate && barValidate && absValidate && raceValidate && swimValidate){
        return console.log("TRUE");
    }
    else{return console.log("FALSE");};

}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11] // Tempo total de mergulho em segundos
    );
