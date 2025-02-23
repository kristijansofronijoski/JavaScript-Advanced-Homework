async function getData(){
    try{
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"); //we use await because we want the rest of the code to wait for the fetch to end
        let students = await response.json();
        let fullNames = await getStudentFullName(students);
        console.log(fullNames);
        //TODO: get documents & sort them

    }
    catch{
        console.log("An error occured");
    }
}

function getStudentFullName(students){
    return new Promise(function(resolve, reject){
        if(!students || students.length == 0){  //validation, the negative scenario
             reject("No students!"); //we reject it, we do not have students whose names we can map
             return;
        }
        setTimeout(() => {resolve(students.map(s => `${s.firstName} ${s.lastName}`));}, 5000);
    })
}

getData();

//After you get all the students full names, get the documents from the following url
//After you get the documents, wait 5 seconds and print them sorted by size ascending. Use async await.

async function getDocuments() {
        try{
            let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
            let documents = await response.json();
            console.log(documents)
            let sorted = await sortedBySize(documents)
            console.log(sorted);
            
        }
        catch{
            console.log("An error occured")
        }
}

function sortedBySize(documents){
        return new Promise(function(resolve,reject){
            if(!documents){
                reject("No documents");
                return;
            }
            setTimeout(()=> {
                let sortedDocs =  documents.sort((a,b) => a.size - b.size);
                resolve(sortedDocs);
            },3000)
        });
}
getDocuments();