import React from 'react';
import { Chip } from '.';

const ExperienceCard = ({
  year,
  designation,
  responsiblities=[],
  className
}) => {
  return (
    <div key={year} className={className}>
      <Chip>{year}</Chip>
      <div className="font-bold my-2">
        {designation}
      </div>
      <ul className="list-inside list-disc">
        {
          responsiblities.map(task => (
            <li className="text-sm font-system">
              {task}
            </li>
          ))
        }
      </ul>
    </div>
  )
};


export default ExperienceCard;
