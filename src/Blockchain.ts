import IBlock from './IBlock'
import Block from './Block'

class Blockchain implements IBlock {
  private index: number
  private blocks: Block[]

  public constructor () {
    this.blocks = []
    this.index = 1
  }

  public getLastBlock (): Block {
    return this.blocks[this.blocks.length - 1]
  }

  addBlock (data: string): void {
    const index = this.index
    const lastBlock: Block = this.getLastBlock()
    const previousHash: string = lastBlock.gethash()

    const block = new Block(index, previousHash, data)

    this.index++
    this.blocks.push(block)
  }

  checkValidity (): boolean {
    throw new Error('Method not implemented.')
  }
}

export default new Blockchain()
