/* eslint-disable indent */
// TeamMembersSection.js

import React from 'react'
import TeamMember from './TeamMemberCard' // Import the TeamMember component

const TeamMembersSection = () => {
    const teamMembersData = [
        {
            name: 'John Doe',
            position: 'President',
            imageUrl: 'john.jpg',
            imagePosition: 'left',
        },
        {
            name: 'Jane Smith',
            position: 'Vice President',
            imageUrl: 'jane.jpg',
            imagePosition: 'left',
        },
        // Add more team members here...
    ]

    return (
        <section className='mx-auto text-center p-8 pt-10'>
            < div className='container mx-auto' >
                <h2 className='font-semibold mb-4 text-4xl'>Our Team</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
                    {teamMembersData.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div >
        </section >
    )
}

export default TeamMembersSection