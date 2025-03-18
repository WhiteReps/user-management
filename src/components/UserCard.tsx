"use client";

import { User } from '../lib/api';
import toast from 'react-hot-toast';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import {useFavoritesStorageContext} from "@/providers/FavoritesStorageProvider";

interface UserCardProps {
  user: User;
  onRemove?: (userId: number) => void;
  onClick: () => void;
}

export default function UserCard({ user, onClick, onRemove }: UserCardProps) {
  const [favorites, setFavorites] = useFavoritesStorageContext();
  const [isClicked, setIsClicked] = useState(false);

  const isFavorite = favorites.some((fav) => fav.id === user.id);

  const toggleFavorite = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== user.id));
      toast.success('Removed from favorites');
      onRemove?.(user.id);
    } else {
      setFavorites([...favorites, user]);
      toast.success('Added to favorites');
    }
  };

  return (
    <div
      className={`
        border p-4 rounded-lg shadow-sm transition-all duration-300
        hover:scale-101 hover:shadow-xl ${isClicked ? 'scale-95' : 'scale-100'}
        flex relative min-h-[15vh]
      `}
    >
      <div className="w-[30%] grid place-items-center">
        <UserCircleIcon className="w-[85%] text-gray-500" /> {/* User icon */}
      </div>

      <div className="w-[70%] m-auto pl-4 grid gap-1">
        <h2 className="text-xl font-semibold truncate w-[80%]">{user.name}</h2> {/* Truncate long names */}
        <p className="text-gray-600 pl-1 truncate w-[80%]">{user.email}</p> {/* Truncate long emails */}
        <p className="text-gray-600 pl-1 truncate w-[80%]">{user.company.name}</p> {/* Truncate long company names */}
      </div>

      <DropdownMenu onAboutAccountClick={onClick}>
        <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 hover:bg-gray-200 rounded-full p-1 transition-colors duration-200" />
      </DropdownMenu>

      <button
        onClick={toggleFavorite}
        data-cy="favorite-button"
        className={`
          favorite-button
          absolute bottom-3 right-3 p-1 rounded-full transition-colors duration-200
          ${isFavorite ? 'bg-red-300' : 'bg-gray-300'}
        `}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>


    </div>
  );
}