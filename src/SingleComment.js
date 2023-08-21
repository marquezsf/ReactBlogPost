import React from 'react';




const SingleComment = (props) => {
    return (
        <div classname='comment'>
                <a href='/' classname='avatar'>
                    <img src={props.picture} alt="profile picture"/>
                </a>
                <div classname='content'>
                    <a href='/' classname='author'>
                     {props.name}
                     </a>
                    <div classname='metadata'>
                        <span classname='date'>
                        {props.date}
                        </span>  
                    </div>
                        <div classname='text'>
                        {props.text}
                        </div>
                </div>
            </div>
    )


}

export default SingleComment;