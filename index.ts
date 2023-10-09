;// import discord.js
import {Client, Events, GatewayIntentBits} from 'discord.js';

// create a new Client instance
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});

// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (msg) =>{
  if (msg.content === "gimme an email"){
    const response = await fetch("https://randomuser.me/api");
    const { results } = await response.json();

    results.forEach((user: any) => {
        msg.reply(user.email)
    })
  }

  // Pseudocode 👇
  // if( msg.content contains "flights from {start} to {end}" )
  // "Flights from Boston to Atlanta"
  // Pseudocode 👆

  // TODO:
  // Goal: Boston to Atlanta on a date return results of flights that day
  // Steps:
  // Find Flight api 
  // Add msg.content condition
  // add fetch / add results in the condition
  // make the content variable
  // select option? drop down ish thing or a find flight command / fill in
  
})


// login with the token from .env.local
client.login(process.env.DISCORD_TOKEN);
