cmd({
            pattern: "ملاحظه",
            alias : ['اضف-ملاحظه','ملاحظة'],
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("*֎╎اكـتـب مـا تـريـد حـفـظـه فـي الـمـذكـره*")
            await addnote(text)
            return citel.reply(`*֎╎تـم اضـافـه مـلاحـظـه جـديـده فـي الـمـذكـره*`)

        }
    )

//---------------------------------------------------------------------------

cmd({
            pattern: "حذف-ملاحظاتي",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`*֎╎تـم حـذف كـل مـلاحـظـاتـك*`)

        }
    )

//---------------------------------------------------------------------------

cmd({
        pattern: "ملاحظاتي",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `*❄️⃝🧚‍♀️كـل مـلاحـظـاتـك هـنـا📝┇*\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)

