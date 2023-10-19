const valAgents = [
    {
    agentName: "Reyna",
    agentType: "Duelist",
    theyBad: "true",
    unlocked: "true",
    origin: "Mexico",
    abilities: ["Ability1", "Ability2", "Ability3"],

},
{
    agentName: "Viper",
    agentType: "Sentinel",
    theyBad: "true",
    unlocked: "true",
    origin: "Philippines",
    abilities: ["Ability4", "Ability5", "Ability6"],
},
{
    agentName: "Harbor",
    angentType: "Controller",
    theyBad: "false",
    unlocked: "false",
    origin: "India",
    abilities: ["Ability7", "Ability8", "Ability9"],
},
{
    agentName: "Kay/O",
    agentType: "Initiator",
    theyBad: "false",
    unlocked:"false",
    origin: "unknown",
    abilities: ["Ability10", "Ability11", "Ability12"],
}
]

valAgents.forEach((val) => {
    console.log(val.agentName);
  });

valAgents.forEach((agent) => agent.abilities.forEach((ability) => console.log(ability)));

const agentsVal = valAgents.filter((val) => val.theyBad === "true");
console.log(agentsVal);
