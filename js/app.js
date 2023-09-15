let company = {

    name :"Malarkey Enterprises",
    CEO : "Clateman",
    numberOfEmployees : 1,
    yearlyRevenue : 0,
    managers:[
        { 
            name: "Julian", 
            salary: 10, 
            is_senior: true
        },
        { 
            name: "Bob", 
            salary: 20, 
            is_senior: false
        },
        { 
            name: "Roxane", 
            salary: 30, 
            is_senior: true
        }    
    ]
    
};

if(company.yearlyRenvenue >= 1000000){
    console.log("well on your way to billion " + company.name + " your CEO " + company.CEO + " should be proud and your " + company.numberOfEmployees + " employees should be proud too.");
}else {
    console.log("not yet a millionare but " + company.name + " your CEO " + company.CEO + " should be proud and your " + company.numberOfEmployees + " employees should be proud too.");
}
let count = 0;
while(count < company.managers.length){
    console.log("manager " + company.managers[count].name 
    + " makes " + company.managers[count].salary +
     " and is member is " + company.managers[count].is_senior);
    if(company.managers[count].is_senior == true){
        console.log("manger is senior congratz");
    }else{
        console.log("member is not sernior better luck next year");
    }
    count ++;
}
for(i = 0; i < company.managers.length; i ++){
    console.log("manager " + company.managers[i].name 
    + " makes " + company.managers[i].salary +
     " and is member is " + company.managers[i].is_senior);
    
}