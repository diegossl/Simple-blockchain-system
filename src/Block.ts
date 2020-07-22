import sha256 from 'crypto-js/sha256'
import { WordArray } from 'crypto-js'
import Data from './IData'

type PreviousHash = string | undefined

export default class Block {
  private index: number
  private nonce: number
  private previousHash: PreviousHash
  private hash: string
  private data: Data
  private timestamp: string

  public constructor (index: number, data: Data, previousHash: PreviousHash = undefined) {
    this.data = data
    this.index = index
    this.timestamp = this.generateDate()
    this.hash = this.generateHash()
    this.previousHash = previousHash
    this.nonce = 0
  }

  public gethash (): string {
    return this.hash
  }

  public getPreviousHash (): PreviousHash {
    return this.previousHash
  }

  public setPreviousHash (previousHash: string): void {
    this.previousHash = previousHash
  }

  private generateDate (): string {
    const date = new Date()
    return date.toString()
  }

  public generateHash (): string {
    const data: string = JSON.stringify(this.data)
    const hash: WordArray = sha256(
      `${this.index}${this.previousHash}${this.timestamp}${data}${this.nonce}`
    )
    return hash.toString()
  }

  public proofOfWork (difficulty: number) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++
      this.hash = this.generateHash()
    }
  }
}
