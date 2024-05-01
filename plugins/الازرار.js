let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️'
            },
            body: {
              text: ''
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'تست',
                        rows: [
                          {
                            header: 'اوامر',
                            title: 'منشن',
                            description: '',
                            id: '.اوامر'
                          },
                                        {
                            header: 'الدعم',
                            title: 'الدعم',
                            description: '',
                            id: '.الدعم'
                          },
                          {
                            header: '.المطور',
                            title: '.المطور',
                            description: '',
                            id: '.مطور'
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
