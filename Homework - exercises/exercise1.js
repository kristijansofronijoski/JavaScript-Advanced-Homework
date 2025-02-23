fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(function (response) {
        response.json()
            .then(function(data){
                let filteredData = data.filter(student => student.age > 20);            
                let initialValues = {
                 //studentWithHighestAverageGrade: filteredData[0],
                 studentWithHighestAverageGrade: null,
                 highestAverageGrade: -Infinity, //filteredData[0].averageGrade
                 sumOfAverageGrades: 0,
                 sumOfAge: 0
                };
                
                let result = filteredData.reduce(function(r, currentFilteredStudent){
                    r.sumOfAge += currentFilteredStudent.age;
                    r.sumOfAverageGrades += currentFilteredStudent.averageGrade;

                    if(currentFilteredStudent.averageGrade > r.highestAverageGrade){
                        r.highestAverageGrade = currentFilteredStudent.averageGrade;
                        r.studentWithHighestAverageGrade = currentFilteredStudent;
                    }
                    return r;
                }, initialValues); //we pass initialValues by reference

                console.log(`The student with highest avg grade is ${result.studentWithHighestAverageGrade.firstName} ${result.studentWithHighestAverageGrade.lastName} with avg grade of ${initialValues.highestAverageGrade}`);
                console.log(`Average avg grade is ${(result.sumOfAverageGrades / filteredData.length).toFixed(3)}`);
                console.log(`Average age is ${(result.sumOfAge / filteredData.length).toFixed(2)}`);
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    .catch(function (error) {
        console.log(error);
    })