import IBlock from './IBlock'
import Block from './Block'
import Data from './IData'

class Blockchain implements IBlock {
  private difficulty: number
  private blocks: Block[] = []

  public constructor () {
    this.blocks.push(this.startBlock())
    this.difficulty = 4
  }

  private startBlock () {
    const data: Data = {
      sender: 'Barry Allan',
      recipient: 'Klaus kokilson',
      quantity: 50
    }
    return new Block(0, data)
  }

  public getLastBlock (): Block {
    return this.blocks[this.blocks.length - 1]
  }

  public addBlock (block: Block): void {
    const lastBlockHash: string = this.getLastBlock().gethash()
    block.setPreviousHash(lastBlockHash)
    block.proofOfWork(this.difficulty)
    this.blocks.push(block)
  }

  public checkValidity (): boolean {
    for (let index: number = 1; index < this.blocks.length; index++) {
      const currentBlock = this.blocks[index]
      const precedingBlock = this.blocks[index - 1]

      if (currentBlock.gethash() !== currentBlock.generateHash()) {
        return false
      }
      if (currentBlock.getPreviousHash() !== precedingBlock.gethash()) {
        return false
      }
    }
    return true
  }
}

export default Blockchain
