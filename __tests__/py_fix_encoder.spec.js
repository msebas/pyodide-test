import {TextEncoder, TextDecoder} from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

jest.setTimeout(8000)

describe('pyodide', () => {
    let pyodide = null;
    beforeAll(async () => {
        let pyodide_pkg = await require("pyodide/pyodide.js");
        pyodide = await pyodide_pkg.loadPyodide({
            indexURL: "node_modules/pyodide/",
        })
    })
    it('can load', () => {
        expect(pyodide).not.toBe(null)
    });
    it('can load', () => {
        expect(pyodide.runPython('4*5')).toBe(20)
    });
})
