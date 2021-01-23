import React from 'react'

interface OwnProps {
    clickCount: number
}

type Props = OwnProps
export const ShowState : React.FC<Props> = props => {
    return(
        <div>
            <label>[states]</label>
            <div>{props.clickCount}</div>
        </div>
    )
}