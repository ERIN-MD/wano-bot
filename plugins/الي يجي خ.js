export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('افتح هذا الرابط')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`مرحبًا @${m.sender.split('@')[0]}\nيمكنك استئجار الروبوت للانضمام إلى مجموعة\n\n_لمزيد من المعلومات، يمكنك إرسال رسالة مباشرة إلى المالك_\n*النوع* \`\`\` .owner\`\`\` *للاتصال بالمالك*`.trim()}, {quoted:m});
   /*this.sendButton(m.chat, `*Invite bot to a group*      
    Hallo @${m.sender.split('@')[0]} 
    you can rent the bot to join a group or contact owner 
    more info click on the button
  `.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })*/
   m.react('💎')
} 

 return !0
}
