cmd({
        pattern: "iswa",
        alias :['تخمين','خمن'],
        category: "search",
        desc: "Searches in given rage about given number.",
        use: '2010989062xx',
        filename: __filename,
    },
    async(Void, citel, text) => {
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply('*֎╎اكـتـب رقـم للـتـخمـيـن مـثـال┇.تخمين 2010989062xx*')
        citel.reply(`*֎╎الـبـحـث عـن حـسـابـات واتـسـاب فـي نـطـاق مـعـيـن...*`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text = `*〖 قـائـمـه الارقـام 〗*\n\n`
        var nobio = `\n*֎╎الـبـايـو┇ \nمرحبا انا استخدم واتساب!.\n`
        var nowhatsapp = `\n*֎╎ارقـام لـيـس لـديـهـا واتـسـاب فـي نـطـاق مـعـيـن*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `*❄️⃝🧚‍♀️الـرقـم📱┇* wa.me/${anu[0].jid.split("@")[0]}\n *❄️⃝🧚‍♀️الـبـايـو✨┇* ${anu1.status}\n*❄️⃝🧚‍♀️الـتـاريـخ🍁┇* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)
