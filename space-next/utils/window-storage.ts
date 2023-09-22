// https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-local-storage/use-local-storage.ts
/**
 * MIT License

Copyright (c) 2021 Vitaly Rtishchev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

/* eslint-disable no-console */
import { useState, useCallback, useEffect } from "react"

export type StorageType = "localStorage" | "sessionStorage"

export interface StorageProperties<T> {
  /** Storage key */
  key: string

  /** Default value that will be set if value is not found in storage */
  defaultValue?: T

  /** If set to true, value will be update is useEffect after mount */
  getInitialValueInEffect?: boolean

  /** Function to serialize value into string to be save in storage */
  serialize?(value: T): string

  /** Function to deserialize string value from storage to value */
  deserialize?(value: string | undefined): T
}

function serializeJSON<T>(value: T, hookName: string) {
  try {
    return JSON.stringify(value)
  } catch (error) {
    throw new Error(`${hookName}: Failed to serialize the value`)
  }
}

function deserializeJSON(value: string) {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

function createStorageHandler(type: StorageType) {
  const getItem = (key: string) => {
    try {
      return window[type].getItem(key)
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to get value from storage, localStorage is blocked"
      )
      return null
    }
  }

  const setItem = (key: string, value: string) => {
    try {
      window[type].setItem(key, value)
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to set value to storage, localStorage is blocked"
      )
    }
  }

  const removeItem = (key: string) => {
    try {
      window[type].removeItem(key)
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to remove value from storage, localStorage is blocked"
      )
    }
  }

  return { getItem, setItem, removeItem }
}

export function createStorage<T>(type: StorageType, hookName: string) {
  const eventName =
    type === ("localStorage" satisfies StorageType) ? "local-storage" : "session-storage"
  const { getItem, setItem, removeItem } = createStorageHandler(type)

  return function useStorage({
    key,
    defaultValue = undefined,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON,
    serialize = (value: T) => serializeJSON(value, hookName),
  }: StorageProperties<T>) {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): T => {
        if (
          typeof window === "undefined" ||
          !(type in window) ||
          window[type] === null ||
          skipStorage
        ) {
          return defaultValue as T
        }

        const storageValue = getItem(key)
        return storageValue !== null ? deserialize(storageValue) : (defaultValue as T)
      },
      [key, deserialize, defaultValue]
    )

    const [value, setValue] = useState<T>(readStorageValue(getInitialValueInEffect))

    const setStorageValue = useCallback(
      (val: T | ((prevState: T) => T)) => {
        if (val instanceof Function) {
          setValue((current) => {
            const result = val(current)
            setItem(key, serialize(result))

            return result
          })
        } else {
          setItem(key, serialize(val))

          setValue(val)
        }
      },
      [key, serialize]
    )

    const removeStorageValue = useCallback(() => {
      removeItem(key)
    }, [key])

    useEffect(() => {
      if (defaultValue !== undefined && value === undefined) {
        setStorageValue(defaultValue)
      }
    }, [defaultValue, value, setStorageValue])

    useEffect(() => {
      if (getInitialValueInEffect) {
        setValue(readStorageValue())
      }
    }, [getInitialValueInEffect, readStorageValue])

    return [
      value === undefined ? defaultValue : value,
      setStorageValue,
      removeStorageValue,
    ] as const
  }
}

export function useLocalStorage<T = string>(props: StorageProperties<T>) {
  return createStorage<T>("localStorage", "use-local-storage")(props)
}

export function useSessionStorage<T = string>(props: StorageProperties<T>) {
  return createStorage<T>("sessionStorage", "use-session-storage")(props)
}
