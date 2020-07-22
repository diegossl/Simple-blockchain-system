import Block from './Block'

export default interface IBlock {
  getLastBlock(): Block

  addBlock(data: string): void

  checkValidity(): boolean
}
