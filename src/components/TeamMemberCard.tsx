/* eslint-disable indent */

import React from 'react'

interface TeamMemberProps {
    name: string;
    position: string;
    imageUrl: string;
    imagePosition: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageUrl, imagePosition }) => {
    const cardClasses = ` bg-flc-green rounded-lg p-4 shadow-md mb-4 ${imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'
        }`

    const imageClasses = 'w-16 h-16 rounded-full overflow-hidden mr-4'

    return (
        <div className={cardClasses}>
            <div className='flex items-center p-3'>
                {imagePosition === 'left' && (
                    <div className={imageClasses}>
                        <img src={imageUrl} alt={name} />
                    </div>
                )}
                <div className='flex-grow'>
                    <h3 className='text-lg font-semibold mb-1'>{name}</h3>
                    <p className="text-gray-600">{position}</p>
                </div>
                {imagePosition === 'right' && (
                    <div className={imageClasses}>
                        <img src={imageUrl} alt={name} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TeamMember