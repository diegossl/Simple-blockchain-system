import Block from '../models/Block'

export default interface IBlock {
  getLastBlock(): Block

  addBlock(data: string): void

  isValid(): boolean
}
