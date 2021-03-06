import signals from './signals'

export default class Signals {
  static get ALPHA () {
    return signals.get('ALPHA')
  }

  static get OMEGA () {
    return signals.get('OMEGA')
  }

  static get EMBARK () {
    return signals.get('EMBARK')
  }

  static get DEBARK () {
    return signals.get('DEBARK')
  }

  static get CONFIRM () {
    return signals.get('CONFIRM')
  }

  static get INDEX () {
    return signals.get('INDEX')
  }

  static get ALPHA_PATTERN () {
    return signals.get('ALPHA_PATTERN')
  }

  static get OMEGA_PATTERN () {
    return signals.get('OMEGA_PATTERN')
  }

  static get EMBARK_STAGE () {
    return signals.get('EMBARK_STAGE')
  }

  static get DEBARK_STAGE () {
    return signals.get('DEBARK_STAGE')
  }

  static get CONFIRM_STAGE () {
    return signals.get('CONFIRM_STAGE')
  }

  static get EMBARK_PATTERN () {
    return signals.get('EMBARK_PATTERN')
  }

  static get DEBARK_PATTERN () {
    return signals.get('DEBARK_PATTERN')
  }

  static get CONFIRM_PATTERN () {
    return signals.get('CONFIRM_PATTERN')
  }

  static get ENTER_ALPHA () {
    return signals.get('ENTER_ALPHA')
  }

  static get LEAVE_ALPHA () {
    return signals.get('LEAVE_ALPHA')
  }

  static get CHANGE_ALPHA () {
    return signals.get('CHANGE_ALPHA')
  }

  static get REMAIN_ALPHA () {
    return signals.get('REMAIN_ALPHA')
  }

  static get ENTER_OMEGA () {
    return signals.get('ENTER_OMEGA')
  }

  static get LEAVE_OMEGA () {
    return signals.get('LEAVE_OMEGA')
  }

  static get CHANGE_OMEGA () {
    return signals.get('CHANGE_OMEGA')
  }

  static get REMAIN_OMEGA () {
    return signals.get('REMAIN_OMEGA')
  }

  static get ENTER_ALPHA_ENTER_OMEGA () {
    return signals.get('ENTER_ALPHA_ENTER_OMEGA')
  }

  static get LEAVE_ALPHA_LEAVE_OMEGA () {
    return signals.get('LEAVE_ALPHA_LEAVE_OMEGA')
  }

  static get CHANGE_ALPHA_ENTER_OMEGA () {
    return signals.get('CHANGE_ALPHA_ENTER_OMEGA')
  }

  static get CHANGE_ALPHA_LEAVE_OMEGA () {
    return signals.get('CHANGE_ALPHA_LEAVE_OMEGA')
  }

  static get REMAIN_ALPHA_ENTER_OMEGA () {
    return signals.get('REMAIN_ALPHA_ENTER_OMEGA')
  }

  static get REMAIN_ALPHA_LEAVE_OMEGA () {
    return signals.get('REMAIN_ALPHA_LEAVE_OMEGA')
  }

  static get CHANGE_ALPHA_CHANGE_OMEGA () {
    return signals.get('CHANGE_ALPHA_CHANGE_OMEGA')
  }

  static get CHANGE_ALPHA_REMAIN_OMEGA () {
    return signals.get('CHANGE_ALPHA_REMAIN_OMEGA')
  }

  static get REMAIN_ALPHA_CHANGE_OMEGA () {
    return signals.get('REMAIN_ALPHA_CHANGE_OMEGA')
  }

  static get REMAIN_ALPHA_REMAIN_OMEGA () {
    return signals.get('REMAIN_ALPHA_REMAIN_OMEGA')
  }

  static get EXCEPTION () {
    return signals.get('EXCEPTION')
  }

  static get FAILURE () {
    return signals.get('FAILURE')
  }

  static get SUCCESS () {
    return signals.get('SUCCESS')
  }

  static get IN_PROGRESS () {
    return signals.get('IN_PROGRESS')
  }

  static get UNKNOWN () {
    return signals.get('UNKNOWN')
  }

  static get COMPLETE () {
    return signals.get('COMPLETE')
  }

  static raise (values = {}) {
    Reflect
      .ownKeys(values)
      .forEach((key) => {
        if (signals.has(key)) {
          const value = Reflect.get(values, key)

          signals.set(key, value)
        }
      })
  }
}
