import { expect, test, describe, vi, Mocked } from 'vitest'
import { testFn, request } from './utils'
import axios from 'axios'
vi.mock('axios')

const mockedAxios = axios as Mocked<typeof axios>

// test('test common matcher', () => {
//   const name = 'viking'
//   expect(name).toBe('viking')
//   expect(2 + 2).toBe(4)
//   expect(2 + 2).not.toBe(5)
// })

// test('test to be true or false', () => {
//   expect(1).toBeTruthy()
//   expect(0).toBeFalsy()
// })

// test('test number', () => {
//   expect(4).toBeGreaterThan(3)
//   expect(3).toBeLessThan(4)
// })

// test('test object', () => {
//   expect({ name: 'viking' }).toEqual({ name: 'viking' })
// })

describe('functions', () => {
  test('create a mock function', () => {
    const callback = vi.fn()
    testFn(12, callback)
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(12)
  })

  test('spy on methods', () => {
    const obj = {
      getName: () => 1
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toHaveBeenCalled()
    obj.getName()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  test('mock third party module', async () => {
    // mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 123}))
    mockedAxios.get.mockResolvedValue({ data: { value: 123 } } as any)
    const result = await request()
    expect(result).toEqual({ value: 123 })
  })
})