let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'الازرار'
            },
            body: {
              text: 'تست'
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
                            header: 'الاوامر',
                            title: '',
                            description: '',
                            id: 'اوامر.'
                          },
                                        {
                            header: 'المطور',
                            title: '',
                            description: '',
                            id: '.المطور.'
                          },
                          {
                            header: 'المطور',
                            title: 'المطور',
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
