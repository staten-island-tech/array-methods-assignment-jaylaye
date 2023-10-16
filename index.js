const valAgents = [
    {
    agentName: "Reyna",
    agentType: "Duelist",
    theyBad: "true",
    unlocked: "true",
    origin: "mexico",

},
{
    agentName: "Viper",
    agentType: "Sentinel",
    theyBad: "true",
    unlocked: "true",
    origin: "Philiphines",
},
{
    agentName: "Harbor",
    angentType: "Controller",
    theyBad: "false",
    unlocked: "false",
    origin: "India",
},
{
    agentName: "Kay/O",
    agentType: "Initiator",
    theyBad: "false",
    unlocked:"false",
    origin: "unknown",
}
]

valAgents.forEach((val) => {
    console.log(val.agentName);

});
valAgents.forEach((val) => {
    console.log(val.agentType);
});