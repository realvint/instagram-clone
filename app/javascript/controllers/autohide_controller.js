import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'close' ]
  connect() {
    setTimeout(() => this.dismiss(), 5000)
  }

  dismiss() {
    this.closeTarget.click()
  }
}
