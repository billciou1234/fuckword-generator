function fuckWord(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
    wayne: ['AAAAAAAAAAA', '還敢下來啊!冰鳥!', '為甚麼不幫我開大絕!極靈!', '乞丐大劍', '墮胎屬叔 AAAAAAAAAAAA 一打二 瑞斯 瑞斯一打三']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']


  let collection = ''

  if (options.choose === 'engineer') {
    collection = '給工程師的幹話：'
    collection += sample(task.engineer)
    collection += sample(phrase)
    return collection
  }
  if (options.choose === 'designer') {
    collection = '給設計師的幹話：'
    collection += sample(task.designer)
    collection += sample(phrase)
    return collection
  }
  if (options.choose === 'entrepreneur') {
    collection = '給創業家的幹話：'
    collection += sample(task.entrepreneur)
    collection += sample(phrase)
    return collection
  }
  if (options.choose === 'wayne') {
    collection = '鼻地大師國動：'
    collection += sample(task.wayne)
    return collection
  }
}

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
module.exports = fuckWord