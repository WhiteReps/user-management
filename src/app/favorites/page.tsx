"use client";

import { useLocalStorage } from '@/hooks/useLocalStorage';
import UserCard from '@/components/UserCard';
import { useState } from 'react';
import { User } from '@/lib/api';
import { useUsers } from '@/hooks/useUsers';
import Spinner from '@/components/Spinner';
import UserInfoModal from '@/components/UserInfoModal';

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorage<User[]>('favorites', []);
  const { loading } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleRemoveFavorite = (userId: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== userId));
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <Spinner size={30} opacity={0.4} />}

      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      {favorites.length === 0 ? (
        <div className='flex justify-center'>
          <h2 className="text-xl text-gray-500 font-semibold truncate">No favorite yet</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
              onRemove={handleRemoveFavorite}
            />
          ))}
        </div>
      )}

      {selectedUser && (
        <UserInfoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          user={selectedUser}
        />
      )}
    </div>
  );
}