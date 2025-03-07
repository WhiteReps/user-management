"use client";

import { useUsers } from '@/hooks/useUsers';
import UserCard from '@/components/UserCard';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import Spinner from '@/components/Spinner';
import UserInfoModal from '@/components/UserInfoModal';
import { User } from '@/lib/api';

export default function Home() {
  const { users, loading, error } = useUsers();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <SearchBar onSearch={setSearchQuery} />
      {error && error ?
        <div className="flex justify-center">
          <h2 className='text-gray-500 text-xl font-semibold truncate'>{error}</h2>
        </div> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
      }


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