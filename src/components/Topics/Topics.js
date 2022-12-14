import React from 'react';
import Topic from '../../Topic/Topic';
import './Topics.css'

const Topics = ({ topics }) => {
    return (
        <div className='all-topic'>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;