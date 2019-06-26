import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from './card';

import { Section, Columns, Column } from 'bloomer';

const CardList = props => {
    const { userData } = props;
    return (
        <Section>
            <Columns>
                {userData.length > 0 ?
                    userData.map(user =>
                        <Column key={user.login.uuid}>
                            <ProfileCard user={user} />
                        </Column>
                    )
                    :
                    <Column>No User Data</Column>
                }
            </Columns>
        </Section>
    )

}

CardList.propTypes = {
    userData: PropTypes.array
}

export default CardList;