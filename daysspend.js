function lifeinweeks(ages){
    var liferemains=75 - ages;
    var days= liferemains *365; 
    var weeks =  liferemains*52;
    var months =  liferemains*12;

    console.log("you have " +days+ "  days " + " in a year, " +weeks +"  wekks in a year  "+ months + " months in a year" );
    
}