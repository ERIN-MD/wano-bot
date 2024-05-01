حقوق  - _( 🍷 ڤينوم و سوكونا ☘️ )_ 
> _*كود الزراير الجديد تم صنعه بواسطه ڤينوم و سوكونا*_

*(🎧) شارك رابط القناه ادعمنا لي تنزيل اكواد اخري*
_https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v_


*(⚙️)-) الكود (-(⚙️)*


let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.النظام_كود',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.المطور_كود',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['بوت']

export default handler
