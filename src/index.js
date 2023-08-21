import React from 'react';
import ReactDOM  from 'react-dom';
import profile1 from './image/profile1.jpg';
import profile2 from './image/profile2.jpg';
import profile3 from './image/profile3.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
    return (
        <div classname='ui comments'>
        <UserCard>
            <SingleComment picture={profile1} name='Alex' date='Today at 4:00pm' text='good day'/>
        </UserCard>
        <UserCard>
            <SingleComment picture={profile2} name='Jack' date='Today at 5:00pm' text='bad day'/>
        </UserCard>
        <UserCard>
        <SingleComment picture={profile3} name='Joe' date='Today at 6:00pm' text='bad day'/>
        </UserCard>
        
                </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)