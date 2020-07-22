import Block from './Block'

export default interface IBlock {
  getLastBlock(): Block

  addBlock(block: Block): void

  checkValidity(): boolean
}
