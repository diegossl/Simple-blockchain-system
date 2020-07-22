import IBlock from '../interfaces/IBlock'
import Block from './Block'

export default class Blockchain implements IBlock {
  private index: number
  private blocks: Block[] = []

  public constructor () {
    this.blocks.push(new Block())
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

  isValid (): boolean {
    throw new Error('Method not implemented.')
  }
}
