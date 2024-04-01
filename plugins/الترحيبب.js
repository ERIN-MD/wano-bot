// كود تم صنعه بواسطه zoro
// الكود تابع ل قناه https://whatsapp.com/channel/0029VaYMyqu4CrfgGRLXfv3c
if (chat.welcome) {
              let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
              for (let user of participants) {
                let pp, ppgp;
                try {
                  pp = await this.profilePictureUrl(user, 'image');
                  ppgp = await this.profilePictureUrl(id, 'image');
                } catch (error) {
                  console.error(`حدث خطأ أثناء استرداد الصورة الشخصية: ${error}`);
                  pp = 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg'; // Assign default image URL
                  ppgp = 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg'; // Assign default image URL
                } finally {
                  let text = (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user')
                    .replace('@group', await this.getName(id))
                    .replace('@desc', groupMetadata.desc?.toString() || 'لايوجد وصف')
                    .replace('@user', '@' + user.split('@')[0]);
          
                  let nthMember = groupMetadata.participants.length;
                  let secondText = `اهلا ياحب, ${await this.getName(user)}, رقم ${nthMember}العضو`;
          
                  let welcomeApiUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(
                    'https://telegra.ph/file/919c9aa59b8dc5cae41a8.png'
                  )}&text1=${encodeURIComponent(
                    await this.getName(user)
                  )}&text2=نورت+الجروب+يحب&text3=عدد+الاعضاء:${encodeURIComponent(
                    nthMember.toString()
                  )}&avatar=${encodeURIComponent(pp)}`;
          
                  try {
                    let welcomeResponse = await fetch(welcomeApiUrl);
                    let welcomeBuffer = await welcomeResponse.buffer();
          
                    this.sendFile(id, welcomeBuffer, 'welcome.png', text, null, false, { mentions: [user] });
                  } catch (error) {
                    console.error(`حدث خطأ أثناء إنشاء صورة الترحيب: ${error}`);
                  }
                }
              }
            }
            break;
          
          case 'remove':
            if (chat.welcome) {
              let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
              for (let user of participants) {
                let pp, ppgp;
                try {
                  pp = await this.profilePictureUrl(user, 'image');
                  ppgp = await this.profilePictureUrl(id, 'image');
                } catch (error) {
                  console.error(`حدث خطأ أثناء استرداد الصورة الشخصية: ${error}`);
                  pp = 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg'; // Assign default image URL
                  ppgp = 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg'; // Assign default image URL
                } finally {
                  let text = (chat.sBye || this.bye || conn.bye || 'اهلا, @user')
                    .replace('@user', '@' + user.split('@')[0]);
          
                  let nthMember = groupMetadata.participants.length;
                  let secondText = `وداعا, رقم ${nthMember}عضونا`;
          
                  let leaveApiUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(
                    'https://telegra.ph/file/919c9aa59b8dc5cae41a8.png'
                  )}&text1=${encodeURIComponent(
                    await this.getName(user)
                  )}&text2=الي+القاء&text3=عدد+الاعضاء:${encodeURIComponent(
                    nthMember.toString()
                  )}&avatar=${encodeURIComponent(pp)}`;
          
                  try {
                    let leaveResponse = await fetch(leaveApiUrl);
                    let leaveBuffer = await leaveResponse.buffer();
          
                    this.sendFile(id, leaveBuffer, 'leave.png', text, null, false, { mentions: [user] });
                  } catch (error) {
                    console.error(`حدث خطأ أثناء إنشاء صورة الإجازة: ${error}`);
                  }
                }
              }
            }
            break;
