window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter1222.azurewebsites.net/api/GetResumeCounter?code=xSFOS7mBUfRR0zCZk5tmSQo08CEhRPEihsBatBD1kRuxAzFuhM02TQ=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response=>{
        return response.json()
    }).then(response=>{
        console.log("Website called function API.");
        count = response.count;
        doucument.getElementByID("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}