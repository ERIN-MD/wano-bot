import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!text) throw `مرحبا اصبح كاتاكوري بوت 🤖 يدعم ChatGPT عندك اسئلة او استفسار اي شي قول\n\n❏ على سبيل المثال\n❏ ${usedPrefix + command} افضل انمي\n❏ ${usedPrefix + command} عايز نصيحه\n❏ ${usedPrefix + command} قول نكته`;
  try {
        conn.sendPresenceUpdate('composing', m.chat);
        //let sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());
        let sistema1 = `SASUKE BOT BY MOHAMED ITACHI KUN.`;
        async function getOpenAIChatCompletion(texto) {
        const openaiAPIKey = global.openai_key;
        let chgptdb = global.chatgpt.data.users[m.sender];
        chgptdb.push({ role: 'user', content: texto });
        const url = "https://api.openai.com/v1/chat/completions";
        const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
        const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
        const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
        const result = await response.json();
        const finalResponse = result.choices[0].message.content;
        return finalResponse;
        };
        let respuesta = await getOpenAIChatCompletion(text);
