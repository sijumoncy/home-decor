"use client";
import { IStoreProvider } from '@/interface/store'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function StoreProvider({children}: IStoreProvider) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider