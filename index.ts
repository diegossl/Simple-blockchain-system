import Blockchain from './src/Blockchain'
import Block from './src/Block'
import Data from './src/IData'

console.log('BitchCoin mining in progress...')

const bitchCoin = new Blockchain()

const data: Data = {
  sender: 'Iris Ljesnjanin',
  recipient: 'Cosima Mielke',
  quantity: 50
}

const data2: Data = {
  sender: 'Vitaly Friedman',
  recipient: 'Ricardo Gimenes',
  quantity: 100
}

const cryptoBlock = new Block(1, data)
const cryptoBlock2 = new Block(2, data2)

bitchCoin.addBlock(cryptoBlock)
bitchCoin.addBlock(cryptoBlock2)

console.log(JSON.stringify(bitchCoin, null, 4))
