const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe(index.js, () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it(console.error('HALP'), done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it(console.error("DAY"), done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.log to have been called')
      console.log.restore()
      done()
    })
  })

  it(console.warn("WARNING"), done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
