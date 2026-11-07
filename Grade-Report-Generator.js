function getLetterGrade(score){
    if(score >= 90){
        return "A"
    }else if(score >= 80){
        return "B"
    }else if (score >= 70){
        return "C"
    }else if(score >= 60){
        return "D"
    }else{
        return "F"
    }
}

function hasPassed(score){
    return score >= 60;
};

function getFeedback(grade){
    if(grade === "A"){
        return "Outstanding!";
    }else if (grade === "B"){
        return "Good work!";
    }else if (grade === "C"){
        return "Keep working";
    }else if (grade === "D"){
        return "You passed";
    }else{
        return "You've failed"
    }
}

function createGradeReport(name, score){
    let feed = getFeedback(getLetterGrade(score))

    let result = {
        name: name,
        score: score,
        grade: getLetterGrade(score),
        passed: hasPassed(score),
        feedback: feed,
    };


    return result;
}


// EXAMPLE LOGS

console.log(createGradeReport('Ava', 92));
// console.log(createGradeReport('Noah', 48));
// console.log(createGradeReport('Mina', 75));
// console.log(createGradeReport('Sam', 60));