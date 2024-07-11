import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getUsers from '@/services/apiUser';
import UserRow from './UserRow';

export default function UserTable() {
    const { isLoading, data: users, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <header className="grid grid-cols-[0.6fr_1.5fr_1.5fr_1fr_1fr_1fr] gap-x-6 items-center bg-gray-50 border-b border-gray-100 uppercase tracking-wider font-semibold text-gray-600 py-4 px-6">
                <div>UserID</div>
                <div>User Name</div>
                <div>User Contact</div>
                <div>User Role</div>
                <div>User Address</div>
            </header>
            {users.map(user => (
                <UserRow user={user} key={user.user_id} /> // Ensure the key matches the unique identifier of the user object
            ))}
        </div>
    );
}
