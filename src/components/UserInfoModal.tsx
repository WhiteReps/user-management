"use client";

import { User } from '@/lib/api';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export default function UserInfoModal({ isOpen, onClose, user }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-md transform transition-all duration-300 ease-out scale-95 hover:scale-100">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{user.name}</h2>
          <div className="space-y-3 text-gray-600">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p>
              <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
