import React from 'react';

import { Card, CardImage, Image, Content } from 'bloomer';

const ProfileCard = props => {
    const { user } = props;
    return (
        <Card>
            <CardImage>
                <Image isRatio='4:3' src={user.picture.large} />
            </CardImage>
            <Content>
                <p>{user.name.first} {user.name.last}</p>
            </Content>
        </Card>
    )
}

export default ProfileCard;