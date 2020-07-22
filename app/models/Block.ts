import sha256 from 'crypto-js/sha256'
import md5 from 'crypto-js/md5'
import { WordArray } from 'crypto-js'

type PreviousHash = string | undefined

export default class Block {
  private index: number
  private previousHash: PreviousHash
  private hash: string
  private data: string
  private timestamp: string

  public constructor (index: number = 0, previousHash: PreviousHash = undefined, data: string) {
    this.data = data
    this.index = index
    this.timestamp = this.generateDate()
    this.hash = this.generateHash()
    this.previousHash = previousHash
  }

  public gethash (): string {
    return this.hash
  }

  private generateHash (): string {
    const data: string = JSON.stringify(this.data)
    const hash: WordArray = sha256(
      `${this.index}${this.previousHash}${data}${this.timestamp}`
    )
    return hash.toString()
  }

  private generateDate (): string {
    const date = new Date()
    return date.toString()
  }
}
