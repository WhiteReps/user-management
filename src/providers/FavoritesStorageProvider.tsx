"use client"; // Add this directive

import React from 'react';
import {createContext, useContext} from "react";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {User} from "@/lib/api";

const FavoritesStorageContext = createContext<[User[], any]>([[], null]);

export function useFavoritesStorageContext() {
  return useContext(FavoritesStorageContext);
}

export function FavoritesStorageProvider({children}) {
  const [favorites, setFavorites] = useLocalStorage<User[]>('favorites', []);
  console.log('provider', favorites);
  return (
    <FavoritesStorageContext.Provider value={[favorites, setFavorites]}>
      {children}
    </FavoritesStorageContext.Provider>
  )
}